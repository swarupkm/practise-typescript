import { AccountRepository } from "../ports/out/AccountRepository";
import { BankAccount } from "../domain/BankAccount";
import { DepositCommand } from "../ports/in/db/DepositCommand";

export class DepositUseCase {
    private accountRepo: AccountRepository;
    
    constructor(accountRepo: AccountRepository) {
        this.accountRepo = accountRepo;
    }

    async handle(command: DepositCommand) {
        const account = await this.accountRepo.findBy(command.accountNumber);
        if (!account) {
            throw new Error('Account Not Found');
        }        
        account.deposit(command.amount);
    }
}
