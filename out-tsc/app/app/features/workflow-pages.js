import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../core/services/api.services";
import * as i3 from "@angular/common";
import * as i4 from "../core/auth/auth.service";
import * as i5 from "@angular/router";
const _forTrack0 = ($index, $item) => $item.id;
function AppointmentPage_For_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const branch_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", branch_r1.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(branch_r1.name);
} }
function AppointmentPage_For_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const service_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", service_r2.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(service_r2.name);
} }
function AppointmentPage_Conditional_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.error());
} }
function AppointmentPage_Conditional_36_For_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵlistener("click", function AppointmentPage_Conditional_36_For_5_Template_button_click_0_listener() { const slot_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.selectedSlot.set(slot_r6)); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_11_0;
    const slot_r6 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("selected", ((tmp_11_0 = ctx_r2.selectedSlot()) == null ? null : tmp_11_0.id) === slot_r6.id);
    i0.ɵɵproperty("disabled", !slot_r6.available);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 4, slot_r6.startsAt, "h:mm a"));
} }
function AppointmentPage_Conditional_36_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("click", function AppointmentPage_Conditional_36_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.selectedAppointment.set(null)); });
    i0.ɵɵtext(1, "Exit rescheduling");
    i0.ɵɵelementEnd();
} }
function AppointmentPage_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "span", 1);
    i0.ɵɵtext(2, "AVAILABLE TIMES");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div");
    i0.ɵɵrepeaterCreate(4, AppointmentPage_Conditional_36_For_5_Template, 3, 7, "button", 17, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 18);
    i0.ɵɵlistener("click", function AppointmentPage_Conditional_36_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.book()); });
    i0.ɵɵtext(7);
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9, "\u2197");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(10, AppointmentPage_Conditional_36_button_10_Template, 2, 0, "button", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r2.slots());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r2.selectedSlot() || ctx_r2.saving());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r2.saving() ? "Saving\u2026" : ctx_r2.selectedAppointment() ? "Reschedule appointment" : "Book this appointment", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r2.selectedAppointment());
} }
function AppointmentPage_Conditional_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtext(1, "No appointment times are available for that date. Choose another day.");
    i0.ɵɵelementEnd();
} }
function AppointmentPage_Conditional_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 16);
    i0.ɵɵtext(1, "Loading appointments\u2026");
    i0.ɵɵelementEnd();
} }
function AppointmentPage_Conditional_48_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21)(1, "span", 22)(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "span")(9, "b");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "small");
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "span", 23);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "button", 24);
    i0.ɵɵlistener("click", function AppointmentPage_Conditional_48_For_1_Template_button_click_16_listener() { const item_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.reschedule(item_r9)); });
    i0.ɵɵtext(17, "Reschedule");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 25);
    i0.ɵɵlistener("click", function AppointmentPage_Conditional_48_For_1_Template_button_click_18_listener() { const item_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.cancel(item_r9)); });
    i0.ɵɵtext(19, "Cancel");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(4, 8, item_r9.startsAt, "d"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(7, 11, item_r9.startsAt, "MMM"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r9.serviceName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", item_r9.branchName, " \u00B7 ", i0.ɵɵpipeBind2(13, 14, item_r9.startsAt, "EEE, h:mm a"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r9.status);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r2.busyId() === item_r9.id);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r2.busyId() === item_r9.id);
} }
function AppointmentPage_Conditional_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, AppointmentPage_Conditional_48_For_1_Template, 20, 17, "div", 21, _forTrack0);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵrepeater(ctx_r2.appointments());
} }
function AppointmentPage_Conditional_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtext(1, "No appointments yet. Available times are loaded from the branch API.");
    i0.ɵɵelementEnd();
} }
function HistoryPage_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function HistoryPage_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 11);
    i0.ɵɵtext(1, "Loading queue history\u2026");
    i0.ɵɵelementEnd();
} }
function HistoryPage_Conditional_27_For_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "b", 16);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "b");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td")(17, "span", 17);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const row_r3 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(row_r3.tokenNumber);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(row_r3.branchName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r3.serviceName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(11, 7, row_r3.joinedAt, "MMM d, y \u00B7 h:mm a"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(row_r3.waitingDurationMinutes == null ? "\u2014" : row_r3.waitingDurationMinutes + " min");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r3.serviceDurationMinutes == null ? "\u2014" : row_r3.serviceDurationMinutes + " min");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(row_r3.status);
} }
function HistoryPage_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "table")(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Token");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Branch & service");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Wait");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Service");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Status");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "tbody");
    i0.ɵɵrepeaterCreate(17, HistoryPage_Conditional_27_For_18_Template, 19, 10, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "div", 14)(20, "span");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div")(23, "button", 15);
    i0.ɵɵlistener("click", function HistoryPage_Conditional_27_Template_button_click_23_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.load(ctx_r0.page() - 1)); });
    i0.ɵɵtext(24, "Previous");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "button", 15);
    i0.ɵɵlistener("click", function HistoryPage_Conditional_27_Template_button_click_25_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.load(ctx_r0.page() + 1)); });
    i0.ɵɵtext(26, "Next");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(17);
    i0.ɵɵrepeater(ctx_r0.filtered());
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2("Page ", ctx_r0.page() + 1, " of ", ctx_r0.totalPages());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.page() === 0 || ctx_r0.loading());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.page() + 1 >= ctx_r0.totalPages() || ctx_r0.loading());
} }
function HistoryPage_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "span", 18);
    i0.ɵɵtext(2, "\u25F7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵtext(4, "No visits match those filters");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Queue history appears here after it is returned by the backend.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 19);
    i0.ɵɵlistener("click", function HistoryPage_Conditional_28_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.reset()); });
    i0.ɵɵtext(8, "Clear filters");
    i0.ɵɵelementEnd()();
} }
function NotificationsPage_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 3);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function NotificationsPage_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "p", 5);
    i0.ɵɵtext(1, "Loading notifications\u2026");
    i0.ɵɵdomElementEnd();
} }
function NotificationsPage_Conditional_13_For_1_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElement(0, "i");
} }
function NotificationsPage_Conditional_13_For_1_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "button", 12);
    i0.ɵɵdomListener("click", function NotificationsPage_Conditional_13_For_1_Conditional_13_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const item_r3 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.mark(item_r3)); });
    i0.ɵɵtext(1, "Mark read");
    i0.ɵɵdomElementEnd();
} }
function NotificationsPage_Conditional_13_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "article", 8)(1, "span", 9);
    i0.ɵɵtext(2);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(3, "div")(4, "div", 10)(5, "b");
    i0.ɵɵtext(6);
    i0.ɵɵdomElementEnd();
    i0.ɵɵconditionalCreate(7, NotificationsPage_Conditional_13_For_1_Conditional_7_Template, 1, 0, "i");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(8, "p");
    i0.ɵɵtext(9);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(10, "small");
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "date");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵconditionalCreate(13, NotificationsPage_Conditional_13_For_1_Conditional_13_Template, 2, 0, "button", 11);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("unread", !item_r3.read);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.icon(item_r3.category));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r3.title);
    i0.ɵɵadvance();
    i0.ɵɵconditional(!item_r3.read ? 7 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.message);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind2(12, 9, item_r3.createdAt, "MMM d, y \u00B7 h:mm a"), " \u00B7 ", item_r3.category);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(!item_r3.read ? 13 : -1);
} }
function NotificationsPage_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, NotificationsPage_Conditional_13_For_1_Template, 14, 12, "article", 7, _forTrack0);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵrepeater(ctx_r0.items());
} }
function NotificationsPage_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 6)(1, "span", 13);
    i0.ɵɵtext(2, "\u2667");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(3, "h3");
    i0.ɵɵtext(4, "You're all caught up");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(5, "p");
    i0.ɵɵtext(6, "New queue and appointment updates will appear here.");
    i0.ɵɵdomElementEnd()();
} }
function ProfilePage_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("inline-error", ctx_r0.failed());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.message());
} }
function ProfilePage_small_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "Please enter your name.");
    i0.ɵɵelementEnd();
} }
function ProfilePage_small_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "Enter a valid phone number.");
    i0.ɵɵelementEnd();
} }
function ForgotPasswordPage_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1, "If a matching account exists, the backend will send password reset instructions.");
    i0.ɵɵelementEnd();
} }
function ForgotPasswordPage_Conditional_14_small_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "Enter a valid email.");
    i0.ɵɵelementEnd();
} }
function ForgotPasswordPage_Conditional_14_p_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function ForgotPasswordPage_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Enter your account email. We'll request a reset link from the connected service.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "form", 8);
    i0.ɵɵlistener("ngSubmit", function ForgotPasswordPage_Conditional_14_Template_form_ngSubmit_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submit()); });
    i0.ɵɵelementStart(3, "label");
    i0.ɵɵtext(4, "Email address");
    i0.ɵɵelement(5, "input", 9);
    i0.ɵɵtemplate(6, ForgotPasswordPage_Conditional_14_small_6_Template, 2, 0, "small", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, ForgotPasswordPage_Conditional_14_p_7_Template, 2, 1, "p", 11);
    i0.ɵɵelementStart(8, "button", 12);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formGroup", ctx_r1.form);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.form.controls.email.invalid && ctx_r1.form.controls.email.touched);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.error());
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.busy());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.busy() ? "Sending\u2026" : "Request reset link");
} }
function ResetPasswordPage_small_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "Use at least 8 characters, with upper, lower and a number.");
    i0.ɵɵelementEnd();
} }
function ResetPasswordPage_small_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "Passwords must match.");
    i0.ɵɵelementEnd();
} }
function ResetPasswordPage_p_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function ResetPasswordPage_p_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 15);
    i0.ɵɵtext(1, "Password updated. ");
    i0.ɵɵelementStart(2, "a", 16);
    i0.ɵɵtext(3, "Sign in");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, ".");
    i0.ɵɵelementEnd();
} }
const _c0 = ".reset-shell[_ngcontent-%COMP%]{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;gap:24px;padding:56px 20px;background:#f7f9fc}.reset-shell[_ngcontent-%COMP%] > .brand[_ngcontent-%COMP%]{align-self:center}.reset-panel[_ngcontent-%COMP%]{width:min(100%,460px);padding:32px;background:#fff;border:1px solid #e8edf3;border-radius:14px;box-shadow:0 14px 36px rgba(27,54,91,.08)}.reset-panel[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:8px 0;font:700 26px/1.25 'Manrope',sans-serif;color:#203b60}.reset-panel[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:13px;line-height:1.6;color:#718096}.reset-panel[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr);gap:14px;margin:22px 0}.reset-panel[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr);gap:7px;color:#42546b;font-size:12px;font-weight:600}.reset-panel[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:block;width:100%;height:44px;border:1px solid #dfe6ef;border-radius:8px;padding:0 12px;background:#fff;color:#263950;font-size:14px}.reset-panel[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:2px solid #d7e6fa;border-color:#7ca5da}.reset-panel[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{width:100%;min-height:46px}.reset-panel[_ngcontent-%COMP%] > .subtle-link[_ngcontent-%COMP%]{display:inline-block;margin-top:4px;color:#5279aa;font-size:12px}.reset-panel[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:11px;color:#a15862}";
const _c1 = () => ["/customer/join"];
const _c2 = (a0, a1, a2) => ({ branchId: a0, organizationId: a1, serviceId: a2 });
function BranchDetailsPage_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "span");
    i0.ɵɵtext(2, "\u2311");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4, "Branch details unavailable");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 6);
    i0.ɵɵlistener("click", function BranchDetailsPage_Conditional_10_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.load()); });
    i0.ɵɵtext(8, "Try again");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function BranchDetailsPage_Conditional_11_Conditional_22_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "span", 11);
    i0.ɵɵtext(2, "\u25C8");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span")(4, "b");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "a", 12);
    i0.ɵɵtext(9, "Join \u2192");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_15_0;
    const service_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(service_r3.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(service_r3.description ?? service_r3.averageDurationMinutes + " min average");
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(4, _c1))("queryParams", i0.ɵɵpureFunction3(5, _c2, (tmp_15_0 = ctx_r1.branch()) == null ? null : tmp_15_0.id, ((tmp_15_0 = ctx_r1.branch()) == null ? null : tmp_15_0.organizationId) ?? ((tmp_15_0 = ctx_r1.branch()) == null ? null : tmp_15_0.organizationName), service_r3.id));
} }
function BranchDetailsPage_Conditional_11_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, BranchDetailsPage_Conditional_11_Conditional_22_For_1_Template, 10, 9, "div", 10, _forTrack0);
} if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵrepeater((tmp_2_0 = ctx_r1.branch()) == null ? null : tmp_2_0.services);
} }
function BranchDetailsPage_Conditional_11_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1, "Services are not listed for this branch.");
    i0.ɵɵelementEnd();
} }
function BranchDetailsPage_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "section", 7)(2, "span", 1);
    i0.ɵɵtext(3, "CONTACT & HOURS");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h2");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 8)(13, "span");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "span");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "section", 7)(18, "span", 1);
    i0.ɵɵtext(19, "AVAILABLE SERVICES");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "h2");
    i0.ɵɵtext(21, "Choose a service");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(22, BranchDetailsPage_Conditional_11_Conditional_22_Template, 2, 0)(23, BranchDetailsPage_Conditional_11_Conditional_23_Template, 2, 0, "div", 9);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate((tmp_1_0 = ctx_r1.branch()) == null ? null : tmp_1_0.organizationName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((tmp_2_0 = ctx_r1.branch()) == null ? null : tmp_2_0.address);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(((tmp_3_0 = ctx_r1.branch()) == null ? null : tmp_3_0.phone) ?? "Contact details not provided");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ((tmp_4_0 = ctx_r1.branch()) == null ? null : tmp_4_0.openingTime) ?? "Hours unavailable", " \u2013 ", ((tmp_4_0 = ctx_r1.branch()) == null ? null : tmp_4_0.closingTime) ?? "\u2014");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ((tmp_5_0 = ctx_r1.branch()) == null ? null : tmp_5_0.activeQueueLength) ?? "\u2014", " waiting");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(((tmp_6_0 = ctx_r1.branch()) == null ? null : tmp_6_0.estimatedWaitMinutes) == null ? "Wait estimate unavailable" : "~" + ((tmp_6_0 = ctx_r1.branch()) == null ? null : tmp_6_0.estimatedWaitMinutes) + " min");
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(((tmp_7_0 = ctx_r1.branch()) == null ? null : tmp_7_0.services == null ? null : tmp_7_0.services.length) ? 22 : 23);
} }
function BranchDetailsPage_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1, "Loading branch details\u2026");
    i0.ɵɵelementEnd();
} }
function AdminDashboard_small_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
export class AppointmentPage {
    constructor(fb, branchApi, serviceApi, appointmentApi) {
        this.fb = fb;
        this.branchApi = branchApi;
        this.serviceApi = serviceApi;
        this.appointmentApi = appointmentApi;
        this.branches = signal([], ...(ngDevMode ? [{ debugName: "branches" }] : /* istanbul ignore next */ []));
        this.services = signal([], ...(ngDevMode ? [{ debugName: "services" }] : /* istanbul ignore next */ []));
        this.slots = signal([], ...(ngDevMode ? [{ debugName: "slots" }] : /* istanbul ignore next */ []));
        this.selectedSlot = signal(null, ...(ngDevMode ? [{ debugName: "selectedSlot" }] : /* istanbul ignore next */ []));
        this.selectedAppointment = signal(null, ...(ngDevMode ? [{ debugName: "selectedAppointment" }] : /* istanbul ignore next */ []));
        this.searchedSlots = signal(false, ...(ngDevMode ? [{ debugName: "searchedSlots" }] : /* istanbul ignore next */ []));
        this.appointments = signal([], ...(ngDevMode ? [{ debugName: "appointments" }] : /* istanbul ignore next */ []));
        this.error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
        this.loadingSlots = signal(false, ...(ngDevMode ? [{ debugName: "loadingSlots" }] : /* istanbul ignore next */ []));
        this.loadingAppointments = signal(false, ...(ngDevMode ? [{ debugName: "loadingAppointments" }] : /* istanbul ignore next */ []));
        this.saving = signal(false, ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
        this.busyId = signal('', ...(ngDevMode ? [{ debugName: "busyId" }] : /* istanbul ignore next */ []));
        this.today = new Date().toISOString().slice(0, 10);
        this.form = this.fb.group({ branchId: ['', Validators.required], serviceId: ['', Validators.required], date: [this.today, Validators.required] });
    }
    ngOnInit() { this.branchApi.search().subscribe({ next: v => this.branches.set(v), error: () => this.error.set('Branch directory is unavailable.') }); this.loadAppointments(); }
    loadServices() { const id = this.form.controls.branchId.value; if (!id)
        return; this.form.controls.serviceId.setValue(''); this.serviceApi.byBranch(id).subscribe({ next: v => this.services.set(v.filter(item => item.active)), error: () => this.error.set('Services for this branch could not be loaded.') }); }
    findSlots() { if (this.form.invalid)
        return; this.error.set(''); this.searchedSlots.set(true); this.selectedSlot.set(null); this.loadingSlots.set(true); const { serviceId, date } = this.form.getRawValue(); this.appointmentApi.availableSlots(serviceId ?? '', date ?? '').pipe(finalize(() => this.loadingSlots.set(false))).subscribe({ next: v => this.slots.set(v.filter(slot => slot.available)), error: () => this.error.set('Availability could not be loaded. The appointment availability endpoint must be configured by the backend.') }); }
    book() { const serviceId = this.form.controls.serviceId.value; const slot = this.selectedSlot(); if (!serviceId || !slot)
        return; this.saving.set(true); const selected = this.selectedAppointment(); const request = selected ? this.appointmentApi.reschedule(selected.id, slot.startsAt) : this.appointmentApi.book({ serviceId, startsAt: slot.startsAt }); request.pipe(finalize(() => this.saving.set(false))).subscribe({ next: () => { this.selectedSlot.set(null); this.selectedAppointment.set(null); this.slots.set([]); this.loadAppointments(); }, error: () => this.error.set(selected ? 'Appointment rescheduling failed. Please try again.' : 'Appointment booking failed. Please try another time.') }); }
    reschedule(item) { if (!item.branchId || !item.serviceId) {
        this.error.set('This appointment does not include the branch and service IDs needed to check rescheduling availability.');
        return;
    } this.selectedAppointment.set(item); this.form.patchValue({ branchId: item.branchId, serviceId: item.serviceId, date: item.startsAt.slice(0, 10) }); this.serviceApi.byBranch(item.branchId).subscribe({ next: values => { this.services.set(values.filter(value => value.active)); this.findSlots(); }, error: () => this.error.set('Service availability is unavailable.') }); }
    cancel(item) { this.busyId.set(item.id); this.appointmentApi.cancel(item.id).pipe(finalize(() => this.busyId.set(''))).subscribe({ next: () => this.loadAppointments(), error: () => this.error.set('This appointment could not be cancelled.') }); }
    loadAppointments() { this.loadingAppointments.set(true); this.appointmentApi.list().pipe(finalize(() => this.loadingAppointments.set(false))).subscribe({ next: v => this.appointments.set(v), error: () => this.error.set('Appointment history is unavailable.') }); }
    static { this.ɵfac = function AppointmentPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppointmentPage)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.BranchService), i0.ɵɵdirectiveInject(i2.ServiceManagementService), i0.ɵɵdirectiveInject(i2.AppointmentService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppointmentPage, selectors: [["ng-component"]], decls: 50, vars: 8, consts: [[1, "page-heading"], [1, "eyebrow"], [1, "panel", "appointment-booking"], [1, "panel-head"], [3, "ngSubmit", "formGroup"], ["formControlName", "branchId", 3, "change"], ["value", ""], [3, "value"], ["formControlName", "serviceId"], ["type", "date", "formControlName", "date", 3, "min"], ["type", "submit", 1, "button", "button-secondary", 3, "disabled"], [1, "inline-error"], [1, "slot-list"], [1, "compact-empty"], [1, "panel", "appointment-list"], [1, "subtle-link", 3, "click"], [1, "loading-state"], [1, "slot-chip", 3, "selected", "disabled"], [1, "button", "button-primary", 3, "click", "disabled"], ["class", "subtle-link", 3, "click", 4, "ngIf"], [1, "slot-chip", 3, "click", "disabled"], [1, "appointment-row"], [1, "date-tile"], [1, "activity-status"], [1, "subtle-link", 3, "click", "disabled"], [1, "subtle-button", 3, "click", "disabled"]], template: function AppointmentPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div")(2, "span", 1);
            i0.ɵɵtext(3, "PLAN A VISIT");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h1");
            i0.ɵɵtext(5, "Appointments.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵtext(7, "Choose a service and see appointment times provided by your branch.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(8, "section", 2)(9, "div", 3)(10, "div")(11, "span", 1);
            i0.ɵɵtext(12, "BOOK A TIME");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "h2");
            i0.ɵɵtext(14, "Find an available slot");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(15, "form", 4);
            i0.ɵɵlistener("ngSubmit", function AppointmentPage_Template_form_ngSubmit_15_listener() { return ctx.findSlots(); });
            i0.ɵɵelementStart(16, "label");
            i0.ɵɵtext(17, "Branch");
            i0.ɵɵelementStart(18, "select", 5);
            i0.ɵɵlistener("change", function AppointmentPage_Template_select_change_18_listener() { return ctx.loadServices(); });
            i0.ɵɵelementStart(19, "option", 6);
            i0.ɵɵtext(20, "Choose a branch");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(21, AppointmentPage_For_22_Template, 2, 2, "option", 7, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "label");
            i0.ɵɵtext(24, "Service");
            i0.ɵɵelementStart(25, "select", 8)(26, "option", 6);
            i0.ɵɵtext(27, "Choose a service");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(28, AppointmentPage_For_29_Template, 2, 2, "option", 7, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(30, "label");
            i0.ɵɵtext(31, "Date");
            i0.ɵɵelement(32, "input", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "button", 10);
            i0.ɵɵtext(34);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(35, AppointmentPage_Conditional_35_Template, 2, 1, "p", 11);
            i0.ɵɵconditionalCreate(36, AppointmentPage_Conditional_36_Template, 11, 3, "div", 12);
            i0.ɵɵconditionalCreate(37, AppointmentPage_Conditional_37_Template, 2, 0, "div", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "section", 14)(39, "div", 3)(40, "div")(41, "span", 1);
            i0.ɵɵtext(42, "YOUR SCHEDULE");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "h2");
            i0.ɵɵtext(44, "Upcoming and recent");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(45, "button", 15);
            i0.ɵɵlistener("click", function AppointmentPage_Template_button_click_45_listener() { return ctx.loadAppointments(); });
            i0.ɵɵtext(46, "Refresh");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(47, AppointmentPage_Conditional_47_Template, 2, 0, "p", 16)(48, AppointmentPage_Conditional_48_Template, 2, 0)(49, AppointmentPage_Conditional_49_Template, 2, 0, "div", 13);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(6);
            i0.ɵɵrepeater(ctx.branches());
            i0.ɵɵadvance(7);
            i0.ɵɵrepeater(ctx.services());
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("min", ctx.today);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.form.invalid || ctx.loadingSlots());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.loadingSlots() ? "Checking\u2026" : "Find available times");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 35 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.slots().length ? 36 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.searchedSlots() && !ctx.loadingSlots() && !ctx.slots().length ? 37 : -1);
            i0.ɵɵadvance(10);
            i0.ɵɵconditional(ctx.loadingAppointments() ? 47 : ctx.appointments().length ? 48 : 49);
        } }, dependencies: [CommonModule, i3.NgIf, ReactiveFormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, i3.DatePipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppointmentPage, [{
        type: Component,
        args: [{ standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `
<div class="page-heading"><div><span class="eyebrow">PLAN A VISIT</span><h1>Appointments.</h1><p>Choose a service and see appointment times provided by your branch.</p></div></div>
<section class="panel appointment-booking"><div class="panel-head"><div><span class="eyebrow">BOOK A TIME</span><h2>Find an available slot</h2></div></div><form [formGroup]="form" (ngSubmit)="findSlots()"><label>Branch<select formControlName="branchId" (change)="loadServices()"><option value="">Choose a branch</option>@for(branch of branches();track branch.id){<option [value]="branch.id">{{branch.name}}</option>}</select></label><label>Service<select formControlName="serviceId"><option value="">Choose a service</option>@for(service of services();track service.id){<option [value]="service.id">{{service.name}}</option>}</select></label><label>Date<input type="date" formControlName="date" [min]="today"></label><button class="button button-secondary" type="submit" [disabled]="form.invalid || loadingSlots()">{{loadingSlots()?'Checking…':'Find available times'}}</button></form>
@if(error()){<p class="inline-error">{{error()}}</p>}@if(slots().length){<div class="slot-list"><span class="eyebrow">AVAILABLE TIMES</span><div>@for(slot of slots();track slot.id){<button class="slot-chip" [class.selected]="selectedSlot()?.id===slot.id" [disabled]="!slot.available" (click)="selectedSlot.set(slot)">{{slot.startsAt|date:'h:mm a'}}</button>}</div><button class="button button-primary" [disabled]="!selectedSlot() || saving()" (click)="book()">{{saving()?'Saving…':selectedAppointment()?'Reschedule appointment':'Book this appointment'}} <span>↗</span></button><button *ngIf="selectedAppointment()" class="subtle-link" (click)="selectedAppointment.set(null)">Exit rescheduling</button></div>}@if(searchedSlots()&&!loadingSlots()&&!slots().length){<div class="compact-empty">No appointment times are available for that date. Choose another day.</div>}
</section><section class="panel appointment-list"><div class="panel-head"><div><span class="eyebrow">YOUR SCHEDULE</span><h2>Upcoming and recent</h2></div><button class="subtle-link" (click)="loadAppointments()">Refresh</button></div>@if(loadingAppointments()){<p class="loading-state">Loading appointments…</p>}@else if(appointments().length){@for(item of appointments();track item.id){<div class="appointment-row"><span class="date-tile"><b>{{item.startsAt|date:'d'}}</b><small>{{item.startsAt|date:'MMM'}}</small></span><span><b>{{item.serviceName}}</b><small>{{item.branchName}} · {{item.startsAt|date:'EEE, h:mm a'}}</small></span><span class="activity-status">{{item.status}}</span><button class="subtle-link" [disabled]="busyId()===item.id" (click)="reschedule(item)">Reschedule</button><button class="subtle-button" [disabled]="busyId()===item.id" (click)="cancel(item)">Cancel</button></div>}}@else{<div class="compact-empty">No appointments yet. Available times are loaded from the branch API.</div>}</section>
` }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.BranchService }, { type: i2.ServiceManagementService }, { type: i2.AppointmentService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppointmentPage, { className: "AppointmentPage", filePath: "src/app/features/workflow-pages.ts", lineNumber: 16 }); })();
export class HistoryPage {
    constructor(fb, queues) {
        this.fb = fb;
        this.queues = queues;
        this.rows = signal([], ...(ngDevMode ? [{ debugName: "rows" }] : /* istanbul ignore next */ []));
        this.filtered = signal([], ...(ngDevMode ? [{ debugName: "filtered" }] : /* istanbul ignore next */ []));
        this.page = signal(0, ...(ngDevMode ? [{ debugName: "page" }] : /* istanbul ignore next */ []));
        this.totalPages = signal(1, ...(ngDevMode ? [{ debugName: "totalPages" }] : /* istanbul ignore next */ []));
        this.loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
        this.error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
        this.form = this.fb.group({ query: [''], status: [''], date: [''] });
        this.load();
    }
    load(page = 0) { if (page < 0)
        return; this.loading.set(true); this.error.set(''); const { query, status, date } = this.form.getRawValue(); this.queues.history(page, 10, { search: (query ?? '').trim() || undefined, status: status || undefined, date: date || undefined }).pipe(finalize(() => this.loading.set(false))).subscribe({ next: p => { this.rows.set(p.content); this.page.set(p.number); this.totalPages.set(Math.max(1, p.totalPages)); this.applyFilters(); }, error: () => this.error.set('Queue history is unavailable. Check the API and try again.') }); }
    applyFilters() { const { query, status, date } = this.form.getRawValue(); const q = (query ?? '').trim().toLowerCase(); this.filtered.set(this.rows().filter(row => (!status || row.status === status) && (!date || row.joinedAt.startsWith(date)) && (!q || `${row.tokenNumber} ${row.branchName} ${row.serviceName}`.toLowerCase().includes(q)))); }
    reset() { this.form.reset({ query: '', status: '', date: '' }); this.load(0); }
    exportCsv() { const csv = [['Token', 'Branch', 'Service', 'Joined', 'Completed', 'Status', 'Wait minutes', 'Service minutes'], ...this.filtered().map(row => [row.tokenNumber, row.branchName, row.serviceName, row.joinedAt, row.completedAt ?? '', row.status, String(row.waitingDurationMinutes ?? ''), String(row.serviceDurationMinutes ?? '')])].map(line => line.map(value => `"${value.replaceAll('"', '""')}"`).join(',')).join('\r\n'); const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' }); const url = URL.createObjectURL(blob); const anchor = document.createElement('a'); anchor.href = url; anchor.download = 'queueless-history.csv'; anchor.click(); URL.revokeObjectURL(url); }
    static { this.ɵfac = function HistoryPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HistoryPage)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.QueueService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HistoryPage, selectors: [["ng-component"]], decls: 29, vars: 4, consts: [[1, "page-heading"], [1, "eyebrow"], [1, "button", "button-secondary", 3, "click", "disabled"], [1, "history-filters", 3, "ngSubmit", "formGroup"], ["formControlName", "query", "placeholder", "Search token, service or branch"], ["formControlName", "status"], ["value", ""], ["type", "date", "formControlName", "date"], [1, "button", "button-primary", "button-small"], [1, "inline-error"], [1, "panel", "history-table-panel"], [1, "loading-state"], [1, "empty-state"], [1, "responsive-table"], [1, "pagination"], [3, "click", "disabled"], [1, "queue-token-text"], [1, "activity-status"], [1, "empty-icon"], [1, "button", "button-secondary", "button-small", 3, "click"]], template: function HistoryPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div")(2, "span", 1);
            i0.ɵɵtext(3, "YOUR QUEUE ACTIVITY");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h1");
            i0.ɵɵtext(5, "Queue history.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵtext(7, "Review your visits and queue outcomes.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "button", 2);
            i0.ɵɵlistener("click", function HistoryPage_Template_button_click_8_listener() { return ctx.exportCsv(); });
            i0.ɵɵtext(9, "Export CSV");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "form", 3);
            i0.ɵɵlistener("ngSubmit", function HistoryPage_Template_form_ngSubmit_10_listener() { return ctx.load(0); });
            i0.ɵɵelement(11, "input", 4);
            i0.ɵɵelementStart(12, "select", 5)(13, "option", 6);
            i0.ɵɵtext(14, "All statuses");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "option");
            i0.ɵɵtext(16, "COMPLETED");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "option");
            i0.ɵɵtext(18, "CANCELLED");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "option");
            i0.ɵɵtext(20, "NO_SHOW");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(21, "input", 7);
            i0.ɵɵelementStart(22, "button", 8);
            i0.ɵɵtext(23, "Filter");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(24, HistoryPage_Conditional_24_Template, 2, 1, "div", 9);
            i0.ɵɵelementStart(25, "section", 10);
            i0.ɵɵconditionalCreate(26, HistoryPage_Conditional_26_Template, 2, 0, "p", 11)(27, HistoryPage_Conditional_27_Template, 27, 4)(28, HistoryPage_Conditional_28_Template, 9, 0, "div", 12);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("disabled", !ctx.rows().length);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(14);
            i0.ɵɵconditional(ctx.error() ? 24 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.loading() ? 26 : ctx.filtered().length ? 27 : 28);
        } }, dependencies: [CommonModule, ReactiveFormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, i3.DatePipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HistoryPage, [{
        type: Component,
        args: [{ standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `
<div class="page-heading"><div><span class="eyebrow">YOUR QUEUE ACTIVITY</span><h1>Queue history.</h1><p>Review your visits and queue outcomes.</p></div><button class="button button-secondary" (click)="exportCsv()" [disabled]="!rows().length">Export CSV</button></div><form class="history-filters" [formGroup]="form" (ngSubmit)="load(0)"><input formControlName="query" placeholder="Search token, service or branch"><select formControlName="status"><option value="">All statuses</option><option>COMPLETED</option><option>CANCELLED</option><option>NO_SHOW</option></select><input type="date" formControlName="date"><button class="button button-primary button-small">Filter</button></form>@if(error()){<div class="inline-error">{{error()}}</div>}<section class="panel history-table-panel">@if(loading()){<p class="loading-state">Loading queue history…</p>}@else if(filtered().length){<div class="responsive-table"><table><thead><tr><th>Token</th><th>Branch & service</th><th>Date</th><th>Wait</th><th>Service</th><th>Status</th></tr></thead><tbody>@for(row of filtered();track row.id){<tr><td><b class="queue-token-text">{{row.tokenNumber}}</b></td><td><b>{{row.branchName}}</b><small>{{row.serviceName}}</small></td><td>{{row.joinedAt|date:'MMM d, y · h:mm a'}}</td><td>{{row.waitingDurationMinutes == null?'—':row.waitingDurationMinutes+' min'}}</td><td>{{row.serviceDurationMinutes == null?'—':row.serviceDurationMinutes+' min'}}</td><td><span class="activity-status">{{row.status}}</span></td></tr>}</tbody></table></div><div class="pagination"><span>Page {{page()+1}} of {{totalPages()}}</span><div><button (click)="load(page()-1)" [disabled]="page()===0 || loading()">Previous</button><button (click)="load(page()+1)" [disabled]="page()+1>=totalPages() || loading()">Next</button></div></div>}@else{<div class="empty-state"><span class="empty-icon">◷</span><h3>No visits match those filters</h3><p>Queue history appears here after it is returned by the backend.</p><button class="button button-secondary button-small" (click)="reset()">Clear filters</button></div>}</section>
` }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.QueueService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HistoryPage, { className: "HistoryPage", filePath: "src/app/features/workflow-pages.ts", lineNumber: 31 }); })();
export class NotificationsPage {
    constructor(api) {
        this.api = api;
        this.items = signal([], ...(ngDevMode ? [{ debugName: "items" }] : /* istanbul ignore next */ []));
        this.loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
        this.busy = signal(false, ...(ngDevMode ? [{ debugName: "busy" }] : /* istanbul ignore next */ []));
        this.error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    }
    get unreadCount() { return this.items().filter(item => !item.read).length; }
    ngOnInit() { this.load(); }
    load() { this.loading.set(true); this.api.list().pipe(finalize(() => this.loading.set(false))).subscribe({ next: v => this.items.set(v), error: () => this.error.set('Notifications are not available. Check the notification API.') }); }
    mark(item) { this.busy.set(true); this.api.markRead(item.id).pipe(finalize(() => this.busy.set(false))).subscribe({ next: () => this.items.update(values => values.map(value => value.id === item.id ? { ...value, read: true } : value)), error: () => this.error.set('Could not update this notification.') }); }
    markAll() { this.busy.set(true); this.api.markAllRead().pipe(finalize(() => this.busy.set(false))).subscribe({ next: () => this.items.update(values => values.map(value => ({ ...value, read: true }))), error: () => this.error.set('Could not mark notifications as read.') }); }
    icon(category) { return category.toLowerCase().includes('appoint') ? '▣' : category.toLowerCase().includes('queue') ? '◷' : '•'; }
    static { this.ɵfac = function NotificationsPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NotificationsPage)(i0.ɵɵdirectiveInject(i2.NotificationService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NotificationsPage, selectors: [["ng-component"]], decls: 15, vars: 3, consts: [[1, "page-heading"], [1, "eyebrow"], [1, "button", "button-secondary", 3, "click", "disabled"], [1, "inline-error"], [1, "panel", "notification-panel"], [1, "loading-state"], [1, "empty-state"], [1, "notification-row", 3, "unread"], [1, "notification-row"], [1, "notification-icon"], [1, "notification-title"], [1, "subtle-link"], [1, "subtle-link", 3, "click"], [1, "empty-icon"]], template: function NotificationsPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "div", 0)(1, "div")(2, "span", 1);
            i0.ɵɵtext(3, "STAY IN THE LOOP");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(4, "h1");
            i0.ɵɵtext(5, "Notifications.");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(6, "p");
            i0.ɵɵtext(7, "Queue updates and appointment reminders in one place.");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(8, "button", 2);
            i0.ɵɵdomListener("click", function NotificationsPage_Template_button_click_8_listener() { return ctx.markAll(); });
            i0.ɵɵtext(9, "Mark all as read");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵconditionalCreate(10, NotificationsPage_Conditional_10_Template, 2, 1, "div", 3);
            i0.ɵɵdomElementStart(11, "section", 4);
            i0.ɵɵconditionalCreate(12, NotificationsPage_Conditional_12_Template, 2, 0, "p", 5)(13, NotificationsPage_Conditional_13_Template, 2, 0)(14, NotificationsPage_Conditional_14_Template, 7, 0, "div", 6);
            i0.ɵɵdomElementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵdomProperty("disabled", !ctx.unreadCount || ctx.busy());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.error() ? 10 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.loading() ? 12 : ctx.items().length ? 13 : 14);
        } }, dependencies: [CommonModule, i3.DatePipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotificationsPage, [{
        type: Component,
        args: [{ standalone: true, imports: [CommonModule], template: `
<div class="page-heading"><div><span class="eyebrow">STAY IN THE LOOP</span><h1>Notifications.</h1><p>Queue updates and appointment reminders in one place.</p></div><button class="button button-secondary" (click)="markAll()" [disabled]="!unreadCount || busy()">Mark all as read</button></div>@if(error()){<div class="inline-error">{{error()}}</div>}<section class="panel notification-panel">@if(loading()){<p class="loading-state">Loading notifications…</p>}@else if(items().length){@for(item of items();track item.id){<article class="notification-row" [class.unread]="!item.read"><span class="notification-icon">{{icon(item.category)}}</span><div><div class="notification-title"><b>{{item.title}}</b>@if(!item.read){<i></i>}</div><p>{{item.message}}</p><small>{{item.createdAt|date:'MMM d, y · h:mm a'}} · {{item.category}}</small></div>@if(!item.read){<button class="subtle-link" (click)="mark(item)">Mark read</button>}</article>}}@else{<div class="empty-state"><span class="empty-icon">♧</span><h3>You're all caught up</h3><p>New queue and appointment updates will appear here.</p></div>}</section>
` }]
    }], () => [{ type: i2.NotificationService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NotificationsPage, { className: "NotificationsPage", filePath: "src/app/features/workflow-pages.ts", lineNumber: 43 }); })();
