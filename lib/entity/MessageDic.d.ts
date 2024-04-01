import { Auth } from "./Auth";
import { Message } from "./Message";
export declare class MessageDic {
    id: number;
    DBAuth: Auth;
    jid: string;
    messages: Message[];
}
