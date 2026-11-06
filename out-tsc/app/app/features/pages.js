import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, FormRecord, ReactiveFormsModule, Validators } from '@angular/forms';
import { EMPTY, catchError, exhaustMap, finalize, tap, timer } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LucideBell, LucideSearch } from '@lucide/angular';
import { BaseChartDirective } from 'ng2-charts';
import { environment } from '../../environments/environment';
import { ConfirmDialogComponent } from '../shared/components/confirm-dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../core/auth/auth.service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/common";
import * as i5 from "../core/services/api.services";
import * as i6 from "@angular/material/dialog";
function AuthPage_Conditional_42_small_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 30);
    i0.ɵɵtext(1, "Please enter your name.");
    i0.ɵɵelementEnd();
} }
function AuthPage_Conditional_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1, "Full name");
    i0.ɵɵelement(2, "input", 29);
    i0.ɵɵtemplate(3, AuthPage_Conditional_42_small_3_Template, 2, 0, "small", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.invalid("fullName"));
} }
function AuthPage_small_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 30);
    i0.ɵɵtext(1, "Enter a valid email address.");
    i0.ɵɵelementEnd();
} }
function AuthPage_Conditional_47_small_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 30);
    i0.ɵɵtext(1, "Enter a valid phone number.");
    i0.ɵɵelementEnd();
} }
function AuthPage_Conditional_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1, "Phone number");
    i0.ɵɵelement(2, "input", 31);
    i0.ɵɵtemplate(3, AuthPage_Conditional_47_small_3_Template, 2, 0, "small", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.invalid("phone"));
} }
function AuthPage_small_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.isRegister ? "Use 8+ characters with upper, lower and a number." : "Password is required.");
} }
function AuthPage_Conditional_55_small_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 30);
    i0.ɵɵtext(1, "Passwords must match.");
    i0.ɵɵelementEnd();
} }
function AuthPage_Conditional_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵelement(1, "span")(2, "span")(3, "span")(4, "span");
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "label");
    i0.ɵɵtext(8, "Confirm password");
    i0.ɵɵelement(9, "input", 33);
    i0.ɵɵtemplate(10, AuthPage_Conditional_55_small_10_Template, 2, 0, "small", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "label", 34);
    i0.ɵɵelement(12, "input", 35);
    i0.ɵɵelementStart(13, "span");
    i0.ɵɵtext(14, "I agree to the ");
    i0.ɵɵelementStart(15, "a", 36);
    i0.ɵɵtext(16, "Terms of Service");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(17, " and ");
    i0.ɵɵelementStart(18, "a", 37);
    i0.ɵɵtext(19, "Privacy Policy");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(20, ".");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("active", ctx_r0.passwordLength >= 8);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("active", ctx_r0.hasMixedCase);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("active", ctx_r0.hasNumber);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("active", ctx_r0.passwordLength >= 12);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.strengthLabel);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.invalid("confirmPassword"));
} }
function AuthPage_label_56_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 38)(1, "input", 39);
    i0.ɵɵlistener("change", function AuthPage_label_56_Template_input_change_1_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.remember = !ctx_r0.remember); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Remember me");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "a", 40);
    i0.ɵɵtext(5, "Forgot password?");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("checked", ctx_r0.remember);
} }
function AuthPage_p_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 41);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.errorMessage());
} }
function AuthPage_span_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u2197");
    i0.ɵɵelementEnd();
} }
function AuthPage_p_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 42);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "a", 43);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r0.isRegister ? "Already have an account?" : "New to QueueLess?", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", ctx_r0.isRegister ? "/login" : "/register");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.isRegister ? "Sign in" : "Create an account");
} }
function AuthPage_p_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 42);
    i0.ɵɵtext(1, "Need business access? Ask your organization administrator.");
    i0.ɵɵelementEnd();
} }
const _forTrack0 = ($index, $item) => $item.path;
function DashboardLayout_For_14_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 30);
    i0.ɵɵlistener("click", function DashboardLayout_For_14_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.menuOpen = false); });
    i0.ɵɵelementStart(1, "span", 31);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementStart(4, "span", 32);
    i0.ɵɵtext(5, "\u203A");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", item_r3.path);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.glyph);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r3.label);
} }
function DashboardLayout_Conditional_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.notifications.unreadCount());
} }
const _c0 = a0 => ["/track", a0];
const _forTrack1 = ($index, $item) => $item.id;
function CustomerDashboard_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20)(1, "div", 21);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 22)(4, "b");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 23);
    i0.ɵɵelement(9, "i");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "div", 24)(12, "div")(13, "small");
    i0.ɵɵtext(14, "YOUR POSITION");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "b");
    i0.ɵɵtext(16);
    i0.ɵɵelementStart(17, "span");
    i0.ɵɵtext(18, " in line");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "div")(20, "small");
    i0.ɵɵtext(21, "EST. WAIT TIME");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "b");
    i0.ɵɵtext(23);
    i0.ɵɵelementStart(24, "span");
    i0.ɵɵtext(25, "min");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(26, "div", 25)(27, "div");
    i0.ɵɵelement(28, "span");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "small");
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "div", 26)(32, "a", 27);
    i0.ɵɵtext(33, "Track your queue ");
    i0.ɵɵelementStart(34, "span");
    i0.ɵɵtext(35, "\u2192");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "button", 28);
    i0.ɵɵlistener("click", function CustomerDashboard_Conditional_23_Template_button_click_36_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.cancel()); });
    i0.ɵɵtext(37, "Cancel token");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((tmp_1_0 = ctx_r1.token()) == null ? null : tmp_1_0.tokenNumber);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((tmp_2_0 = ctx_r1.token()) == null ? null : tmp_2_0.serviceName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((tmp_3_0 = ctx_r1.token()) == null ? null : tmp_3_0.branchName);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((tmp_4_0 = ctx_r1.token()) == null ? null : tmp_4_0.status);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((tmp_5_0 = ctx_r1.token()) == null ? null : tmp_5_0.position);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1("~ ", (tmp_6_0 = ctx_r1.token()) == null ? null : tmp_6_0.estimatedWaitMinutes, " ");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1("", (tmp_7_0 = ctx_r1.token()) == null ? null : tmp_7_0.peopleAhead, " people ahead");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(9, _c0, (tmp_8_0 = ctx_r1.token()) == null ? null : tmp_8_0.id));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r1.busy());
} }
function CustomerDashboard_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "span", 29);
    i0.ɵɵtext(2, "\u25F7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵtext(4, "No active queue right now");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Find a nearby service and take your place in line from anywhere.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "a", 30);
    i0.ɵɵtext(8, "Find a service ");
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10, "\u2197");
    i0.ɵɵelementEnd()()();
} }
function CustomerDashboard_p_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function CustomerDashboard_Conditional_65_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "span", 33);
    i0.ɵɵtext(2, "\u2713");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span")(4, "b");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "span", 34);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r3.serviceName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", item_r3.branchName, " \u00B7 ", i0.ɵɵpipeBind2(8, 4, item_r3.joinedAt, "MMM d, h:mm a"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r3.status);
} }
function CustomerDashboard_Conditional_65_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, CustomerDashboard_Conditional_65_For_1_Template, 11, 7, "div", 32, _forTrack1);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵrepeater(ctx_r1.history());
} }
function CustomerDashboard_Conditional_66_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "span");
    i0.ɵɵtext(2, "\u25F7");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, "Completed visits will appear here.");
    i0.ɵɵelementEnd();
} }
function CustomerDashboard_Conditional_76_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35)(1, "span", 36)(2, "b");
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
    i0.ɵɵelementStart(14, "span", 34);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(4, 6, item_r4.startsAt, "d"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(7, 9, item_r4.startsAt, "MMM"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r4.serviceName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", item_r4.branchName, " \u00B7 ", i0.ɵɵpipeBind2(13, 12, item_r4.startsAt, "h:mm a"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r4.status);
} }
function CustomerDashboard_Conditional_76_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, CustomerDashboard_Conditional_76_For_1_Template, 16, 15, "div", 35, _forTrack1);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵrepeater(ctx_r1.appointments());
} }
function CustomerDashboard_Conditional_77_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "span");
    i0.ɵɵtext(2, "\u25A3");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, "Upcoming appointments will appear here.");
    i0.ɵɵelementEnd();
} }
const _c1 = () => [];
function DiscoveryPage_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1, "Finding available branches\u2026");
    i0.ɵɵelementEnd();
} }
function DiscoveryPage_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "span");
    i0.ɵɵtext(2, "\u2311");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4, "Branches aren\u2019t available yet.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 11);
    i0.ɵɵlistener("click", function DiscoveryPage_Conditional_32_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.load()); });
    i0.ɵɵtext(8, "Try again");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "small");
    i0.ɵɵtext(10, "Branch discovery needs the Spring Boot ");
    i0.ɵɵelementStart(11, "code");
    i0.ɵɵtext(12, "GET /branches");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13, " endpoint.");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", ctx_r1.error(), " Check that the QueueLess API is running, then try again.");
} }
function DiscoveryPage_Conditional_33_Conditional_1_For_1_For_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(s_r4.name);
} }
function DiscoveryPage_Conditional_33_Conditional_1_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 13)(1, "div", 14)(2, "span", 15);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 16);
    i0.ɵɵelement(5, "i");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 17);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 18)(10, "h2");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "p");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 19);
    i0.ɵɵrepeaterCreate(15, DiscoveryPage_Conditional_33_Conditional_1_For_1_For_16_Template, 2, 1, "span", null, _forTrack1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 20)(18, "span");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "span");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "button", 21);
    i0.ɵɵlistener("click", function DiscoveryPage_Conditional_33_Conditional_1_For_1_Template_button_click_22_listener() { const branch_r5 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.select(branch_r5)); });
    i0.ɵɵtext(23, "View services ");
    i0.ɵɵelementStart(24, "span");
    i0.ɵɵtext(25, "\u2197");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const branch_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.symbol(branch_r5.name));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("closed", !branch_r5.active);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(branch_r5.active ? "Open now" : "Closed");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(branch_r5.organizationName);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(branch_r5.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u2316 ", branch_r5.address);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater((branch_r5.services ?? i0.ɵɵpureFunction0(10, _c1)).slice(0, 2));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("\u25F7 ", branch_r5.estimatedWaitMinutes == null ? "Wait time unavailable" : "~" + branch_r5.estimatedWaitMinutes + " min wait");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(branch_r5.activeQueueLength == null ? "Queue info unavailable" : branch_r5.activeQueueLength + " waiting");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", !branch_r5.active);
} }
function DiscoveryPage_Conditional_33_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, DiscoveryPage_Conditional_33_Conditional_1_For_1_Template, 26, 11, "article", 13, _forTrack1);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵrepeater(ctx_r1.filteredBranches());
} }
function DiscoveryPage_Conditional_33_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 12);
    i0.ɵɵtext(1, "No branches match these filters. Clear a filter to see more results.");
    i0.ɵɵelementEnd();
} }
function DiscoveryPage_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵconditionalCreate(1, DiscoveryPage_Conditional_33_Conditional_1_Template, 2, 0)(2, DiscoveryPage_Conditional_33_Conditional_2_Template, 2, 0, "p", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.filteredBranches().length ? 1 : 2);
} }
function DiscoveryPage_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "span");
    i0.ɵɵtext(2, "\u2315");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4, "Let\u2019s find your next stop.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Search for an organization, branch or service to see what\u2019s nearby.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8, "Branch discovery connects to your QueueLess organization directory.");
    i0.ɵɵelementEnd()();
} }
function JoinQueuePage_For_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const org_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", org_r1.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(org_r1.name);
} }
function JoinQueuePage_For_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const b_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", b_r2.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", b_r2.name, " \u2014 ", b_r2.address);
} }
function JoinQueuePage_For_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", s_r3.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(s_r3.name);
} }
function JoinQueuePage_Conditional_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ((tmp_1_0 = ctx_r3.selectedBranch()) == null ? null : tmp_1_0.activeQueueLength) ?? "\u2014", " customers waiting");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(((tmp_2_0 = ctx_r3.selectedBranch()) == null ? null : tmp_2_0.estimatedWaitMinutes) == null ? "Wait estimate unavailable" : "~" + ((tmp_2_0 = ctx_r3.selectedBranch()) == null ? null : tmp_2_0.estimatedWaitMinutes) + " min");
} }
function JoinQueuePage_Conditional_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r3.error());
} }
function TrackingPage_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "span", 5);
    i0.ɵɵtext(2, "YOUR QUEUE TOKEN");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 6);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 7);
    i0.ɵɵelement(6, "i");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 8);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 9)(11, "div", 10)(12, "i");
    i0.ɵɵtext(13, "\u2713");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span");
    i0.ɵɵtext(15, "Joined queue");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "small");
    i0.ɵɵtext(17);
    i0.ɵɵpipe(18, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 11)(20, "i");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "span");
    i0.ɵɵtext(23, "Waiting your turn");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "small");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "div", 12)(27, "i");
    i0.ɵɵtext(28, "3");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "span");
    i0.ɵɵtext(30, "Service begins");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(31, "div", 13)(32, "div")(33, "small");
    i0.ɵɵtext(34, "ESTIMATED WAIT");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "b");
    i0.ɵɵtext(36);
    i0.ɵɵelementStart(37, "span");
    i0.ɵɵtext(38, "min");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(39, "div")(40, "small");
    i0.ɵɵtext(41, "CURRENTLY SERVING");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "b");
    i0.ɵɵtext(43);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(44, "div", 14)(45, "span");
    i0.ɵɵtext(46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "small");
    i0.ɵɵtext(48);
    i0.ɵɵpipe(49, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(50, "div", 15)(51, "button", 16);
    i0.ɵɵlistener("click", function TrackingPage_Conditional_3_Template_button_click_51_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.cancel()); });
    i0.ɵɵtext(52, "Cancel token");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "small");
    i0.ɵɵtext(54);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_12_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate((tmp_1_0 = ctx_r1.token()) == null ? null : tmp_1_0.tokenNumber);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((tmp_2_0 = ctx_r1.token()) == null ? null : tmp_2_0.status);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("offline", ctx_r1.connection() === "offline");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.connection() === "live" ? "Live updates via polling" : ctx_r1.connection() === "offline" ? "Reconnecting automatically" : "Connecting\u2026");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(18, 15, (tmp_5_0 = ctx_r1.token()) == null ? null : tmp_5_0.joinedAt, "h:mm a"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate((tmp_6_0 = ctx_r1.token()) == null ? null : tmp_6_0.position);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", (tmp_7_0 = ctx_r1.token()) == null ? null : tmp_7_0.peopleAhead, " people ahead");
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate1("~", (tmp_8_0 = ctx_r1.token()) == null ? null : tmp_8_0.estimatedWaitMinutes, " ");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(((tmp_9_0 = ctx_r1.token()) == null ? null : tmp_9_0.currentServingToken) ?? "\u2014");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", (tmp_10_0 = ctx_r1.token()) == null ? null : tmp_10_0.serviceName, " \u00B7 ", (tmp_10_0 = ctx_r1.token()) == null ? null : tmp_10_0.branchName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Last updated ", i0.ɵɵpipeBind2(49, 18, ctx_r1.updated(), "h:mm:ss a"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r1.cancelBusy() || ((tmp_12_0 = ctx_r1.token()) == null ? null : tmp_12_0.status) === "CALLED" || ((tmp_12_0 = ctx_r1.token()) == null ? null : tmp_12_0.status) === "IN_SERVICE" || ((tmp_12_0 = ctx_r1.token()) == null ? null : tmp_12_0.status) === "COMPLETED" || ((tmp_12_0 = ctx_r1.token()) == null ? null : tmp_12_0.status) === "CANCELLED" || ((tmp_12_0 = ctx_r1.token()) == null ? null : tmp_12_0.status) === "NO_SHOW");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function TrackingPage_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "span", 17);
    i0.ɵɵtext(2, "\u2311");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵtext(4, "Queue tracking is unavailable");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 18);
    i0.ɵɵlistener("click", function TrackingPage_Conditional_4_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.load()); });
    i0.ɵɵtext(8, "Retry on next check");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function TrackingPage_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtext(1, "Loading your queue\u2026");
    i0.ɵɵelementEnd();
} }
function StaffDashboard_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "p", 3);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.notice());
} }
function StaffDashboard_Conditional_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 9)(1, "span", 14);
    i0.ɵɵtext(2, "\u2311");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(3, "h3");
    i0.ɵɵtext(4, "Queue controls need a backend connection");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(7, "small");
    i0.ɵɵtext(8, "Requires queue management APIs and an assigned staff account.");
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function StaffDashboard_Conditional_56_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "div", 15)(1, "span", 16);
    i0.ɵɵtext(2);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(3, "span")(4, "b");
    i0.ɵɵtext(5);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(8, "div", 17)(9, "button", 12);
    i0.ɵɵdomListener("click", function StaffDashboard_Conditional_56_For_1_Template_button_click_9_listener() { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.action("recall", item_r3.id)); });
    i0.ɵɵtext(10, "Recall");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(11, "button", 12);
    i0.ɵɵdomListener("click", function StaffDashboard_Conditional_56_For_1_Template_button_click_11_listener() { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.action("start", item_r3.id)); });
    i0.ɵɵtext(12, "Start service");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(13, "button", 12);
    i0.ɵɵdomListener("click", function StaffDashboard_Conditional_56_For_1_Template_button_click_13_listener() { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.action("no-show", item_r3.id)); });
    i0.ɵɵtext(14, "No-show");
    i0.ɵɵdomElementEnd()()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.tokenNumber);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r3.customerName ?? "Customer");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", item_r3.serviceName, " \u00B7 ", item_r3.peopleAhead, " people ahead \u00B7 ~", item_r3.estimatedWaitMinutes, " min");
    i0.ɵɵadvance(2);
    i0.ɵɵdomProperty("disabled", ctx_r0.busy() || item_r3.status !== "CALLED");
    i0.ɵɵadvance(2);
    i0.ɵɵdomProperty("disabled", ctx_r0.busy() || item_r3.status !== "CALLED");
    i0.ɵɵadvance(2);
    i0.ɵɵdomProperty("disabled", ctx_r0.busy() || item_r3.status !== "WAITING" && item_r3.status !== "CALLED");
} }
function StaffDashboard_Conditional_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, StaffDashboard_Conditional_56_For_1_Template, 15, 8, "div", 15, _forTrack1);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵrepeater(ctx_r0.queue());
} }
function StaffDashboard_Conditional_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 10);
    i0.ɵɵtext(1, "No waiting customers are available from the service API.");
    i0.ɵɵdomElementEnd();
} }
function ManagerDashboard_Conditional_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "canvas", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("data", ctx_r0.barData((tmp_1_0 = ctx_r0.charts()) == null ? null : tmp_1_0.servedPerHour))("options", ctx_r0.chartOptions);
} }
function ManagerDashboard_Conditional_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1, "No hourly analytics returned by the backend.");
    i0.ɵɵelementEnd();
} }
function ManagerDashboard_Conditional_58_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "canvas", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("data", ctx_r0.barData((tmp_1_0 = ctx_r0.charts()) == null ? null : tmp_1_0.averageWaitByService))("options", ctx_r0.chartOptions);
} }
function ManagerDashboard_Conditional_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1, "No service wait data is available.");
    i0.ɵɵelementEnd();
} }
function ManagerDashboard_Conditional_65_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "canvas", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("data", ctx_r0.barData((tmp_1_0 = ctx_r0.charts()) == null ? null : tmp_1_0.dailyVolume))("options", ctx_r0.chartOptions);
} }
function ManagerDashboard_Conditional_66_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1, "No daily queue volume is available.");
    i0.ɵɵelementEnd();
} }
function ManagerDashboard_Conditional_72_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "canvas", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("data", ctx_r0.barData((tmp_1_0 = ctx_r0.charts()) == null ? null : tmp_1_0.counterUtilization))("options", ctx_r0.chartOptions);
} }
function ManagerDashboard_Conditional_73_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1, "No counter utilization data is available.");
    i0.ɵɵelementEnd();
} }
function ManagerDashboard_Conditional_79_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "canvas", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("data", ctx_r0.doughnutData((tmp_1_0 = ctx_r0.charts()) == null ? null : tmp_1_0.queueStatuses))("options", ctx_r0.doughnutOptions);
} }
function ManagerDashboard_Conditional_80_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1, "No queue status distribution is available.");
    i0.ɵɵelementEnd();
} }
function ManagerDashboard_p_106_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r0.error(), " Analytics are shown only when provided by the backend.");
} }
const _c2 = /s$/;
const _forTrack2 = ($index, $item) => $item.name;
const _forTrack3 = ($index, $item) => $item["id"];
function ManagementPage_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("inline-error", ctx_r0.failed());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.message());
} }
function ManagementPage_Conditional_19_For_11_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 21);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2, "Active");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("formControlName", field_r3.name);
} }
function ManagementPage_Conditional_19_For_11_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 20);
} if (rf & 2) {
    const field_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("type", field_r3.type)("formControlName", field_r3.name)("placeholder", field_r3.placeholder ?? "")("min", field_r3.type === "number" ? 1 : null);
} }
function ManagementPage_Conditional_19_For_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1);
    i0.ɵɵconditionalCreate(2, ManagementPage_Conditional_19_For_11_Conditional_2_Template, 3, 1)(3, ManagementPage_Conditional_19_For_11_Conditional_3_Template, 1, 4, "input", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r3 = ctx.$implicit;
    i0.ɵɵclassProp("checkbox-label", field_r3.type === "checkbox");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(field_r3.label);
    i0.ɵɵadvance();
    i0.ɵɵconditional(field_r3.type === "checkbox" ? 2 : 3);
} }
function ManagementPage_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 7)(1, "div", 9)(2, "div")(3, "span", 1);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h2");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 14);
    i0.ɵɵlistener("click", function ManagementPage_Conditional_19_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.editing.set(false)); });
    i0.ɵɵtext(8, "Close");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "form", 15);
    i0.ɵɵlistener("ngSubmit", function ManagementPage_Conditional_19_Template_form_ngSubmit_9_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.save()); });
    i0.ɵɵrepeaterCreate(10, ManagementPage_Conditional_19_For_11_Template, 4, 4, "label", 16, _forTrack2);
    i0.ɵɵelementStart(12, "div", 17)(13, "button", 18);
    i0.ɵɵlistener("click", function ManagementPage_Conditional_19_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.editing.set(false)); });
    i0.ɵɵtext(14, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 19);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2("", ctx_r0.editingId() ? "EDIT" : "NEW", " ", ctx_r0.title.toUpperCase());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r0.editingId() ? "Update" : "Create", " ", ctx_r0.title.toLowerCase().replace(_c2, ""));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("formGroup", ctx_r0.editForm);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.fields);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("disabled", ctx_r0.saving());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.saving() ? "Saving\u2026" : "Save changes");
} }
function ManagementPage_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Loading ", ctx_r0.title.toLowerCase(), "\u2026");
} }
function ManagementPage_Conditional_30_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22)(1, "span", 23);
    i0.ɵɵtext(2, "\u25C8");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span")(4, "b");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "span", 24);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 10);
    i0.ɵɵlistener("click", function ManagementPage_Conditional_30_For_1_Template_button_click_10_listener() { const item_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.edit(item_r5)); });
    i0.ɵɵtext(11, "Edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 25);
    i0.ɵɵlistener("click", function ManagementPage_Conditional_30_For_1_Template_button_click_12_listener() { const item_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.toggle(item_r5)); });
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r5["name"] ?? item_r5["fullName"] ?? item_r5["tokenNumber"]);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r5["address"] ?? item_r5["email"] ?? item_r5["status"]);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r5["active"] === false ? "Inactive" : "Active");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r5["active"] === false ? "Activate" : "Deactivate");
} }
function ManagementPage_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, ManagementPage_Conditional_30_For_1_Template, 14, 4, "div", 22, _forTrack3);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵrepeater(ctx_r0.items());
} }
function ManagementPage_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "span", 26);
    i0.ɵɵtext(2, "\u2315");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Create the first entry or check the backend connection.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("No ", ctx_r0.title.toLowerCase(), " to show");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Integration endpoint: ", ctx_r0.endpoint);
} }
export class LandingPage {
    scrollToSection(event, sectionId) {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (!section)
            return;
        history.replaceState(null, '', `#${sectionId}`);
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    static { this.ɵfac = function LandingPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LandingPage)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LandingPage, selectors: [["ng-component"]], decls: 311, vars: 0, consts: [[1, "site-header"], ["routerLink", "/", 1, "brand"], [1, "brand-mark"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "M4 7h10a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h11M4 7l3-3M4 7l3 3", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "brand-light"], ["aria-label", "Main navigation", 1, "desktop-nav"], ["href", "#how", 3, "click"], ["href", "#features", 3, "click"], ["routerLink", "/business"], [1, "header-actions"], ["routerLink", "/login", 1, "login-link"], ["routerLink", "/register", 1, "button", "button-primary", "button-small"], [1, "hero"], [1, "hero-copy"], [1, "eyebrow"], [1, "eyebrow-dot"], [1, "hero-lede"], [1, "hero-ctas"], ["routerLink", "/register", 1, "button", "button-primary"], ["href", "#how", "aria-label", "See how QueueLess works", 1, "text-cta", 3, "click"], ["aria-hidden", "true", 1, "play-icon"], [1, "social-proof"], [1, "avatar-stack"], ["aria-label", "QueueLess digital queue preview", 1, "hero-art"], [1, "orbit", "orbit-one"], [1, "orbit", "orbit-two"], [1, "art-orb"], [1, "orb-line"], [1, "orb-line", "orb-line-two"], [1, "orb-center"], [1, "floating-card", "token-preview"], [1, "mini-label"], [1, "live-pill"], [1, "token-main"], [1, "token-check"], [1, "token-divider"], [1, "token-meta"], [1, "progress-track"], [1, "now-serving"], [1, "pulse"], [1, "arrow-soft"], [1, "floating-card", "wait-chip"], [1, "wait-icon"], [1, "art-caption"], [1, "trust-row"], [1, "trust-types"], ["id", "how", 1, "section", "how-section"], [1, "section-heading"], [1, "steps-grid"], [1, "step-card"], [1, "step-number"], [1, "step-icon", "blue"], [1, "step-visual", "search-visual"], [1, "step-icon", "violet"], [1, "step-visual", "ticket-visual"], [1, "step-icon", "green"], [1, "step-visual", "timing-visual"], [1, "timing-bars"], ["id", "features", 1, "feature-band"], [1, "feature-copy"], [1, "eyebrow", "eyebrow-light"], ["routerLink", "/register", 1, "button", "button-white"], [1, "feature-list"], [1, "feature-check"], [1, "feature-arrow"], [1, "feature-decoration"], ["id", "businesses", 1, "section", "business-section"], [1, "business-grid"], [1, "business-card"], [1, "business-icon", "health"], [1, "business-arrow"], [1, "business-icon", "gov"], [1, "business-icon", "bank"], [1, "business-icon", "salon"], [1, "bottom-cta"], [1, "cta-circles"], [1, "site-footer"]], template: function LandingPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "a", 1)(2, "span", 2);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(3, "svg", 3);
            i0.ɵɵelement(4, "path", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6, "Queue");
            i0.ɵɵelementStart(7, "span", 5);
            i0.ɵɵtext(8, "Less");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(9, "nav", 6)(10, "a", 7);
            i0.ɵɵlistener("click", function LandingPage_Template_a_click_10_listener($event) { return ctx.scrollToSection($event, "how"); });
            i0.ɵɵtext(11, "How it works");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "a", 8);
            i0.ɵɵlistener("click", function LandingPage_Template_a_click_12_listener($event) { return ctx.scrollToSection($event, "features"); });
            i0.ɵɵtext(13, "Features");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "a", 9);
            i0.ɵɵtext(15, "For businesses");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "div", 10)(17, "a", 11);
            i0.ɵɵtext(18, "Log in");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "a", 12);
            i0.ɵɵtext(20, "Get started ");
            i0.ɵɵelementStart(21, "span");
            i0.ɵɵtext(22, "\u2197");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(23, "main")(24, "section", 13)(25, "div", 14)(26, "div", 15);
            i0.ɵɵelement(27, "span", 16);
            i0.ɵɵtext(28, " A little more time for you");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "h1");
            i0.ɵɵtext(30, "Skip the Wait.");
            i0.ɵɵelement(31, "br");
            i0.ɵɵelementStart(32, "span");
            i0.ɵɵtext(33, "Manage Your Time.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(34, "p", 17);
            i0.ɵɵtext(35, "Join queues remotely, track your position in real time, and spend less time waiting. Your day stays yours.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "div", 18)(37, "a", 19);
            i0.ɵɵtext(38, "Get started for free ");
            i0.ɵɵelementStart(39, "span");
            i0.ɵɵtext(40, "\u2197");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(41, "a", 20);
            i0.ɵɵlistener("click", function LandingPage_Template_a_click_41_listener($event) { return ctx.scrollToSection($event, "how"); });
            i0.ɵɵelementStart(42, "span", 21);
            i0.ɵɵtext(43, "\u25B6");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(44, " See how it works");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(45, "div", 22)(46, "div", 23)(47, "span");
            i0.ɵɵtext(48, "J");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(49, "span");
            i0.ɵɵtext(50, "M");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "span");
            i0.ɵɵtext(52, "A");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "span");
            i0.ɵɵtext(54, "+");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(55, "div")(56, "strong");
            i0.ɵɵtext(57, "A better way to wait");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "small");
            i0.ɵɵtext(59, "Built around your time");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(60, "div", 24);
            i0.ɵɵelement(61, "div", 25)(62, "div", 26);
            i0.ɵɵelementStart(63, "div", 27);
            i0.ɵɵelement(64, "span", 28)(65, "span", 29);
            i0.ɵɵelementStart(66, "div", 30)(67, "span", 2);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(68, "svg", 3);
            i0.ɵɵelement(69, "path", 4);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(70, "div", 31)(71, "div", 32);
            i0.ɵɵtext(72, "YOUR QUEUE TOKEN ");
            i0.ɵɵelementStart(73, "span", 33);
            i0.ɵɵelement(74, "i");
            i0.ɵɵtext(75, " LIVE");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(76, "div", 34)(77, "strong");
            i0.ɵɵtext(78, " A");
            i0.ɵɵelementStart(79, "span");
            i0.ɵɵtext(80, "12");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(81, "span", 35);
            i0.ɵɵtext(82, "\u2713");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(83, "div", 36);
            i0.ɵɵelementStart(84, "div", 37)(85, "span")(86, "small");
            i0.ɵɵtext(87, "YOUR POSITION");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(88, "b");
            i0.ɵɵtext(89, "3rd in line");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(90, "span")(91, "small");
            i0.ɵɵtext(92, "EST. WAIT");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(93, "b");
            i0.ɵɵtext(94, "~ 8 min");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(95, "div", 38);
            i0.ɵɵelement(96, "span");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(97, "div", 39);
            i0.ɵɵelement(98, "span", 40);
            i0.ɵɵtext(99, " Now serving ");
            i0.ɵɵelementStart(100, "b");
            i0.ɵɵtext(101, "A09");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(102, "span", 41);
            i0.ɵɵtext(103, "\u2192");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(104, "div", 42)(105, "span", 43);
            i0.ɵɵtext(106, "\u25F7");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(107, "span")(108, "small");
            i0.ɵɵtext(109, "Time saved today");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(110, "b");
            i0.ɵɵtext(111, "About 25 min");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(112, "div", 44);
            i0.ɵɵtext(113, "Your day, still yours.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(114, "section", 45)(115, "span");
            i0.ɵɵtext(116, "MADE FOR EVERYDAY SERVICES");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(117, "div", 46)(118, "span");
            i0.ɵɵtext(119, "\u25C8 Healthcare");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(120, "span");
            i0.ɵɵtext(121, "\u25A4 Government");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(122, "span");
            i0.ɵɵtext(123, "\u2302 Finance");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(124, "span");
            i0.ɵɵtext(125, "\u2733 Personal care");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(126, "section", 47)(127, "div", 48)(128, "div")(129, "span", 15);
            i0.ɵɵtext(130, "SIMPLE BY DESIGN");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(131, "h2");
            i0.ɵɵtext(132, "Your time belongs to you.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(133, "p");
            i0.ɵɵtext(134, "Three small steps. One much better way to spend your day.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(135, "div", 49)(136, "article", 50)(137, "div", 51);
            i0.ɵɵtext(138, "01 ");
            i0.ɵɵelementStart(139, "span");
            i0.ɵɵtext(140, "\u2197");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(141, "div", 52);
            i0.ɵɵtext(142, "\u2315");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(143, "h3");
            i0.ɵɵtext(144, "Find your service");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(145, "p");
            i0.ɵɵtext(146, "Browse nearby branches and see what's available before you head out.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(147, "div", 53)(148, "span");
            i0.ɵɵtext(149, "\u2315");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(150, " Find a clinic near me ");
            i0.ɵɵelementStart(151, "b");
            i0.ɵɵtext(152, "\u2022\u2022\u2022");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(153, "article", 50)(154, "div", 51);
            i0.ɵɵtext(155, "02 ");
            i0.ɵɵelementStart(156, "span");
            i0.ɵɵtext(157, "\u2197");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(158, "div", 54);
            i0.ɵɵtext(159, "\u25A3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(160, "h3");
            i0.ɵɵtext(161, "Take your place");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(162, "p");
            i0.ɵɵtext(163, "Join the queue from your phone. Your digital token is ready in seconds.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(164, "div", 55)(165, "span");
            i0.ɵɵtext(166, "A12");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(167, "small");
            i0.ɵɵtext(168, "YOU'RE IN LINE");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(169, "i");
            i0.ɵɵtext(170, "\u2713");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(171, "article", 50)(172, "div", 51);
            i0.ɵɵtext(173, "03 ");
            i0.ɵɵelementStart(174, "span");
            i0.ɵɵtext(175, "\u2197");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(176, "div", 56);
            i0.ɵɵtext(177, "\u25F7");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(178, "h3");
            i0.ɵɵtext(179, "Arrive at the right time");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(180, "p");
            i0.ɵɵtext(181, "Keep an eye on your spot and get a heads-up when it's almost your turn.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(182, "div", 57)(183, "div", 58);
            i0.ɵɵelement(184, "i")(185, "i")(186, "i")(187, "i")(188, "i");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(189, "span");
            i0.ɵɵtext(190, "Almost your turn");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(191, "b");
            i0.ɵɵtext(192, "2 people ahead");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(193, "section", 59)(194, "div", 60)(195, "span", 61);
            i0.ɵɵtext(196, "A CALMER KIND OF QUEUE");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(197, "h2");
            i0.ɵɵtext(198, "Waiting should fit");
            i0.ɵɵelement(199, "br");
            i0.ɵɵtext(200, "into your day.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(201, "p");
            i0.ɵɵtext(202, "QueueLess keeps your place in line close at hand, so you can spend less time watching a counter and more time doing what matters.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(203, "a", 62);
            i0.ɵɵtext(204, "Make time for more ");
            i0.ɵɵelementStart(205, "span");
            i0.ɵɵtext(206, "\u2197");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(207, "div", 63)(208, "div")(209, "span", 64);
            i0.ɵɵtext(210, "\u2713");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(211, "span")(212, "b");
            i0.ɵɵtext(213, "Know where you stand");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(214, "small");
            i0.ɵɵtext(215, "See your live position and a clear wait estimate.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(216, "span", 65);
            i0.ɵɵtext(217, "\u2197");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(218, "div")(219, "span", 64);
            i0.ɵɵtext(220, "\u2713");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(221, "span")(222, "b");
            i0.ɵɵtext(223, "Plan around your turn");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(224, "small");
            i0.ɵɵtext(225, "Get a timely nudge when you're getting close.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(226, "span", 65);
            i0.ɵɵtext(227, "\u2197");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(228, "div")(229, "span", 64);
            i0.ɵɵtext(230, "\u2713");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(231, "span")(232, "b");
            i0.ɵɵtext(233, "One place for your visits");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(234, "small");
            i0.ɵɵtext(235, "Queue tokens and appointments, all together.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(236, "span", 65);
            i0.ɵɵtext(237, "\u2197");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(238, "div", 66);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(239, "section", 67)(240, "div", 48)(241, "div")(242, "span", 15);
            i0.ɵɵtext(243, "ONE PLATFORM, MANY PLACES");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(244, "h2");
            i0.ɵɵtext(245, "A better visit starts here.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(246, "p");
            i0.ɵɵtext(247, "From a quick appointment to an essential service, QueueLess helps every visit run a little smoother.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(248, "div", 68)(249, "div", 69)(250, "span", 70);
            i0.ɵɵtext(251, "\u271A");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(252, "b");
            i0.ɵɵtext(253, "Healthcare");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(254, "small");
            i0.ɵɵtext(255, "Clinics, hospitals & labs");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(256, "span", 71);
            i0.ɵɵtext(257, "\u2197");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(258, "div", 69)(259, "span", 72);
            i0.ɵɵtext(260, "\u25A4");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(261, "b");
            i0.ɵɵtext(262, "Public services");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(263, "small");
            i0.ɵɵtext(264, "Government & civic offices");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(265, "span", 71);
            i0.ɵɵtext(266, "\u2197");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(267, "div", 69)(268, "span", 73);
            i0.ɵɵtext(269, "\u2302");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(270, "b");
            i0.ɵɵtext(271, "Financial services");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(272, "small");
            i0.ɵɵtext(273, "Banks & service centers");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(274, "span", 71);
            i0.ɵɵtext(275, "\u2197");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(276, "div", 69)(277, "span", 74);
            i0.ɵɵtext(278, "\u2733");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(279, "b");
            i0.ɵɵtext(280, "Personal care");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(281, "small");
            i0.ɵɵtext(282, "Salons & wellness");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(283, "span", 71);
            i0.ɵɵtext(284, "\u2197");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(285, "section", 75)(286, "div")(287, "span", 61);
            i0.ɵɵtext(288, "YOUR NEXT VISIT, MADE EASIER");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(289, "h2");
            i0.ɵɵtext(290, "Get back to your day.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(291, "p");
            i0.ɵɵtext(292, "Join your first queue in just a few taps.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(293, "a", 62);
            i0.ɵɵtext(294, "Get started ");
            i0.ɵɵelementStart(295, "span");
            i0.ɵɵtext(296, "\u2197");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(297, "div", 76);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(298, "footer", 77)(299, "a", 1)(300, "span", 2);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(301, "svg", 3);
            i0.ɵɵelement(302, "path", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(303, "span");
            i0.ɵɵtext(304, "Queue");
            i0.ɵɵelementStart(305, "span", 5);
            i0.ɵɵtext(306, "Less");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(307, "span");
            i0.ɵɵtext(308, "Make time for what matters.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(309, "small");
            i0.ɵɵtext(310, "Ongoing development by Dhaneesh \u00B7 \u00A9 2026 QueueLess");
            i0.ɵɵelementEnd()();
        } }, dependencies: [CommonModule, RouterLink], styles: [".hero-art[_ngcontent-%COMP%]{min-height:520px}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LandingPage, [{
        type: Component,
        args: [{ standalone: true, imports: [CommonModule, RouterLink], template: `
<header class="site-header"><a class="brand" routerLink="/"><span class="brand-mark"><svg viewBox="0 0 24 24" fill="none"><path d="M4 7h10a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h11M4 7l3-3M4 7l3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>Queue<span class="brand-light">Less</span></span></a><nav class="desktop-nav" aria-label="Main navigation"><a href="#how" (click)="scrollToSection($event, 'how')">How it works</a><a href="#features" (click)="scrollToSection($event, 'features')">Features</a><a routerLink="/business">For businesses</a></nav><div class="header-actions"><a class="login-link" routerLink="/login">Log in</a><a class="button button-primary button-small" routerLink="/register">Get started <span>↗</span></a></div></header>
<main><section class="hero"><div class="hero-copy"><div class="eyebrow"><span class="eyebrow-dot"></span> A little more time for you</div><h1>Skip the Wait.<br><span>Manage Your Time.</span></h1><p class="hero-lede">Join queues remotely, track your position in real time, and spend less time waiting. Your day stays yours.</p><div class="hero-ctas"><a class="button button-primary" routerLink="/register">Get started for free <span>↗</span></a><a class="text-cta" href="#how" (click)="scrollToSection($event, 'how')" aria-label="See how QueueLess works"><span class="play-icon" aria-hidden="true">▶</span> See how it works</a></div><div class="social-proof"><div class="avatar-stack"><span>J</span><span>M</span><span>A</span><span>+</span></div><div><strong>A better way to wait</strong><small>Built around your time</small></div></div></div>
<div class="hero-art" aria-label="QueueLess digital queue preview"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="art-orb"><span class="orb-line"></span><span class="orb-line orb-line-two"></span><div class="orb-center"><span class="brand-mark"><svg viewBox="0 0 24 24" fill="none"><path d="M4 7h10a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h11M4 7l3-3M4 7l3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div></div><div class="floating-card token-preview"><div class="mini-label">YOUR QUEUE TOKEN <span class="live-pill"><i></i> LIVE</span></div><div class="token-main"><strong> A<span>12</span></strong><span class="token-check">✓</span></div><div class="token-divider"></div><div class="token-meta"><span><small>YOUR POSITION</small><b>3rd in line</b></span><span><small>EST. WAIT</small><b>~ 8 min</b></span></div><div class="progress-track"><span></span></div><div class="now-serving"><span class="pulse"></span> Now serving <b>A09</b><span class="arrow-soft">→</span></div></div><div class="floating-card wait-chip"><span class="wait-icon">◷</span><span><small>Time saved today</small><b>About 25 min</b></span></div><div class="art-caption">Your day, still yours.</div></div></section>
<section class="trust-row"><span>MADE FOR EVERYDAY SERVICES</span><div class="trust-types"><span>◈ Healthcare</span><span>▤ Government</span><span>⌂ Finance</span><span>✳ Personal care</span></div></section>
<section class="section how-section" id="how"><div class="section-heading"><div><span class="eyebrow">SIMPLE BY DESIGN</span><h2>Your time belongs to you.</h2></div><p>Three small steps. One much better way to spend your day.</p></div><div class="steps-grid"><article class="step-card"><div class="step-number">01 <span>↗</span></div><div class="step-icon blue">⌕</div><h3>Find your service</h3><p>Browse nearby branches and see what's available before you head out.</p><div class="step-visual search-visual"><span>⌕</span> Find a clinic near me <b>•••</b></div></article><article class="step-card"><div class="step-number">02 <span>↗</span></div><div class="step-icon violet">▣</div><h3>Take your place</h3><p>Join the queue from your phone. Your digital token is ready in seconds.</p><div class="step-visual ticket-visual"><span>A12</span><small>YOU'RE IN LINE</small><i>✓</i></div></article><article class="step-card"><div class="step-number">03 <span>↗</span></div><div class="step-icon green">◷</div><h3>Arrive at the right time</h3><p>Keep an eye on your spot and get a heads-up when it's almost your turn.</p><div class="step-visual timing-visual"><div class="timing-bars"><i></i><i></i><i></i><i></i><i></i></div><span>Almost your turn</span><b>2 people ahead</b></div></article></div></section>
<section class="feature-band" id="features"><div class="feature-copy"><span class="eyebrow eyebrow-light">A CALMER KIND OF QUEUE</span><h2>Waiting should fit<br>into your day.</h2><p>QueueLess keeps your place in line close at hand, so you can spend less time watching a counter and more time doing what matters.</p><a class="button button-white" routerLink="/register">Make time for more <span>↗</span></a></div><div class="feature-list"><div><span class="feature-check">✓</span><span><b>Know where you stand</b><small>See your live position and a clear wait estimate.</small></span><span class="feature-arrow">↗</span></div><div><span class="feature-check">✓</span><span><b>Plan around your turn</b><small>Get a timely nudge when you're getting close.</small></span><span class="feature-arrow">↗</span></div><div><span class="feature-check">✓</span><span><b>One place for your visits</b><small>Queue tokens and appointments, all together.</small></span><span class="feature-arrow">↗</span></div></div><div class="feature-decoration"></div></section>
<section class="section business-section" id="businesses"><div class="section-heading"><div><span class="eyebrow">ONE PLATFORM, MANY PLACES</span><h2>A better visit starts here.</h2></div><p>From a quick appointment to an essential service, QueueLess helps every visit run a little smoother.</p></div><div class="business-grid"><div class="business-card"><span class="business-icon health">✚</span><b>Healthcare</b><small>Clinics, hospitals & labs</small><span class="business-arrow">↗</span></div><div class="business-card"><span class="business-icon gov">▤</span><b>Public services</b><small>Government & civic offices</small><span class="business-arrow">↗</span></div><div class="business-card"><span class="business-icon bank">⌂</span><b>Financial services</b><small>Banks & service centers</small><span class="business-arrow">↗</span></div><div class="business-card"><span class="business-icon salon">✳</span><b>Personal care</b><small>Salons & wellness</small><span class="business-arrow">↗</span></div></div></section>
<section class="bottom-cta"><div><span class="eyebrow eyebrow-light">YOUR NEXT VISIT, MADE EASIER</span><h2>Get back to your day.</h2><p>Join your first queue in just a few taps.</p></div><a routerLink="/register" class="button button-white">Get started <span>↗</span></a><div class="cta-circles"></div></section></main><footer class="site-footer"><a class="brand" routerLink="/"><span class="brand-mark"><svg viewBox="0 0 24 24" fill="none"><path d="M4 7h10a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h11M4 7l3-3M4 7l3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>Queue<span class="brand-light">Less</span></span></a><span>Make time for what matters.</span><small>Ongoing development by Dhaneesh · © 2026 QueueLess</small></footer>
`, styles: [".hero-art{min-height:520px}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LandingPage, { className: "LandingPage", filePath: "src/app/features/pages.ts", lineNumber: 27 }); })();
export class AuthPage {
    constructor(fb, auth, router, route) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
        this.errorMessage = signal('', ...(ngDevMode ? [{ debugName: "errorMessage" }] : /* istanbul ignore next */ []));
        this.showPassword = false;
        this.remember = false;
        this.isRegister = this.router.url.startsWith('/register');
        this.isBusiness = this.router.url.startsWith('/business/login');
        this.form = this.fb.group({ fullName: ['', [Validators.required, Validators.minLength(2)]], email: ['', [Validators.required, Validators.email]], phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9\s().-]{7,20}$/)]], password: ['', this.isRegister ? [Validators.required, Validators.minLength(8), Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)] : [Validators.required]], confirmPassword: ['', this.isRegister ? Validators.required : []], terms: [false, this.isRegister ? Validators.requiredTrue : []] });
    }
    get passwordLength() { return (this.form.controls.password.value ?? '').length; }
    get hasMixedCase() { const p = this.form.controls.password.value ?? ''; return /[a-z]/.test(p) && /[A-Z]/.test(p); }
    get hasNumber() { return /\d/.test(this.form.controls.password.value ?? ''); }
    get strengthLabel() { const n = [this.passwordLength >= 8, this.hasMixedCase, this.hasNumber, this.passwordLength >= 12].filter(Boolean).length; return n < 2 ? 'Password strength' : n < 4 ? 'Getting stronger' : 'Strong password'; }
    invalid(name) { const c = this.form.get(name); return !!c && c.invalid && (c.dirty || c.touched); }
    submit() {
        this.form.markAllAsTouched();
        this.errorMessage.set('');
        if (this.form.invalid || (this.isRegister && this.form.controls.password.value !== this.form.controls.confirmPassword.value)) {
            if (this.isRegister && this.form.controls.password.value !== this.form.controls.confirmPassword.value)
                this.form.controls.confirmPassword.setErrors({ mismatch: true });
            return;
        }
        const { email, password, fullName, phone } = this.form.getRawValue();
        this.loading.set(true);
        const request = this.isRegister ? this.auth.register({ fullName: fullName ?? '', email: email ?? '', phone: phone ?? '', password: password ?? '' }) : this.auth.login({ email: email ?? '', password: password ?? '' });
        request.pipe(finalize(() => this.loading.set(false))).subscribe({ next: result => { const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl'); void this.router.navigateByUrl(returnUrl || this.homeFor(result.user.role)); }, error: error => this.errorMessage.set(error?.error?.message ?? 'We couldn’t connect. Check your details and try again.') });
    }
    homeFor(role) { return role === 'CUSTOMER' ? '/customer' : role === 'STAFF' ? '/staff' : role === 'ADMIN' ? '/admin' : '/manager'; }
    static { this.ɵfac = function AuthPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthPage)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i3.ActivatedRoute)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AuthPage, selectors: [["ng-component"]], decls: 67, vars: 29, consts: [[1, "auth-shell"], [1, "auth-story"], ["routerLink", "/", 1, "brand", "brand-on-dark"], [1, "brand-mark"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "M4 7h10a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h11M4 7l3-3M4 7l3 3", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "brand-light"], [1, "auth-story-copy"], [1, "eyebrow", "eyebrow-light"], [1, "auth-story-note"], [1, "auth-panel"], [1, "auth-mobile-brand"], ["routerLink", "/", 1, "brand"], [1, "auth-form-wrap"], [1, "back-link", 3, "routerLink"], [1, "eyebrow"], [1, "auth-intro"], ["novalidate", "", 3, "ngSubmit", "formGroup"], ["formControlName", "email", "type", "email", "placeholder", "you@example.com", "autocomplete", "email"], ["class", "field-error", 4, "ngIf"], [1, "password-wrap"], ["formControlName", "password", 3, "type", "placeholder", "autocomplete"], ["type", "button", 1, "show-password", 3, "click"], ["class", "checkbox-label remember", 4, "ngIf"], ["class", "form-error", 4, "ngIf"], [1, "button", "button-primary", "auth-submit", 3, "click", "disabled"], [4, "ngIf"], ["class", "auth-switch", 4, "ngIf"], [1, "auth-security"], ["formControlName", "fullName", "placeholder", "e.g. Jordan Lee", "autocomplete", "name"], [1, "field-error"], ["formControlName", "phone", "type", "tel", "placeholder", "+1 (555) 000-0000", "autocomplete", "tel"], [1, "strength"], ["formControlName", "confirmPassword", "type", "password", "placeholder", "Enter your password again", "autocomplete", "new-password"], [1, "checkbox-label"], ["type", "checkbox", "formControlName", "terms"], ["href", "#terms"], ["href", "#privacy"], [1, "checkbox-label", "remember"], ["type", "checkbox", 3, "change", "checked"], ["routerLink", "/forgot-password"], [1, "form-error"], [1, "auth-switch"], [3, "routerLink"]], template: function AuthPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main", 0)(1, "section", 1)(2, "a", 2)(3, "span", 3);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(4, "svg", 4);
            i0.ɵɵelement(5, "path", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(6, "span");
            i0.ɵɵtext(7, "Queue");
            i0.ɵɵelementStart(8, "span", 6);
            i0.ɵɵtext(9, "Less");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(10, "div", 7)(11, "span", 8);
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "h1");
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "p");
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "div", 9)(18, "span");
            i0.ɵɵtext(19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "small");
            i0.ɵɵtext(21);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(22, "section", 10)(23, "div", 11)(24, "a", 12)(25, "span", 3);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(26, "svg", 4);
            i0.ɵɵelement(27, "path", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(28, "span");
            i0.ɵɵtext(29, "Queue");
            i0.ɵɵelementStart(30, "span", 6);
            i0.ɵɵtext(31, "Less");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(32, "div", 13)(33, "a", 14);
            i0.ɵɵtext(34);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "span", 15);
            i0.ɵɵtext(36);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "h2");
            i0.ɵɵtext(38);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "p", 16);
            i0.ɵɵtext(40);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "form", 17);
            i0.ɵɵlistener("ngSubmit", function AuthPage_Template_form_ngSubmit_41_listener() { return ctx.submit(); });
            i0.ɵɵconditionalCreate(42, AuthPage_Conditional_42_Template, 4, 1, "label");
            i0.ɵɵelementStart(43, "label");
            i0.ɵɵtext(44, "Email address");
            i0.ɵɵelement(45, "input", 18);
            i0.ɵɵtemplate(46, AuthPage_small_46_Template, 2, 0, "small", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(47, AuthPage_Conditional_47_Template, 4, 1, "label");
            i0.ɵɵelementStart(48, "label");
            i0.ɵɵtext(49, "Password");
            i0.ɵɵelementStart(50, "div", 20);
            i0.ɵɵelement(51, "input", 21);
            i0.ɵɵelementStart(52, "button", 22);
            i0.ɵɵlistener("click", function AuthPage_Template_button_click_52_listener() { return ctx.showPassword = !ctx.showPassword; });
            i0.ɵɵtext(53);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(54, AuthPage_small_54_Template, 2, 1, "small", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(55, AuthPage_Conditional_55_Template, 21, 10);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(56, AuthPage_label_56_Template, 6, 1, "label", 23)(57, AuthPage_p_57_Template, 2, 1, "p", 24);
            i0.ɵɵelementStart(58, "button", 25);
            i0.ɵɵlistener("click", function AuthPage_Template_button_click_58_listener() { return ctx.submit(); });
            i0.ɵɵtext(59);
            i0.ɵɵtemplate(60, AuthPage_span_60_Template, 2, 0, "span", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(61, AuthPage_p_61_Template, 4, 3, "p", 27)(62, AuthPage_p_62_Template, 2, 0, "p", 27);
            i0.ɵɵelementStart(63, "p", 28)(64, "span");
            i0.ɵɵtext(65, "\u2311");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(66, " Your information is encrypted and secure.");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(12);
            i0.ɵɵtextInterpolate(ctx.isBusiness ? "QUEUELESS FOR BUSINESS" : "A LITTLE MORE TIME FOR YOU");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.isBusiness ? "Keep every queue moving." : ctx.isRegister ? "Make room for what matters." : "Your time is worth more than a waiting room.");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.isBusiness ? "Sign in to manage your branch, staff, counters, and live customer tokens." : "Join a queue from wherever you are. We'll help you know when it's your turn.");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.isBusiness ? "One workspace for every shift." : "\u201CA much calmer way to plan my day.\u201D");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.isBusiness ? "QueueLess business workspace" : "QueueLess customer");
            i0.ɵɵadvance(12);
            i0.ɵɵproperty("routerLink", ctx.isBusiness ? "/business" : "/");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1("\u2190 Back to ", ctx.isBusiness ? "business site" : "home");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.isBusiness ? "BUSINESS WORKSPACE" : ctx.isRegister ? "CREATE YOUR ACCOUNT" : "WELCOME BACK");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.isBusiness ? "Sign in to your workspace." : ctx.isRegister ? "Get started for free" : "Good to see you again.");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.isBusiness ? "Use the account provided by your organization." : ctx.isRegister ? "Your next visit just got a little easier." : "Sign in to see what\u2019s happening with your queue.");
            i0.ɵɵadvance();
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isRegister ? 42 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.invalid("email"));
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isRegister ? 47 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("placeholder", i0.ɵɵinterpolate(ctx.isRegister ? "At least 8 characters" : "Enter your password"))("autocomplete", i0.ɵɵinterpolate(ctx.isRegister ? "new-password" : "current-password"))("type", ctx.showPassword ? "text" : "password");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.showPassword ? "Hide" : "Show");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.invalid("password"));
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isRegister ? 55 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.isRegister);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.errorMessage());
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.loading());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1("", ctx.loading() ? "Please wait\u2026" : ctx.isRegister ? "Create account" : "Sign in", " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.isBusiness);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isBusiness);
        } }, dependencies: [CommonModule, i4.NgIf, RouterLink, ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthPage, [{
        type: Component,
        args: [{ standalone: true, imports: [CommonModule, RouterLink, ReactiveFormsModule], template: `
<main class="auth-shell"><section class="auth-story"><a class="brand brand-on-dark" routerLink="/"><span class="brand-mark"><svg viewBox="0 0 24 24" fill="none"><path d="M4 7h10a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h11M4 7l3-3M4 7l3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>Queue<span class="brand-light">Less</span></span></a><div class="auth-story-copy"><span class="eyebrow eyebrow-light">{{isBusiness ? 'QUEUELESS FOR BUSINESS' : 'A LITTLE MORE TIME FOR YOU'}}</span><h1>{{isBusiness ? 'Keep every queue moving.' : isRegister ? 'Make room for what matters.' : 'Your time is worth more than a waiting room.'}}</h1><p>{{isBusiness ? 'Sign in to manage your branch, staff, counters, and live customer tokens.' : "Join a queue from wherever you are. We'll help you know when it's your turn."}}</p></div><div class="auth-story-note"><span>{{isBusiness ? 'One workspace for every shift.' : '“A much calmer way to plan my day.”'}}</span><small>{{isBusiness ? 'QueueLess business workspace' : 'QueueLess customer'}}</small></div></section><section class="auth-panel"><div class="auth-mobile-brand"><a class="brand" routerLink="/"><span class="brand-mark"><svg viewBox="0 0 24 24" fill="none"><path d="M4 7h10a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h11M4 7l3-3M4 7l3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>Queue<span class="brand-light">Less</span></span></a></div><div class="auth-form-wrap"><a class="back-link" [routerLink]="isBusiness ? '/business' : '/'">← Back to {{isBusiness ? 'business site' : 'home'}}</a><span class="eyebrow">{{isBusiness ? 'BUSINESS WORKSPACE' : isRegister ? 'CREATE YOUR ACCOUNT' : 'WELCOME BACK'}}</span><h2>{{isBusiness ? 'Sign in to your workspace.' : isRegister ? 'Get started for free' : 'Good to see you again.'}}</h2><p class="auth-intro">{{isBusiness ? 'Use the account provided by your organization.' : isRegister ? 'Your next visit just got a little easier.' : 'Sign in to see what’s happening with your queue.'}}</p><form [formGroup]="form" (ngSubmit)="submit()" novalidate>
@if(isRegister){<label>Full name<input formControlName="fullName" placeholder="e.g. Jordan Lee" autocomplete="name"><small class="field-error" *ngIf="invalid('fullName')">Please enter your name.</small></label>}
<label>Email address<input formControlName="email" type="email" placeholder="you@example.com" autocomplete="email"><small class="field-error" *ngIf="invalid('email')">Enter a valid email address.</small></label>
@if(isRegister){<label>Phone number<input formControlName="phone" type="tel" placeholder="+1 (555) 000-0000" autocomplete="tel"><small class="field-error" *ngIf="invalid('phone')">Enter a valid phone number.</small></label>}
<label>Password<div class="password-wrap"><input formControlName="password" [type]="showPassword ? 'text' : 'password'" placeholder="{{isRegister ? 'At least 8 characters' : 'Enter your password'}}" autocomplete="{{isRegister ? 'new-password' : 'current-password'}}"><button class="show-password" type="button" (click)="showPassword = !showPassword">{{showPassword ? 'Hide' : 'Show'}}</button></div><small class="field-error" *ngIf="invalid('password')">{{isRegister ? 'Use 8+ characters with upper, lower and a number.' : 'Password is required.'}}</small></label>
@if(isRegister){<div class="strength"><span [class.active]="passwordLength >= 8"></span><span [class.active]="hasMixedCase"></span><span [class.active]="hasNumber"></span><span [class.active]="passwordLength >= 12"></span><small>{{strengthLabel}}</small></div><label>Confirm password<input formControlName="confirmPassword" type="password" placeholder="Enter your password again" autocomplete="new-password"><small class="field-error" *ngIf="invalid('confirmPassword')">Passwords must match.</small></label><label class="checkbox-label"><input type="checkbox" formControlName="terms"><span>I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>.</span></label>}</form>
<label class="checkbox-label remember" *ngIf="!isRegister"><input type="checkbox" [checked]="remember" (change)="remember = !remember"><span>Remember me</span><a routerLink="/forgot-password">Forgot password?</a></label><p class="form-error" *ngIf="errorMessage()">{{errorMessage()}}</p><button class="button button-primary auth-submit" (click)="submit()" [disabled]="loading()">{{loading() ? 'Please wait…' : isRegister ? 'Create account' : 'Sign in'}} <span *ngIf="!loading()">↗</span></button><p class="auth-switch" *ngIf="!isBusiness">{{isRegister ? 'Already have an account?' : 'New to QueueLess?'}} <a [routerLink]="isRegister ? '/login' : '/register'">{{isRegister ? 'Sign in' : 'Create an account'}}</a></p><p class="auth-switch" *ngIf="isBusiness">Need business access? Ask your organization administrator.</p><p class="auth-security"><span>⌑</span> Your information is encrypted and secure.</p></div></section></main>` }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.AuthService }, { type: i3.Router }, { type: i3.ActivatedRoute }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AuthPage, { className: "AuthPage", filePath: "src/app/features/pages.ts", lineNumber: 46 }); })();
export class DashboardLayout {
    constructor(auth, router, notifications) {
        this.auth = auth;
        this.router = router;
        this.notifications = notifications;
        this.menuOpen = false;
        const role = this.auth.user()?.role ?? 'CUSTOMER';
        this.roleLabel = role[0] + role.slice(1).toLowerCase();
        if (role === 'CUSTOMER')
            this.nav = [{ label: 'Overview', path: '/customer', glyph: '⌂' }, { label: 'Find a service', path: '/branches', glyph: '⌕' }, { label: 'My appointments', path: '/appointments', glyph: '▣' }, { label: 'Queue history', path: '/history', glyph: '◷' }, { label: 'Notifications', path: '/notifications', glyph: '♧' }, { label: 'Profile', path: '/profile', glyph: '♙' }];
        else if (role === 'ADMIN')
            this.nav = [{ label: 'Organization', path: '/admin', glyph: '⌂' }, { label: 'Branches', path: '/manage/branches', glyph: '⌂' }, { label: 'Services', path: '/manage/services', glyph: '◈' }, { label: 'Counters', path: '/manage/counters', glyph: '▣' }, { label: 'Staff', path: '/manage/staff', glyph: '♙' }, { label: 'Users', path: '/manage/users', glyph: '♧' }, { label: 'Settings', path: '/manage/organization', glyph: '⚙' }];
        else if (role === 'MANAGER')
            this.nav = [{ label: 'Operations', path: '/manager', glyph: '⌂' }, { label: 'Branches', path: '/manage/branches', glyph: '⌂' }, { label: 'Services', path: '/manage/services', glyph: '◈' }, { label: 'Counters', path: '/manage/counters', glyph: '▣' }, { label: 'Staff', path: '/manage/staff', glyph: '♙' }, { label: 'Queue settings', path: '/manage/queue-settings', glyph: '◷' }, { label: 'Operating hours', path: '/manage/operating-hours', glyph: '◴' }, { label: 'Queue history', path: '/history', glyph: '◷' }, { label: 'Profile', path: '/profile', glyph: '♧' }];
        else
            this.nav = [{ label: 'Staff queue', path: '/staff', glyph: '⌂' }, { label: 'Queue history', path: '/history', glyph: '◷' }, { label: 'Appointments', path: '/appointments', glyph: '▣' }, { label: 'Profile', path: '/profile', glyph: '♙' }];
        this.notifications.list().subscribe({ error: () => undefined });
    }
    get displayName() { return this.auth.user()?.fullName ?? 'QueueLess member'; }
    get initials() { return this.displayName.split(' ').map(part => part[0]).join('').slice(0, 2).toUpperCase(); }
    get today() { return new Intl.DateTimeFormat('en', { weekday: 'short', month: 'short', day: 'numeric' }).format(new Date()); }
    get section() { return this.router.url.split('/')[1]?.replace(/^./, c => c.toUpperCase()) ?? 'Home'; }
    get title() { return this.router.url.split('/').filter(Boolean).pop()?.replace(/-/g, ' ').replace(/^./, c => c.toUpperCase()) ?? 'Overview'; }
    logout() { this.auth.logout(); void this.router.navigate(['/login']); }
    static { this.ɵfac = function DashboardLayout_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardLayout)(i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i5.NotificationService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardLayout, selectors: [["ng-component"]], decls: 58, vars: 10, consts: [[1, "app-shell"], [1, "app-sidebar"], ["routerLink", "/", 1, "brand", "sidebar-brand"], [1, "brand-mark"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "M4 7h10a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h11M4 7l3-3M4 7l3 3", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "brand-light"], [1, "workspace-label"], [1, "side-nav"], ["routerLinkActive", "nav-active", 3, "routerLink"], [1, "sidebar-bottom"], [1, "help-card"], [1, "help-glyph"], ["href", "mailto:support@queueless.app"], ["routerLink", "/profile", 1, "profile-button"], [1, "profile-avatar"], [1, "profile-meta"], [1, "profile-menu"], [1, "signout-button", 3, "click"], [1, "workspace"], [1, "workspace-top"], [1, "mobile-menu", 3, "click"], [1, "breadcrumbs"], [1, "top-actions"], [1, "top-date"], ["routerLink", "/notifications", "aria-label", "Notifications", 1, "icon-action"], ["lucideBell", "", "size", "19"], [1, "notification-badge"], ["routerLink", "/profile", "aria-label", "Open profile", 1, "top-avatar"], [1, "workspace-content"], ["routerLinkActive", "nav-active", 3, "click", "routerLink"], [1, "nav-glyph"], [1, "nav-arrow"]], template: function DashboardLayout_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "aside", 1)(2, "a", 2)(3, "span", 3);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(4, "svg", 4);
            i0.ɵɵelement(5, "path", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(6, "span");
            i0.ɵɵtext(7, "Queue");
            i0.ɵɵelementStart(8, "span", 6);
            i0.ɵɵtext(9, "Less");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(10, "div", 7);
            i0.ɵɵtext(11, "WORKSPACE");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "nav", 8);
            i0.ɵɵrepeaterCreate(13, DashboardLayout_For_14_Template, 6, 3, "a", 9, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 10)(16, "div", 11)(17, "span", 12);
            i0.ɵɵtext(18, "?");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "b");
            i0.ɵɵtext(20, "Need a hand?");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "small");
            i0.ɵɵtext(22, "We're here to help.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "a", 13);
            i0.ɵɵtext(24, "Visit help center \u2197");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "a", 14)(26, "span", 15);
            i0.ɵɵtext(27);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "span", 16)(29, "b");
            i0.ɵɵtext(30);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "small");
            i0.ɵɵtext(32);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(33, "span", 17);
            i0.ɵɵtext(34, "\u2197");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(35, "button", 18);
            i0.ɵɵlistener("click", function DashboardLayout_Template_button_click_35_listener() { return ctx.logout(); });
            i0.ɵɵtext(36, "Sign out");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(37, "main", 19)(38, "header", 20)(39, "button", 21);
            i0.ɵɵlistener("click", function DashboardLayout_Template_button_click_39_listener() { return ctx.menuOpen = !ctx.menuOpen; });
            i0.ɵɵtext(40, "\u2630");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "div", 22)(42, "span");
            i0.ɵɵtext(43);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "b");
            i0.ɵɵtext(45, "/");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "strong");
            i0.ɵɵtext(47);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(48, "div", 23)(49, "span", 24);
            i0.ɵɵtext(50);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "a", 25);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(52, "svg", 26);
            i0.ɵɵconditionalCreate(53, DashboardLayout_Conditional_53_Template, 2, 1, "span", 27);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(54, "a", 28);
            i0.ɵɵtext(55);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(56, "div", 29);
            i0.ɵɵelement(57, "router-outlet");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵclassProp("sidebar-open", ctx.menuOpen);
            i0.ɵɵadvance(12);
            i0.ɵɵrepeater(ctx.nav);
            i0.ɵɵadvance(14);
            i0.ɵɵtextInterpolate(ctx.initials);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.displayName);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.roleLabel);
            i0.ɵɵadvance(11);
            i0.ɵɵtextInterpolate(ctx.section);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.today);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.notifications.unreadCount() ? 53 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.initials);
        } }, dependencies: [CommonModule, RouterLink, RouterOutlet, LucideBell], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardLayout, [{
        type: Component,
        args: [{ standalone: true, imports: [CommonModule, RouterLink, RouterOutlet, LucideBell], template: `
<div class="app-shell"><aside class="app-sidebar" [class.sidebar-open]="menuOpen"><a routerLink="/" class="brand sidebar-brand"><span class="brand-mark"><svg viewBox="0 0 24 24" fill="none"><path d="M4 7h10a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h11M4 7l3-3M4 7l3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>Queue<span class="brand-light">Less</span></span></a><div class="workspace-label">WORKSPACE</div><nav class="side-nav">@for(item of nav;track item.path){<a [routerLink]="item.path" routerLinkActive="nav-active" (click)="menuOpen=false"><span class="nav-glyph">{{item.glyph}}</span>{{item.label}}<span class="nav-arrow">›</span></a>}</nav><div class="sidebar-bottom"><div class="help-card"><span class="help-glyph">?</span><b>Need a hand?</b><small>We're here to help.</small><a href="mailto:support@queueless.app">Visit help center ↗</a></div><a class="profile-button" routerLink="/profile"><span class="profile-avatar">{{initials}}</span><span class="profile-meta"><b>{{displayName}}</b><small>{{roleLabel}}</small></span><span class="profile-menu">↗</span></a><button class="signout-button" (click)="logout()">Sign out</button></div></aside><main class="workspace"><header class="workspace-top"><button class="mobile-menu" (click)="menuOpen = !menuOpen">☰</button><div class="breadcrumbs"><span>{{section}}</span><b>/</b><strong>{{title}}</strong></div><div class="top-actions"><span class="top-date">{{today}}</span><a routerLink="/notifications" class="icon-action" aria-label="Notifications"><svg lucideBell size="19"></svg>@if(notifications.unreadCount()){<span class="notification-badge">{{notifications.unreadCount()}}</span>}</a><a routerLink="/profile" class="top-avatar" aria-label="Open profile">{{initials}}</a></div></header><div class="workspace-content"><router-outlet></router-outlet></div></main></div>` }]
    }], () => [{ type: i2.AuthService }, { type: i3.Router }, { type: i5.NotificationService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardLayout, { className: "DashboardLayout", filePath: "src/app/features/pages.ts", lineNumber: 70 }); })();
