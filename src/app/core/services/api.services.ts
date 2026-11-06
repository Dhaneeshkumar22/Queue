import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AnalyticsCharts, Appointment, AppointmentSlot, Branch, Notification, Page, QueueToken, Service, User } from '../models/api.models';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private readonly http: HttpClient) {}
  list(): Observable<User[]> { return this.http.get<User[]>(`${environment.apiBaseUrl}/users`); }
  profile(): Observable<User & { phone?: string; assignedBranch?: string; assignedCounter?: string; assignedService?: string }> { return this.http.get<User & { phone?: string; assignedBranch?: string; assignedCounter?: string; assignedService?: string }>(`${environment.apiBaseUrl}/users/me`); }
  updateProfile(value: { fullName: string; phone: string }): Observable<User & { phone?: string }> { return this.http.put<User & { phone?: string }>(`${environment.apiBaseUrl}/users/me`, value); }
}
@Injectable({ providedIn: 'root' })
export class OrganizationService {
  constructor(private readonly http: HttpClient) {}
  list(): Observable<{ id: string; name: string; type: string }[]> { return this.http.get<{ id: string; name: string; type: string }[]>(`${environment.apiBaseUrl}/organizations`); }
}
@Injectable({ providedIn: 'root' })
export class CounterService {
  constructor(private readonly http: HttpClient) {}
  list(): Observable<{ id: string; name: string; status: string }[]> { return this.http.get<{ id: string; name: string; status: string }[]>(`${environment.apiBaseUrl}/counters`); }
}
@Injectable({ providedIn: 'root' })
export class StaffService {
  constructor(private readonly http: HttpClient) {}
  list(): Observable<User[]> { return this.http.get<User[]>(`${environment.apiBaseUrl}/staff`); }
}
@Injectable({ providedIn: 'root' })
export class NotificationService {
  readonly unreadCount = signal(0);
  private readonly unreadIds = new Set<string>();
  constructor(private readonly http: HttpClient) {}
  list(): Observable<Notification[]> { return this.http.get<Notification[]>(`${environment.apiBaseUrl}/notifications`).pipe(tap(values=>{this.unreadIds.clear();for(const item of values)if(!item.read)this.unreadIds.add(item.id);this.unreadCount.set(this.unreadIds.size);})); }
  markRead(id: string): Observable<void> { return this.http.post<void>(`${environment.apiBaseUrl}/notifications/${id}/read`, {}).pipe(tap(()=>{if(this.unreadIds.delete(id))this.unreadCount.update(count=>Math.max(0,count-1));})); }
  markAllRead(): Observable<void> { return this.http.post<void>(`${environment.apiBaseUrl}/notifications/read-all`, {}).pipe(tap(()=>{this.unreadIds.clear();this.unreadCount.set(0);})); }
}

@Injectable({ providedIn: 'root' })
export class ManagementApiService {
  constructor(private readonly http: HttpClient) {}
  list(resource: ManagementResource, search = ''): Observable<Record<string, unknown>[]> {
    return this.http.get<Record<string, unknown>[]>(`${environment.apiBaseUrl}/${resource}`, { params: { search } });
  }
  save(resource: ManagementResource, value: Record<string, unknown>, id?: string): Observable<Record<string, unknown>> {
    return id ? this.http.put<Record<string, unknown>>(`${environment.apiBaseUrl}/${resource}/${id}`, value) : this.http.post<Record<string, unknown>>(`${environment.apiBaseUrl}/${resource}`, value);
  }
  setActive(resource: ManagementResource, id: string, active: boolean): Observable<Record<string, unknown>> {
    return this.http.patch<Record<string, unknown>>(`${environment.apiBaseUrl}/${resource}/${id}`, { active });
  }
}

export type ManagementResource = 'branches' | 'services' | 'counters' | 'staff' | 'appointments' | 'notifications' | 'queues/history' | 'users' | 'organizations' | 'queue-settings' | 'operating-hours';

