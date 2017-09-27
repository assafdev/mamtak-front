import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {Account} from './account';
import { AccountService } from './account.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: '../account/account-detail.component.html',
  styleUrls: ['../account/account-detail.component.css']
})


export class AccountDetailComponent implements OnInit {
    @Input() account: Account;

    constructor(private accountService: AccountService, private route: ActivatedRoute, private location: Location) {
    }

    ngOnInit(): void {
      this.route.paramMap
        .switchMap((params: ParamMap) => this.accountService.getAccount(+params.get('id')))
        .subscribe(account => this.account = account);
    }

    goBack(): void {
      this.location.back();
    }
}
