import { AccountNumber } from "./AccountNumber";
import { Balance } from "./Balance";
import { Money } from "./Money";

export class BankAccount {
    private accountNumber: AccountNumber;
    private balance: Balance;
    constructor(accountNumber: AccountNumber, balance = new Balance(Money.ZERO)) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount: Money) {
        this.balance.increment(amount);
    }
    withdraw(amount: Money) {
        if (this.balance.isLessThan(amount)) {
            throw new Error();
        }
        this.balance.decrement(amount);   
    }

    getBalance(): Balance {
        return this.balance;
    }

    isAccountNumber(accountNumber: AccountNumber) {
        return this.accountNumber.equals(accountNumber);
    }
}
