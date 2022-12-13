export class AccountNumber {
    value(): string {
        return this.number;
    }
    private number: string;
    constructor(number: string) {
        this.number = number;
    }
}
