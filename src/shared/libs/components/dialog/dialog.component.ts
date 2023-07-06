import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogProps {
  header: string
  body: string
  style: string
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})


export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogProps) { }

}
