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
exports.Auth = void 0;
var typeorm_1 = require("typeorm");
var Chat_1 = require("./Chat");
var Contact_1 = require("./Contact");
var GroupMetadata_1 = require("./GroupMetadata");
var MessageDic_1 = require("./MessageDic");
var PresenceDic_1 = require("./PresenceDic");
var Auth = /** @class */ (function () {
    function Auth() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Auth.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Auth.prototype, "key", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "text" }),
        __metadata("design:type", String)
    ], Auth.prototype, "value", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Chat_1.Chat; }, function (chat) { return chat.DBAuth; }),
        __metadata("design:type", Array)
    ], Auth.prototype, "chats", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Contact_1.Contact; }, function (contact) { return contact.DBAuth; }),
        __metadata("design:type", Array)
    ], Auth.prototype, "contacts", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return GroupMetadata_1.GroupMetadata; }, function (group) { return group.DBAuth; }),
        __metadata("design:type", Array)
    ], Auth.prototype, "groups", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return MessageDic_1.MessageDic; }, function (messageDic) { return messageDic.DBAuth; }),
        __metadata("design:type", Array)
    ], Auth.prototype, "messageDics", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return PresenceDic_1.PresenceDic; }, function (presenceDic) { return presenceDic.DBAuth; }),
        __metadata("design:type", Array)
    ], Auth.prototype, "presenceDics", void 0);
    Auth = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Unique)(["key"])
    ], Auth);
    return Auth;
}());
exports.Auth = Auth;
//# sourceMappingURL=Auth.js.map