export class CustomerDashboard {
    constructor(queues, appointmentsApi, auth) {
        this.queues = queues;
        this.appointmentsApi = appointmentsApi;
        this.auth = auth;
        this.token = signal(null, ...(ngDevMode ? [{ debugName: "token" }] : /* istanbul ignore next */ []));
        this.history = signal([], ...(ngDevMode ? [{ debugName: "history" }] : /* istanbul ignore next */ []));
        this.appointments = signal([], ...(ngDevMode ? [{ debugName: "appointments" }] : /* istanbul ignore next */ []));
        this.error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
        this.busy = signal(false, ...(ngDevMode ? [{ debugName: "busy" }] : /* istanbul ignore next */ []));
    }
    get name() { return this.auth.user()?.fullName.split(' ')[0] ?? 'there'; }
    get greeting() { const hour = new Date().getHours(); return hour < 12 ? 'morning' : hour < 17 ? 'afternoon' : 'evening'; }
    ngOnInit() {
        this.queues.current().subscribe({ next: value => this.token.set(value), error: e => { if (e.status !== 404)
                this.error.set('Your active queue is temporarily unavailable. Please refresh to try again.'); } });
        this.queues.history(0, 4).subscribe({ next: value => this.history.set(value.content), error: () => this.error.set('Recent queue history is unavailable.') });
        this.appointmentsApi.list().subscribe({ next: value => this.appointments.set(value), error: () => undefined });
    }
    cancel() { const current = this.token(); if (!current)
        return; this.busy.set(true); this.queues.cancel(current.id).subscribe({ next: () => this.token.set(null), error: () => this.error.set('We couldn’t cancel your token. Please try again.'), complete: () => this.busy.set(false) }); }
    static { this.ɵfac = function CustomerDashboard_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CustomerDashboard)(i0.ɵɵdirectiveInject(i5.QueueService), i0.ɵɵdirectiveInject(i5.AppointmentService), i0.ɵɵdirectiveInject(i2.AuthService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CustomerDashboard, selectors: [["ng-component"]], decls: 78, vars: 6, consts: [[1, "page-heading"], [1, "eyebrow"], ["routerLink", "/branches", 1, "button", "button-primary"], [1, "dashboard-grid"], [1, "panel", "active-token-panel"], [1, "panel-head"], [1, "live-pill"], [1, "empty-state"], ["class", "inline-error", 4, "ngIf"], [1, "panel", "quick-panel"], [1, "quick-links"], ["routerLink", "/branches"], [1, "quick-icon", "blue"], ["routerLink", "/appointments"], [1, "quick-icon", "violet"], [1, "panel", "history-panel"], ["routerLink", "/history", 1, "subtle-link"], [1, "compact-empty"], [1, "panel", "appointment-panel"], ["routerLink", "/appointments", 1, "subtle-link"], [1, "active-token-content"], [1, "token-number-large"], [1, "token-info"], [1, "status-label"], [1, "wait-stats"], [1, "token-progress"], [1, "token-actions"], [1, "text-cta", 3, "routerLink"], [1, "subtle-button", 3, "click", "disabled"], [1, "empty-icon"], ["routerLink", "/branches", 1, "button", "button-primary", "button-small"], [1, "inline-error"], [1, "activity-row"], [1, "activity-icon"], [1, "activity-status"], [1, "appointment-row"], [1, "date-tile"]], template: function CustomerDashboard_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div")(2, "span", 1);
            i0.ɵɵtext(3, "YOUR DAY, AT A GLANCE");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h1");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵtext(7, "Here's what's happening with your visits today.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "a", 2);
            i0.ɵɵtext(9, "Find a service ");
            i0.ɵɵelementStart(10, "span");
            i0.ɵɵtext(11, "\u2197");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(12, "div", 3)(13, "section", 4)(14, "div", 5)(15, "div")(16, "span", 1);
            i0.ɵɵtext(17, "YOUR ACTIVE QUEUE");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "h2");
            i0.ɵɵtext(19, "You're in line.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "span", 6);
            i0.ɵɵelement(21, "i");
            i0.ɵɵtext(22, " LIVE");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(23, CustomerDashboard_Conditional_23_Template, 38, 11)(24, CustomerDashboard_Conditional_24_Template, 11, 0, "div", 7);
            i0.ɵɵtemplate(25, CustomerDashboard_p_25_Template, 2, 1, "p", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "section", 9)(27, "div", 5)(28, "div")(29, "span", 1);
            i0.ɵɵtext(30, "MADE FOR YOUR TIME");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "h2");
            i0.ɵɵtext(32, "Make your next visit easier.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(33, "p");
            i0.ɵɵtext(34, "Join a queue or plan ahead with an appointment.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "div", 10)(36, "a", 11)(37, "span", 12);
            i0.ɵɵtext(38, "\u2315");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "span")(40, "b");
            i0.ɵɵtext(41, "Find a branch");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "small");
            i0.ɵɵtext(43, "See nearby services and wait times");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(44, "span");
            i0.ɵɵtext(45, "\u2192");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(46, "a", 13)(47, "span", 14);
            i0.ɵɵtext(48, "\u25A3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(49, "span")(50, "b");
            i0.ɵɵtext(51, "Book an appointment");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "small");
            i0.ɵɵtext(53, "Pick a time that works for you");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(54, "span");
            i0.ɵɵtext(55, "\u2192");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(56, "section", 15)(57, "div", 5)(58, "div")(59, "span", 1);
            i0.ɵɵtext(60, "RECENT ACTIVITY");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(61, "h2");
            i0.ɵɵtext(62, "Your visits");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(63, "a", 16);
            i0.ɵɵtext(64, "View history \u2192");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(65, CustomerDashboard_Conditional_65_Template, 2, 0)(66, CustomerDashboard_Conditional_66_Template, 4, 0, "div", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(67, "section", 18)(68, "div", 5)(69, "div")(70, "span", 1);
            i0.ɵɵtext(71, "COMING UP");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(72, "h2");
            i0.ɵɵtext(73, "Appointments");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(74, "a", 19);
            i0.ɵɵtext(75, "See all \u2192");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(76, CustomerDashboard_Conditional_76_Template, 2, 0)(77, CustomerDashboard_Conditional_77_Template, 4, 0, "div", 17);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate2("Good ", ctx.greeting, ", ", ctx.name, ".");
            i0.ɵɵadvance(18);
            i0.ɵɵconditional(ctx.token() ? 23 : 24);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.error());
            i0.ɵɵadvance(40);
            i0.ɵɵconditional(ctx.history().length ? 65 : 66);
            i0.ɵɵadvance(11);
            i0.ɵɵconditional(ctx.appointments().length ? 76 : 77);
        } }, dependencies: [CommonModule, i4.NgIf, RouterLink, i4.DatePipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomerDashboard, [{
        type: Component,
        args: [{ standalone: true, imports: [CommonModule, RouterLink], template: `
<div class="page-heading"><div><span class="eyebrow">YOUR DAY, AT A GLANCE</span><h1>Good {{greeting}}, {{name}}.</h1><p>Here's what's happening with your visits today.</p></div><a class="button button-primary" routerLink="/branches">Find a service <span>↗</span></a></div>
<div class="dashboard-grid"><section class="panel active-token-panel"><div class="panel-head"><div><span class="eyebrow">YOUR ACTIVE QUEUE</span><h2>You're in line.</h2></div><span class="live-pill"><i></i> LIVE</span></div>@if(token()){<div class="active-token-content"><div class="token-number-large">{{token()?.tokenNumber}}</div><div class="token-info"><b>{{token()?.serviceName}}</b><span>{{token()?.branchName}}</span><span class="status-label"><i></i>{{token()?.status}}</span></div></div><div class="wait-stats"><div><small>YOUR POSITION</small><b>{{token()?.position}}<span> in line</span></b></div><div><small>EST. WAIT TIME</small><b>~ {{token()?.estimatedWaitMinutes}} <span>min</span></b></div></div><div class="token-progress"><div><span></span></div><small>{{token()?.peopleAhead}} people ahead</small></div><div class="token-actions"><a [routerLink]="['/track',token()?.id]" class="text-cta">Track your queue <span>→</span></a><button class="subtle-button" (click)="cancel()" [disabled]="busy()">Cancel token</button></div>}@else{<div class="empty-state"><span class="empty-icon">◷</span><h3>No active queue right now</h3><p>Find a nearby service and take your place in line from anywhere.</p><a routerLink="/branches" class="button button-primary button-small">Find a service <span>↗</span></a></div>}<p class="inline-error" *ngIf="error()">{{error()}}</p></section><section class="panel quick-panel"><div class="panel-head"><div><span class="eyebrow">MADE FOR YOUR TIME</span><h2>Make your next visit easier.</h2></div></div><p>Join a queue or plan ahead with an appointment.</p><div class="quick-links"><a routerLink="/branches"><span class="quick-icon blue">⌕</span><span><b>Find a branch</b><small>See nearby services and wait times</small></span><span>→</span></a><a routerLink="/appointments"><span class="quick-icon violet">▣</span><span><b>Book an appointment</b><small>Pick a time that works for you</small></span><span>→</span></a></div></section><section class="panel history-panel"><div class="panel-head"><div><span class="eyebrow">RECENT ACTIVITY</span><h2>Your visits</h2></div><a routerLink="/history" class="subtle-link">View history →</a></div>@if(history().length){@for(item of history();track item.id){<div class="activity-row"><span class="activity-icon">✓</span><span><b>{{item.serviceName}}</b><small>{{item.branchName}} · {{item.joinedAt | date:'MMM d, h:mm a'}}</small></span><span class="activity-status">{{item.status}}</span></div>}}@else{<div class="compact-empty"><span>◷</span>Completed visits will appear here.</div>}</section><section class="panel appointment-panel"><div class="panel-head"><div><span class="eyebrow">COMING UP</span><h2>Appointments</h2></div><a routerLink="/appointments" class="subtle-link">See all →</a></div>@if(appointments().length){@for(item of appointments();track item.id){<div class="appointment-row"><span class="date-tile"><b>{{item.startsAt | date:'d'}}</b><small>{{item.startsAt | date:'MMM'}}</small></span><span><b>{{item.serviceName}}</b><small>{{item.branchName}} · {{item.startsAt | date:'h:mm a'}}</small></span><span class="activity-status">{{item.status}}</span></div>}}@else{<div class="compact-empty"><span>▣</span>Upcoming appointments will appear here.</div>}</section></div>
` }]
    }], () => [{ type: i5.QueueService }, { type: i5.AppointmentService }, { type: i2.AuthService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CustomerDashboard, { className: "CustomerDashboard", filePath: "src/app/features/pages.ts", lineNumber: 92 }); })();
