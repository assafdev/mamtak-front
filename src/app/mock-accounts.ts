import {Account} from './account';

export const ACCOUNTS: Account[] = [
    { id: 1, accountArea: 'Tzefet N', adminName: 'Mr. Nice' , minCreditValue: 23 , maxCreditValue: 32
        , moneyChannel: 5031 , otherNotes: 'etc..'},

    { id: 2, accountArea: 'Tzefet S', adminName: 'Mr. Pink' , minCreditValue: 13 , maxCreditValue: 23
    , moneyChannel: 5030 , otherNotes: 'etc..'},

    { id: 3, accountArea: 'Haifa N+S', adminName: 'Yakooza' , minCreditValue: 17 , maxCreditValue: 32
        , moneyChannel: 5032 , otherNotes: 'etc..'},

    { id: 4, accountArea: 'Tel Avivo Center', adminName: 'Assaf' , minCreditValue: 23 , maxCreditValue: 32
    , moneyChannel: 5555 , otherNotes: 'etc..'},

    { id: 5, accountArea: 'Frishman', adminName: 'Tomer' , minCreditValue: 25 , maxCreditValue: 55
    , moneyChannel: 3010 , otherNotes: 'etc..'}
];
