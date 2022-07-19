import { AccountNumber } from "../../domain/AccountNumber";
import { BankAccount } from "../../domain/BankAccount";

export interface AccountRepository {
    findBy(accountNumber: AccountNumber): Promise<BankAccount>;
}
