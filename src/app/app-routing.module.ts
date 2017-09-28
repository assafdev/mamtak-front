import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { BlockImageComponent } from './block-screen/block-image.component';
import { AccountsTreeTableComponent } from './account/accounts-treetable.component';
const routes: Routes = [
    { path: '', redirectTo: '/blockscreen', pathMatch: 'full' }, // this redirect to dashboard oninit index.html
    { path: 'blockscreen', component: BlockImageComponent},
    { path: 'treetable', component: AccountsTreeTableComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
