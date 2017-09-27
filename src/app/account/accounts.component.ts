import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Account} from './account';
import { AccountService } from './account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})

export class AccountsComponent implements OnInit {
  accounts: Account[];
  selectedAccount: Account;

  constructor(private router: Router, private accountService: AccountService) {
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

  gotoDetail(): void {
    this.router.navigate(['/accountdetail', this.selectedAccount.id]);
  }
}



