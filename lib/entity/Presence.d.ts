import { WAPresence } from "@whiskeysockets/baileys";
import { PresenceDic } from "./PresenceDic";
export declare class Presence {
    DBId: number;
    dictionary: PresenceDic;
    participant: string;
    lastKnownPresence: WAPresence;
    lastSeen?: number;
}
