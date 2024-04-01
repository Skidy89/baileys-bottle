import { Auth } from "./Auth";
import { Presence } from "./Presence";
export declare class PresenceDic {
    DBId: number;
    DBAuth: Auth;
    id: string;
    presences: Presence[];
}
