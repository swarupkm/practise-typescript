import { AccountNumber } from "../../../AccountNumber";
import { BankAccount } from "../../../BankAccount";

type Nullable<T> = T | null;
export interface AccountRepository {
    findBy(accountNumber: AccountNumber): Promise<Nullable<BankAccount>>;
}
