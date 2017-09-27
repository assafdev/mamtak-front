import { Injectable } from '@angular/core';
import {Account} from './account';
import {ACCOUNTS} from '../account/mock-accounts';

import { Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AccountService {

    private responsibilitiesUrl = 'api/accounts/all';
    private localApiData = 'app/apidata/respos.json';

    constructor(private http: Http) {

    }

    getAccounts(): Promise<Account[]> {
        return Promise.resolve(ACCOUNTS);
    }

    getAccountsResponsibilityFromHttp() {
        return this.http.get(this.localApiData).map(response => response.json());
    }
}