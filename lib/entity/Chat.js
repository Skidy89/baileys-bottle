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
exports.Chat = void 0;
var baileys_1 = require("@whiskeysockets/baileys");
var typeorm_1 = require("typeorm");
var Auth_1 = require("./Auth");
var Chat = /** @class */ (function () {
    function Chat() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Chat.prototype, "DBId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Auth_1.Auth; }, function (auth) { return auth.chats; }, { onDelete: "CASCADE" }),
        __metadata("design:type", Auth_1.Auth)
    ], Chat.prototype, "DBAuth", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Chat.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Array)
    ], Chat.prototype, "messages", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Chat.prototype, "newJid", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Chat.prototype, "oldJid", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Object)
    ], Chat.prototype, "lastMsgTimestamp", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Number)
    ], Chat.prototype, "unreadCount", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Boolean)
    ], Chat.prototype, "readOnly", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Boolean)
    ], Chat.prototype, "endOfHistoryTransfer", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Number)
    ], Chat.prototype, "ephemeralExpiration", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Object)
    ], Chat.prototype, "ephemeralSettingTimestamp", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Number)
    ], Chat.prototype, "endOfHistoryTransferType", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Object)
    ], Chat.prototype, "conversationTimestamp", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Chat.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Chat.prototype, "pHash", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Boolean)
    ], Chat.prototype, "notSpam", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Boolean)
    ], Chat.prototype, "archived", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Object)
    ], Chat.prototype, "disappearingMode", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Number)
    ], Chat.prototype, "unreadMentionCount", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Boolean)
    ], Chat.prototype, "markedAsUnread", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Array)
    ], Chat.prototype, "participant", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-array" }),
        __metadata("design:type", Uint8Array)
    ], Chat.prototype, "tcToken", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Object)
    ], Chat.prototype, "tcTokenTimestamp", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-array" }),
        __metadata("design:type", Uint8Array)
    ], Chat.prototype, "contactPrimaryIdentityKey", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Number)
    ], Chat.prototype, "pinned", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Object)
    ], Chat.prototype, "muteEndTime", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Object)
    ], Chat.prototype, "wallpaper", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "integer" }),
        __metadata("design:type", Number)
    ], Chat.prototype, "mediaVisibility", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Object)
    ], Chat.prototype, "tcTokenSenderTimestamp", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Boolean)
    ], Chat.prototype, "suspended", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Boolean)
    ], Chat.prototype, "terminated", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Object)
    ], Chat.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Chat.prototype, "createdBy", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "text" }),
        __metadata("design:type", String)
    ], Chat.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Boolean)
    ], Chat.prototype, "support", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Boolean)
    ], Chat.prototype, "isParentGroup", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Boolean)
    ], Chat.prototype, "isDefaultSubgroup", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Chat.prototype, "parentGroupId", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Chat.prototype, "displayName", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Chat.prototype, "pnJid", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Boolean)
    ], Chat.prototype, "selfMasked", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Number)
    ], Chat.prototype, "mute", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "bigint" }),
        __metadata("design:type", Number)
    ], Chat.prototype, "pin", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Boolean)
    ], Chat.prototype, "archive", void 0);
    Chat = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Unique)(["DBId", "id"])
    ], Chat);
    return Chat;
}());
exports.Chat = Chat;
//# sourceMappingURL=Chat.js.map