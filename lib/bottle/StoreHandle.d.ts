import { BaileysEventEmitter, ConnectionState, WAMessageKey, WAMessageCursor, WASocket } from "@whiskeysockets/baileys";
import { Chat as DBChat } from "../entity/Chat";
import { Contact as DBContact } from "../entity/Contact";
import { Message as DBMessage } from "../entity/Message";
import { Presence as DBPresence } from "../entity/Presence";
import { GroupMetadata as DBGroupMetadata } from "../entity/GroupMetadata";
import { DataSource } from "typeorm";
import { Auth } from "../entity/Auth";
export interface StoreHandleOptions {
    disableDelete?: ("chats" | "messages")[];
}
export default class StoreHandle {
    private ds;
    private auth;
    private options?;
    constructor(ds: DataSource, auth: Auth, options?: StoreHandleOptions);
    private repos;
    state: ConnectionState;
    chats: {
        all: () => Promise<DBChat[]>;
        id: (id: string) => Promise<DBChat | undefined>;
    };
    contacts: {
        all: () => Promise<DBContact[]>;
        id: (id: string) => Promise<DBContact | undefined>;
    };
    messages: {
        all: (jid: string) => Promise<DBMessage[] | undefined>;
        id: (jid: string, msgId: string) => Promise<DBMessage | undefined>;
    };
    groupMetadata: {
        all: () => Promise<DBGroupMetadata[]>;
        id: (id: string) => Promise<DBGroupMetadata | undefined>;
    };
    presence: {
        all: (id: string) => Promise<DBPresence[] | undefined>;
        id: (id: string, participant: string) => Promise<DBPresence | undefined>;
    };
    private contactsUpsert;
    private assertMessageList;
    bind: (ev: BaileysEventEmitter) => void;
    loadMessages: (jid: string, count: number, cursor: WAMessageCursor) => Promise<DBMessage[]>;
    loadMessage: (jid: string, id: string) => Promise<DBMessage | undefined>;
    mostRecentMessage: (jid: string) => Promise<DBMessage | undefined>;
    fetchImageUrl: (jid: string, sock: WASocket | undefined) => Promise<string>;
    fetchGroupMetadata: (jid: string, sock: WASocket | undefined) => Promise<DBGroupMetadata | undefined>;
    fetchMessageReceipts: ({ remoteJid, id, }: WAMessageKey) => Promise<DBMessage["userReceipt"] | undefined>;
}
