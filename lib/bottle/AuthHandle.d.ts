import { AuthenticationState } from "@whiskeysockets/baileys";
import { DataSource } from "typeorm";
export default class AuthHandle {
    private ds;
    private key;
    constructor(ds: DataSource, key: string);
    private repos;
    useAuthHandle: () => Promise<{
        state: AuthenticationState;
        saveState: () => Promise<any>;
    }>;
}
