/// <reference types="long" />
import { proto } from "@whiskeysockets/baileys";
import { MessageDic } from "./MessageDic";
export declare class Message {
    id: number;
    msgId: string;
    key?: proto.IMessageKey;
    dictionary: MessageDic;
    message?: proto.IMessage | null;
    messageTimestamp?: number | Long | null;
    status?: proto.WebMessageInfo.Status | null;
    participant?: string | null;
    messageC2STimestamp?: number | Long | null;
    ignore?: boolean | null;
    starred?: boolean | null;
    broadcast?: boolean | null;
    pushName?: string | null;
    mediaCiphertextSha256?: Uint8Array | null;
    multicast?: boolean | null;
    urlText?: boolean | null;
    urlNumber?: boolean | null;
    messageStubType?: proto.WebMessageInfo.StubType | null;
    clearMedia?: boolean | null;
    messageStubParameters?: string[] | null;
    duration?: number | null;
    labels?: string[] | null;
    paymentInfo?: proto.IPaymentInfo | null;
    finalLiveLocation?: proto.Message.LiveLocationMessage | null;
    quotedPaymentInfo?: proto.IPaymentInfo | null;
    ephemeralStartTimestamp?: number | Long | null;
    ephemeralDuration?: number | null;
    ephemeralOffToOn?: boolean | null;
    ephemeralOutOfSync?: boolean | null;
    bizPrivacyStatus?: proto.WebMessageInfo.BizPrivacyStatus | null;
    verifiedBizName?: string | null;
    mediaData?: proto.IMediaData | null;
    photoChange?: proto.IPhotoChange | null;
    userReceipt?: proto.IUserReceipt[] | null;
    reactions?: proto.IReaction[] | null;
    quotedStickerData?: proto.IMediaData | null;
    futureproofData?: Uint8Array | null;
    statusPsa?: proto.IStatusPSA | null;
    pollUpdates?: proto.IPollUpdate[] | null;
    pollAdditionalMetadata?: proto.IPollAdditionalMetadata | null;
    agentId?: string | null;
    statusAlreadyViewed?: boolean | null;
    messageSecret?: Uint8Array | null;
    keepInChat?: proto.IKeepInChat | null;
    originalSelfAuthorUserJidString?: string | null;
    revokeMessageTimestamp?: number | Long | null;
}