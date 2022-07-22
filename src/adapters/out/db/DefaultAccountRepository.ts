import { AccountNumber } from "../../../core/domain/AccountNumber";
import { BankAccount } from "../../../core/domain/BankAccount";
import { AccountRepository } from "../../../core/ports/out/AccountRepository";

type Nullable<T> = T | null;
export class DefaultAccountRepository implements AccountRepository {
    findBy(accountNumber: AccountNumber): Promise<Nullable<BankAccount>> {
        if (accountNumber.value().startsWith("A")) {
            return Promise.resolve(null);
        }
        return Promise.resolve(new BankAccount(accountNumber));
    }
}
