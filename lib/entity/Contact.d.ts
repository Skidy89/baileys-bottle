import { Auth } from "./Auth";
export declare class Contact {
    DBId: number;
    DBAuth: Auth;
    id: string;
    name?: string;
    notify?: string;
    verifiedName?: string;
    imgUrl?: string | "changed";
    status?: string;
}