export class DiscoveryPage {
    constructor(fb, api, router) {
        this.fb = fb;
        this.api = api;
        this.router = router;
        this.selectedType = signal('ALL', ...(ngDevMode ? [{ debugName: "selectedType" }] : /* istanbul ignore next */ []));
        this.availableOnly = signal(false, ...(ngDevMode ? [{ debugName: "availableOnly" }] : /* istanbul ignore next */ []));
        this.sortByWait = signal(false, ...(ngDevMode ? [{ debugName: "sortByWait" }] : /* istanbul ignore next */ []));
        this.branches = signal([], ...(ngDevMode ? [{ debugName: "branches" }] : /* istanbul ignore next */ []));
        this.loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
        this.error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
        this.form = this.fb.group({ query: [''] });
    }
    ngOnInit() { this.load(); }
    load() { this.loading.set(true); this.error.set(''); this.api.search(this.form.controls.query.value ?? '').pipe(finalize(() => this.loading.set(false))).subscribe({ next: v => this.branches.set(v), error: () => this.error.set('The service directory could not be reached.') }); }
    search() { this.load(); }
    select(branch) { void this.router.navigate(['/branches', branch.id]); }
    filteredBranches() { let values = this.branches().filter(branch => { const category = (branch.organizationType ?? '').toUpperCase(); const type = this.selectedType(); const matchesType = type === 'ALL' || category.includes(type) || (type === 'HEALTHCARE' && /(HOSPITAL|CLINIC|HEALTH)/.test(category)) || (type === 'GOVERNMENT' && /(PUBLIC|GOVERNMENT|CIVIC)/.test(category)) || (type === 'FINANCIAL' && /(BANK|FINANCE)/.test(category)) || (type === 'PERSONAL_CARE' && /(SALON|WELLNESS|PERSONAL)/.test(category)); return matchesType && (!this.availableOnly() || this.isOpen(branch)); }); if (this.sortByWait())
        values = values.slice().sort((a, b) => (a.estimatedWaitMinutes ?? Number.MAX_SAFE_INTEGER) - (b.estimatedWaitMinutes ?? Number.MAX_SAFE_INTEGER)); return values; }
    isOpen(branch) { if (!branch.active)
        return false; if (!branch.openingTime || !branch.closingTime)
        return branch.active; const now = new Date().toTimeString().slice(0, 5); return now >= branch.openingTime && now <= branch.closingTime; }
    symbol(name) { return name.slice(0, 1).toUpperCase(); }
    static { this.ɵfac = function DiscoveryPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DiscoveryPage)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i5.BranchService), i0.ɵɵdirectiveInject(i3.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DiscoveryPage, selectors: [["ng-component"]], decls: 35, vars: 14, consts: [[1, "page-heading"], [1, "eyebrow"], [1, "discovery-search", 3, "ngSubmit", "formGroup"], ["lucideSearch", "", "size", "19"], ["formControlName", "query", "placeholder", "Search services, branches, organizations\u2026"], [1, "button", "button-primary"], [1, "filter-row"], [1, "filter-chip", 3, "click"], [1, "loading-state"], [1, "empty-panel"], [1, "branch-grid"], [1, "button", "button-secondary", 3, "click"], [1, "compact-empty"], [1, "branch-card"], [1, "branch-art"], [1, "branch-art-symbol"], [1, "branch-open"], [1, "branch-art-label"], [1, "branch-card-body"], [1, "branch-services"], [1, "branch-wait"], [1, "button", "button-primary", "button-small", 3, "click", "disabled"]], template: function DiscoveryPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div")(2, "span", 1);
            i0.ɵɵtext(3, "YOUR NEXT VISIT STARTS HERE");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h1");
            i0.ɵɵtext(5, "Find a service.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵtext(7, "Explore branches and see what the wait looks like before you go.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(8, "form", 2);
            i0.ɵɵlistener("ngSubmit", function DiscoveryPage_Template_form_ngSubmit_8_listener() { return ctx.search(); });
            i0.ɵɵelementStart(9, "span");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(10, "svg", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelement(11, "input", 4);
            i0.ɵɵelementStart(12, "button", 5);
            i0.ɵɵtext(13, "Search");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "div", 6)(15, "span");
            i0.ɵɵtext(16, "Browse nearby");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "button", 7);
            i0.ɵɵlistener("click", function DiscoveryPage_Template_button_click_17_listener() { return ctx.selectedType.set("ALL"); });
            i0.ɵɵtext(18, "All types");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "button", 7);
            i0.ɵɵlistener("click", function DiscoveryPage_Template_button_click_19_listener() { return ctx.selectedType.set("HEALTHCARE"); });
            i0.ɵɵtext(20, "Healthcare");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "button", 7);
            i0.ɵɵlistener("click", function DiscoveryPage_Template_button_click_21_listener() { return ctx.selectedType.set("GOVERNMENT"); });
            i0.ɵɵtext(22, "Public services");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "button", 7);
            i0.ɵɵlistener("click", function DiscoveryPage_Template_button_click_23_listener() { return ctx.selectedType.set("FINANCIAL"); });
            i0.ɵɵtext(24, "Financial");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "button", 7);
            i0.ɵɵlistener("click", function DiscoveryPage_Template_button_click_25_listener() { return ctx.selectedType.set("PERSONAL_CARE"); });
            i0.ɵɵtext(26, "Personal care");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "button", 7);
            i0.ɵɵlistener("click", function DiscoveryPage_Template_button_click_27_listener() { return ctx.availableOnly.update(x => !x); });
            i0.ɵɵtext(28, "Open now");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "button", 7);
            i0.ɵɵlistener("click", function DiscoveryPage_Template_button_click_29_listener() { return ctx.sortByWait.update(x => !x); });
            i0.ɵɵtext(30, "Sort by wait \u2195");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(31, DiscoveryPage_Conditional_31_Template, 2, 0, "div", 8)(32, DiscoveryPage_Conditional_32_Template, 14, 1, "div", 9)(33, DiscoveryPage_Conditional_33_Template, 3, 1, "div", 10)(34, DiscoveryPage_Conditional_34_Template, 9, 0, "div", 9);
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(9);
            i0.ɵɵclassProp("active", ctx.selectedType() === "ALL");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.selectedType() === "HEALTHCARE");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.selectedType() === "GOVERNMENT");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.selectedType() === "FINANCIAL");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.selectedType() === "PERSONAL_CARE");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.availableOnly());
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.loading() ? 31 : ctx.error() ? 32 : ctx.branches().length ? 33 : 34);
        } }, dependencies: [CommonModule, ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, LucideSearch], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DiscoveryPage, [{
        type: Component,
        args: [{ standalone: true, imports: [CommonModule, ReactiveFormsModule, LucideSearch], template: `
<div class="page-heading"><div><span class="eyebrow">YOUR NEXT VISIT STARTS HERE</span><h1>Find a service.</h1><p>Explore branches and see what the wait looks like before you go.</p></div></div><form class="discovery-search" [formGroup]="form" (ngSubmit)="search()"><span><svg lucideSearch size="19"></svg></span><input formControlName="query" placeholder="Search services, branches, organizations…"><button class="button button-primary">Search</button></form><div class="filter-row"><span>Browse nearby</span><button class="filter-chip" [class.active]="selectedType()==='ALL'" (click)="selectedType.set('ALL')">All types</button><button class="filter-chip" [class.active]="selectedType()==='HEALTHCARE'" (click)="selectedType.set('HEALTHCARE')">Healthcare</button><button class="filter-chip" [class.active]="selectedType()==='GOVERNMENT'" (click)="selectedType.set('GOVERNMENT')">Public services</button><button class="filter-chip" [class.active]="selectedType()==='FINANCIAL'" (click)="selectedType.set('FINANCIAL')">Financial</button><button class="filter-chip" [class.active]="selectedType()==='PERSONAL_CARE'" (click)="selectedType.set('PERSONAL_CARE')">Personal care</button><button class="filter-chip" [class.active]="availableOnly()" (click)="availableOnly.update(x=>!x)">Open now</button><button class="filter-chip" (click)="sortByWait.update(x=>!x)">Sort by wait ↕</button></div>@if(loading()){<div class="loading-state">Finding available branches…</div>}@else if(error()){<div class="empty-panel"><span>⌑</span><h2>Branches aren’t available yet.</h2><p>{{error()}} Check that the QueueLess API is running, then try again.</p><button class="button button-secondary" (click)="load()">Try again</button><small>Branch discovery needs the Spring Boot <code>GET /branches</code> endpoint.</small></div>}@else if(branches().length){<div class="branch-grid">@if(filteredBranches().length){@for(branch of filteredBranches();track branch.id){<article class="branch-card"><div class="branch-art"><span class="branch-art-symbol">{{symbol(branch.name)}}</span><span class="branch-open" [class.closed]="!branch.active"><i></i>{{branch.active?'Open now':'Closed'}}</span><span class="branch-art-label">{{branch.organizationName}}</span></div><div class="branch-card-body"><h2>{{branch.name}}</h2><p>⌖ {{branch.address}}</p><div class="branch-services">@for(s of (branch.services ?? []).slice(0,2);track s.id){<span>{{s.name}}</span>}</div><div class="branch-wait"><span>◷ {{branch.estimatedWaitMinutes == null ? 'Wait time unavailable' : '~'+branch.estimatedWaitMinutes+' min wait'}}</span><span>{{branch.activeQueueLength == null ? 'Queue info unavailable' : branch.activeQueueLength+' waiting'}}</span></div><button class="button button-primary button-small" [disabled]="!branch.active" (click)="select(branch)">View services <span>↗</span></button></div></article>}}@else{<p class="compact-empty">No branches match these filters. Clear a filter to see more results.</p>}</div>}@else{<div class="empty-panel"><span>⌕</span><h2>Let’s find your next stop.</h2><p>Search for an organization, branch or service to see what’s nearby.</p><small>Branch discovery connects to your QueueLess organization directory.</small></div>}
` }]
    }], () => [{ type: i1.FormBuilder }, { type: i5.BranchService }, { type: i3.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DiscoveryPage, { className: "DiscoveryPage", filePath: "src/app/features/pages.ts", lineNumber: 108 }); })();
