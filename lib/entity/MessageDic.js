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
exports.MessageDic = void 0;
var typeorm_1 = require("typeorm");
var Auth_1 = require("./Auth");
var Message_1 = require("./Message");
var MessageDic = /** @class */ (function () {
    function MessageDic() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], MessageDic.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Auth_1.Auth; }, function (auth) { return auth.chats; }, { onDelete: "CASCADE" }),
        __metadata("design:type", Auth_1.Auth)
    ], MessageDic.prototype, "DBAuth", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], MessageDic.prototype, "jid", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Message_1.Message; }, function (x) { return x.dictionary; }, {
            onDelete: "CASCADE",
            cascade: ["remove"],
        }),
        __metadata("design:type", Array)
    ], MessageDic.prototype, "messages", void 0);
    MessageDic = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Unique)(["id"])
    ], MessageDic);
    return MessageDic;
}());
exports.MessageDic = MessageDic;
//# sourceMappingURL=MessageDic.js.map