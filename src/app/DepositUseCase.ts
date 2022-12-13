import { AccountRepository } from "../domain/ports/out/db/AccountRepository";
import { DepositCommand } from "../domain/ports/in/DepositCommand";

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
