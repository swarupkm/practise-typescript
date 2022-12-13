import { AccountNumber } from "../../../../domain/AccountNumber";
import { BankAccount } from "../../../../domain/BankAccount";
import { AccountRepository } from "../../../../domain/ports/out/db/AccountRepository";

type Nullable<T> = T | null;
export class DefaultAccountRepository implements AccountRepository {
    private account = new BankAccount(new AccountNumber("123"));
    save(account: BankAccount): Promise<null> {
        this.account = account;
        console.log("After saving", this.account);
        return Promise.resolve(null);
    }
    findBy(accountNumber: AccountNumber): Promise<Nullable<BankAccount>> {
        if (this.account.isAccountNumber(accountNumber)) {
            return Promise.resolve(this.account);
        }
        return Promise.resolve(null);
    }
}
