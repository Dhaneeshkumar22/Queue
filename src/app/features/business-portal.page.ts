import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
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
  `,
  styles: [`
    :host{display:block;color:#1d2a3a}.business-site{min-height:100vh;background:#fff}.business-nav{height:78px;max-width:1190px;margin:auto;padding:0 26px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #edf0f4}.business-brand{display:flex;align-items:center;gap:9px;color:#183d71;font:800 19px 'Manrope',sans-serif;letter-spacing:-.7px}.business-brand>span{display:grid;place-items:center;width:33px;height:33px;border-radius:10px;background:#183d71;color:#fff}.business-brand small{margin-left:5px;padding-left:12px;border-left:1px solid #dfe5ec;color:#7d8da3;font:700 8px 'DM Sans';letter-spacing:1.1px}.business-nav nav{display:flex;gap:30px}.business-nav nav a,.business-footer>a:last-child{color:#607087;font-size:12px}.business-nav nav a:hover,.business-footer>a:last-child:hover{color:#3977d5}.business-login{border:1px solid #dfe6ef;border-radius:8px;padding:11px 14px;color:#274d7d;font-size:11px;font-weight:700}.business-login span{margin-left:10px}.business-hero{max-width:1190px;margin:auto;padding:68px 26px 83px;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:48px}.business-eyebrow{display:block;color:#6584ac;font-size:9px;font-weight:800;letter-spacing:1.6px}.business-eyebrow i{display:inline-block;width:7px;height:7px;margin-right:8px;border-radius:50%;background:#74a2dc}.business-copy h1{margin:18px 0;font:750 clamp(38px,4.8vw,59px)/1.12 'Manrope',sans-serif;letter-spacing:-2.8px;color:#17365f}.business-copy h1 em{color:#5c84ba;font-style:normal}.business-copy>p{max-width:490px;color:#728096;font-size:14px;line-height:1.8}.business-actions{display:flex;align-items:center;gap:24px;margin-top:26px}.business-primary{display:inline-flex;align-items:center;gap:19px;padding:15px 19px;border-radius:8px;background:#173d72;color:white;font-size:12px;font-weight:700}.business-primary:hover{background:#24518d}.business-secondary{color:#385b87;font-size:11px;font-weight:700}.business-assurance{margin-top:24px;color:#8390a1;font-size:10px}.business-assurance span{display:inline-grid;place-items:center;width:18px;height:18px;margin-right:6px;border-radius:50%;background:#e9f5ee;color:#418463}.ops-preview{position:relative;padding:24px 5px}.ops-window{padding:0 22px 20px;border:1px solid #e6ebf1;border-radius:15px;background:#fff;box-shadow:0 25px 70px #1c3b6317;transform:rotate(1deg)}.ops-top{height:51px;display:flex;align-items:center;gap:9px;border-bottom:1px solid #eef1f5;color:#3a526f;font-size:10px}.ops-mark{display:grid;place-items:center;width:23px;height:23px;border-radius:7px;background:#173d72;color:#fff;font-weight:800}.ops-live{display:flex;align-items:center;gap:5px;margin-left:auto;color:#4a8b69;font-size:7px;font-weight:800;letter-spacing:.5px}.ops-live i{width:5px;height:5px;border-radius:50%;background:#5dae7e}.ops-title{display:flex;justify-content:space-between;align-items:center;padding:22px 0 15px}.ops-title small,.ops-stats small,.ops-queue>div>small{color:#8795a6;font-size:7px;font-weight:800;letter-spacing:1px}.ops-title h2{margin:5px 0 0;color:#304c70;font:700 17px 'Manrope'}.ops-date{border:1px solid #e7ebf0;border-radius:6px;padding:7px 10px;color:#6b7d93;font-size:8px}.ops-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.ops-stats>div{padding:13px;border:1px solid #edf0f4;border-radius:8px}.ops-stats b,.ops-stats span{display:block}.ops-stats b{margin:8px 0 3px;color:#345a8b;font:700 23px 'Manrope'}.ops-stats span{color:#98a3b0;font-size:8px}.ops-queue{display:grid;grid-template-columns:1fr auto;gap:10px;align-items:center;margin-top:15px;padding:15px;border:1px solid #edf0f4;border-radius:8px}.ops-queue>div>b{display:block;margin-top:6px;color:#415873;font-size:10px}.ops-token{color:#8997a7;font-size:8px}.ops-action{grid-column:2;justify-self:end;padding:8px 11px;border-radius:6px;background:#173d72;color:white;font-size:8px}.ops-action b{margin-left:8px}.ops-note{position:absolute;right:-4px;bottom:0;color:#8190a3;font:italic 11px 'Manrope'}.business-tools{padding:72px max(calc((100% - 1138px)/2),35px);background:#f7f9fc}.business-section-head{text-align:center;max-width:620px;margin:0 auto 31px}.business-section-head h2,.business-benefits h2{margin:10px 0;color:#203d63;font:700 30px/1.25 'Manrope';letter-spacing:-1px}.business-section-head>p{color:#7d8999;font-size:12px}.business-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.business-cards article{padding:21px;border:1px solid #e7ecf2;border-radius:11px;background:white}.tool-icon{display:grid;place-items:center;width:34px;height:34px;margin-bottom:17px;border-radius:9px;background:#eef4fc;color:#5480b5}.business-cards article>small{color:#8795a6;font-size:8px;font-weight:800;letter-spacing:1px}.business-cards h3{margin:8px 0;color:#304c70;font:700 15px 'Manrope'}.business-cards p{min-height:56px;color:#7b8899;font-size:10px;line-height:1.7}.business-cards article>a{color:#446c9e;font-size:10px;font-weight:700}.business-benefits{max-width:1138px;margin:55px auto;padding:30px 25px;display:flex;justify-content:space-between;align-items:center;gap:20px}.business-benefits h2{font-size:25px}.business-footer{min-height:76px;padding:15px max(calc((100% - 1138px)/2),35px);display:flex;align-items:center;justify-content:space-between;border-top:1px solid #edf0f4}.business-footer .business-brand{font-size:15px}.business-footer .business-brand>span{width:27px;height:27px}.business-footer>span{color:#8a96a5;font-size:10px}@media(max-width:760px){.business-nav{height:66px;padding:0 17px}.business-brand{font-size:16px}.business-brand small{display:none}.business-nav nav{display:none}.business-hero{grid-template-columns:1fr;padding:45px 22px 55px;gap:22px}.business-copy h1{font-size:42px}.ops-preview{padding:10px 0 25px}.ops-window{padding:0 13px 14px}.business-tools{padding:54px 20px}.business-section-head h2{font-size:25px}.business-cards{grid-template-columns:1fr}.business-cards p{min-height:unset}.business-benefits{margin:30px 18px;align-items:flex-start;flex-direction:column}.business-footer{padding:15px 18px;gap:12px;flex-wrap:wrap}.business-footer>span{display:none}}
  `],
})
export class BusinessPortalPage {
  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (!section) return;
    history.replaceState(null, '', `/business#${sectionId}`);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