export class ProfilePage {
    constructor(fb, userApi, auth) {
        this.fb = fb;
        this.userApi = userApi;
        this.auth = auth;
        this.loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
        this.saving = signal(false, ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
        this.message = signal('', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
        this.failed = signal(false, ...(ngDevMode ? [{ debugName: "failed" }] : /* istanbul ignore next */ []));
        this.form = this.fb.group({ fullName: [this.auth.user()?.fullName ?? '', [Validators.required, Validators.minLength(2)]], email: [this.auth.user()?.email ?? '', [Validators.required, Validators.email]], phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9\s().-]{7,20}$/)]] });
    }
    get initials() { return (this.auth.user()?.fullName ?? 'Q').split(' ').map(x => x[0]).join('').slice(0, 2).toUpperCase(); }
    ngOnInit() { this.userApi.profile().pipe(finalize(() => this.loading.set(false))).subscribe({ next: user => this.form.patchValue({ fullName: user.fullName, email: user.email, phone: user.phone ?? '' }), error: () => this.message.set('Profile data could not be refreshed; showing the signed-in account details.') }); }
    save() { this.form.markAllAsTouched(); if (this.form.invalid)
        return; this.saving.set(true); this.message.set(''); this.userApi.updateProfile({ fullName: this.form.controls.fullName.value ?? '', phone: this.form.controls.phone.value ?? '' }).pipe(finalize(() => this.saving.set(false))).subscribe({ next: user => { this.form.patchValue({ fullName: user.fullName, phone: user.phone ?? '' }); this.failed.set(false); this.message.set('Profile updated.'); }, error: () => { this.failed.set(true); this.message.set('Profile update failed. Please try again.'); } }); }
    static { this.ɵfac = function ProfilePage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProfilePage)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.UserService), i0.ɵɵdirectiveInject(i4.AuthService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProfilePage, selectors: [["ng-component"]], decls: 36, vars: 9, consts: [[1, "page-heading"], [1, "eyebrow"], [1, "panel", "profile-panel"], [1, "profile-heading"], [1, "profile-avatar", "profile-large"], [1, "profile-message", 3, "inline-error"], [3, "ngSubmit", "formGroup"], ["formControlName", "fullName", "autocomplete", "name"], [4, "ngIf"], ["formControlName", "email", "type", "email", "readonly", ""], ["formControlName", "phone", "type", "tel", "autocomplete", "tel"], [1, "button", "button-primary", 3, "disabled"], [1, "profile-message"]], template: function ProfilePage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div")(2, "span", 1);
            i0.ɵɵtext(3, "YOUR ACCOUNT");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h1");
            i0.ɵɵtext(5, "Profile.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵtext(7, "Keep your contact details up to date.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(8, "section", 2)(9, "div", 3)(10, "span", 4);
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div")(13, "h2");
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "span");
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(17, ProfilePage_Conditional_17_Template, 2, 3, "p", 5);
            i0.ɵɵelementStart(18, "form", 6);
            i0.ɵɵlistener("ngSubmit", function ProfilePage_Template_form_ngSubmit_18_listener() { return ctx.save(); });
            i0.ɵɵelementStart(19, "label");
            i0.ɵɵtext(20, "Full name");
            i0.ɵɵelement(21, "input", 7);
            i0.ɵɵtemplate(22, ProfilePage_small_22_Template, 2, 0, "small", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "label");
            i0.ɵɵtext(24, "Email address");
            i0.ɵɵelement(25, "input", 9);
            i0.ɵɵelementStart(26, "small");
            i0.ɵɵtext(27, "Email changes need account verification support.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(28, "label");
            i0.ɵɵtext(29, "Phone number");
            i0.ɵɵelement(30, "input", 10);
            i0.ɵɵtemplate(31, ProfilePage_small_31_Template, 2, 0, "small", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "button", 11);
            i0.ɵɵtext(33);
            i0.ɵɵelementStart(34, "span");
            i0.ɵɵtext(35, "\u2197");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵtextInterpolate(ctx.initials);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.form.controls.fullName.value || "Your profile");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.form.controls.email.value);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.message() ? 17 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.form.controls.fullName.invalid && ctx.form.controls.fullName.touched);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngIf", ctx.form.controls.phone.invalid && ctx.form.controls.phone.touched);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.saving() || ctx.loading());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1("", ctx.saving() ? "Saving\u2026" : "Save changes", " ");
        } }, dependencies: [CommonModule, i3.NgIf, ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProfilePage, [{
        type: Component,
        args: [{ standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="page-heading"><div><span class="eyebrow">YOUR ACCOUNT</span><h1>Profile.</h1><p>Keep your contact details up to date.</p></div></div><section class="panel profile-panel"><div class="profile-heading"><span class="profile-avatar profile-large">{{initials}}</span><div><h2>{{form.controls.fullName.value||'Your profile'}}</h2><span>{{form.controls.email.value}}</span></div></div>@if(message()){<p [class.inline-error]="failed()" class="profile-message">{{message()}}</p>}<form [formGroup]="form" (ngSubmit)="save()"><label>Full name<input formControlName="fullName" autocomplete="name"><small *ngIf="form.controls.fullName.invalid&&form.controls.fullName.touched">Please enter your name.</small></label><label>Email address<input formControlName="email" type="email" readonly><small>Email changes need account verification support.</small></label><label>Phone number<input formControlName="phone" type="tel" autocomplete="tel"><small *ngIf="form.controls.phone.invalid&&form.controls.phone.touched">Enter a valid phone number.</small></label><button class="button button-primary" [disabled]="saving()||loading()">{{saving()?'Saving…':'Save changes'}} <span>↗</span></button></form></section>` }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.UserService }, { type: i4.AuthService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProfilePage, { className: "ProfilePage", filePath: "src/app/features/workflow-pages.ts", lineNumber: 55 }); })();
export class ForgotPasswordPage {
    constructor(fb, auth) {
        this.fb = fb;
        this.auth = auth;
        this.busy = signal(false, ...(ngDevMode ? [{ debugName: "busy" }] : /* istanbul ignore next */ []));
        this.sent = signal(false, ...(ngDevMode ? [{ debugName: "sent" }] : /* istanbul ignore next */ []));
        this.error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
        this.form = this.fb.group({ email: ['', [Validators.required, Validators.email]] });
    }
    submit() { this.form.markAllAsTouched(); if (this.form.invalid)
        return; this.busy.set(true); this.auth.requestPasswordReset(this.form.controls.email.value ?? '').pipe(finalize(() => this.busy.set(false))).subscribe({ next: () => this.sent.set(true), error: () => this.error.set('The reset request could not be submitted. Please try again later.') }); }
    static { this.ɵfac = function ForgotPasswordPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ForgotPasswordPage)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i4.AuthService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ForgotPasswordPage, selectors: [["ng-component"]], decls: 17, vars: 1, consts: [[1, "reset-shell"], ["routerLink", "/", 1, "brand"], [1, "brand-mark"], [1, "brand-light"], [1, "panel", "reset-panel"], [1, "eyebrow"], [1, "reset-success"], ["routerLink", "/login", 1, "subtle-link"], [3, "ngSubmit", "formGroup"], ["formControlName", "email", "type", "email", "autocomplete", "email", "placeholder", "you@example.com"], [4, "ngIf"], ["class", "inline-error", 4, "ngIf"], [1, "button", "button-primary", 3, "disabled"], [1, "inline-error"]], template: function ForgotPasswordPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main", 0)(1, "a", 1)(2, "span", 2);
            i0.ɵɵtext(3, "Q");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span");
            i0.ɵɵtext(5, "Queue");
            i0.ɵɵelementStart(6, "span", 3);
            i0.ɵɵtext(7, "Less");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(8, "section", 4)(9, "span", 5);
            i0.ɵɵtext(10, "ACCOUNT RECOVERY");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "h1");
            i0.ɵɵtext(12, "Forgot your password?");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(13, ForgotPasswordPage_Conditional_13_Template, 2, 0, "p", 6)(14, ForgotPasswordPage_Conditional_14_Template, 10, 5);
            i0.ɵɵelementStart(15, "a", 7);
            i0.ɵɵtext(16, "Back to sign in");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(13);
            i0.ɵɵconditional(ctx.sent() ? 13 : 14);
        } }, dependencies: [CommonModule, i3.NgIf, ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, RouterLink], styles: [_c0] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ForgotPasswordPage, [{
        type: Component,
        args: [{ standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink], template: `<main class="reset-shell"><a routerLink="/" class="brand"><span class="brand-mark">Q</span><span>Queue<span class="brand-light">Less</span></span></a><section class="panel reset-panel"><span class="eyebrow">ACCOUNT RECOVERY</span><h1>Forgot your password?</h1>@if(sent()){<p class="reset-success">If a matching account exists, the backend will send password reset instructions.</p>}@else{<p>Enter your account email. We'll request a reset link from the connected service.</p><form [formGroup]="form" (ngSubmit)="submit()"><label>Email address<input formControlName="email" type="email" autocomplete="email" placeholder="you@example.com"><small *ngIf="form.controls.email.invalid&&form.controls.email.touched">Enter a valid email.</small></label><p class="inline-error" *ngIf="error()">{{error()}}</p><button class="button button-primary" [disabled]="busy()">{{busy()?'Sending…':'Request reset link'}}</button></form>}<a routerLink="/login" class="subtle-link">Back to sign in</a></section></main>`, styles: [".reset-shell{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;gap:24px;padding:56px 20px;background:#f7f9fc}.reset-shell>.brand{align-self:center}.reset-panel{width:min(100%,460px);padding:32px;background:#fff;border:1px solid #e8edf3;border-radius:14px;box-shadow:0 14px 36px rgba(27,54,91,.08)}.reset-panel h1{margin:8px 0;font:700 26px/1.25 'Manrope',sans-serif;color:#203b60}.reset-panel>p{font-size:13px;line-height:1.6;color:#718096}.reset-panel form{display:grid;grid-template-columns:minmax(0,1fr);gap:14px;margin:22px 0}.reset-panel form label{display:grid;grid-template-columns:minmax(0,1fr);gap:7px;color:#42546b;font-size:12px;font-weight:600}.reset-panel form input{display:block;width:100%;height:44px;border:1px solid #dfe6ef;border-radius:8px;padding:0 12px;background:#fff;color:#263950;font-size:14px}.reset-panel form input:focus{outline:2px solid #d7e6fa;border-color:#7ca5da}.reset-panel form .button{width:100%;min-height:46px}.reset-panel>.subtle-link{display:inline-block;margin-top:4px;color:#5279aa;font-size:12px}.reset-panel form small{font-size:11px;color:#a15862}"] }]
    }], () => [{ type: i1.FormBuilder }, { type: i4.AuthService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ForgotPasswordPage, { className: "ForgotPasswordPage", filePath: "src/app/features/workflow-pages.ts", lineNumber: 64 }); })();
export class ResetPasswordPage {
    constructor(fb, route, auth) {
        this.fb = fb;
        this.route = route;
        this.auth = auth;
        this.busy = signal(false, ...(ngDevMode ? [{ debugName: "busy" }] : /* istanbul ignore next */ []));
        this.done = signal(false, ...(ngDevMode ? [{ debugName: "done" }] : /* istanbul ignore next */ []));
        this.error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
        this.form = this.fb.group({ password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)]], confirm: ['', Validators.required] });
    }
    get mismatch() { return this.form.controls.confirm.touched && this.form.controls.password.value !== this.form.controls.confirm.value; }
    submit() { this.form.markAllAsTouched(); if (this.form.invalid || this.mismatch)
        return; const token = this.route.snapshot.queryParamMap.get('token'); if (!token) {
        this.error.set('This reset link is missing its token. Request a new link.');
        return;
    } this.busy.set(true); this.auth.resetPassword(token, this.form.controls.password.value ?? '').pipe(finalize(() => this.busy.set(false))).subscribe({ next: () => this.done.set(true), error: () => this.error.set('This reset link may have expired. Request a new link and try again.') }); }
    static { this.ɵfac = function ResetPasswordPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ResetPasswordPage)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i5.ActivatedRoute), i0.ɵɵdirectiveInject(i4.AuthService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ResetPasswordPage, selectors: [["ng-component"]], decls: 30, vars: 7, consts: [[1, "reset-shell"], ["routerLink", "/", 1, "brand"], [1, "brand-mark"], [1, "brand-light"], [1, "panel", "reset-panel"], [1, "eyebrow"], [3, "ngSubmit", "formGroup"], ["formControlName", "password", "type", "password", "autocomplete", "new-password"], [4, "ngIf"], ["formControlName", "confirm", "type", "password", "autocomplete", "new-password"], ["class", "inline-error", 4, "ngIf"], ["class", "reset-success", 4, "ngIf"], [1, "button", "button-primary", 3, "disabled"], ["routerLink", "/login", 1, "subtle-link"], [1, "inline-error"], [1, "reset-success"], ["routerLink", "/login"]], template: function ResetPasswordPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main", 0)(1, "a", 1)(2, "span", 2);
            i0.ɵɵtext(3, "Q");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span");
            i0.ɵɵtext(5, "Queue");
            i0.ɵɵelementStart(6, "span", 3);
            i0.ɵɵtext(7, "Less");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(8, "section", 4)(9, "span", 5);
            i0.ɵɵtext(10, "ACCOUNT RECOVERY");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "h1");
            i0.ɵɵtext(12, "Set a new password.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "p");
            i0.ɵɵtext(14, "Choose a strong password for your account.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "form", 6);
            i0.ɵɵlistener("ngSubmit", function ResetPasswordPage_Template_form_ngSubmit_15_listener() { return ctx.submit(); });
            i0.ɵɵelementStart(16, "label");
            i0.ɵɵtext(17, "New password");
            i0.ɵɵelement(18, "input", 7);
            i0.ɵɵtemplate(19, ResetPasswordPage_small_19_Template, 2, 0, "small", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "label");
            i0.ɵɵtext(21, "Confirm password");
            i0.ɵɵelement(22, "input", 9);
            i0.ɵɵtemplate(23, ResetPasswordPage_small_23_Template, 2, 0, "small", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(24, ResetPasswordPage_p_24_Template, 2, 1, "p", 10)(25, ResetPasswordPage_p_25_Template, 5, 0, "p", 11);
            i0.ɵɵelementStart(26, "button", 12);
            i0.ɵɵtext(27);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(28, "a", 13);
            i0.ɵɵtext(29, "Back to sign in");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.form.controls.password.invalid && ctx.form.controls.password.touched);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.mismatch);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.done());
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.busy() || ctx.done());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.busy() ? "Updating\u2026" : "Update password");
        } }, dependencies: [CommonModule, i3.NgIf, ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, RouterLink], styles: [_c0] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResetPasswordPage, [{
        type: Component,
        args: [{ standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink], template: `<main class="reset-shell"><a routerLink="/" class="brand"><span class="brand-mark">Q</span><span>Queue<span class="brand-light">Less</span></span></a><section class="panel reset-panel"><span class="eyebrow">ACCOUNT RECOVERY</span><h1>Set a new password.</h1><p>Choose a strong password for your account.</p><form [formGroup]="form" (ngSubmit)="submit()"><label>New password<input formControlName="password" type="password" autocomplete="new-password"><small *ngIf="form.controls.password.invalid&&form.controls.password.touched">Use at least 8 characters, with upper, lower and a number.</small></label><label>Confirm password<input formControlName="confirm" type="password" autocomplete="new-password"><small *ngIf="mismatch">Passwords must match.</small></label><p class="inline-error" *ngIf="error()">{{error()}}</p><p class="reset-success" *ngIf="done()">Password updated. <a routerLink="/login">Sign in</a>.</p><button class="button button-primary" [disabled]="busy()||done()">{{busy()?'Updating…':'Update password'}}</button></form><a routerLink="/login" class="subtle-link">Back to sign in</a></section></main>`, styles: [".reset-shell{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;gap:24px;padding:56px 20px;background:#f7f9fc}.reset-shell>.brand{align-self:center}.reset-panel{width:min(100%,460px);padding:32px;background:#fff;border:1px solid #e8edf3;border-radius:14px;box-shadow:0 14px 36px rgba(27,54,91,.08)}.reset-panel h1{margin:8px 0;font:700 26px/1.25 'Manrope',sans-serif;color:#203b60}.reset-panel>p{font-size:13px;line-height:1.6;color:#718096}.reset-panel form{display:grid;grid-template-columns:minmax(0,1fr);gap:14px;margin:22px 0}.reset-panel form label{display:grid;grid-template-columns:minmax(0,1fr);gap:7px;color:#42546b;font-size:12px;font-weight:600}.reset-panel form input{display:block;width:100%;height:44px;border:1px solid #dfe6ef;border-radius:8px;padding:0 12px;background:#fff;color:#263950;font-size:14px}.reset-panel form input:focus{outline:2px solid #d7e6fa;border-color:#7ca5da}.reset-panel form .button{width:100%;min-height:46px}.reset-panel>.subtle-link{display:inline-block;margin-top:4px;color:#5279aa;font-size:12px}.reset-panel form small{font-size:11px;color:#a15862}"] }]
    }], () => [{ type: i1.FormBuilder }, { type: i5.ActivatedRoute }, { type: i4.AuthService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ResetPasswordPage, { className: "ResetPasswordPage", filePath: "src/app/features/workflow-pages.ts", lineNumber: 71 }); })();
