import { Injectable, computed, signal } from '@angular/core';
import { catchError, map, of, shareReplay, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
const SESSION_KEY = 'queueless.session';
export class AuthService {
    constructor(http) {
        this.http = http;
        this.session = signal(this.readSession(), ...(ngDevMode ? [{ debugName: "session" }] : /* istanbul ignore next */ []));
        this.user = computed(() => this.session()?.user ?? null, ...(ngDevMode ? [{ debugName: "user" }] : /* istanbul ignore next */ []));
        this.isAuthenticated = computed(() => !!this.session()?.user, ...(ngDevMode ? [{ debugName: "isAuthenticated" }] : /* istanbul ignore next */ []));
    }
    login(credentials) {
        return this.http.post(`${environment.apiBaseUrl}/auth/login`, credentials, { withCredentials: true }).pipe(tap(value => this.save(value)));
    }
    register(data) {
        return this.http.post(`${environment.apiBaseUrl}/auth/register`, data).pipe(tap(value => this.save(value)));
    }
    restoreSession() {
        if (this.isAuthenticated())
            return of(true);
        this.sessionCheck ??= this.http.get(`${environment.apiBaseUrl}/auth/me`, { withCredentials: true }).pipe(tap(value => this.save(value)), map(() => true), catchError(() => of(false)), shareReplay({ bufferSize: 1, refCount: false }));
        return this.sessionCheck;
    }
    requestPasswordReset(email) { return this.http.post(`${environment.apiBaseUrl}/auth/password-reset/request`, { email }); }
    resetPassword(token, password) { return this.http.post(`${environment.apiBaseUrl}/auth/password-reset/confirm`, { token, password }); }
    logout() { this.session.set(null); sessionStorage.removeItem(SESSION_KEY); }
    hasRole(roles) { return roles.includes(this.user()?.role ?? 'CUSTOMER'); }
    save(value) { this.session.set(value); if (value.accessToken)
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(value)); }
    readSession() {
        try {
            const raw = sessionStorage.getItem(SESSION_KEY);
            return raw ? JSON.parse(raw) : null;
        }
        catch {
            return null;
        }
    }
    static { this.ɵfac = function AuthService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
