import { Money } from "./Money";

export class Balance {
    decrement(amount: Money) {
        this.money = this.money.subtract(amount);
    }
    isLessThan(amount: Money): Boolean {
        return this.money.value() < amount.value();
    }

    increment(amount: Money) {
       this.money = this.money.add(amount);
    }
    value(): Money {
        return this.money;
    }
    private money: Money;
    constructor(money: Money) {
        this.money = money;
    }
}
