import {Component , Input, OnInit} from '@angular/core';
import {Account} from '../account';
import { AccountService } from '../account.service';


@Component({
    selector: 'app-banktable',
    templateUrl: '../bank/bank-table.component.html',
})

export class BankTableComponent implements OnInit {
     accounts: Account[] = [];

     constructor(private accountService: AccountService) { }
         ngOnInit(): void {
            this.accountService.getAccounts().then(accounts => this.accounts  = accounts.slice(1, 5));
           this.accountService.getAccountsResponsibilityFromHttp().subscribe(responseData => this.accounts = responseData);

         }

}
