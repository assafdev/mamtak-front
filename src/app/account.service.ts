import { Injectable } from '@angular/core';
import {Account} from './account';
import {ACCOUNTS} from './mock-accounts';

@Injectable()
export class AccountService {
    getAccounts(): Promise<Account[]> {
        return Promise.resolve(ACCOUNTS);
    }
}