export class JoinQueuePage {
    constructor(fb, branchApi, serviceApi, queue, router, route) {
        this.fb = fb;
        this.branchApi = branchApi;
        this.serviceApi = serviceApi;
        this.queue = queue;
        this.router = router;
        this.route = route;
        this.branches = signal([], ...(ngDevMode ? [{ debugName: "branches" }] : /* istanbul ignore next */ []));
        this.services = signal([], ...(ngDevMode ? [{ debugName: "services" }] : /* istanbul ignore next */ []));
        this.error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
        this.busy = signal(false, ...(ngDevMode ? [{ debugName: "busy" }] : /* istanbul ignore next */ []));
        this.form = this.fb.group({ organizationId: ['', Validators.required], branchId: ['', Validators.required], serviceId: ['', Validators.required] });
    }
    get organizations() { return [...new Map(this.branches().map(branch => [branch.organizationId ?? branch.organizationName, { id: branch.organizationId ?? branch.organizationName, name: branch.organizationName }])).values()]; }
    filteredBranches() { const org = this.form.controls.organizationId.value; return this.branches().filter(branch => (branch.organizationId ?? branch.organizationName) === org); }
    selectedBranch() { return this.branches().find(branch => branch.id === this.form.controls.branchId.value); }
    ngOnInit() { this.branchApi.search().subscribe({ next: v => { this.branches.set(v); const branchId = this.route.snapshot.queryParamMap.get('branchId'); const orgId = this.route.snapshot.queryParamMap.get('organizationId'); if (orgId)
            this.form.controls.organizationId.setValue(orgId); if (branchId) {
            this.form.controls.branchId.setValue(branchId);
            this.loadServices();
        } }, error: () => this.error.set('Branches could not be loaded. Check the API connection.') }); }
    selectOrganization() { this.form.controls.branchId.setValue(''); this.form.controls.serviceId.setValue(''); this.services.set([]); }
    loadServices() { const id = this.form.controls.branchId.value; if (!id)
        return; this.form.controls.serviceId.setValue(''); this.form.controls.organizationId.setValue(this.selectedBranch()?.organizationId ?? this.selectedBranch()?.organizationName ?? ''); this.serviceApi.byBranch(id).subscribe({ next: v => { this.services.set(v.filter(s => s.active)); const requested = this.route.snapshot.queryParamMap.get('serviceId'); if (requested && v.some(service => service.id === requested && service.active))
            this.form.controls.serviceId.setValue(requested); }, error: () => this.error.set('Services could not be loaded for this branch.') }); }
    join() { const id = this.form.controls.serviceId.value; if (!id)
        return; this.busy.set(true); this.queue.join(id).subscribe({ next: v => void this.router.navigate(['/track', v.id]), error: e => { this.error.set(e?.error?.message ?? 'We couldn’t join the queue. Please try again.'); this.busy.set(false); } }); }
    static { this.ɵfac = function JoinQueuePage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || JoinQueuePage)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i5.BranchService), i0.ɵɵdirectiveInject(i5.ServiceManagementService), i0.ɵɵdirectiveInject(i5.QueueService), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i3.ActivatedRoute)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: JoinQueuePage, selectors: [["ng-component"]], decls: 52, vars: 5, consts: [[1, "page-heading"], [1, "eyebrow"], [1, "panel", "join-panel"], [1, "join-steps"], [1, "step-active"], [3, "formGroup"], ["formControlName", "organizationId", 3, "change"], ["value", ""], [3, "value"], ["formControlName", "branchId", 3, "change"], ["formControlName", "serviceId"], [1, "branch-wait"], [1, "form-error"], [1, "button", "button-primary", 3, "click", "disabled"], [1, "api-note"]], template: function JoinQueuePage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div")(2, "span", 1);
            i0.ɵɵtext(3, "TAKE YOUR PLACE IN LINE");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h1");
            i0.ɵɵtext(5, "Join a queue.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵtext(7, "Choose a service and we'll save your place.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(8, "section", 2)(9, "div", 3)(10, "span", 4)(11, "i");
            i0.ɵɵtext(12, "1");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(13, " Organization & branch");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "span")(15, "i");
            i0.ɵɵtext(16, "2");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(17, " Service");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "span")(19, "i");
            i0.ɵɵtext(20, "3");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(21, " Confirm");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "form", 5)(23, "label");
            i0.ɵɵtext(24, "Choose an organization");
            i0.ɵɵelementStart(25, "select", 6);
            i0.ɵɵlistener("change", function JoinQueuePage_Template_select_change_25_listener() { return ctx.selectOrganization(); });
            i0.ɵɵelementStart(26, "option", 7);
            i0.ɵɵtext(27, "Select an organization");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(28, JoinQueuePage_For_29_Template, 2, 2, "option", 8, _forTrack1);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(30, "label");
            i0.ɵɵtext(31, "Choose a branch");
            i0.ɵɵelementStart(32, "select", 9);
            i0.ɵɵlistener("change", function JoinQueuePage_Template_select_change_32_listener() { return ctx.loadServices(); });
            i0.ɵɵelementStart(33, "option", 7);
            i0.ɵɵtext(34, "Select a branch");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(35, JoinQueuePage_For_36_Template, 2, 3, "option", 8, _forTrack1);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(37, "label");
            i0.ɵɵtext(38, "Choose a service");
            i0.ɵɵelementStart(39, "select", 10)(40, "option", 7);
            i0.ɵɵtext(41, "Select a service");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(42, JoinQueuePage_For_43_Template, 2, 2, "option", 8, _forTrack1);
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(44, JoinQueuePage_Conditional_44_Template, 5, 2, "div", 11);
            i0.ɵɵconditionalCreate(45, JoinQueuePage_Conditional_45_Template, 2, 1, "p", 12);
            i0.ɵɵelementStart(46, "button", 13);
            i0.ɵɵlistener("click", function JoinQueuePage_Template_button_click_46_listener() { return ctx.join(); });
            i0.ɵɵtext(47);
            i0.ɵɵelementStart(48, "span");
            i0.ɵɵtext(49, "\u2197");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(50, "p", 14);
            i0.ɵɵtext(51, "Availability values are shown only when returned by the backend.");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(22);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(6);
            i0.ɵɵrepeater(ctx.organizations);
            i0.ɵɵadvance(7);
            i0.ɵɵrepeater(ctx.filteredBranches());
            i0.ɵɵadvance(7);
            i0.ɵɵrepeater(ctx.services());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.selectedBranch() ? 44 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 45 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.busy() || !ctx.form.controls.serviceId.value);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1("", ctx.busy() ? "Joining\u2026" : "Confirm and join queue", " ");
        } }, dependencies: [CommonModule, ReactiveFormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JoinQueuePage, [{
        type: Component,
        args: [{ standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `
<div class="page-heading"><div><span class="eyebrow">TAKE YOUR PLACE IN LINE</span><h1>Join a queue.</h1><p>Choose a service and we'll save your place.</p></div></div><section class="panel join-panel"><div class="join-steps"><span class="step-active"><i>1</i> Organization & branch</span><span><i>2</i> Service</span><span><i>3</i> Confirm</span></div><form [formGroup]="form"><label>Choose an organization<select formControlName="organizationId" (change)="selectOrganization()"><option value="">Select an organization</option>@for(org of organizations;track org.id){<option [value]="org.id">{{org.name}}</option>}</select></label><label>Choose a branch<select formControlName="branchId" (change)="loadServices()"><option value="">Select a branch</option>@for(b of filteredBranches();track b.id){<option [value]="b.id">{{b.name}} — {{b.address}}</option>}</select></label><label>Choose a service<select formControlName="serviceId"><option value="">Select a service</option>@for(s of services();track s.id){<option [value]="s.id">{{s.name}}</option>}</select></label></form>@if(selectedBranch()){<div class="branch-wait"><span>{{selectedBranch()?.activeQueueLength??'—'}} customers waiting</span><span>{{selectedBranch()?.estimatedWaitMinutes==null?'Wait estimate unavailable':'~'+selectedBranch()?.estimatedWaitMinutes+' min'}}</span></div>}@if(error()){<p class="form-error">{{error()}}</p>}<button class="button button-primary" [disabled]="busy() || !form.controls.serviceId.value" (click)="join()">{{busy()?'Joining…':'Confirm and join queue'}} <span>↗</span></button><p class="api-note">Availability values are shown only when returned by the backend.</p></section>
` }]
    }], () => [{ type: i1.FormBuilder }, { type: i5.BranchService }, { type: i5.ServiceManagementService }, { type: i5.QueueService }, { type: i3.Router }, { type: i3.ActivatedRoute }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(JoinQueuePage, { className: "JoinQueuePage", filePath: "src/app/features/pages.ts", lineNumber: 123 }); })();
