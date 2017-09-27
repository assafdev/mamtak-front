import { Component } from '@angular/core';
import {Account} from './account';
import { AccountService } from './account.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})

export class AccountsComponent implements OnInit {
  accounts: Account[];
  selectedAccount: Account;

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(): void {
    this.accountService.getAccounts().then(accounts => this.accounts = accounts);
  }

  onSelect(account: Account): void {
    this.selectedAccount = account;
  }

}



