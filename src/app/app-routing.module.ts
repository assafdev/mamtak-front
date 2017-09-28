import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountsComponent } from './account/accounts.component';
import { AccountDetailComponent } from './account/account-detail.component';
import { BankTableComponent } from './bank/bank-table.component';
import { BlockImageComponent } from './block-screen/block-image.component';
import { AccountsTreeTableComponent } from './account/accounts-treetable.component';
const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // this redirect to dashboard oninit index.html
    { path: 'accounts', component: AccountsComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'bank', component: BankTableComponent },
    { path: 'blockscreen', component: BlockImageComponent},
    { path: 'treetable', component: AccountsTreeTableComponent},
    { path: 'accountdetail/:id', component: AccountDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
