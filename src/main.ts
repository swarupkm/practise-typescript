import { DepositUseCase } from "./core/usecase/DepositUseCase";
import { DepositCommand } from "./core/ports/in/db/DepositCommand";
import { DefaultAccountRepository } from "./adapters/out/db/DefaultAccountRepository";
import { AccountNumber } from "./core/domain/AccountNumber";
import { Money } from "./core/domain/Money";

const accountRepo = new DefaultAccountRepository();
const depositCase = new DepositUseCase(accountRepo);
const command: DepositCommand = {
    accountNumber: new AccountNumber("12323"),
    amount: new Money(123),
}
depositCase.handle(command)
