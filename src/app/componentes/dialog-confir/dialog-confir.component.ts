import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confir',
  templateUrl: './dialog-confir.component.html',
  styleUrls: ['./dialog-confir.component.css']
})
export class DialogConfirComponent implements OnInit {

  constructor(public dialogo: MatDialogRef<DialogConfirComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string) { }
    
  cerrarDialogo(): void {
      this.dialogo.close(false);
    }
    confirmado(): void {
      this.dialogo.close(true);
    }
  ngOnInit(): void {
  }

}
