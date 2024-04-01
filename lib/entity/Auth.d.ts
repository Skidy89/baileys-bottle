import { Chat } from "./Chat";
import { Contact } from "./Contact";
import { GroupMetadata } from "./GroupMetadata";
import { MessageDic } from "./MessageDic";
import { PresenceDic } from "./PresenceDic";
export declare class Auth {
    id: number;
    key: string;
    value: string;
    chats: Chat[];
    contacts: Contact[];
    groups: GroupMetadata[];
    messageDics: MessageDic[];
    presenceDics: PresenceDic[];
}
