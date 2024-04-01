"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
var baileys_1 = require("@whiskeysockets/baileys");
var typeorm_1 = require("typeorm");
var MessageDic_1 = require("./MessageDic");
var Message = /** @class */ (function () {
    function Message() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Message.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Message.prototype, "msgId", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Object)
    ], Message.prototype, "key", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return MessageDic_1.MessageDic; }, function (x) { return x.messages; }, {
            onDelete: "CASCADE",
        }),
        __metadata("design:type", MessageDic_1.MessageDic)
    ], Message.prototype, "dictionary", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Object)
    ], Message.prototype, "message", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Object)
    ], Message.prototype, "messageTimestamp", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Number)
    ], Message.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Message.prototype, "participant", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Object)
    ], Message.prototype, "messageC2STimestamp", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Boolean)
    ], Message.prototype, "ignore", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Boolean)
    ], Message.prototype, "starred", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Boolean)
    ], Message.prototype, "broadcast", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Message.prototype, "pushName", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-array" }),
        __metadata("design:type", Uint8Array)
    ], Message.prototype, "mediaCiphertextSha256", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Boolean)
    ], Message.prototype, "multicast", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Boolean)
    ], Message.prototype, "urlText", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Boolean)
    ], Message.prototype, "urlNumber", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "integer" }),
        __metadata("design:type", Number)
    ], Message.prototype, "messageStubType", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Boolean)
    ], Message.prototype, "clearMedia", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-array" }),
        __metadata("design:type", Array)
    ], Message.prototype, "messageStubParameters", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Number)
    ], Message.prototype, "duration", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-array" }),
        __metadata("design:type", Array)
    ], Message.prototype, "labels", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Object)
    ], Message.prototype, "paymentInfo", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", baileys_1.proto.Message.LiveLocationMessage)
    ], Message.prototype, "finalLiveLocation", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Object)
    ], Message.prototype, "quotedPaymentInfo", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Object)
    ], Message.prototype, "ephemeralStartTimestamp", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Number)
    ], Message.prototype, "ephemeralDuration", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Boolean)
    ], Message.prototype, "ephemeralOffToOn", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Boolean)
    ], Message.prototype, "ephemeralOutOfSync", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "integer" }),
        __metadata("design:type", Number)
    ], Message.prototype, "bizPrivacyStatus", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Message.prototype, "verifiedBizName", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Object)
    ], Message.prototype, "mediaData", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Object)
    ], Message.prototype, "photoChange", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Array)
    ], Message.prototype, "userReceipt", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Array)
    ], Message.prototype, "reactions", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Object)
    ], Message.prototype, "quotedStickerData", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-array" }),
        __metadata("design:type", Uint8Array)
    ], Message.prototype, "futureproofData", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Object)
    ], Message.prototype, "statusPsa", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Array)
    ], Message.prototype, "pollUpdates", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Object)
    ], Message.prototype, "pollAdditionalMetadata", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Message.prototype, "agentId", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Boolean)
    ], Message.prototype, "statusAlreadyViewed", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-array" }),
        __metadata("design:type", Uint8Array)
    ], Message.prototype, "messageSecret", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Object)
    ], Message.prototype, "keepInChat", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Message.prototype, "originalSelfAuthorUserJidString", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Object)
    ], Message.prototype, "revokeMessageTimestamp", void 0);
    Message = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Unique)(["id"])
    ], Message);
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=Message.js.map