export class TrackingPage {
    constructor(route, queues, destroyRef) {
        this.route = route;
        this.queues = queues;
        this.destroyRef = destroyRef;
        this.token = signal(null, ...(ngDevMode ? [{ debugName: "token" }] : /* istanbul ignore next */ []));
        this.error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
        this.updated = signal(new Date(), ...(ngDevMode ? [{ debugName: "updated" }] : /* istanbul ignore next */ []));
        this.connection = signal('connecting', ...(ngDevMode ? [{ debugName: "connection" }] : /* istanbul ignore next */ []));
        this.cancelBusy = signal(false, ...(ngDevMode ? [{ debugName: "cancelBusy" }] : /* istanbul ignore next */ []));
    }
    ngOnInit() { const id = this.route.snapshot.paramMap.get('id'); if (!id) {
        this.error.set('A queue token was not provided.');
        return;
    } timer(0, 15000).pipe(exhaustMap(() => { this.connection.set('connecting'); return this.queues.track(id).pipe(tap(value => { this.token.set(value); this.updated.set(new Date()); this.error.set(''); this.connection.set('live'); }), catchError(() => { this.connection.set('offline'); this.error.set('We can’t reach the queue service. Automatic polling will retry.'); return EMPTY; })); }), takeUntilDestroyed(this.destroyRef)).subscribe(); }
    load() { this.error.set(''); this.connection.set('connecting'); }
    cancel() { const token = this.token(); if (!token)
        return; this.cancelBusy.set(true); this.queues.cancel(token.id).pipe(finalize(() => this.cancelBusy.set(false))).subscribe({ next: () => { this.token.set(null); this.error.set('Queue token cancelled.'); }, error: () => this.error.set('The token could not be cancelled. Please try again.') }); }
    static { this.ɵfac = function TrackingPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TrackingPage)(i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i5.QueueService), i0.ɵɵdirectiveInject(i0.DestroyRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TrackingPage, selectors: [["ng-component"]], decls: 6, vars: 1, consts: [[1, "panel", "track-panel"], ["routerLink", "/customer", 1, "back-link"], [1, "empty-state"], [1, "loading-state"], [1, "track-hero"], [1, "eyebrow"], [1, "token-number-large"], [1, "status-label"], [1, "connection-state"], [1, "track-progress"], [1, "track-step", "done"], [1, "track-step", "current"], [1, "track-step"], [1, "wait-stats"], [1, "panel-foot"], [1, "token-actions"], [1, "subtle-link", 3, "click", "disabled"], [1, "empty-icon"], [1, "button", "button-secondary", 3, "click"]], template: function TrackingPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "a", 1);
            i0.ɵɵtext(2, "\u2190 Back to overview");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(3, TrackingPage_Conditional_3_Template, 55, 21)(4, TrackingPage_Conditional_4_Template, 9, 1, "div", 2)(5, TrackingPage_Conditional_5_Template, 2, 0, "div", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.token() ? 3 : ctx.error() ? 4 : 5);
        } }, dependencies: [CommonModule, RouterLink, i4.DatePipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TrackingPage, [{
        type: Component,
        args: [{ standalone: true, imports: [CommonModule, RouterLink], template: `<section class="panel track-panel"><a routerLink="/customer" class="back-link">← Back to overview</a>@if(token()){<div class="track-hero"><span class="eyebrow">YOUR QUEUE TOKEN</span><div class="token-number-large">{{token()?.tokenNumber}}</div><span class="status-label"><i></i>{{token()?.status}}</span><p class="connection-state" [class.offline]="connection()==='offline'">{{connection()==='live'?'Live updates via polling':connection()==='offline'?'Reconnecting automatically':'Connecting…'}}</p></div><div class="track-progress"><div class="track-step done"><i>✓</i><span>Joined queue</span><small>{{token()?.joinedAt | date:'h:mm a'}}</small></div><div class="track-step current"><i>{{token()?.position}}</i><span>Waiting your turn</span><small>{{token()?.peopleAhead}} people ahead</small></div><div class="track-step"><i>3</i><span>Service begins</span></div></div><div class="wait-stats"><div><small>ESTIMATED WAIT</small><b>~{{token()?.estimatedWaitMinutes}} <span>min</span></b></div><div><small>CURRENTLY SERVING</small><b>{{token()?.currentServingToken??'—'}}</b></div></div><div class="panel-foot"><span>{{token()?.serviceName}} · {{token()?.branchName}}</span><small>Last updated {{updated()|date:'h:mm:ss a'}}</small></div><div class="token-actions"><button class="subtle-link" (click)="cancel()" [disabled]="cancelBusy()||token()?.status==='CALLED'||token()?.status==='IN_SERVICE'||token()?.status==='COMPLETED'||token()?.status==='CANCELLED'||token()?.status==='NO_SHOW'">Cancel token</button><small>{{error()}}</small></div>}@else if(error()){<div class="empty-state"><span class="empty-icon">⌑</span><h3>Queue tracking is unavailable</h3><p>{{error()}}</p><button class="button button-secondary" (click)="load()">Retry on next check</button></div>}@else{<div class="loading-state">Loading your queue…</div>}</section>` }]
    }], () => [{ type: i3.ActivatedRoute }, { type: i5.QueueService }, { type: i0.DestroyRef }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TrackingPage, { className: "TrackingPage", filePath: "src/app/features/pages.ts", lineNumber: 136 }); })();
