import { AccountRepository } from "../../domain/ports/out/db/AccountRepository";
import { DefaultAccountRepository } from "./out/db/DefaultAccountRepository";

export const accountRepository: AccountRepository = new DefaultAccountRepository();
