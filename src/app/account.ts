
export class Account {
    id: number;
    accountArea: string;
    adminName: string;
    minCreditValue: number;
    maxCreditValue: number;
    moneyChannel: number;
    otherNotes: string;
    supervisedAccounts: Account[];

    constructor(id: number, accountsArea: string, adminName: string,
      minCreditValue: number, maxCreditValue: number, moneyChannel: number,
       otherNotes: string, supervisedAccounts: Account[] = []) {
        this.id = id;
        this.accountArea = accountsArea;
        this.adminName = adminName;
        this.minCreditValue = minCreditValue;
        this.maxCreditValue = maxCreditValue;
        this.moneyChannel = moneyChannel;
        this.otherNotes = otherNotes;
        this.supervisedAccounts = supervisedAccounts;
       }
  }

