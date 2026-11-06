import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
export class ConfirmDialogComponent {
    constructor(data) {
        this.data = data;
    }
    static { this.ɵfac = function ConfirmDialogComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ConfirmDialogComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ConfirmDialogComponent, selectors: [["ng-component"]], decls: 10, vars: 5, consts: [["mat-dialog-title", ""], ["align", "end"], ["mat-button", "", 3, "mat-dialog-close"], ["mat-flat-button", "", "color", "primary", 3, "mat-dialog-close"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h2", 0);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "mat-dialog-content")(3, "p");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "mat-dialog-actions", 1)(6, "button", 2);
            i0.ɵɵtext(7, "Cancel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "button", 3);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.data.title);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.data.message);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("mat-dialog-close", false);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("mat-dialog-close", true);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.data.confirmLabel ?? "Confirm");
        } }, dependencies: [MatDialogModule, i1.MatDialogClose, i1.MatDialogTitle, i1.MatDialogActions, i1.MatDialogContent, MatButtonModule, i2.MatButton], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfirmDialogComponent, [{
        type: Component,
        args: [{
                standalone: true,
                imports: [MatDialogModule, MatButtonModule],
                template: `<h2 mat-dialog-title>{{data.title}}</h2><mat-dialog-content><p>{{data.message}}</p></mat-dialog-content><mat-dialog-actions align="end"><button mat-button [mat-dialog-close]="false">Cancel</button><button mat-flat-button color="primary" [mat-dialog-close]="true">{{data.confirmLabel ?? 'Confirm'}}</button></mat-dialog-actions>`
            }]
    }], () => [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ConfirmDialogComponent, { className: "ConfirmDialogComponent", filePath: "src/app/shared/components/confirm-dialog.component.ts", lineNumber: 12 }); })();
