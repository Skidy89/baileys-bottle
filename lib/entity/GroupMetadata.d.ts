import { GroupParticipant } from "@whiskeysockets/baileys";
import { Auth } from "./Auth";
export declare class GroupMetadata {
    DBId: number;
    DBAuth: Auth;
    id: string;
    owner: string | undefined;
    subject: string;
    subjectOwner?: string;
    subjectTime?: number;
    creation?: number;
    desc?: string;
    descOwner?: string;
    descId?: string;
    restrict?: boolean;
    announce?: boolean;
    size?: number;
    participants: GroupParticipant[];
    ephemeralDuration?: number;
    inviteCode?: string;
}
