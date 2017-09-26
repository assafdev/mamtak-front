import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AccountDetailComponent } from './account-detail.component';
import { AccountsComponent } from './accounts.component';
import { AccountService } from './account.service';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountDetailComponent,
    AccountsComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        // this redirect to dashboard oninit index.html
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'accounts',
        component: AccountsComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
    ])
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule {
}