export class StaffDashboard {
    constructor(queues, dialog, users) {
        this.queues = queues;
        this.dialog = dialog;
        this.users = users;
        this.queue = signal([], ...(ngDevMode ? [{ debugName: "queue" }] : /* istanbul ignore next */ []));
        this.current = signal(null, ...(ngDevMode ? [{ debugName: "current" }] : /* istanbul ignore next */ []));
        this.assignment = signal(null, ...(ngDevMode ? [{ debugName: "assignment" }] : /* istanbul ignore next */ []));
        this.error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
        this.notice = signal('', ...(ngDevMode ? [{ debugName: "notice" }] : /* istanbul ignore next */ []));
        this.busy = signal(false, ...(ngDevMode ? [{ debugName: "busy" }] : /* istanbul ignore next */ []));
        this.completed = signal(0, ...(ngDevMode ? [{ debugName: "completed" }] : /* istanbul ignore next */ []));
        this.noShows = signal(0, ...(ngDevMode ? [{ debugName: "noShows" }] : /* istanbul ignore next */ []));
    }
    ngOnInit() { this.refresh(); this.refreshStats(); this.users.profile().subscribe({ next: user => this.assignment.set({ branch: user.assignedBranch ?? 'Not assigned', counter: user.assignedCounter ?? 'Not assigned', service: user.assignedService ?? 'Not assigned' }), error: () => undefined }); }
    refreshStats() { const today = new Date().toISOString().slice(0, 10); this.queues.history(0, 100, { date: today }).subscribe({ next: page => { this.completed.set(page.content.filter(item => item.status === 'COMPLETED').length); this.noShows.set(page.content.filter(item => item.status === 'NO_SHOW').length); }, error: () => undefined }); }
    refresh() { this.queues.active().subscribe({ next: v => { this.queue.set(v); this.current.set(v.find(x => x.status === 'CALLED' || x.status === 'IN_SERVICE') ?? null); }, error: () => this.error.set('The active queue endpoint is not available. Connect the backend and refresh to load customers.') }); }
    action(action, id) { if (action === 'no-show') {
        this.dialog.open(ConfirmDialogComponent, { data: { title: 'Mark customer as no-show?', message: 'This removes the customer from the active queue. You can’t undo this action.', confirmLabel: 'Mark no-show' } }).afterClosed().subscribe(confirmed => { if (confirmed)
            this.performAction(action, id); });
        return;
    } this.performAction(action, id); }
    performAction(action, id) { this.busy.set(true); const request = id ? this.queues.action(id, action) : this.queues.callNext(); request.subscribe({ next: () => { this.refreshStats(); this.notice.set(action === 'complete' ? 'Service completed.' : action === 'call-next' ? 'Next customer called.' : action === 'start' ? 'Service started.' : action === 'recall' ? 'Customer recalled.' : 'Customer marked no-show.'); this.busy.set(false); this.refresh(); }, error: () => { this.error.set('That queue action could not be completed. Please try again.'); this.busy.set(false); } }); }
    static { this.ɵfac = function StaffDashboard_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StaffDashboard)(i0.ɵɵdirectiveInject(i5.QueueService), i0.ɵɵdirectiveInject(i6.MatDialog), i0.ɵɵdirectiveInject(i5.UserService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StaffDashboard, selectors: [["ng-component"]], decls: 65, vars: 12, consts: [[1, "page-heading"], [1, "eyebrow"], [1, "assignment-strip"], [1, "success-message"], [1, "kpi-grid"], [1, "kpi-card"], [1, "panel", "queue-list"], [1, "panel-head"], [1, "button", "button-primary", "button-small", 3, "click", "disabled"], [1, "empty-state"], [1, "compact-empty"], [1, "action-dock"], [3, "click", "disabled"], [1, "button", "button-primary", 3, "click", "disabled"], [1, "empty-icon"], [1, "activity-row"], [1, "queue-token"], [1, "row-actions"]], template: function StaffDashboard_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "div", 0)(1, "div")(2, "span", 1);
            i0.ɵɵtext(3, "BRANCH OPERATIONS");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(4, "h1");
            i0.ɵɵtext(5, "Today at your counter.");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(6, "p");
            i0.ɵɵtext(7, "Keep the line moving with clear, simple queue controls.");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(8, "div", 2)(9, "span");
            i0.ɵɵtext(10, "Branch ");
            i0.ɵɵdomElementStart(11, "b");
            i0.ɵɵtext(12);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(13, "span");
            i0.ɵɵtext(14, "Counter ");
            i0.ɵɵdomElementStart(15, "b");
            i0.ɵɵtext(16);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(17, "span");
            i0.ɵɵtext(18, "Service ");
            i0.ɵɵdomElementStart(19, "b");
            i0.ɵɵtext(20);
            i0.ɵɵdomElementEnd()()()();
            i0.ɵɵconditionalCreate(21, StaffDashboard_Conditional_21_Template, 2, 1, "p", 3);
            i0.ɵɵdomElementStart(22, "div", 4)(23, "div", 5)(24, "small");
            i0.ɵɵtext(25, "WAITING");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(26, "b");
            i0.ɵɵtext(27);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(28, "span");
            i0.ɵɵtext(29, "Customers in line");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(30, "div", 5)(31, "small");
            i0.ɵɵtext(32, "COMPLETED TODAY");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(33, "b");
            i0.ɵɵtext(34);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(35, "span");
            i0.ɵɵtext(36, "Services completed");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(37, "div", 5)(38, "small");
            i0.ɵɵtext(39, "NO-SHOWS TODAY");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(40, "b");
            i0.ɵɵtext(41);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(42, "span");
            i0.ɵɵtext(43, "Queue no-shows");
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵdomElementStart(44, "section", 6)(45, "div", 7)(46, "div")(47, "span", 1);
            i0.ɵɵtext(48, "LIVE QUEUE");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(49, "h2");
            i0.ɵɵtext(50, "Waiting customers");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(51, "button", 8);
            i0.ɵɵdomListener("click", function StaffDashboard_Template_button_click_51_listener() { return ctx.action("call-next"); });
            i0.ɵɵtext(52, "Call next ");
            i0.ɵɵdomElementStart(53, "span");
            i0.ɵɵtext(54, "\u2197");
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵconditionalCreate(55, StaffDashboard_Conditional_55_Template, 9, 1, "div", 9)(56, StaffDashboard_Conditional_56_Template, 2, 0)(57, StaffDashboard_Conditional_57_Template, 2, 0, "div", 10);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(58, "div", 11)(59, "button", 12);
            i0.ɵɵdomListener("click", function StaffDashboard_Template_button_click_59_listener() { let tmp_0_0; return ctx.action("recall", (tmp_0_0 = ctx.current()) == null ? null : tmp_0_0.id); });
            i0.ɵɵtext(60, "Recall");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(61, "button", 12);
            i0.ɵɵdomListener("click", function StaffDashboard_Template_button_click_61_listener() { let tmp_0_0; return ctx.action("start", (tmp_0_0 = ctx.current()) == null ? null : tmp_0_0.id); });
            i0.ɵɵtext(62, "Start service");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(63, "button", 13);
            i0.ɵɵdomListener("click", function StaffDashboard_Template_button_click_63_listener() { let tmp_0_0; return ctx.action("complete", (tmp_0_0 = ctx.current()) == null ? null : tmp_0_0.id); });
            i0.ɵɵtext(64, "Complete service");
            i0.ɵɵdomElementEnd()();
        } if (rf & 2) {
            let tmp_0_0;
            let tmp_1_0;
            let tmp_2_0;
            let tmp_9_0;
            let tmp_10_0;
            let tmp_11_0;
            i0.ɵɵadvance(12);
            i0.ɵɵtextInterpolate(((tmp_0_0 = ctx.assignment()) == null ? null : tmp_0_0.branch) ?? "Loading\u2026");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(((tmp_1_0 = ctx.assignment()) == null ? null : tmp_1_0.counter) ?? "\u2014");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(((tmp_2_0 = ctx.assignment()) == null ? null : tmp_2_0.service) ?? "\u2014");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.notice() ? 21 : -1);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.queue().length);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.completed());
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.noShows());
            i0.ɵɵadvance(10);
            i0.ɵɵdomProperty("disabled", ctx.busy());
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.error() ? 55 : ctx.queue().length ? 56 : 57);
            i0.ɵɵadvance(4);
            i0.ɵɵdomProperty("disabled", !ctx.current() || ((tmp_9_0 = ctx.current()) == null ? null : tmp_9_0.status) !== "CALLED" || ctx.busy());
            i0.ɵɵadvance(2);
            i0.ɵɵdomProperty("disabled", !ctx.current() || ((tmp_10_0 = ctx.current()) == null ? null : tmp_10_0.status) !== "CALLED" || ctx.busy());
            i0.ɵɵadvance(2);
            i0.ɵɵdomProperty("disabled", !ctx.current() || ((tmp_11_0 = ctx.current()) == null ? null : tmp_11_0.status) !== "IN_SERVICE" || ctx.busy());
        } }, dependencies: [CommonModule], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StaffDashboard, [{
        type: Component,
        args: [{ standalone: true, imports: [CommonModule], template: `<div class="page-heading"><div><span class="eyebrow">BRANCH OPERATIONS</span><h1>Today at your counter.</h1><p>Keep the line moving with clear, simple queue controls.</p></div><div class="assignment-strip"><span>Branch <b>{{assignment()?.branch??'Loading…'}}</b></span><span>Counter <b>{{assignment()?.counter??'—'}}</b></span><span>Service <b>{{assignment()?.service??'—'}}</b></span></div></div>@if(notice()){<p class="success-message">{{notice()}}</p>}<div class="kpi-grid"><div class="kpi-card"><small>WAITING</small><b>{{queue().length}}</b><span>Customers in line</span></div><div class="kpi-card"><small>COMPLETED TODAY</small><b>{{completed()}}</b><span>Services completed</span></div><div class="kpi-card"><small>NO-SHOWS TODAY</small><b>{{noShows()}}</b><span>Queue no-shows</span></div></div><section class="panel queue-list"><div class="panel-head"><div><span class="eyebrow">LIVE QUEUE</span><h2>Waiting customers</h2></div><button class="button button-primary button-small" (click)="action('call-next')" [disabled]="busy()">Call next <span>↗</span></button></div>@if(error()){<div class="empty-state"><span class="empty-icon">⌑</span><h3>Queue controls need a backend connection</h3><p>{{error()}}</p><small>Requires queue management APIs and an assigned staff account.</small></div>}@else if(queue().length){@for(item of queue();track item.id){<div class="activity-row"><span class="queue-token">{{item.tokenNumber}}</span><span><b>{{item.customerName??'Customer'}}</b><small>{{item.serviceName}} · {{item.peopleAhead}} people ahead · ~{{item.estimatedWaitMinutes}} min</small></span><div class="row-actions"><button [disabled]="busy()||item.status!=='CALLED'" (click)="action('recall',item.id)">Recall</button><button [disabled]="busy()||item.status!=='CALLED'" (click)="action('start',item.id)">Start service</button><button [disabled]="busy()||(item.status!=='WAITING'&&item.status!=='CALLED')" (click)="action('no-show',item.id)">No-show</button></div></div>}}@else{<div class="compact-empty">No waiting customers are available from the service API.</div>}</section><div class="action-dock"><button [disabled]="!current()||current()?.status!=='CALLED'||busy()" (click)="action('recall',current()?.id)">Recall</button><button [disabled]="!current()||current()?.status!=='CALLED'||busy()" (click)="action('start',current()?.id)">Start service</button><button class="button button-primary" [disabled]="!current()||current()?.status!=='IN_SERVICE'||busy()" (click)="action('complete',current()?.id)">Complete service</button></div>` }]
    }], () => [{ type: i5.QueueService }, { type: i6.MatDialog }, { type: i5.UserService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StaffDashboard, { className: "StaffDashboard", filePath: "src/app/features/pages.ts", lineNumber: 145 }); })();
