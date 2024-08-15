import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoneyComponent } from './components/money/money.component';
import { BranchComponent } from './components/branch/branch.component';
import { BranchDetailComponent } from './components/branch-detail/branch-detail.component';
import { BranchEditComponent } from './components/branch-edit/branch-edit.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Money', component: MoneyComponent},
  { path: 'Branch', component: BranchComponent },
  { path: 'BranchDetail/:id', component: BranchDetailComponent },
  { path: 'BranchEdit', component: BranchEditComponent },
  { path: '**', pathMatch: 'full', redirectTo:'Home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
