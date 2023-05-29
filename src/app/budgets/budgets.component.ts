import { Component, OnInit,ViewChild } from '@angular/core';
import { BudgetsApiService } from '../services/budgets-api.service';
import { BudgetModel } from '../models/budget.model';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import { MatDialog} from '@angular/material/dialog';
import { BudgetFormComponent } from '../budget-form/budget-form.component';
import { __values } from 'tslib';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.css']
})
export class BudgetsComponent implements OnInit{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['id' , 'type', 'value', 'account', 'product' , 'description' , 'actions'];
  dataSource: any;
  
  constructor(private budgetsApi:BudgetsApiService, private dialogRef: MatDialog){

  }


ngOnInit(): void {
  this.budgetsApi.getAll().subscribe(res =>{
    console.log(res);
    this.dataSource=new MatTableDataSource<BudgetModel>(
      res.map((budget:any)=>{
      return {
        id: budget.id,
        type: budget.type,
        account: budget.account,
        value: budget.value,
        product: budget.info.product,
        description: budget.info.description
  

      }
    }));
    this.dataSource.paginator = this.paginator;
  });
}



openDialog(budget: BudgetModel):void{
    const dialogRef = this.dialogRef.open(BudgetFormComponent,{
      width: '250px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: budget,
    }) 

     // Update button

    dialogRef.afterClosed().subscribe(result=>{
      if (result.event === 'submit'){
        this.budgetsApi.updateBudget(budget.id,result.data)
  console.log(result.data)
    }
    }
 )
  }

///TODO: Functionalitate buton add si update
// dialogRef.afterClosed().subscribe(result =>{
//   if(result.event === 'submit' && budget){
//     this.budgetsApi.updateBudget(budget.id, result.data);
//     location.reload();
//   } else if(result.event === 'add'){
//     this.budgetsApi.addBudget(result.data).subscribe();
//   }
// });
// }


deleteBudget(id: string): void {
this.budgetsApi.deleteBudget(id).subscribe() 
  location.reload();
}
}