export class ManagerDashboard {
    constructor(analytics) {
        this.analytics = analytics;
        this.summary = signal(null, ...(ngDevMode ? [{ debugName: "summary" }] : /* istanbul ignore next */ []));
        this.charts = signal(null, ...(ngDevMode ? [{ debugName: "charts" }] : /* istanbul ignore next */ []));
        this.error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
        this.chartOptions = { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { display: false } }, y: { beginAtZero: true } } };
        this.doughnutOptions = { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } };
    }
    ngOnInit() { this.analytics.summary().subscribe({ next: v => this.summary.set(v), error: () => this.error.set('Analytics data is not available yet.') }); this.analytics.charts().subscribe({ next: v => this.charts.set(v), error: () => this.error.set('Chart data is not available yet.') }); }
    metric(key) { return this.summary()?.[key] ?? (this.summary() ? '—' : '—'); }
    hasSeries(series) { return !!series && series.labels.length > 0 && series.values.length > 0; }
    barData(series) { return { labels: series?.labels ?? [], datasets: [{ label: 'Backend data', data: series?.values ?? [], backgroundColor: '#5d88c4', borderRadius: 5 }] }; }
    doughnutData(series) { return { labels: series?.labels ?? [], datasets: [{ data: series?.values ?? [], backgroundColor: ['#5d88c4', '#7db395', '#f0bc77', '#b3a1df', '#d58e84'] }] }; }
    static { this.ɵfac = function ManagerDashboard_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ManagerDashboard)(i0.ɵɵdirectiveInject(i5.AnalyticsService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ManagerDashboard, selectors: [["ng-component"]], decls: 107, vars: 17, consts: [[1, "page-heading"], [1, "eyebrow"], [1, "date-select"], [1, "kpi-grid"], [1, "kpi-card"], [1, "dashboard-grid", "manager-grid"], [1, "panel", "chart-panel"], [1, "panel-head"], [1, "api-tag"], [1, "chart-canvas"], [1, "empty-chart"], [1, "panel", "metric-panel"], [1, "metric-line"], ["class", "inline-error", 4, "ngIf"], ["baseChart", "", "type", "bar", 3, "data", "options"], ["baseChart", "", "type", "doughnut", 3, "data", "options"], [1, "inline-error"]], template: function ManagerDashboard_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div")(2, "span", 1);
            i0.ɵɵtext(3, "OPERATIONS OVERVIEW");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h1");
            i0.ɵɵtext(5, "Good day. Here's your branch at a glance.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵtext(7, "Operational performance and customer flow for today.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "span", 2);
            i0.ɵɵtext(9, "Today\u2304");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "div", 3)(11, "div", 4)(12, "small");
            i0.ɵɵtext(13, "CUSTOMERS TODAY");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "b");
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "span");
            i0.ɵɵtext(17, "Live from operations");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "div", 4)(19, "small");
            i0.ɵɵtext(20, "WAITING NOW");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "b");
            i0.ɵɵtext(22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "span");
            i0.ɵɵtext(24, "Across active queues");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "div", 4)(26, "small");
            i0.ɵɵtext(27, "SERVED TODAY");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "b");
            i0.ɵɵtext(29);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "span");
            i0.ɵɵtext(31, "Completed services");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(32, "div", 4)(33, "small");
            i0.ɵɵtext(34, "AVG. WAIT TIME");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "b");
            i0.ɵɵtext(36);
            i0.ɵɵelementStart(37, "small");
            i0.ɵɵtext(38, " min");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(39, "span");
            i0.ɵɵtext(40, "Across services");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(41, "div", 5)(42, "section", 6)(43, "div", 7)(44, "div")(45, "span", 1);
            i0.ɵɵtext(46, "CUSTOMER FLOW");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "h2");
            i0.ɵɵtext(48, "Customers served per hour");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(49, "span", 8);
            i0.ɵɵtext(50, "LIVE DATA");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(51, ManagerDashboard_Conditional_51_Template, 2, 2, "div", 9)(52, ManagerDashboard_Conditional_52_Template, 2, 0, "div", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "section", 6)(54, "span", 1);
            i0.ɵɵtext(55, "SERVICE PERFORMANCE");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "h2");
            i0.ɵɵtext(57, "Average wait by service");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(58, ManagerDashboard_Conditional_58_Template, 2, 2, "div", 9)(59, ManagerDashboard_Conditional_59_Template, 2, 0, "div", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "section", 6)(61, "span", 1);
            i0.ɵɵtext(62, "QUEUE VOLUME");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(63, "h2");
            i0.ɵɵtext(64, "Daily volume");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(65, ManagerDashboard_Conditional_65_Template, 2, 2, "div", 9)(66, ManagerDashboard_Conditional_66_Template, 2, 0, "div", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(67, "section", 6)(68, "span", 1);
            i0.ɵɵtext(69, "COUNTER UTILIZATION");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(70, "h2");
            i0.ɵɵtext(71, "Utilization by counter");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(72, ManagerDashboard_Conditional_72_Template, 2, 2, "div", 9)(73, ManagerDashboard_Conditional_73_Template, 2, 0, "div", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(74, "section", 6)(75, "span", 1);
            i0.ɵɵtext(76, "QUEUE STATUS");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(77, "h2");
            i0.ɵɵtext(78, "Status distribution");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(79, ManagerDashboard_Conditional_79_Template, 2, 2, "div", 9)(80, ManagerDashboard_Conditional_80_Template, 2, 0, "div", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(81, "section", 11)(82, "span", 1);
            i0.ɵɵtext(83, "SERVICE PERFORMANCE");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(84, "h2");
            i0.ɵɵtext(85, "Branch health");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(86, "div", 12)(87, "span");
            i0.ɵɵtext(88, "Average service duration");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(89, "b");
            i0.ɵɵtext(90);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(91, "div", 12)(92, "span");
            i0.ɵɵtext(93, "Active counters");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(94, "b");
            i0.ɵɵtext(95);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(96, "div", 12)(97, "span");
            i0.ɵɵtext(98, "No-show rate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(99, "b");
            i0.ɵɵtext(100);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(101, "div", 12)(102, "span");
            i0.ɵɵtext(103, "Counter utilization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(104, "b");
            i0.ɵɵtext(105);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(106, ManagerDashboard_p_106_Template, 2, 1, "p", 13);
        } if (rf & 2) {
            let tmp_4_0;
            let tmp_5_0;
            let tmp_6_0;
            let tmp_7_0;
            let tmp_8_0;
            i0.ɵɵadvance(15);
            i0.ɵɵtextInterpolate(ctx.metric("customersToday"));
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.metric("customersWaiting"));
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.metric("customersServed"));
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.metric("averageWaitingMinutes"));
            i0.ɵɵadvance(15);
            i0.ɵɵconditional(ctx.hasSeries((tmp_4_0 = ctx.charts()) == null ? null : tmp_4_0.servedPerHour) ? 51 : 52);
            i0.ɵɵadvance(7);
            i0.ɵɵconditional(ctx.hasSeries((tmp_5_0 = ctx.charts()) == null ? null : tmp_5_0.averageWaitByService) ? 58 : 59);
            i0.ɵɵadvance(7);
            i0.ɵɵconditional(ctx.hasSeries((tmp_6_0 = ctx.charts()) == null ? null : tmp_6_0.dailyVolume) ? 65 : 66);
            i0.ɵɵadvance(7);
            i0.ɵɵconditional(ctx.hasSeries((tmp_7_0 = ctx.charts()) == null ? null : tmp_7_0.counterUtilization) ? 72 : 73);
            i0.ɵɵadvance(7);
            i0.ɵɵconditional(ctx.hasSeries((tmp_8_0 = ctx.charts()) == null ? null : tmp_8_0.queueStatuses) ? 79 : 80);
            i0.ɵɵadvance(11);
            i0.ɵɵtextInterpolate2("", ctx.metric("averageServiceMinutes"), "", ctx.summary() ? " min" : "\u2014");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.metric("activeCounters"));
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate2("", ctx.metric("noShowPercentage"), "", ctx.summary() ? "%" : "\u2014");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate2("", ctx.metric("counterUtilization"), "", ctx.summary() ? "%" : "\u2014");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error());
        } }, dependencies: [CommonModule, i4.NgIf, BaseChartDirective], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ManagerDashboard, [{
        type: Component,
        args: [{ standalone: true, imports: [CommonModule, BaseChartDirective], template: `<div class="page-heading"><div><span class="eyebrow">OPERATIONS OVERVIEW</span><h1>Good day. Here's your branch at a glance.</h1><p>Operational performance and customer flow for today.</p></div><span class="date-select">Today⌄</span></div><div class="kpi-grid"><div class="kpi-card"><small>CUSTOMERS TODAY</small><b>{{metric('customersToday')}}</b><span>Live from operations</span></div><div class="kpi-card"><small>WAITING NOW</small><b>{{metric('customersWaiting')}}</b><span>Across active queues</span></div><div class="kpi-card"><small>SERVED TODAY</small><b>{{metric('customersServed')}}</b><span>Completed services</span></div><div class="kpi-card"><small>AVG. WAIT TIME</small><b>{{metric('averageWaitingMinutes')}}<small> min</small></b><span>Across services</span></div></div><div class="dashboard-grid manager-grid"><section class="panel chart-panel"><div class="panel-head"><div><span class="eyebrow">CUSTOMER FLOW</span><h2>Customers served per hour</h2></div><span class="api-tag">LIVE DATA</span></div>@if(hasSeries(charts()?.servedPerHour)){<div class="chart-canvas"><canvas baseChart [data]="barData(charts()?.servedPerHour)" [options]="chartOptions" type="bar"></canvas></div>}@else{<div class="empty-chart">No hourly analytics returned by the backend.</div>}</section><section class="panel chart-panel"><span class="eyebrow">SERVICE PERFORMANCE</span><h2>Average wait by service</h2>@if(hasSeries(charts()?.averageWaitByService)){<div class="chart-canvas"><canvas baseChart [data]="barData(charts()?.averageWaitByService)" [options]="chartOptions" type="bar"></canvas></div>}@else{<div class="empty-chart">No service wait data is available.</div>}</section><section class="panel chart-panel"><span class="eyebrow">QUEUE VOLUME</span><h2>Daily volume</h2>@if(hasSeries(charts()?.dailyVolume)){<div class="chart-canvas"><canvas baseChart [data]="barData(charts()?.dailyVolume)" [options]="chartOptions" type="bar"></canvas></div>}@else{<div class="empty-chart">No daily queue volume is available.</div>}</section><section class="panel chart-panel"><span class="eyebrow">COUNTER UTILIZATION</span><h2>Utilization by counter</h2>@if(hasSeries(charts()?.counterUtilization)){<div class="chart-canvas"><canvas baseChart [data]="barData(charts()?.counterUtilization)" [options]="chartOptions" type="bar"></canvas></div>}@else{<div class="empty-chart">No counter utilization data is available.</div>}</section><section class="panel chart-panel"><span class="eyebrow">QUEUE STATUS</span><h2>Status distribution</h2>@if(hasSeries(charts()?.queueStatuses)){<div class="chart-canvas"><canvas baseChart [data]="doughnutData(charts()?.queueStatuses)" [options]="doughnutOptions" type="doughnut"></canvas></div>}@else{<div class="empty-chart">No queue status distribution is available.</div>}</section><section class="panel metric-panel"><span class="eyebrow">SERVICE PERFORMANCE</span><h2>Branch health</h2><div class="metric-line"><span>Average service duration</span><b>{{metric('averageServiceMinutes')}}{{summary()?' min':'—'}}</b></div><div class="metric-line"><span>Active counters</span><b>{{metric('activeCounters')}}</b></div><div class="metric-line"><span>No-show rate</span><b>{{metric('noShowPercentage')}}{{summary()?'%':'—'}}</b></div><div class="metric-line"><span>Counter utilization</span><b>{{metric('counterUtilization')}}{{summary()?'%':'—'}}</b></div></section></div><p class="inline-error" *ngIf="error()">{{error()}} Analytics are shown only when provided by the backend.</p>` }]
    }], () => [{ type: i5.AnalyticsService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ManagerDashboard, { className: "ManagerDashboard", filePath: "src/app/features/pages.ts", lineNumber: 156 }); })();
