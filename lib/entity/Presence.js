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
exports.Presence = void 0;
var typeorm_1 = require("typeorm");
var PresenceDic_1 = require("./PresenceDic");
var Presence = /** @class */ (function () {
    function Presence() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Presence.prototype, "DBId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return PresenceDic_1.PresenceDic; }, function (x) { return x.presences; }, { onDelete: "CASCADE" }),
        __metadata("design:type", PresenceDic_1.PresenceDic)
    ], Presence.prototype, "dictionary", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Presence.prototype, "participant", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "simple-json" }),
        __metadata("design:type", String)
    ], Presence.prototype, "lastKnownPresence", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Number)
    ], Presence.prototype, "lastSeen", void 0);
    Presence = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Unique)(["DBId"])
    ], Presence);
    return Presence;
}());
exports.Presence = Presence;
//# sourceMappingURL=Presence.js.map