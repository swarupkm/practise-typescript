import { AccountNumber } from "../../AccountNumber";
import { Money } from "../../Money";

export interface DepositCommand {
    accountNumber: AccountNumber;
    amount: Money;
}
