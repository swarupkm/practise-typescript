import { AccountNumber } from "../../domain/AccountNumber";
import { BankAccount } from "../../domain/BankAccount";

type Nullable<T> = T | null;
export interface AccountRepository {
    findBy(accountNumber: AccountNumber): Promise<Nullable<BankAccount>>;
}
