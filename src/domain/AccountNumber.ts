export class AccountNumber {
    private number: string;
    constructor(number: string) {
        this.number = number;
    }

    equals(accountNumber: AccountNumber) {
        return this.number == accountNumber.value();
    }
    value(): string {
        return this.number;
    }
}
