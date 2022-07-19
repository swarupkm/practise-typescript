import { AccountNumber } from "../../../core/domain/AccountNumber";
import { BankAccount } from "../../../core/domain/BankAccount";
import { AccountRepository } from "../../../core/ports/out/AccountRepository";

export class DefaultAccountRepository implements AccountRepository {
    findBy(accountNumber: AccountNumber): Promise<BankAccount> {
        if (accountNumber.value().startsWith("A")) {
            return null;
        }
        return Promise.resolve(new BankAccount(accountNumber));
    }
}
