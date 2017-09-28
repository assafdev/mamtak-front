import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';

import {Account} from './account';

import 'rxjs/add/operator/map';


@Injectable()
export class AccountService {

    private responsibilitiesUrl = 'api/accounts/all';
    private localApiData = 'apidata/respos.json';

    constructor(private http: Http) {

    }

    getAccountsResponsibilityFromHttp() {
        return this.http.get(this.localApiData).map(response => response.json());
    }
}
