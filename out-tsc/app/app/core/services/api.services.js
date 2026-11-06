import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class UserService {
    constructor(http) {
        this.http = http;
    }
    list() { return this.http.get(`${environment.apiBaseUrl}/users`); }
    profile() { return this.http.get(`${environment.apiBaseUrl}/users/me`); }
    updateProfile(value) { return this.http.put(`${environment.apiBaseUrl}/users/me`, value); }
    static { this.ɵfac = function UserService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UserService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
export class OrganizationService {
    constructor(http) {
        this.http = http;
    }
    list() { return this.http.get(`${environment.apiBaseUrl}/organizations`); }
    static { this.ɵfac = function OrganizationService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || OrganizationService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OrganizationService, factory: OrganizationService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OrganizationService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
export class CounterService {
    constructor(http) {
        this.http = http;
    }
    list() { return this.http.get(`${environment.apiBaseUrl}/counters`); }
    static { this.ɵfac = function CounterService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CounterService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CounterService, factory: CounterService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CounterService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
export class StaffService {
    constructor(http) {
        this.http = http;
    }
    list() { return this.http.get(`${environment.apiBaseUrl}/staff`); }
    static { this.ɵfac = function StaffService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StaffService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StaffService, factory: StaffService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StaffService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
export class NotificationService {
    constructor(http) {
        this.http = http;
        this.unreadCount = signal(0, ...(ngDevMode ? [{ debugName: "unreadCount" }] : /* istanbul ignore next */ []));
        this.unreadIds = new Set();
    }
    list() { return this.http.get(`${environment.apiBaseUrl}/notifications`).pipe(tap(values => { this.unreadIds.clear(); for (const item of values)
        if (!item.read)
            this.unreadIds.add(item.id); this.unreadCount.set(this.unreadIds.size); })); }
    markRead(id) { return this.http.post(`${environment.apiBaseUrl}/notifications/${id}/read`, {}).pipe(tap(() => { if (this.unreadIds.delete(id))
        this.unreadCount.update(count => Math.max(0, count - 1)); })); }
    markAllRead() { return this.http.post(`${environment.apiBaseUrl}/notifications/read-all`, {}).pipe(tap(() => { this.unreadIds.clear(); this.unreadCount.set(0); })); }
    static { this.ɵfac = function NotificationService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NotificationService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotificationService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
export class ManagementApiService {
    constructor(http) {
        this.http = http;
    }
    list(resource, search = '') {
        return this.http.get(`${environment.apiBaseUrl}/${resource}`, { params: { search } });
    }
    save(resource, value, id) {
        return id ? this.http.put(`${environment.apiBaseUrl}/${resource}/${id}`, value) : this.http.post(`${environment.apiBaseUrl}/${resource}`, value);
    }
    setActive(resource, id, active) {
        return this.http.patch(`${environment.apiBaseUrl}/${resource}/${id}`, { active });
    }
    static { this.ɵfac = function ManagementApiService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ManagementApiService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ManagementApiService, factory: ManagementApiService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ManagementApiService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
export class BranchService {
    constructor(http) {
        this.http = http;
    }
    search(query = '') { return this.http.get(`${environment.apiBaseUrl}/branches`, { params: new HttpParams().set('search', query) }); }
    get(id) { return this.http.get(`${environment.apiBaseUrl}/branches/${id}`); }
    save(value) { return value.id ? this.http.put(`${environment.apiBaseUrl}/branches/${value.id}`, value) : this.http.post(`${environment.apiBaseUrl}/branches`, value); }
    static { this.ɵfac = function BranchService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BranchService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BranchService, factory: BranchService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BranchService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
export class ServiceManagementService {
    constructor(http) {
        this.http = http;
    }
    byBranch(branchId) { return this.http.get(`${environment.apiBaseUrl}/branches/${branchId}/services`); }
    save(value) { return value.id ? this.http.put(`${environment.apiBaseUrl}/services/${value.id}`, value) : this.http.post(`${environment.apiBaseUrl}/services`, value); }
    static { this.ɵfac = function ServiceManagementService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ServiceManagementService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ServiceManagementService, factory: ServiceManagementService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ServiceManagementService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
export class QueueService {
    constructor(http) {
        this.http = http;
    }
    join(serviceId) { return this.http.post(`${environment.apiBaseUrl}/queues/join`, { serviceId }); }
    track(tokenId) { return this.http.get(`${environment.apiBaseUrl}/queues/tokens/${tokenId}`); }
    current() { return this.http.get(`${environment.apiBaseUrl}/queues/current`); }
    active() { return this.http.get(`${environment.apiBaseUrl}/queues/active`); }
    callNext() { return this.http.post(`${environment.apiBaseUrl}/queues/call-next`, {}); }
    cancel(tokenId) { return this.http.post(`${environment.apiBaseUrl}/queues/tokens/${tokenId}/cancel`, {}); }
    action(tokenId, action) { return this.http.post(`${environment.apiBaseUrl}/queues/tokens/${tokenId}/${action}`, {}); }
    history(page, size, filters = {}) { return this.http.get(`${environment.apiBaseUrl}/queues/history`, { params: { page, size, ...filters } }); }
    static { this.ɵfac = function QueueService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || QueueService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: QueueService, factory: QueueService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(QueueService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
export class AppointmentService {
    constructor(http) {
        this.http = http;
    }
    list() { return this.http.get(`${environment.apiBaseUrl}/appointments`); }
    availableSlots(serviceId, date) { return this.http.get(`${environment.apiBaseUrl}/appointments/availability`, { params: { serviceId, date } }); }
    book(value) { return this.http.post(`${environment.apiBaseUrl}/appointments`, value); }
    cancel(id) { return this.http.post(`${environment.apiBaseUrl}/appointments/${id}/cancel`, {}); }
    reschedule(id, startsAt) { return this.http.post(`${environment.apiBaseUrl}/appointments/${id}/reschedule`, { startsAt }); }
    static { this.ɵfac = function AppointmentService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppointmentService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AppointmentService, factory: AppointmentService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppointmentService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
export class AnalyticsService {
    constructor(http) {
        this.http = http;
    }
    summary() { return this.http.get(`${environment.apiBaseUrl}/analytics/summary`); }
    charts() { return this.http.get(`${environment.apiBaseUrl}/analytics/charts`); }
    static { this.ɵfac = function AnalyticsService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AnalyticsService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AnalyticsService, factory: AnalyticsService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AnalyticsService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
