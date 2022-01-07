import { Component, OnInit } from '@angular/core';
import { MatDialog ,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogContentComponent } from './components/dialog-content/dialog-content.component';

export interface DialogData {
  tel: string;
  name: string;
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent{
  tel?: string;
  name?: string;

  constructor(public dialog: MatDialog) { }

    openDialog(): void{

      const dialogRef = this.dialog.open(DialogContentComponent,{

        data: {name: this.name, tel: this.tel},

      });
         dialogRef.afterClosed().subscribe(
          result => {console.log('dialog Result');
          this.tel = result;
         }
      );

    }



}
