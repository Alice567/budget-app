import { Component, OnInit,ViewChild } from '@angular/core';
import { BudgetsApiService } from '../services/budgets-api.service';
import { BudgetModel } from '../models/budget.model';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.css']
})
export class BudgetsComponent implements OnInit{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['id' , 'type', 'value', 'account', 'product' , 'description' , 'actions'];
  dataSource: any;
  
  constructor(private budgetsApi:BudgetsApiService){

  }
 

ngOnInit(): void {
  this.budgetsApi.getAll().subscribe(res =>{
    console.log(res);
    this.dataSource=new MatTableDataSource<BudgetModel>(res.map((budget:any)=>{
      return {
        id: budget.id,
        type: budget.type,
        account: budget.account,
        value: budget.value,
        product: budget.info.product,
        description: budget.info.description
  

      }
    }))
    this.dataSource.paginator = this.paginator;
  });
}
  update(): void{
    console.log("Updated !")
  }
}