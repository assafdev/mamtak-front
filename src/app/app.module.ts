import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AccountsComponent } from './account/accounts.component';
import { AccountService } from './account/account.service';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpModule } from '@angular/http';
import { BankTableComponent } from './bank/bank-table.component';
import { BlockImageComponent } from './block-screen/block-image.component';
import { AccountDetailComponent } from './account/account-detail.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AccountDetailComponent,
    AccountsComponent,
    DashboardComponent,
    BankTableComponent,
    BlockImageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule {
}



