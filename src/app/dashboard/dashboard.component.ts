import { Component, OnInit } from '@angular/core';
import { Account } from '../account/account';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    accounts: Account[] = [];

    constructor(private accountService: AccountService) { }

    ngOnInit(): void {
      this.accountService.getAccounts()
        .then(accounts => this.accounts  = accounts.slice(1, 5));
    }
}
