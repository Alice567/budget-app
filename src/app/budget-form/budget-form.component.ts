import { Component, Optional, Inject, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BudgetModel } from '../models/budget.model';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormComponent implements OnInit{
  budgetForm = new FormGroup({

    id: new FormControl('', Validators.required),
    //VALIDARE: type si account sunt de tip enum si nu le-am putut da validarea
    type: new FormControl('', Validators.required),
    account: new FormControl('', Validators.required),
    value : new FormControl('', Validators.required),
    product: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)


  })
  currentBudget:BudgetModel;
  constructor(
public dialogRef: MatDialogRef<BudgetFormComponent>,
@Optional() @Inject(MAT_DIALOG_DATA) public data:BudgetModel
     ) {
console.log(data);
this.currentBudget = data;
     } 
  ngOnInit(): void {
  this.budgetForm.controls.type.setValue(this.currentBudget.type);
  this.budgetForm.controls.value.setValue(this.currentBudget.value.toString());
  this.budgetForm.controls.account.setValue(this.currentBudget.account);
  this.budgetForm.controls.product.setValue(this.currentBudget.product);
  this.budgetForm.controls.description.setValue(this.currentBudget.description);
  }
  onSubmit(){
    console.log("submit");
    const updatedBudget ={
      id: this.budgetForm.controls.id.getRawValue(),
    type: this.budgetForm.controls.type.getRawValue(),
    account: this.budgetForm.controls.account.getRawValue(),
    value : this.budgetForm.controls.value.getRawValue(),
    product: this.budgetForm.controls.product.getRawValue(),
    description: this.budgetForm.controls.description.getRawValue(),
    }
    this.dialogRef.close({event:'submit',data: updatedBudget})
  }
cancel():void{
this.dialogRef.close();
}
}
