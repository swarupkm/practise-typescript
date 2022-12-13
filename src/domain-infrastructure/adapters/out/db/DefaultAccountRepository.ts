import { AccountNumber } from "../../../../domain/AccountNumber";
import { BankAccount } from "../../../../domain/BankAccount";
import { AccountRepository } from "../../../../domain/ports/out/db/AccountRepository";

type Nullable<T> = T | null;
export class DefaultAccountRepository implements AccountRepository {
    findBy(accountNumber: AccountNumber): Promise<Nullable<BankAccount>> {
        if (accountNumber.value().startsWith("A")) {
            return Promise.resolve(null);
        }
        return Promise.resolve(new BankAccount(accountNumber));
    }
}
