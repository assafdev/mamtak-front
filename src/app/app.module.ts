import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AccountService } from './account/account.service';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BlockImageComponent } from './block-screen/block-image.component';
import { AppRoutingModule } from './app-routing.module';
import { TreeTableModule, SharedModule} from 'primeng/primeng';
import { ContextMenuModule, GrowlModule } from 'primeng/primeng';
import { AccountsTreeTableComponent } from './account/accounts-treetable.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockImageComponent,
    AccountsTreeTableComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    TreeTableModule,
    SharedModule,
    ContextMenuModule,
    GrowlModule
    ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule {
}



