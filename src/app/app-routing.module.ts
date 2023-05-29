import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { BudgetsComponent } from './budgets/budgets.component';

const routes: Routes = [{path:'budgets', component:BudgetsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
