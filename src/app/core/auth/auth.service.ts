import { Injectable, computed, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, shareReplay, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthResponse, User, UserRole } from '../models/api.models';

const SESSION_KEY = 'queueless.session';
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly session = signal<AuthResponse | null>(this.readSession());
  private sessionCheck?: Observable<boolean>;
  readonly user = computed(() => this.session()?.user ?? null);
  readonly isAuthenticated = computed(() => !!this.session()?.user);
  constructor(private readonly http: HttpClient) {}
  login(credentials: { email: string; password: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiBaseUrl}/auth/login`, credentials, { withCredentials: true }).pipe(tap(value => this.save(value)));
  }
  register(data: { fullName: string; email: string; phone: string; password: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiBaseUrl}/auth/register`, data).pipe(tap(value => this.save(value)));
  }
  restoreSession(): Observable<boolean> {
    if (this.isAuthenticated()) return of(true);
    this.sessionCheck ??= this.http.get<AuthResponse>(`${environment.apiBaseUrl}/auth/me`, { withCredentials: true }).pipe(tap(value => this.save(value)), map(() => true), catchError(() => of(false)), shareReplay({ bufferSize: 1, refCount: false }));
    return this.sessionCheck;
  }
  requestPasswordReset(email: string): Observable<void> { return this.http.post<void>(`${environment.apiBaseUrl}/auth/password-reset/request`, { email }); }
  resetPassword(token: string, password: string): Observable<void> { return this.http.post<void>(`${environment.apiBaseUrl}/auth/password-reset/confirm`, { token, password }); }
  logout(): void { this.session.set(null); sessionStorage.removeItem(SESSION_KEY); }
  hasRole(roles: UserRole[]): boolean { return roles.includes(this.user()?.role ?? 'CUSTOMER'); }
  private save(value: AuthResponse): void { this.session.set(value); if (value.accessToken) sessionStorage.setItem(SESSION_KEY, JSON.stringify(value)); }
  private readSession(): AuthResponse | null {
    try { const raw = sessionStorage.getItem(SESSION_KEY); return raw ? JSON.parse(raw) as AuthResponse : null; } catch { return null; }
  }
}
