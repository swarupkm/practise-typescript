import { DepositUseCase } from "./app/DepositUseCase";
import { DepositCommand } from "./domain/ports/in/DepositCommand";
import { AccountNumber } from "./domain/AccountNumber";
import { Money } from "./domain/Money";
import { accountRepository } from "./domain-infrastructure/adapters";

const depositCase = new DepositUseCase(accountRepository);
(async () => {
    const command1: DepositCommand = {
        accountNumber: new AccountNumber("123"),
        amount: new Money(200),
    }  
    await depositCase.handle(command1)

    
    const command2: DepositCommand = {
        accountNumber: new AccountNumber("123"),
        amount: new Money(400),
    }
    await depositCase.handle(command2)
})()