@Injectable({ providedIn: 'root' })
export class BranchService {
  constructor(private readonly http: HttpClient) {}
  search(query = ''): Observable<Branch[]> { return this.http.get<Branch[]>(`${environment.apiBaseUrl}/branches`, { params: new HttpParams().set('search', query) }); }
  get(id: string): Observable<Branch> { return this.http.get<Branch>(`${environment.apiBaseUrl}/branches/${id}`); }
  save(value: Partial<Branch>): Observable<Branch> { return value.id ? this.http.put<Branch>(`${environment.apiBaseUrl}/branches/${value.id}`, value) : this.http.post<Branch>(`${environment.apiBaseUrl}/branches`, value); }
}
@Injectable({ providedIn: 'root' })
export class ServiceManagementService {
  constructor(private readonly http: HttpClient) {}
  byBranch(branchId: string): Observable<Service[]> { return this.http.get<Service[]>(`${environment.apiBaseUrl}/branches/${branchId}/services`); }
  save(value: Partial<Service>): Observable<Service> { return value.id ? this.http.put<Service>(`${environment.apiBaseUrl}/services/${value.id}`, value) : this.http.post<Service>(`${environment.apiBaseUrl}/services`, value); }
}
@Injectable({ providedIn: 'root' })
export class QueueService {
  constructor(private readonly http: HttpClient) {}
  join(serviceId: string): Observable<QueueToken> { return this.http.post<QueueToken>(`${environment.apiBaseUrl}/queues/join`, { serviceId }); }
  track(tokenId: string): Observable<QueueToken> { return this.http.get<QueueToken>(`${environment.apiBaseUrl}/queues/tokens/${tokenId}`); }
  current(): Observable<QueueToken> { return this.http.get<QueueToken>(`${environment.apiBaseUrl}/queues/current`); }
  active(): Observable<QueueToken[]> { return this.http.get<QueueToken[]>(`${environment.apiBaseUrl}/queues/active`); }
  callNext(): Observable<QueueToken> { return this.http.post<QueueToken>(`${environment.apiBaseUrl}/queues/call-next`, {}); }
  cancel(tokenId: string): Observable<void> { return this.http.post<void>(`${environment.apiBaseUrl}/queues/tokens/${tokenId}/cancel`, {}); }
  action(tokenId: string, action: 'call-next' | 'recall' | 'start' | 'complete' | 'no-show'): Observable<QueueToken> { return this.http.post<QueueToken>(`${environment.apiBaseUrl}/queues/tokens/${tokenId}/${action}`, {}); }
  history(page: number, size: number, filters: { search?: string; status?: string; date?: string } = {}): Observable<Page<QueueToken>> { return this.http.get<Page<QueueToken>>(`${environment.apiBaseUrl}/queues/history`, { params: { page, size, ...filters } }); }
}
@Injectable({ providedIn: 'root' })
export class AppointmentService {
  constructor(private readonly http: HttpClient) {}
  list(): Observable<Appointment[]> { return this.http.get<Appointment[]>(`${environment.apiBaseUrl}/appointments`); }
  availableSlots(serviceId: string, date: string): Observable<AppointmentSlot[]> { return this.http.get<AppointmentSlot[]>(`${environment.apiBaseUrl}/appointments/availability`, { params: { serviceId, date } }); }
  book(value: { serviceId: string; startsAt: string }): Observable<Appointment> { return this.http.post<Appointment>(`${environment.apiBaseUrl}/appointments`, value); }
  cancel(id: string): Observable<void> { return this.http.post<void>(`${environment.apiBaseUrl}/appointments/${id}/cancel`, {}); }
  reschedule(id: string, startsAt: string): Observable<Appointment> { return this.http.post<Appointment>(`${environment.apiBaseUrl}/appointments/${id}/reschedule`, { startsAt }); }
}
@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  constructor(private readonly http: HttpClient) {}
  summary(): Observable<Record<string, number>> { return this.http.get<Record<string, number>>(`${environment.apiBaseUrl}/analytics/summary`); }
  charts(): Observable<AnalyticsCharts> { return this.http.get<AnalyticsCharts>(`${environment.apiBaseUrl}/analytics/charts`); }
}
