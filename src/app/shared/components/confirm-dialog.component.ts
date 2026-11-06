import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export interface ConfirmDialogData { title: string; message: string; confirmLabel?: string; }

@Component({
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  template: `<h2 mat-dialog-title>{{data.title}}</h2><mat-dialog-content><p>{{data.message}}</p></mat-dialog-content><mat-dialog-actions align="end"><button mat-button [mat-dialog-close]="false">Cancel</button><button mat-flat-button color="primary" [mat-dialog-close]="true">{{data.confirmLabel ?? 'Confirm'}}</button></mat-dialog-actions>`
})
export class ConfirmDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) readonly data: ConfirmDialogData) {}
}
