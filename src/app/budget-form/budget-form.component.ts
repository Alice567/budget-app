import { Component, Optional, Inject} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormComponent {
  budgetForm = new FormGroup({

    id: new FormControl(''),
    type: new FormControl(''),
    account: new FormControl(''),
    value : new FormControl(''),
    product: new FormControl(''),
    description: new FormControl('')


  })
  constructor(
public dialogRef: MatDialogRef<BudgetFormComponent>,
@Optional() @Inject(MAT_DIALOG_DATA) public data:any
     ) {
console.log(data);
     } 
  
cancel():void{
this.dialogRef.close();
}
}
