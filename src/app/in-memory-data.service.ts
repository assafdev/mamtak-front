import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const accounts = [
    { id: 0, accountArea: 'A', adminName: '1' , minCreditValue: 23 , maxCreditValue: 32
    , moneyChannel: 5031 , otherNotes: 'etc..', supervisedAccounts: []},
    { id: 1, accountArea: 'B', adminName: '2' , minCreditValue: 13 , maxCreditValue: 23
    , moneyChannel: 5030 , otherNotes: 'etc..', supervisedAccounts: []},
    { id: 2, accountArea: 'C', adminName: '3' , minCreditValue: 17 , maxCreditValue: 32
    , moneyChannel: 5032 , otherNotes: 'etc..', supervisedAccounts: []},
    { id: 3, accountArea: 'D', adminName: '4' , minCreditValue: 23 , maxCreditValue: 32
    , moneyChannel: 5555 , otherNotes: 'etc..', supervisedAccounts: []},
    { id: 4, accountArea: 'E', adminName: '5' , minCreditValue: 25 , maxCreditValue: 55
    , moneyChannel: 3010 , otherNotes: 'etc..', supervisedAccounts: []}
    ];
    return {accounts};
  }
}