export class BranchDetailsPage {
    constructor(route, api) {
        this.route = route;
        this.api = api;
        this.branch = signal(null, ...(ngDevMode ? [{ debugName: "branch" }] : /* istanbul ignore next */ []));
        this.error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    }
    ngOnInit() { this.load(); }
    load() { const id = this.route.snapshot.paramMap.get('id'); if (!id) {
        this.error.set('A branch ID was not provided.');
        return;
    } this.api.get(id).subscribe({ next: v => this.branch.set(v), error: () => this.error.set('The selected branch could not be loaded from the branch API.') }); }
    static { this.ɵfac = function BranchDetailsPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BranchDetailsPage)(i0.ɵɵdirectiveInject(i5.ActivatedRoute), i0.ɵɵdirectiveInject(i2.BranchService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BranchDetailsPage, selectors: [["ng-component"]], decls: 13, vars: 3, consts: [[1, "page-heading"], [1, "eyebrow"], ["routerLink", "/branches", 1, "button", "button-secondary"], [1, "empty-panel"], [1, "branch-detail-grid"], [1, "loading-state"], [1, "button", "button-secondary", 3, "click"], [1, "panel"], [1, "branch-wait"], [1, "compact-empty"], [1, "activity-row"], [1, "activity-icon"], [1, "subtle-link", 3, "routerLink", "queryParams"]], template: function BranchDetailsPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div")(2, "span", 1);
            i0.ɵɵtext(3, "BRANCH OVERVIEW");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h1");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "a", 2);
            i0.ɵɵtext(9, "All branches");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(10, BranchDetailsPage_Conditional_10_Template, 9, 1, "div", 3)(11, BranchDetailsPage_Conditional_11_Template, 24, 8, "div", 4)(12, BranchDetailsPage_Conditional_12_Template, 2, 0, "p", 5);
        } if (rf & 2) {
            let tmp_0_0;
            let tmp_1_0;
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(((tmp_0_0 = ctx.branch()) == null ? null : tmp_0_0.name) ?? "Branch details");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(((tmp_1_0 = ctx.branch()) == null ? null : tmp_1_0.address) ?? "Branch details and service availability.");
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.error() ? 10 : ctx.branch() ? 11 : 12);
        } }, dependencies: [CommonModule, RouterLink], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BranchDetailsPage, [{
        type: Component,
        args: [{ standalone: true, imports: [CommonModule, RouterLink], template: `<div class="page-heading"><div><span class="eyebrow">BRANCH OVERVIEW</span><h1>{{branch()?.name??'Branch details'}}</h1><p>{{branch()?.address??'Branch details and service availability.'}}</p></div><a class="button button-secondary" routerLink="/branches">All branches</a></div>@if(error()){<div class="empty-panel"><span>⌑</span><h2>Branch details unavailable</h2><p>{{error()}}</p><button class="button button-secondary" (click)="load()">Try again</button></div>}@else if(branch()){<div class="branch-detail-grid"><section class="panel"><span class="eyebrow">CONTACT & HOURS</span><h2>{{branch()?.organizationName}}</h2><p>{{branch()?.address}}</p><p>{{branch()?.phone??'Contact details not provided'}}</p><p>{{branch()?.openingTime??'Hours unavailable'}} – {{branch()?.closingTime??'—'}}</p><div class="branch-wait"><span>{{branch()?.activeQueueLength??'—'}} waiting</span><span>{{branch()?.estimatedWaitMinutes==null?'Wait estimate unavailable':'~'+branch()?.estimatedWaitMinutes+' min'}}</span></div></section><section class="panel"><span class="eyebrow">AVAILABLE SERVICES</span><h2>Choose a service</h2>@if(branch()?.services?.length){@for(service of branch()?.services;track service.id){<div class="activity-row"><span class="activity-icon">◈</span><span><b>{{service.name}}</b><small>{{service.description??service.averageDurationMinutes+' min average'}}</small></span><a class="subtle-link" [routerLink]="['/customer/join']" [queryParams]="{branchId:branch()?.id,organizationId:branch()?.organizationId??branch()?.organizationName,serviceId:service.id}">Join →</a></div>}}@else{<div class="compact-empty">Services are not listed for this branch.</div>}</section></div>}@else{<p class="loading-state">Loading branch details…</p>}` }]
    }], () => [{ type: i5.ActivatedRoute }, { type: i2.BranchService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BranchDetailsPage, { className: "BranchDetailsPage", filePath: "src/app/features/workflow-pages.ts", lineNumber: 79 }); })();
