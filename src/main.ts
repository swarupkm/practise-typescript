import { DepositUseCase } from "./app/DepositUseCase";
import { DepositCommand } from "./domain/ports/in/DepositCommand";
import { AccountNumber } from "./domain/AccountNumber";
import { Money } from "./domain/Money";
import { accountRepository } from "./domain-infrastructure/adapters";

const depositCase = new DepositUseCase(accountRepository);
const command: DepositCommand = {
    accountNumber: new AccountNumber("12323"),
    amount: new Money(123),
}
depositCase.handle(command)