export class ManagementPage {
    constructor(route, fb, api) {
        this.route = route;
        this.fb = fb;
        this.api = api;
        this.items = signal([], ...(ngDevMode ? [{ debugName: "items" }] : /* istanbul ignore next */ []));
        this.message = signal('', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
        this.failed = signal(false, ...(ngDevMode ? [{ debugName: "failed" }] : /* istanbul ignore next */ []));
        this.loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
        this.saving = signal(false, ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
        this.editing = signal(false, ...(ngDevMode ? [{ debugName: "editing" }] : /* istanbul ignore next */ []));
        this.editingId = signal(null, ...(ngDevMode ? [{ debugName: "editingId" }] : /* istanbul ignore next */ []));
        this.editForm = new FormRecord({});
        this.searchForm = this.fb.group({ query: [''] });
        this.fields = this.fieldsFor(this.route.snapshot.data['endpoint']);
        this.load();
    }
    get title() { return this.route.snapshot.data['title'] ?? 'Management'; }
    get endpoint() { return `${environment.apiBaseUrl}/${this.route.snapshot.data['endpoint'] ?? 'management'}`; }
    get addLabel() { return `Add ${this.title.toLowerCase().replace(/s$/, '')}`; }
    resource() { return this.route.snapshot.data['endpoint']; }
    load() { this.loading.set(true); this.api.list(this.resource(), this.searchForm.controls.query.value ?? '').pipe(finalize(() => this.loading.set(false))).subscribe({ next: v => { this.items.set(v); this.failed.set(false); this.message.set(''); }, error: () => { this.failed.set(true); this.message.set(`The ${this.title.toLowerCase()} endpoint is unavailable. Configure the matching backend contract.`); } }); }
    create() { this.editingId.set(null); this.buildForm(); this.editing.set(true); this.message.set(''); }
    edit(item) { this.editingId.set(String(item['id'] ?? '')); this.buildForm(item); this.editing.set(true); this.message.set(''); }
    save() { if (this.editForm.invalid) {
        this.editForm.markAllAsTouched();
        return;
    } this.saving.set(true); const values = this.editForm.getRawValue(); const payload = {}; for (const field of this.fields) {
        const value = values[field.name];
        if (field.type === 'number')
            payload[field.name] = value === '' ? null : Number(value);
        else if ((field.name === 'serviceIds' || field.name === 'holidayDates') && typeof value === 'string')
            payload[field.name] = value.split(',').map(part => part.trim()).filter(Boolean);
        else
            payload[field.name] = value;
    } this.api.save(this.resource(), payload, this.editingId() || undefined).pipe(finalize(() => this.saving.set(false))).subscribe({ next: () => { this.failed.set(false); this.message.set(`${this.title.slice(0, -1)} saved.`); this.editing.set(false); this.load(); }, error: () => { this.failed.set(true); this.message.set(`Could not save ${this.title.toLowerCase().replace(/s$/, '')}. Check required backend fields and try again.`); } }); }
    toggle(item) { const id = String(item['id'] ?? ''); if (!id)
        return; this.api.setActive(this.resource(), id, item['active'] === false).subscribe({ next: () => this.load(), error: () => { this.failed.set(true); this.message.set('Could not update active status.'); } }); }
    buildForm(item) { for (const key of Object.keys(this.editForm.controls))
        this.editForm.removeControl(key); for (const field of this.fields) {
        const value = item?.[field.name];
        const initial = field.type === 'checkbox' ? (typeof value === 'boolean' ? value : true) : (Array.isArray(value) ? value.join(', ') : value == null ? '' : String(value));
        const validators = field.required ? [Validators.required] : [];
        if (field.type === 'number')
            validators.push(Validators.min(field.min ?? 0));
        this.editForm.addControl(field.name, new FormControl(initial, { nonNullable: true, validators }));
    } }
    fieldsFor(resource) { const byResource = { branches: [{ name: 'name', label: 'Branch name', type: 'text', required: true }, { name: 'address', label: 'Address', type: 'text', required: true }, { name: 'phone', label: 'Phone number', type: 'tel' }, { name: 'openingTime', label: 'Opening time', type: 'time' }, { name: 'closingTime', label: 'Closing time', type: 'time' }, { name: 'organizationId', label: 'Organization ID', type: 'text', required: true }, { name: 'active', label: 'Status', type: 'checkbox' }], services: [{ name: 'name', label: 'Service name', type: 'text', required: true }, { name: 'description', label: 'Description', type: 'text' }, { name: 'branchId', label: 'Branch ID', type: 'text', required: true }, { name: 'averageDurationMinutes', label: 'Average service duration (minutes)', type: 'number', required: true }, { name: 'maxQueueCapacity', label: 'Maximum queue capacity', type: 'number', required: true }, { name: 'active', label: 'Status', type: 'checkbox' }], counters: [{ name: 'name', label: 'Counter name', type: 'text', required: true }, { name: 'serviceId', label: 'Service ID', type: 'text', required: true }, { name: 'staffId', label: 'Assigned staff ID', type: 'text' }, { name: 'active', label: 'Status', type: 'checkbox' }], staff: [{ name: 'fullName', label: 'Full name', type: 'text', required: true }, { name: 'email', label: 'Email', type: 'email', required: true }, { name: 'phone', label: 'Phone number', type: 'tel' }, { name: 'branchId', label: 'Branch ID', type: 'text', required: true }, { name: 'serviceIds', label: 'Service IDs (comma separated)', type: 'text' }, { name: 'active', label: 'Status', type: 'checkbox' }], users: [{ name: 'fullName', label: 'Full name', type: 'text', required: true }, { name: 'email', label: 'Email', type: 'email', required: true }, { name: 'phone', label: 'Phone number', type: 'tel' }, { name: 'role', label: 'Role', type: 'text', required: true }, { name: 'active', label: 'Status', type: 'checkbox' }], organizations: [{ name: 'name', label: 'Organization name', type: 'text', required: true }, { name: 'type', label: 'Organization type', type: 'text' }, { name: 'address', label: 'Address', type: 'text' }, { name: 'active', label: 'Status', type: 'checkbox' }], 'queue-settings': [{ name: 'branchId', label: 'Branch ID', type: 'text', required: true }, { name: 'maxQueueCapacity', label: 'Maximum queue capacity', type: 'number', required: true }, { name: 'notifyAheadCount', label: 'Notify customers this many places ahead', type: 'number' }, { name: 'allowRemoteJoin', label: 'Remote queue joining', type: 'checkbox' }], 'operating-hours': [{ name: 'branchId', label: 'Branch ID', type: 'text', required: true }, { name: 'openingTime', label: 'Opening time', type: 'time', required: true }, { name: 'closingTime', label: 'Closing time', type: 'time', required: true }, { name: 'breakStart', label: 'Break starts', type: 'time' }, { name: 'breakEnd', label: 'Break ends', type: 'time' }, { name: 'holidayDates', label: 'Holiday dates (comma separated)', type: 'text' }] }; return byResource[resource] ?? []; }
    static { this.ɵfac = function ManagementPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ManagementPage)(i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i5.ManagementApiService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ManagementPage, selectors: [["ng-component"]], decls: 32, vars: 9, consts: [[1, "page-heading"], [1, "eyebrow"], [1, "button", "button-primary", 3, "click"], [1, "discovery-search", "management-search", 3, "ngSubmit", "formGroup"], ["formControlName", "query", 3, "placeholder"], [1, "button", "button-secondary"], [1, "management-message", 3, "inline-error"], [1, "panel", "editor-panel"], [1, "panel", "management-panel"], [1, "panel-head"], [1, "subtle-link", 3, "click"], [1, "loading-state"], [1, "empty-state"], [1, "management-message"], ["type", "button", 1, "subtle-button", 3, "click"], [1, "resource-form", 3, "ngSubmit", "formGroup"], [3, "checkbox-label"], [1, "editor-actions"], ["type", "button", 1, "button", "button-secondary", 3, "click"], [1, "button", "button-primary", 3, "disabled"], [3, "type", "formControlName", "placeholder", "min"], ["type", "checkbox", 3, "formControlName"], [1, "activity-row"], [1, "activity-icon"], [1, "activity-status"], [1, "subtle-button", 3, "click"], [1, "empty-icon"]], template: function ManagementPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div")(2, "span", 1);
            i0.ɵɵtext(3, "WORKSPACE MANAGEMENT");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h1");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵtext(7, "Manage your organization's day-to-day setup.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "button", 2);
            i0.ɵɵlistener("click", function ManagementPage_Template_button_click_8_listener() { return ctx.create(); });
            i0.ɵɵtext(9);
            i0.ɵɵelementStart(10, "span");
            i0.ɵɵtext(11, "\u2197");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(12, "form", 3);
            i0.ɵɵlistener("ngSubmit", function ManagementPage_Template_form_ngSubmit_12_listener() { return ctx.load(); });
            i0.ɵɵelementStart(13, "span");
            i0.ɵɵtext(14, "\u2315");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(15, "input", 4);
            i0.ɵɵelementStart(16, "button", 5);
            i0.ɵɵtext(17, "Search");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(18, ManagementPage_Conditional_18_Template, 2, 3, "p", 6);
            i0.ɵɵconditionalCreate(19, ManagementPage_Conditional_19_Template, 17, 7, "section", 7);
            i0.ɵɵelementStart(20, "section", 8)(21, "div", 9)(22, "div")(23, "span", 1);
            i0.ɵɵtext(24, "YOUR ORGANIZATION");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "h2");
            i0.ɵɵtext(26);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(27, "button", 10);
            i0.ɵɵlistener("click", function ManagementPage_Template_button_click_27_listener() { return ctx.load(); });
            i0.ɵɵtext(28, "Refresh \u21BB");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(29, ManagementPage_Conditional_29_Template, 2, 1, "p", 11)(30, ManagementPage_Conditional_30_Template, 2, 0)(31, ManagementPage_Conditional_31_Template, 9, 2, "div", 12);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("", ctx.title, ".");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1("", ctx.addLabel, " ");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("formGroup", ctx.searchForm);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("placeholder", i0.ɵɵinterpolate1("Search ", ctx.title.toLowerCase(), "\u2026"));
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.message() ? 18 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.editing() ? 19 : -1);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1("", ctx.title, " directory");
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.loading() ? 29 : ctx.items().length ? 30 : 31);
        } }, dependencies: [CommonModule, ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ManagementPage, [{
        type: Component,
        args: [{ standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="page-heading"><div><span class="eyebrow">WORKSPACE MANAGEMENT</span><h1>{{title}}.</h1><p>Manage your organization's day-to-day setup.</p></div><button class="button button-primary" (click)="create()">{{addLabel}} <span>↗</span></button></div><form class="discovery-search management-search" [formGroup]="searchForm" (ngSubmit)="load()"><span>⌕</span><input formControlName="query" placeholder="Search {{title.toLowerCase()}}…"><button class="button button-secondary">Search</button></form>@if(message()){<p class="management-message" [class.inline-error]="failed()">{{message()}}</p>}@if(editing()){<section class="panel editor-panel"><div class="panel-head"><div><span class="eyebrow">{{editingId()?'EDIT':'NEW'}} {{title.toUpperCase()}}</span><h2>{{editingId()?'Update':'Create'}} {{title.toLowerCase().replace(/s$/,'')}}</h2></div><button class="subtle-button" type="button" (click)="editing.set(false)">Close</button></div><form [formGroup]="editForm" (ngSubmit)="save()" class="resource-form">@for(field of fields;track field.name){<label [class.checkbox-label]="field.type==='checkbox'">{{field.label}}@if(field.type==='checkbox'){<input type="checkbox" [formControlName]="field.name"> <span>Active</span>}@else{<input [type]="field.type" [formControlName]="field.name" [placeholder]="field.placeholder??''" [min]="field.type==='number'?1:null">}</label>}<div class="editor-actions"><button class="button button-secondary" type="button" (click)="editing.set(false)">Cancel</button><button class="button button-primary" [disabled]="saving()">{{saving()?'Saving…':'Save changes'}}</button></div></form></section>}<section class="panel management-panel"><div class="panel-head"><div><span class="eyebrow">YOUR ORGANIZATION</span><h2>{{title}} directory</h2></div><button class="subtle-link" (click)="load()">Refresh ↻</button></div>@if(loading()){<p class="loading-state">Loading {{title.toLowerCase()}}…</p>}@else if(items().length){@for(item of items();track item['id']){<div class="activity-row"><span class="activity-icon">◈</span><span><b>{{item['name']??item['fullName']??item['tokenNumber']}}</b><small>{{item['address']??item['email']??item['status']}}</small></span><span class="activity-status">{{item['active']===false?'Inactive':'Active'}}</span><button class="subtle-link" (click)="edit(item)">Edit</button><button class="subtle-button" (click)="toggle(item)">{{item['active']===false?'Activate':'Deactivate'}}</button></div>}}@else{<div class="empty-state"><span class="empty-icon">⌕</span><h3>No {{title.toLowerCase()}} to show</h3><p>Create the first entry or check the backend connection.</p><small>Integration endpoint: {{endpoint}}</small></div>}</section>` }]
    }], () => [{ type: i3.ActivatedRoute }, { type: i1.FormBuilder }, { type: i5.ManagementApiService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ManagementPage, { className: "ManagementPage", filePath: "src/app/features/pages.ts", lineNumber: 167 }); })();
export class ForbiddenPage {
    static { this.ɵfac = function ForbiddenPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ForbiddenPage)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ForbiddenPage, selectors: [["ng-component"]], decls: 9, vars: 0, consts: [[1, "empty-panel"], ["routerLink", "/", 1, "button", "button-primary"]], template: function ForbiddenPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "span");
            i0.ɵɵtext(2, "\u2311");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "h2");
            i0.ɵɵtext(4, "You're not allowed to view this page.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p");
            i0.ɵɵtext(6, "Your account doesn't have permission to access this area.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "a", 1);
            i0.ɵɵtext(8, "Return home");
            i0.ɵɵelementEnd()();
        } }, dependencies: [RouterLink], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ForbiddenPage, [{
        type: Component,
        args: [{ standalone: true, imports: [RouterLink], template: `<section class="empty-panel"><span>⌑</span><h2>You're not allowed to view this page.</h2><p>Your account doesn't have permission to access this area.</p><a class="button button-primary" routerLink="/">Return home</a></section>` }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ForbiddenPage, { className: "ForbiddenPage", filePath: "src/app/features/pages.ts", lineNumber: 183 }); })();
export class NotFoundPage {
    static { this.ɵfac = function NotFoundPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NotFoundPage)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NotFoundPage, selectors: [["ng-component"]], decls: 9, vars: 0, consts: [[1, "empty-panel"], ["routerLink", "/", 1, "button", "button-primary"]], template: function NotFoundPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "span");
            i0.ɵɵtext(2, "\u2315");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "h2");
            i0.ɵɵtext(4, "We couldn't find that page.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p");
            i0.ɵɵtext(6, "The link may be out of date or the page may have moved.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "a", 1);
            i0.ɵɵtext(8, "Return home");
            i0.ɵɵelementEnd()();
        } }, dependencies: [RouterLink], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotFoundPage, [{
        type: Component,
        args: [{ standalone: true, imports: [RouterLink], template: `<section class="empty-panel"><span>⌕</span><h2>We couldn't find that page.</h2><p>The link may be out of date or the page may have moved.</p><a class="button button-primary" routerLink="/">Return home</a></section>` }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NotFoundPage, { className: "NotFoundPage", filePath: "src/app/features/pages.ts", lineNumber: 184 }); })();
