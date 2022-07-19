import { AccountNumber } from "./AccountNumber";
import { Balance } from "./Balance";
import { Money } from "./Money";

export class BankAccount {
    private accountNumber: AccountNumber;
    private balance: Balance;
    constructor(accountNumber: AccountNumber) {
        this.accountNumber = accountNumber;
        this.balance = new Balance(Money.ZERO);
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
}
