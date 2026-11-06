import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
export class BusinessPortalPage {
    scrollToSection(event, sectionId) {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (!section)
            return;
        history.replaceState(null, '', `/business#${sectionId}`);
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    static { this.ɵfac = function BusinessPortalPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BusinessPortalPage)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BusinessPortalPage, selectors: [["ng-component"]], decls: 163, vars: 0, consts: [[1, "business-site"], [1, "business-nav"], ["routerLink", "/", "aria-label", "QueueLess home", 1, "business-brand"], ["aria-label", "Business navigation"], ["href", "/business#business-tools", 3, "click"], ["href", "/business#business-benefits", 3, "click"], ["routerLink", "/"], ["routerLink", "/business/login", 1, "business-login"], [1, "business-hero"], [1, "business-copy"], [1, "business-eyebrow"], [1, "business-actions"], ["routerLink", "/business/login", 1, "business-primary"], ["href", "/business#business-tools", 1, "business-secondary", 3, "click"], [1, "business-assurance"], ["aria-label", "Illustration of the business queue dashboard", 1, "ops-preview"], [1, "ops-window"], [1, "ops-top"], [1, "ops-mark"], [1, "ops-live"], [1, "ops-title"], [1, "ops-date"], [1, "ops-stats"], [1, "ops-queue"], [1, "ops-token"], [1, "ops-action"], [1, "ops-note"], ["id", "business-tools", 1, "business-tools"], [1, "business-section-head"], [1, "business-cards"], [1, "tool-icon"], ["routerLink", "/business/login"], ["id", "business-benefits", 1, "business-benefits"], [1, "business-footer"], ["routerLink", "/business", 1, "business-brand"], [1, "business-credit"]], template: function BusinessPortalPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main", 0)(1, "header", 1)(2, "a", 2)(3, "span");
            i0.ɵɵtext(4, "Q");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(5, "QueueLess ");
            i0.ɵɵelementStart(6, "small");
            i0.ɵɵtext(7, "FOR BUSINESS");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "nav", 3)(9, "a", 4);
            i0.ɵɵlistener("click", function BusinessPortalPage_Template_a_click_9_listener($event) { return ctx.scrollToSection($event, "business-tools"); });
            i0.ɵɵtext(10, "Platform");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "a", 5);
            i0.ɵɵlistener("click", function BusinessPortalPage_Template_a_click_11_listener($event) { return ctx.scrollToSection($event, "business-benefits"); });
            i0.ɵɵtext(12, "Benefits");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "a", 6);
            i0.ɵɵtext(14, "For customers");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "a", 7);
            i0.ɵɵtext(16, "Business sign in ");
            i0.ɵɵelementStart(17, "span");
            i0.ɵɵtext(18, "\u2192");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(19, "section", 8)(20, "div", 9)(21, "span", 10);
            i0.ɵɵelement(22, "i");
            i0.ɵɵtext(23, " QUEUE OPERATIONS, MADE SIMPLE");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "h1");
            i0.ɵɵtext(25, "A smoother queue.");
            i0.ɵɵelement(26, "br");
            i0.ɵɵelementStart(27, "em");
            i0.ɵɵtext(28, "A better business day.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(29, "p");
            i0.ɵɵtext(30, "Give your team one place to call customers, manage counters, and keep every service moving. Give customers their time back.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "div", 11)(32, "a", 12);
            i0.ɵɵtext(33, "Open your workspace ");
            i0.ɵɵelementStart(34, "span");
            i0.ɵɵtext(35, "\u2192");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(36, "a", 13);
            i0.ɵɵlistener("click", function BusinessPortalPage_Template_a_click_36_listener($event) { return ctx.scrollToSection($event, "business-tools"); });
            i0.ɵɵtext(37, "Explore the platform \u2193");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(38, "div", 14)(39, "span");
            i0.ɵɵtext(40, "\u2713");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(41, " Your operational data stays connected to your own backend.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(42, "div", 15)(43, "div", 16)(44, "div", 17)(45, "span", 18);
            i0.ɵɵtext(46, "Q");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "b");
            i0.ɵɵtext(48, "QueueLess Operations");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(49, "span", 19);
            i0.ɵɵelement(50, "i");
            i0.ɵɵtext(51, " LIVE QUEUE");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(52, "div", 20)(53, "div")(54, "small");
            i0.ɵɵtext(55, "BRANCH WORKSPACE");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "h2");
            i0.ɵɵtext(57, "Today at your counter");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(58, "span", 21);
            i0.ɵɵtext(59, "Today");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(60, "div", 22)(61, "div")(62, "small");
            i0.ɵɵtext(63, "WAITING");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(64, "b");
            i0.ɵɵtext(65, "\u2014");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(66, "span");
            i0.ɵɵtext(67, "Live queue");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(68, "div")(69, "small");
            i0.ɵɵtext(70, "IN SERVICE");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(71, "b");
            i0.ɵɵtext(72, "\u2014");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(73, "span");
            i0.ɵɵtext(74, "Current customer");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(75, "div")(76, "small");
            i0.ɵɵtext(77, "COMPLETED");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(78, "b");
            i0.ɵɵtext(79, "\u2014");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(80, "span");
            i0.ɵɵtext(81, "Today");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(82, "div", 23)(83, "div")(84, "small");
            i0.ɵɵtext(85, "ACTIVE QUEUE");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(86, "b");
            i0.ɵɵtext(87, "Customers waiting");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(88, "span", 24);
            i0.ɵɵtext(89, "Tokens load from your system");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(90, "span", 25);
            i0.ɵɵtext(91, "Call next ");
            i0.ɵɵelementStart(92, "b");
            i0.ɵɵtext(93, "\u2192");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(94, "span", 26);
            i0.ɵɵtext(95, "A clear view for every shift.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(96, "section", 27)(97, "div", 28)(98, "span", 10);
            i0.ɵɵtext(99, "BUILT FOR THE FRONT LINE");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(100, "h2");
            i0.ɵɵtext(101, "Everything your team needs to keep things moving.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(102, "p");
            i0.ɵɵtext(103, "Role-based tools let each teammate focus on the work in front of them.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(104, "div", 29)(105, "article")(106, "span", 30);
            i0.ɵɵtext(107, "\u2197");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(108, "small");
            i0.ɵɵtext(109, "FOR STAFF");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(110, "h3");
            i0.ɵɵtext(111, "Run the live queue");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(112, "p");
            i0.ɵɵtext(113, "Call the next customer, recall a token, start service, and close out visits with clear controls.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(114, "a", 31);
            i0.ɵɵtext(115, "Staff workspace \u2192");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(116, "article")(117, "span", 30);
            i0.ɵɵtext(118, "\u25A4");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(119, "small");
            i0.ɵɵtext(120, "FOR MANAGERS");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(121, "h3");
            i0.ɵɵtext(122, "Set up your branches");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(123, "p");
            i0.ɵɵtext(124, "Manage services, counters, staff assignments, operating hours, and queue settings.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(125, "a", 31);
            i0.ɵɵtext(126, "Manager workspace \u2192");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(127, "article")(128, "span", 30);
            i0.ɵɵtext(129, "\u2301");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(130, "small");
            i0.ɵɵtext(131, "FOR OPERATORS");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(132, "h3");
            i0.ɵɵtext(133, "Understand performance");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(134, "p");
            i0.ɵɵtext(135, "Review branch operations and analytics returned by your connected backend.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(136, "a", 31);
            i0.ɵɵtext(137, "View operations \u2192");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(138, "section", 32)(139, "div")(140, "span", 10);
            i0.ɵɵtext(141, "MADE FOR REAL SERVICE TEAMS");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(142, "h2");
            i0.ɵɵtext(143, "More clarity for your team.");
            i0.ɵɵelement(144, "br");
            i0.ɵɵtext(145, "Less waiting for your customers.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(146, "a", 12);
            i0.ɵɵtext(147, "Sign in to your business site ");
            i0.ɵɵelementStart(148, "span");
            i0.ɵɵtext(149, "\u2192");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(150, "footer", 33)(151, "a", 34)(152, "span");
            i0.ɵɵtext(153, "Q");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(154, "QueueLess ");
            i0.ɵɵelementStart(155, "small");
            i0.ɵɵtext(156, "FOR BUSINESS");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(157, "span");
            i0.ɵɵtext(158, "Queue operations in one workspace.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(159, "small", 35);
            i0.ɵɵtext(160, "Ongoing development by Dhaneesh");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(161, "a", 6);
            i0.ɵɵtext(162, "Go to customer site \u2192");
            i0.ɵɵelementEnd()()();
        } }, dependencies: [RouterLink], styles: ["[_nghost-%COMP%]{display:block;color:#1d2a3a}.business-site[_ngcontent-%COMP%]{min-height:100vh;background:#fff}.business-nav[_ngcontent-%COMP%]{height:78px;max-width:1190px;margin:auto;padding:0 26px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #edf0f4}.business-brand[_ngcontent-%COMP%]{display:flex;align-items:center;gap:9px;color:#183d71;font:800 19px 'Manrope',sans-serif;letter-spacing:-.7px}.business-brand[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:grid;place-items:center;width:33px;height:33px;border-radius:10px;background:#183d71;color:#fff}.business-brand[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{margin-left:5px;padding-left:12px;border-left:1px solid #dfe5ec;color:#7d8da3;font:700 8px 'DM Sans';letter-spacing:1.1px}.business-nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{display:flex;gap:30px}.business-nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .business-footer[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:last-child{color:#607087;font-size:12px}.business-nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .business-footer[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:last-child:hover{color:#3977d5}.business-login[_ngcontent-%COMP%]{border:1px solid #dfe6ef;border-radius:8px;padding:11px 14px;color:#274d7d;font-size:11px;font-weight:700}.business-login[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:10px}.business-hero[_ngcontent-%COMP%]{max-width:1190px;margin:auto;padding:68px 26px 83px;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:48px}.business-eyebrow[_ngcontent-%COMP%]{display:block;color:#6584ac;font-size:9px;font-weight:800;letter-spacing:1.6px}.business-eyebrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:inline-block;width:7px;height:7px;margin-right:8px;border-radius:50%;background:#74a2dc}.business-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:18px 0;font:750 clamp(38px,4.8vw,59px)/1.12 'Manrope',sans-serif;letter-spacing:-2.8px;color:#17365f}.business-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{color:#5c84ba;font-style:normal}.business-copy[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{max-width:490px;color:#728096;font-size:14px;line-height:1.8}.business-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:24px;margin-top:26px}.business-primary[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:19px;padding:15px 19px;border-radius:8px;background:#173d72;color:white;font-size:12px;font-weight:700}.business-primary[_ngcontent-%COMP%]:hover{background:#24518d}.business-secondary[_ngcontent-%COMP%]{color:#385b87;font-size:11px;font-weight:700}.business-assurance[_ngcontent-%COMP%]{margin-top:24px;color:#8390a1;font-size:10px}.business-assurance[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-grid;place-items:center;width:18px;height:18px;margin-right:6px;border-radius:50%;background:#e9f5ee;color:#418463}.ops-preview[_ngcontent-%COMP%]{position:relative;padding:24px 5px}.ops-window[_ngcontent-%COMP%]{padding:0 22px 20px;border:1px solid #e6ebf1;border-radius:15px;background:#fff;box-shadow:0 25px 70px #1c3b6317;transform:rotate(1deg)}.ops-top[_ngcontent-%COMP%]{height:51px;display:flex;align-items:center;gap:9px;border-bottom:1px solid #eef1f5;color:#3a526f;font-size:10px}.ops-mark[_ngcontent-%COMP%]{display:grid;place-items:center;width:23px;height:23px;border-radius:7px;background:#173d72;color:#fff;font-weight:800}.ops-live[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px;margin-left:auto;color:#4a8b69;font-size:7px;font-weight:800;letter-spacing:.5px}.ops-live[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{width:5px;height:5px;border-radius:50%;background:#5dae7e}.ops-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:22px 0 15px}.ops-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .ops-stats[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .ops-queue[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > small[_ngcontent-%COMP%]{color:#8795a6;font-size:7px;font-weight:800;letter-spacing:1px}.ops-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:5px 0 0;color:#304c70;font:700 17px 'Manrope'}.ops-date[_ngcontent-%COMP%]{border:1px solid #e7ebf0;border-radius:6px;padding:7px 10px;color:#6b7d93;font-size:8px}.ops-stats[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.ops-stats[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding:13px;border:1px solid #edf0f4;border-radius:8px}.ops-stats[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], .ops-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}.ops-stats[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{margin:8px 0 3px;color:#345a8b;font:700 23px 'Manrope'}.ops-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#98a3b0;font-size:8px}.ops-queue[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto;gap:10px;align-items:center;margin-top:15px;padding:15px;border:1px solid #edf0f4;border-radius:8px}.ops-queue[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > b[_ngcontent-%COMP%]{display:block;margin-top:6px;color:#415873;font-size:10px}.ops-token[_ngcontent-%COMP%]{color:#8997a7;font-size:8px}.ops-action[_ngcontent-%COMP%]{grid-column:2;justify-self:end;padding:8px 11px;border-radius:6px;background:#173d72;color:white;font-size:8px}.ops-action[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{margin-left:8px}.ops-note[_ngcontent-%COMP%]{position:absolute;right:-4px;bottom:0;color:#8190a3;font:italic 11px 'Manrope'}.business-tools[_ngcontent-%COMP%]{padding:72px max(calc((100% - 1138px)/2),35px);background:#f7f9fc}.business-section-head[_ngcontent-%COMP%]{text-align:center;max-width:620px;margin:0 auto 31px}.business-section-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .business-benefits[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:10px 0;color:#203d63;font:700 30px/1.25 'Manrope';letter-spacing:-1px}.business-section-head[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#7d8999;font-size:12px}.business-cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.business-cards[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{padding:21px;border:1px solid #e7ecf2;border-radius:11px;background:white}.tool-icon[_ngcontent-%COMP%]{display:grid;place-items:center;width:34px;height:34px;margin-bottom:17px;border-radius:9px;background:#eef4fc;color:#5480b5}.business-cards[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] > small[_ngcontent-%COMP%]{color:#8795a6;font-size:8px;font-weight:800;letter-spacing:1px}.business-cards[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:8px 0;color:#304c70;font:700 15px 'Manrope'}.business-cards[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{min-height:56px;color:#7b8899;font-size:10px;line-height:1.7}.business-cards[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#446c9e;font-size:10px;font-weight:700}.business-benefits[_ngcontent-%COMP%]{max-width:1138px;margin:55px auto;padding:30px 25px;display:flex;justify-content:space-between;align-items:center;gap:20px}.business-benefits[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:25px}.business-footer[_ngcontent-%COMP%]{min-height:76px;padding:15px max(calc((100% - 1138px)/2),35px);display:flex;align-items:center;justify-content:space-between;border-top:1px solid #edf0f4}.business-footer[_ngcontent-%COMP%]   .business-brand[_ngcontent-%COMP%]{font-size:15px}.business-footer[_ngcontent-%COMP%]   .business-brand[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{width:27px;height:27px}.business-footer[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:#8a96a5;font-size:10px}@media(max-width:760px){.business-nav[_ngcontent-%COMP%]{height:66px;padding:0 17px}.business-brand[_ngcontent-%COMP%]{font-size:16px}.business-brand[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:none}.business-nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{display:none}.business-hero[_ngcontent-%COMP%]{grid-template-columns:1fr;padding:45px 22px 55px;gap:22px}.business-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:42px}.ops-preview[_ngcontent-%COMP%]{padding:10px 0 25px}.ops-window[_ngcontent-%COMP%]{padding:0 13px 14px}.business-tools[_ngcontent-%COMP%]{padding:54px 20px}.business-section-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:25px}.business-cards[_ngcontent-%COMP%]{grid-template-columns:1fr}.business-cards[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{min-height:unset}.business-benefits[_ngcontent-%COMP%]{margin:30px 18px;align-items:flex-start;flex-direction:column}.business-footer[_ngcontent-%COMP%]{padding:15px 18px;gap:12px;flex-wrap:wrap}.business-footer[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:none}}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BusinessPortalPage, [{
        type: Component,
        args: [{ standalone: true, imports: [RouterLink], template: `
    <main class="business-site">
      <header class="business-nav">
        <a class="business-brand" routerLink="/" aria-label="QueueLess home"><span>Q</span>QueueLess <small>FOR BUSINESS</small></a>
        <nav aria-label="Business navigation">
          <a href="/business#business-tools" (click)="scrollToSection($event, 'business-tools')">Platform</a>
          <a href="/business#business-benefits" (click)="scrollToSection($event, 'business-benefits')">Benefits</a>
          <a routerLink="/">For customers</a>
        </nav>
        <a class="business-login" routerLink="/business/login">Business sign in <span>→</span></a>
      </header>

      <section class="business-hero">
        <div class="business-copy">
          <span class="business-eyebrow"><i></i> QUEUE OPERATIONS, MADE SIMPLE</span>
          <h1>A smoother queue.<br><em>A better business day.</em></h1>
          <p>Give your team one place to call customers, manage counters, and keep every service moving. Give customers their time back.</p>
          <div class="business-actions"><a routerLink="/business/login" class="business-primary">Open your workspace <span>→</span></a><a href="/business#business-tools" (click)="scrollToSection($event, 'business-tools')" class="business-secondary">Explore the platform ↓</a></div>
          <div class="business-assurance"><span>✓</span> Your operational data stays connected to your own backend.</div>
        </div>
        <div class="ops-preview" aria-label="Illustration of the business queue dashboard">
          <div class="ops-window"><div class="ops-top"><span class="ops-mark">Q</span><b>QueueLess Operations</b><span class="ops-live"><i></i> LIVE QUEUE</span></div>
            <div class="ops-title"><div><small>BRANCH WORKSPACE</small><h2>Today at your counter</h2></div><span class="ops-date">Today</span></div>
            <div class="ops-stats"><div><small>WAITING</small><b>—</b><span>Live queue</span></div><div><small>IN SERVICE</small><b>—</b><span>Current customer</span></div><div><small>COMPLETED</small><b>—</b><span>Today</span></div></div>
            <div class="ops-queue"><div><small>ACTIVE QUEUE</small><b>Customers waiting</b></div><span class="ops-token">Tokens load from your system</span><span class="ops-action">Call next <b>→</b></span></div>
          </div>
          <span class="ops-note">A clear view for every shift.</span>
        </div>
      </section>

      <section class="business-tools" id="business-tools"><div class="business-section-head"><span class="business-eyebrow">BUILT FOR THE FRONT LINE</span><h2>Everything your team needs to keep things moving.</h2><p>Role-based tools let each teammate focus on the work in front of them.</p></div>
        <div class="business-cards"><article><span class="tool-icon">↗</span><small>FOR STAFF</small><h3>Run the live queue</h3><p>Call the next customer, recall a token, start service, and close out visits with clear controls.</p><a routerLink="/business/login">Staff workspace →</a></article><article><span class="tool-icon">▤</span><small>FOR MANAGERS</small><h3>Set up your branches</h3><p>Manage services, counters, staff assignments, operating hours, and queue settings.</p><a routerLink="/business/login">Manager workspace →</a></article><article><span class="tool-icon">⌁</span><small>FOR OPERATORS</small><h3>Understand performance</h3><p>Review branch operations and analytics returned by your connected backend.</p><a routerLink="/business/login">View operations →</a></article></div>
      </section>

      <section class="business-benefits" id="business-benefits"><div><span class="business-eyebrow">MADE FOR REAL SERVICE TEAMS</span><h2>More clarity for your team.<br>Less waiting for your customers.</h2></div><a routerLink="/business/login" class="business-primary">Sign in to your business site <span>→</span></a></section>
      <footer class="business-footer"><a class="business-brand" routerLink="/business"><span>Q</span>QueueLess <small>FOR BUSINESS</small></a><span>Queue operations in one workspace.</span><small class="business-credit">Ongoing development by Dhaneesh</small><a routerLink="/">Go to customer site →</a></footer>
    </main>
  `, styles: ["\n    :host{display:block;color:#1d2a3a}.business-site{min-height:100vh;background:#fff}.business-nav{height:78px;max-width:1190px;margin:auto;padding:0 26px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #edf0f4}.business-brand{display:flex;align-items:center;gap:9px;color:#183d71;font:800 19px 'Manrope',sans-serif;letter-spacing:-.7px}.business-brand>span{display:grid;place-items:center;width:33px;height:33px;border-radius:10px;background:#183d71;color:#fff}.business-brand small{margin-left:5px;padding-left:12px;border-left:1px solid #dfe5ec;color:#7d8da3;font:700 8px 'DM Sans';letter-spacing:1.1px}.business-nav nav{display:flex;gap:30px}.business-nav nav a,.business-footer>a:last-child{color:#607087;font-size:12px}.business-nav nav a:hover,.business-footer>a:last-child:hover{color:#3977d5}.business-login{border:1px solid #dfe6ef;border-radius:8px;padding:11px 14px;color:#274d7d;font-size:11px;font-weight:700}.business-login span{margin-left:10px}.business-hero{max-width:1190px;margin:auto;padding:68px 26px 83px;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:48px}.business-eyebrow{display:block;color:#6584ac;font-size:9px;font-weight:800;letter-spacing:1.6px}.business-eyebrow i{display:inline-block;width:7px;height:7px;margin-right:8px;border-radius:50%;background:#74a2dc}.business-copy h1{margin:18px 0;font:750 clamp(38px,4.8vw,59px)/1.12 'Manrope',sans-serif;letter-spacing:-2.8px;color:#17365f}.business-copy h1 em{color:#5c84ba;font-style:normal}.business-copy>p{max-width:490px;color:#728096;font-size:14px;line-height:1.8}.business-actions{display:flex;align-items:center;gap:24px;margin-top:26px}.business-primary{display:inline-flex;align-items:center;gap:19px;padding:15px 19px;border-radius:8px;background:#173d72;color:white;font-size:12px;font-weight:700}.business-primary:hover{background:#24518d}.business-secondary{color:#385b87;font-size:11px;font-weight:700}.business-assurance{margin-top:24px;color:#8390a1;font-size:10px}.business-assurance span{display:inline-grid;place-items:center;width:18px;height:18px;margin-right:6px;border-radius:50%;background:#e9f5ee;color:#418463}.ops-preview{position:relative;padding:24px 5px}.ops-window{padding:0 22px 20px;border:1px solid #e6ebf1;border-radius:15px;background:#fff;box-shadow:0 25px 70px #1c3b6317;transform:rotate(1deg)}.ops-top{height:51px;display:flex;align-items:center;gap:9px;border-bottom:1px solid #eef1f5;color:#3a526f;font-size:10px}.ops-mark{display:grid;place-items:center;width:23px;height:23px;border-radius:7px;background:#173d72;color:#fff;font-weight:800}.ops-live{display:flex;align-items:center;gap:5px;margin-left:auto;color:#4a8b69;font-size:7px;font-weight:800;letter-spacing:.5px}.ops-live i{width:5px;height:5px;border-radius:50%;background:#5dae7e}.ops-title{display:flex;justify-content:space-between;align-items:center;padding:22px 0 15px}.ops-title small,.ops-stats small,.ops-queue>div>small{color:#8795a6;font-size:7px;font-weight:800;letter-spacing:1px}.ops-title h2{margin:5px 0 0;color:#304c70;font:700 17px 'Manrope'}.ops-date{border:1px solid #e7ebf0;border-radius:6px;padding:7px 10px;color:#6b7d93;font-size:8px}.ops-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.ops-stats>div{padding:13px;border:1px solid #edf0f4;border-radius:8px}.ops-stats b,.ops-stats span{display:block}.ops-stats b{margin:8px 0 3px;color:#345a8b;font:700 23px 'Manrope'}.ops-stats span{color:#98a3b0;font-size:8px}.ops-queue{display:grid;grid-template-columns:1fr auto;gap:10px;align-items:center;margin-top:15px;padding:15px;border:1px solid #edf0f4;border-radius:8px}.ops-queue>div>b{display:block;margin-top:6px;color:#415873;font-size:10px}.ops-token{color:#8997a7;font-size:8px}.ops-action{grid-column:2;justify-self:end;padding:8px 11px;border-radius:6px;background:#173d72;color:white;font-size:8px}.ops-action b{margin-left:8px}.ops-note{position:absolute;right:-4px;bottom:0;color:#8190a3;font:italic 11px 'Manrope'}.business-tools{padding:72px max(calc((100% - 1138px)/2),35px);background:#f7f9fc}.business-section-head{text-align:center;max-width:620px;margin:0 auto 31px}.business-section-head h2,.business-benefits h2{margin:10px 0;color:#203d63;font:700 30px/1.25 'Manrope';letter-spacing:-1px}.business-section-head>p{color:#7d8999;font-size:12px}.business-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.business-cards article{padding:21px;border:1px solid #e7ecf2;border-radius:11px;background:white}.tool-icon{display:grid;place-items:center;width:34px;height:34px;margin-bottom:17px;border-radius:9px;background:#eef4fc;color:#5480b5}.business-cards article>small{color:#8795a6;font-size:8px;font-weight:800;letter-spacing:1px}.business-cards h3{margin:8px 0;color:#304c70;font:700 15px 'Manrope'}.business-cards p{min-height:56px;color:#7b8899;font-size:10px;line-height:1.7}.business-cards article>a{color:#446c9e;font-size:10px;font-weight:700}.business-benefits{max-width:1138px;margin:55px auto;padding:30px 25px;display:flex;justify-content:space-between;align-items:center;gap:20px}.business-benefits h2{font-size:25px}.business-footer{min-height:76px;padding:15px max(calc((100% - 1138px)/2),35px);display:flex;align-items:center;justify-content:space-between;border-top:1px solid #edf0f4}.business-footer .business-brand{font-size:15px}.business-footer .business-brand>span{width:27px;height:27px}.business-footer>span{color:#8a96a5;font-size:10px}@media(max-width:760px){.business-nav{height:66px;padding:0 17px}.business-brand{font-size:16px}.business-brand small{display:none}.business-nav nav{display:none}.business-hero{grid-template-columns:1fr;padding:45px 22px 55px;gap:22px}.business-copy h1{font-size:42px}.ops-preview{padding:10px 0 25px}.ops-window{padding:0 13px 14px}.business-tools{padding:54px 20px}.business-section-head h2{font-size:25px}.business-cards{grid-template-columns:1fr}.business-cards p{min-height:unset}.business-benefits{margin:30px 18px;align-items:flex-start;flex-direction:column}.business-footer{padding:15px 18px;gap:12px;flex-wrap:wrap}.business-footer>span{display:none}}\n  "] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BusinessPortalPage, { className: "BusinessPortalPage", filePath: "src/app/features/business-portal.page.ts", lineNumber: 49 }); })();
