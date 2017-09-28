import { Injectable } from '@angular/core';
import {Account} from './account';
import {ACCOUNTS} from '../account/mock-accounts';

import { Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AccountService {

    private responsibilitiesUrl = 'api/accounts/all';
    private localApiData = 'apidata/respos.json';

    constructor(private http: Http) {

    }

    getAccounts(): Promise<Account[]> {
        return Promise.resolve(ACCOUNTS);
    }

    getAccount(id: number): Promise<Account> {
        return this.getAccounts().then(accounts => accounts.find(account => account.id === id));
    }

    getAccountsResponsibilityFromHttp() {
        return this.http.get(this.localApiData).map(response => response.json());
    }
}
