export class Money {
    subtract(amount: Money): Money {
        return Money.of(this.amount - amount.value());
    }
    static ZERO: Money = new Money(0);
    private amount: number;
    
    constructor(amount: number) {
        this.amount = amount;
    }
    
    add(amount: Money): Money {
        return Money.of(this.amount + amount.value());
    }
    value(): number {
        return this.amount
    }
    
    static of(amount: number): Money {
        return new Money(amount);
    }
}