export class AdminDashboard {
    constructor(branchApi, userApi, analytics) {
        this.branchApi = branchApi;
        this.userApi = userApi;
        this.analytics = analytics;
        this.branches = signal(null, ...(ngDevMode ? [{ debugName: "branches" }] : /* istanbul ignore next */ []));
        this.users = signal(null, ...(ngDevMode ? [{ debugName: "users" }] : /* istanbul ignore next */ []));
        this.summary = signal(null, ...(ngDevMode ? [{ debugName: "summary" }] : /* istanbul ignore next */ []));
        this.error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    }
    ngOnInit() { this.branchApi.search().subscribe({ next: v => this.branches.set(v), error: () => this.error.set('Branch data is not available.') }); this.userApi.list().subscribe({ next: v => this.users.set(v), error: () => this.error.set('User data is not available.') }); this.analytics.summary().subscribe({ next: v => this.summary.set(v), error: () => this.error.set('Analytics summary is not available.') }); }
    metric(key) { return this.summary()?.[key] ?? '—'; }
    static { this.ɵfac = function AdminDashboard_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminDashboard)(i0.ɵɵdirectiveInject(i2.BranchService), i0.ɵɵdirectiveInject(i2.UserService), i0.ɵɵdirectiveInject(i2.AnalyticsService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminDashboard, selectors: [["ng-component"]], decls: 60, vars: 5, consts: [[1, "page-heading"], [1, "eyebrow"], [1, "kpi-grid"], [1, "kpi-card"], [1, "panel", "admin-links"], ["routerLink", "/manage/branches"], ["routerLink", "/manage/staff"], ["routerLink", "/manage/users"], ["routerLink", "/manage/organization"], [4, "ngIf"]], template: function AdminDashboard_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div")(2, "span", 1);
            i0.ɵɵtext(3, "ORGANIZATION ADMIN");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h1");
            i0.ɵɵtext(5, "Organization overview.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵtext(7, "Manage your organization, users, branches and operational setup.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(8, "div", 2)(9, "div", 3)(10, "small");
            i0.ɵɵtext(11, "ACTIVE BRANCHES");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "b");
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "span");
            i0.ɵɵtext(15, "From the branch directory");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "div", 3)(17, "small");
            i0.ɵɵtext(18, "ORGANIZATION USERS");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "b");
            i0.ɵɵtext(20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "span");
            i0.ɵɵtext(22, "From user management");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "div", 3)(24, "small");
            i0.ɵɵtext(25, "CUSTOMERS TODAY");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "b");
            i0.ɵɵtext(27);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "span");
            i0.ɵɵtext(29, "Live operational summary");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(30, "div", 3)(31, "small");
            i0.ɵɵtext(32, "WAITING NOW");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "b");
            i0.ɵɵtext(34);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "span");
            i0.ɵɵtext(36, "Across active queues");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(37, "section", 4)(38, "span", 1);
            i0.ɵɵtext(39, "ADMIN TOOLS");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "h2");
            i0.ɵɵtext(41, "Organization management");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "div")(43, "a", 5);
            i0.ɵɵtext(44, "Branches ");
            i0.ɵɵelementStart(45, "span");
            i0.ɵɵtext(46, "\u2192");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(47, "a", 6);
            i0.ɵɵtext(48, "Staff and assignments ");
            i0.ɵɵelementStart(49, "span");
            i0.ɵɵtext(50, "\u2192");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(51, "a", 7);
            i0.ɵɵtext(52, "Users ");
            i0.ɵɵelementStart(53, "span");
            i0.ɵɵtext(54, "\u2192");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(55, "a", 8);
            i0.ɵɵtext(56, "Organization settings ");
            i0.ɵɵelementStart(57, "span");
            i0.ɵɵtext(58, "\u2192");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(59, AdminDashboard_small_59_Template, 2, 1, "small", 9);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_0_0;
            let tmp_1_0;
            i0.ɵɵadvance(13);
            i0.ɵɵtextInterpolate(((tmp_0_0 = ctx.branches()) == null ? null : tmp_0_0.length) ?? "\u2014");
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(((tmp_1_0 = ctx.users()) == null ? null : tmp_1_0.length) ?? "\u2014");
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.metric("customersToday"));
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.metric("customersWaiting"));
            i0.ɵɵadvance(25);
            i0.ɵɵproperty("ngIf", ctx.error());
        } }, dependencies: [CommonModule, i3.NgIf, RouterLink], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminDashboard, [{
        type: Component,
        args: [{ standalone: true, imports: [CommonModule, RouterLink], template: `<div class="page-heading"><div><span class="eyebrow">ORGANIZATION ADMIN</span><h1>Organization overview.</h1><p>Manage your organization, users, branches and operational setup.</p></div></div><div class="kpi-grid"><div class="kpi-card"><small>ACTIVE BRANCHES</small><b>{{branches()?.length??'—'}}</b><span>From the branch directory</span></div><div class="kpi-card"><small>ORGANIZATION USERS</small><b>{{users()?.length??'—'}}</b><span>From user management</span></div><div class="kpi-card"><small>CUSTOMERS TODAY</small><b>{{metric('customersToday')}}</b><span>Live operational summary</span></div><div class="kpi-card"><small>WAITING NOW</small><b>{{metric('customersWaiting')}}</b><span>Across active queues</span></div></div><section class="panel admin-links"><span class="eyebrow">ADMIN TOOLS</span><h2>Organization management</h2><div><a routerLink="/manage/branches">Branches <span>→</span></a><a routerLink="/manage/staff">Staff and assignments <span>→</span></a><a routerLink="/manage/users">Users <span>→</span></a><a routerLink="/manage/organization">Organization settings <span>→</span></a></div><small *ngIf="error()">{{error()}}</small></section>` }]
    }], () => [{ type: i2.BranchService }, { type: i2.UserService }, { type: i2.AnalyticsService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminDashboard, { className: "AdminDashboard", filePath: "src/app/features/workflow-pages.ts", lineNumber: 87 }); })();
