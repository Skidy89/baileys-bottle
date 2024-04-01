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
exports.GroupMetadata = void 0;
var typeorm_1 = require("typeorm");
var Auth_1 = require("./Auth");
var GroupMetadata = /** @class */ (function () {
    function GroupMetadata() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], GroupMetadata.prototype, "DBId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Auth_1.Auth; }, function (auth) { return auth.chats; }, { onDelete: "CASCADE" }),
        __metadata("design:type", Auth_1.Auth)
    ], GroupMetadata.prototype, "DBAuth", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], GroupMetadata.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], GroupMetadata.prototype, "owner", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], GroupMetadata.prototype, "subject", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], GroupMetadata.prototype, "subjectOwner", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Number)
    ], GroupMetadata.prototype, "subjectTime", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Number)
    ], GroupMetadata.prototype, "creation", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], GroupMetadata.prototype, "desc", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], GroupMetadata.prototype, "descOwner", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], GroupMetadata.prototype, "descId", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Boolean)
    ], GroupMetadata.prototype, "restrict", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Boolean)
    ], GroupMetadata.prototype, "announce", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Number)
    ], GroupMetadata.prototype, "size", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "simple-json" }),
        __metadata("design:type", Array)
    ], GroupMetadata.prototype, "participants", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Number)
    ], GroupMetadata.prototype, "ephemeralDuration", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], GroupMetadata.prototype, "inviteCode", void 0);
    GroupMetadata = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Unique)(["DBId"])
    ], GroupMetadata);
    return GroupMetadata;
}());
exports.GroupMetadata = GroupMetadata;
//# sourceMappingURL=GroupMetadata.js.map