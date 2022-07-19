import { AccountNumber } from "../../../domain/AccountNumber";
import { Money } from "../../../domain/Money";

export interface DepositCommand {
    accountNumber: AccountNumber;
    amount: Money;
}
