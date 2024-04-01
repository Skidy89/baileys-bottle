"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var baileys_1 = require("@whiskeysockets/baileys");
var Chat_1 = require("../entity/Chat");
var Contact_1 = require("../entity/Contact");
var Message_1 = require("../entity/Message");
var MessageDic_1 = require("../entity/MessageDic");
var PresenceDic_1 = require("../entity/PresenceDic");
var GroupMetadata_1 = require("../entity/GroupMetadata");
var typeorm_1 = require("typeorm");
var StoreHandle = /** @class */ (function () {
    function StoreHandle(ds, auth, options) {
        var _this = this;
        this.ds = ds;
        this.auth = auth;
        this.options = options;
        this.repos = {
            contacts: this.ds.getRepository(Contact_1.Contact),
            chats: this.ds.getRepository(Chat_1.Chat),
            messageDics: this.ds.getRepository(MessageDic_1.MessageDic),
            messages: this.ds.getRepository(Message_1.Message),
            presenceDics: this.ds.getRepository(PresenceDic_1.PresenceDic),
            groups: this.ds.getRepository(GroupMetadata_1.GroupMetadata),
        };
        this.state = { connection: "close" };
        this.chats = {
            all: function () {
                return _this.repos.chats.findBy({
                    DBAuth: {
                        id: _this.auth.id,
                    },
                });
            },
            id: function (id) {
                return _this.repos.chats.findOneBy({
                    id: id,
                    DBAuth: {
                        id: _this.auth.id,
                    },
                });
            },
        };
        this.contacts = {
            all: function () {
                return _this.repos.contacts.findBy({
                    DBAuth: {
                        id: _this.auth.id,
                    },
                });
            },
            id: function (id) {
                return _this.repos.contacts.findOneBy({
                    id: id,
                    DBAuth: {
                        id: _this.auth.id,
                    },
                });
            },
        };
        this.messages = {
            all: function (jid) { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.repos.messageDics.findOne({
                                where: {
                                    jid: jid,
                                    DBAuth: {
                                        id: this.auth.id,
                                    },
                                },
                                relations: ["messages"],
                            })];
                        case 1: return [2 /*return*/, (_a = (_b.sent())) === null || _a === void 0 ? void 0 : _a.messages];
                    }
                });
            }); },
            id: function (jid, msgId) { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.repos.messageDics.findOne({
                                where: {
                                    jid: jid,
                                    DBAuth: {
                                        id: this.auth.id,
                                    },
                                },
                                relations: ["messages"],
                            })];
                        case 1: return [2 /*return*/, (_a = (_b.sent())) === null || _a === void 0 ? void 0 : _a.messages.find(function (x) { return x.msgId === msgId; })];
                    }
                });
            }); },
        };
        this.groupMetadata = {
            all: function () {
                return _this.repos.groups.findBy({
                    DBAuth: {
                        id: _this.auth.id,
                    },
                });
            },
            id: function (id) {
                return _this.repos.groups.findOneBy({
                    id: id,
                    DBAuth: {
                        id: _this.auth.id,
                    },
                });
            },
        };
        this.presence = {
            all: function (id) { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.repos.presenceDics.findOne({
                                where: {
                                    id: id,
                                    DBAuth: {
                                        id: this.auth.id,
                                    },
                                },
                                relations: ["presences"],
                            })];
                        case 1: return [2 /*return*/, (_a = (_b.sent())) === null || _a === void 0 ? void 0 : _a.presences];
                    }
                });
            }); },
            id: function (id, participant) { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.repos.presenceDics.findOne({
                                where: {
                                    id: id,
                                    DBAuth: {
                                        id: this.auth.id,
                                    },
                                },
                                relations: ["presences"],
                            })];
                        case 1: return [2 /*return*/, (_a = (_b.sent())) === null || _a === void 0 ? void 0 : _a.presences.find(function (x) { return x.participant === participant; })];
                    }
                });
            }); },
        };
        this.contactsUpsert = function (newContacts) { return __awaiter(_this, void 0, void 0, function () {
            var contacts, oldContacts, _i, newContacts_1, contact;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repos.contacts.findBy({
                            DBAuth: {
                                id: this.auth.id,
                            },
                        })];
                    case 1:
                        contacts = _a.sent();
                        oldContacts = new Set(Object.keys(contacts));
                        for (_i = 0, newContacts_1 = newContacts; _i < newContacts_1.length; _i++) {
                            contact = newContacts_1[_i];
                            oldContacts.delete(contact.id);
                            contacts[contact.id] = Object.assign(contacts[contact.id] || { DBAuth: { id: this.auth.id } }, contact);
                        }
                        return [4 /*yield*/, this.repos.contacts.save(contacts)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, oldContacts];
                }
            });
        }); };
        this.assertMessageList = function (jid) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.repos.messageDics.findOne({
                            where: {
                                jid: jid,
                                DBAuth: {
                                    id: this.auth.id,
                                },
                            },
                            relations: ["messages"],
                        })];
                    case 1:
                        _a = (_b.sent());
                        if (_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.repos.messageDics.save({
                                jid: jid,
                                DBAuth: { id: this.auth.id },
                                messages: [],
                            })];
                    case 2:
                        _a = (_b.sent());
                        _b.label = 3;
                    case 3: return [2 /*return*/, _a];
                }
            });
        }); };
        this.bind = function (ev) {
            ev.on("connection.update", function (update) { return Object.assign(_this.state, update); });
            ev.on("messaging-history.set", function (_a) {
                var newChats = _a.chats, newContacts = _a.contacts, newMessages = _a.messages, isLatest = _a.isLatest;
                return __awaiter(_this, void 0, void 0, function () {
                    var _b, oldContacts, _loop_1, this_1, _i, newMessages_1, msg;
                    var _this = this;
                    var _c;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0:
                                _b = isLatest;
                                if (!_b) return [3 /*break*/, 2];
                                return [4 /*yield*/, Promise.all([
                                        function () { return __awaiter(_this, void 0, void 0, function () {
                                            var _a, _b;
                                            return __generator(this, function (_c) {
                                                switch (_c.label) {
                                                    case 0:
                                                        _b = (_a = this.repos.messageDics).remove;
                                                        return [4 /*yield*/, this.repos.messageDics.findBy({
                                                                DBAuth: { id: this.auth.id },
                                                            })];
                                                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent()])];
                                                    case 2: return [2 /*return*/, _c.sent()];
                                                }
                                            });
                                        }); },
                                        function () { return __awaiter(_this, void 0, void 0, function () {
                                            var _a, _b;
                                            return __generator(this, function (_c) {
                                                switch (_c.label) {
                                                    case 0:
                                                        _b = (_a = this.repos.chats).remove;
                                                        return [4 /*yield*/, this.repos.chats.findBy({ DBAuth: { id: this.auth.id } })];
                                                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent()])];
                                                    case 2: return [2 /*return*/, _c.sent()];
                                                }
                                            });
                                        }); },
                                    ])];
                            case 1:
                                _b = (_d.sent());
                                _d.label = 2;
                            case 2:
                                _b;
                                return [4 /*yield*/, this.contactsUpsert(newContacts)];
                            case 3:
                                oldContacts = _d.sent();
                                return [4 /*yield*/, this.repos.contacts.delete({
                                        id: (0, typeorm_1.In)(Array.from(oldContacts)),
                                        DBAuth: { id: this.auth.id },
                                    })];
                            case 4:
                                _d.sent();
                                _loop_1 = function (msg) {
                                    var jid, dictionary, message;
                                    return __generator(this, function (_e) {
                                        switch (_e.label) {
                                            case 0:
                                                jid = msg.key.remoteJid;
                                                return [4 /*yield*/, this_1.assertMessageList(jid)];
                                            case 1:
                                                dictionary = _e.sent();
                                                message = void 0;
                                                if (!!(message = dictionary.messages.find(function (x) { return x.key.id === msg.key.id; }))) return [3 /*break*/, 3];
                                                return [4 /*yield*/, this_1.repos.messages.save(__assign(__assign({}, msg), { msgId: (_c = msg.key) === null || _c === void 0 ? void 0 : _c.id, dictionary: dictionary }))];
                                            case 2:
                                                _e.sent();
                                                return [2 /*return*/, "continue"];
                                            case 3:
                                                Object.assign(message, msg);
                                                return [4 /*yield*/, this_1.repos.messageDics.save(dictionary)];
                                            case 4:
                                                _e.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                };
                                this_1 = this;
                                _i = 0, newMessages_1 = newMessages;
                                _d.label = 5;
                            case 5:
                                if (!(_i < newMessages_1.length)) return [3 /*break*/, 8];
                                msg = newMessages_1[_i];
                                return [5 /*yield**/, _loop_1(msg)];
                            case 6:
                                _d.sent();
                                _d.label = 7;
                            case 7:
                                _i++;
                                return [3 /*break*/, 5];
                            case 8: return [2 /*return*/];
                        }
                    });
                });
            });
            ev.on("contacts.update", function (updates) { return __awaiter(_this, void 0, void 0, function () {
                var _i, updates_1, update, contact;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _i = 0, updates_1 = updates;
                            _a.label = 1;
                        case 1:
                            if (!(_i < updates_1.length)) return [3 /*break*/, 5];
                            update = updates_1[_i];
                            contact = void 0;
                            return [4 /*yield*/, this.repos.contacts.findOneBy({
                                    id: update.id,
                                    DBAuth: { id: this.auth.id },
                                })];
                        case 2:
                            if (!(contact = _a.sent())) return [3 /*break*/, 4];
                            Object.assign(contact, update);
                            return [4 /*yield*/, this.repos.contacts.save(contact)];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4:
                            _i++;
                            return [3 /*break*/, 1];
                        case 5: return [2 /*return*/];
                    }
                });
            }); });
            ev.on("chats.upsert", function (newChats) {
                try {
                    newChats.forEach(function (chat) {
                        _this.repos.chats.upsert(__assign(__assign({}, chat), { DBAuth: { id: _this.auth.id } }), {
                            conflictPaths: ["id", "DBAuth"],
                        });
                    });
                }
                catch (_a) { }
            });
            ev.on("chats.update", function (updates) { return __awaiter(_this, void 0, void 0, function () {
                var _i, updates_2, update, chat;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _i = 0, updates_2 = updates;
                            _a.label = 1;
                        case 1:
                            if (!(_i < updates_2.length)) return [3 /*break*/, 5];
                            update = updates_2[_i];
                            return [4 /*yield*/, this.repos.chats.findOneBy({
                                    id: update.id,
                                    DBAuth: { id: this.auth.id },
                                })];
                        case 2:
                            chat = _a.sent();
                            if (!chat)
                                return [2 /*return*/];
                            if (update.unreadCount > 0) {
                                update = __assign({}, update);
                                update.unreadCount = (chat.unreadCount || 0) + update.unreadCount;
                            }
                            Object.assign(chat, update);
                            return [4 /*yield*/, this.repos.chats.save(chat)];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4:
                            _i++;
                            return [3 /*break*/, 1];
                        case 5: return [2 /*return*/];
                    }
                });
            }); });
            ev.on("presence.update", function (_a) {
                var id = _a.id, update = _a.presences;
                return __awaiter(_this, void 0, void 0, function () {
                    var chat, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0: return [4 /*yield*/, this.repos.presenceDics.findOne({
                                    where: {
                                        id: id,
                                        DBAuth: { id: this.auth.id },
                                    },
                                    relations: ["presences"],
                                })];
                            case 1:
                                chat = (_c.sent()) ||
                                    {
                                        id: id,
                                        presences: [],
                                        DBAuth: { id: this.auth.id },
                                    };
                                Object.entries(update).forEach(function (_a) {
                                    var id = _a[0], presence = _a[1];
                                    var participant = chat.presences.find(function (x) { return x.participant === id; });
                                    participant
                                        ? Object.assign(participant, presence)
                                        : chat.presences.push(__assign(__assign({}, presence), { participant: id }));
                                });
                                _c.label = 2;
                            case 2:
                                _c.trys.push([2, 4, , 5]);
                                return [4 /*yield*/, this.repos.presenceDics.save(chat)];
                            case 3:
                                _c.sent();
                                return [3 /*break*/, 5];
                            case 4:
                                _b = _c.sent();
                                return [3 /*break*/, 5];
                            case 5: return [2 /*return*/];
                        }
                    });
                });
            });
            ev.on("chats.delete", function (deletions) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, !this.options.disableDelete.includes("chats") &&
                            Promise.all(deletions.map(function (id) {
                                return _this.repos.chats.delete({
                                    id: id,
                                    DBAuth: { id: _this.auth.id },
                                });
                            }))];
                });
            }); });
            ev.on("messages.upsert", function (_a) {
                var newMessages = _a.messages, type = _a.type;
                return __awaiter(_this, void 0, void 0, function () {
                    var _b, _loop_2, this_2, dictionary, _i, newMessages_2, msg, state_1;
                    var _c;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0:
                                _b = type;
                                switch (_b) {
                                    case "append": return [3 /*break*/, 1];
                                    case "notify": return [3 /*break*/, 1];
                                }
                                return [3 /*break*/, 6];
                            case 1:
                                _loop_2 = function (msg) {
                                    var jid, message, _e, _f;
                                    return __generator(this, function (_g) {
                                        switch (_g.label) {
                                            case 0:
                                                jid = (0, baileys_1.jidNormalizedUser)(msg.key.remoteJid);
                                                return [4 /*yield*/, this_2.assertMessageList(jid)];
                                            case 1:
                                                dictionary = _g.sent();
                                                message = void 0;
                                                if (!!(message = dictionary.messages.find(function (x) { return x.key.id === msg.key.id; }))) return [3 /*break*/, 3];
                                                _e = {};
                                                return [4 /*yield*/, this_2.repos.messages.save(__assign(__assign({}, msg), { msgId: (_c = msg.key) === null || _c === void 0 ? void 0 : _c.id, dictionary: dictionary }))];
                                            case 2: return [2 /*return*/, (_e.value = _g.sent(), _e)];
                                            case 3:
                                                Object.assign(message || {}, msg);
                                                return [4 /*yield*/, this_2.repos.messageDics.save(dictionary)];
                                            case 4:
                                                _g.sent();
                                                _f = type === "notify";
                                                if (!_f) return [3 /*break*/, 6];
                                                return [4 /*yield*/, this_2.repos.chats.findOneBy({
                                                        id: jid,
                                                        DBAuth: { id: this_2.auth.id },
                                                    })];
                                            case 5:
                                                _f = !(_g.sent());
                                                _g.label = 6;
                                            case 6:
                                                _f &&
                                                    ev.emit("chats.upsert", [
                                                        {
                                                            id: jid,
                                                            conversationTimestamp: (0, baileys_1.toNumber)(msg.messageTimestamp),
                                                            unreadCount: 1,
                                                        },
                                                    ]);
                                                return [2 /*return*/];
                                        }
                                    });
                                };
                                this_2 = this;
                                _i = 0, newMessages_2 = newMessages;
                                _d.label = 2;
                            case 2:
                                if (!(_i < newMessages_2.length)) return [3 /*break*/, 5];
                                msg = newMessages_2[_i];
                                return [5 /*yield**/, _loop_2(msg)];
                            case 3:
                                state_1 = _d.sent();
                                if (typeof state_1 === "object")
                                    return [2 /*return*/, state_1.value];
                                _d.label = 4;
                            case 4:
                                _i++;
                                return [3 /*break*/, 2];
                            case 5: return [3 /*break*/, 6];
                            case 6: return [2 /*return*/];
                        }
                    });
                });
            });
            ev.on("messages.update", function (updates) { return __awaiter(_this, void 0, void 0, function () {
                var _loop_3, this_3, dictionary, _i, updates_3, _a, update, key;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _loop_3 = function (update, key) {
                                var message;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0: return [4 /*yield*/, this_3.assertMessageList(key.remoteJid)];
                                        case 1:
                                            dictionary = _c.sent();
                                            message = void 0;
                                            if (!(message = dictionary.messages.find(function (x) { return x.key.id === key.id; })))
                                                return [2 /*return*/, "continue"];
                                            Object.assign(message, update);
                                            return [4 /*yield*/, this_3.repos.messageDics.save(dictionary)];
                                        case 2:
                                            _c.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            };
                            this_3 = this;
                            _i = 0, updates_3 = updates;
                            _b.label = 1;
                        case 1:
                            if (!(_i < updates_3.length)) return [3 /*break*/, 4];
                            _a = updates_3[_i], update = _a.update, key = _a.key;
                            return [5 /*yield**/, _loop_3(update, key)];
                        case 2:
                            _b.sent();
                            _b.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
            ev.on("messages.delete", function (item) { return __awaiter(_this, void 0, void 0, function () {
                var dictionary, jid, dictionary, idSet_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this.options.disableDelete.includes("messages"))
                                return [2 /*return*/];
                            if (!("all" in item)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.repos.messageDics.findOne({
                                    where: {
                                        jid: item.jid,
                                        DBAuth: { id: this.auth.id },
                                    },
                                    relations: ["messages"],
                                })];
                        case 1:
                            dictionary = _a.sent();
                            if (!dictionary)
                                return [2 /*return*/];
                            this.repos.messages.remove(dictionary.messages);
                            return [3 /*break*/, 5];
                        case 2:
                            jid = item.keys[0].remoteJid;
                            return [4 /*yield*/, this.repos.messageDics.findOne({
                                    where: {
                                        jid: jid,
                                        DBAuth: { id: this.auth.id },
                                    },
                                    relations: ["messages"],
                                })];
                        case 3:
                            dictionary = _a.sent();
                            if (!dictionary)
                                return [2 /*return*/];
                            idSet_1 = new Set(item.keys.map(function (k) { return k.id; }));
                            return [4 /*yield*/, this.repos.messages.remove(dictionary.messages.filter(function (msg) {
                                    return Array.from(idSet_1).includes(msg.msgId);
                                }))];
                        case 4:
                            _a.sent();
                            _a.label = 5;
                        case 5: return [2 /*return*/];
                    }
                });
            }); });
            ev.on("groups.update", function (updates) { return __awaiter(_this, void 0, void 0, function () {
                var _i, updates_4, update, id, group;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _i = 0, updates_4 = updates;
                            _a.label = 1;
                        case 1:
                            if (!(_i < updates_4.length)) return [3 /*break*/, 5];
                            update = updates_4[_i];
                            id = update.id;
                            return [4 /*yield*/, this.repos.groups.findOneBy({
                                    id: id,
                                    DBAuth: { id: this.auth.id },
                                })];
                        case 2:
                            group = _a.sent();
                            if (!group)
                                return [2 /*return*/];
                            Object.assign(group, update);
                            return [4 /*yield*/, this.repos.groups.save(group)];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4:
                            _i++;
                            return [3 /*break*/, 1];
                        case 5: return [2 /*return*/];
                    }
                });
            }); });
            ev.on("group-participants.update", function (_a) {
                var id = _a.id, participants = _a.participants, action = _a.action;
                return __awaiter(_this, void 0, void 0, function () {
                    var metadata;
                    var _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0: return [4 /*yield*/, this.repos.groups.findOneBy({
                                    id: id,
                                    DBAuth: { id: this.auth.id },
                                })];
                            case 1:
                                metadata = _c.sent();
                                if (!metadata)
                                    return [2 /*return*/];
                                switch (action) {
                                    case "add":
                                        (_b = metadata.participants).push.apply(_b, participants.map(function (id) { return ({
                                            id: id,
                                            isAdmin: false,
                                            isSuperAdmin: false,
                                        }); }));
                                        break;
                                    case "demote":
                                    case "promote":
                                        metadata.participants.forEach(function (participant) {
                                            return participants.includes(participant.id) &&
                                                (participant.isAdmin = action === "promote");
                                        });
                                        break;
                                    case "remove":
                                        metadata.participants = metadata.participants.filter(function (p) { return !participants.includes(p.id); });
                                        break;
                                }
                                return [4 /*yield*/, this.repos.groups.save(metadata)];
                            case 2:
                                _c.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            });
            ev.on("message-receipt.update", function (updates) { return __awaiter(_this, void 0, void 0, function () {
                var _loop_4, this_4, _i, updates_5, _a, key, receipt, state_2;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _loop_4 = function (key, receipt) {
                                var dictionary, msg;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0: return [4 /*yield*/, this_4.repos.messageDics.findOne({
                                                where: {
                                                    jid: key.remoteJid,
                                                    DBAuth: { id: this_4.auth.id },
                                                },
                                                relations: ["messages"],
                                            })];
                                        case 1:
                                            dictionary = _c.sent();
                                            if (!dictionary)
                                                return [2 /*return*/, { value: void 0 }];
                                            msg = dictionary.messages.find(function (x) { return x.key.id === key.id; });
                                            if (!msg)
                                                return [2 /*return*/, "continue"];
                                            (0, baileys_1.updateMessageWithReceipt)(msg, receipt);
                                            return [4 /*yield*/, this_4.repos.messageDics.save(dictionary)];
                                        case 2:
                                            _c.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            };
                            this_4 = this;
                            _i = 0, updates_5 = updates;
                            _b.label = 1;
                        case 1:
                            if (!(_i < updates_5.length)) return [3 /*break*/, 4];
                            _a = updates_5[_i], key = _a.key, receipt = _a.receipt;
                            return [5 /*yield**/, _loop_4(key, receipt)];
                        case 2:
                            state_2 = _b.sent();
                            if (typeof state_2 === "object")
                                return [2 /*return*/, state_2.value];
                            _b.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
            ev.on("messages.reaction", function (reactions) { return __awaiter(_this, void 0, void 0, function () {
                var _loop_5, this_5, _i, reactions_1, _a, key, reaction, state_3;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _loop_5 = function (key, reaction) {
                                var dictionary, msg;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0: return [4 /*yield*/, this_5.repos.messageDics.findOne({
                                                where: {
                                                    jid: key.remoteJid,
                                                    DBAuth: { id: this_5.auth.id },
                                                },
                                                relations: ["messages"],
                                            })];
                                        case 1:
                                            dictionary = _c.sent();
                                            if (!dictionary)
                                                return [2 /*return*/, { value: void 0 }];
                                            msg = dictionary.messages.find(function (x) { return x.key.id === key.id; });
                                            if (!msg)
                                                return [2 /*return*/, "continue"];
                                            (0, baileys_1.updateMessageWithReaction)(msg, reaction);
                                            return [4 /*yield*/, this_5.repos.messageDics.save(dictionary)];
                                        case 2:
                                            _c.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            };
                            this_5 = this;
                            _i = 0, reactions_1 = reactions;
                            _b.label = 1;
                        case 1:
                            if (!(_i < reactions_1.length)) return [3 /*break*/, 4];
                            _a = reactions_1[_i], key = _a.key, reaction = _a.reaction;
                            return [5 /*yield**/, _loop_5(key, reaction)];
                        case 2:
                            state_3 = _b.sent();
                            if (typeof state_3 === "object")
                                return [2 /*return*/, state_3.value];
                            _b.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
        };
        this.loadMessages = function (jid, count, cursor) { return __awaiter(_this, void 0, void 0, function () {
            var dictionary, mode, cursorKey, cursorValue, messages, msgIdx, diff;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.assertMessageList(jid)];
                    case 1:
                        dictionary = _a.sent(), mode = !cursor || "before" in cursor ? "before" : "after", cursorKey = !!cursor
                            ? "before" in cursor
                                ? cursor.before
                                : cursor.after
                            : undefined, cursorValue = cursorKey
                            ? dictionary.messages.find(function (x) { return x.msgId === cursorKey.id; })
                            : undefined;
                        if (dictionary && mode === "before" && (!cursorKey || cursorValue)) {
                            if (cursorValue) {
                                msgIdx = dictionary.messages.findIndex(function (m) { return m.key.id === (cursorKey === null || cursorKey === void 0 ? void 0 : cursorKey.id); });
                                messages = dictionary.messages.slice(0, msgIdx);
                            }
                            else
                                messages = dictionary.messages;
                            diff = count - messages.length;
                            diff < 0 && (messages = messages.slice(-count));
                        }
                        else {
                            messages = [];
                        }
                        return [2 /*return*/, messages];
                }
            });
        }); };
        this.loadMessage = function (jid, id) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.repos.messageDics.findOne({
                            where: {
                                jid: jid,
                                DBAuth: { id: this.auth.id },
                            },
                            relations: ["messages"],
                        })];
                    case 1: return [2 /*return*/, (_a = (_b.sent())) === null || _a === void 0 ? void 0 : _a.messages.find(function (x) { return x.msgId === id; })];
                }
            });
        }); };
        this.mostRecentMessage = function (jid) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.repos.messageDics.findOne({
                            where: {
                                jid: jid,
                                DBAuth: { id: this.auth.id },
                            },
                            relations: ["messages"],
                        })];
                    case 1: return [2 /*return*/, (_a = (_b.sent())) === null || _a === void 0 ? void 0 : _a.messages.slice(-1)[0]];
                }
            });
        }); };
        this.fetchImageUrl = function (jid, sock) { return __awaiter(_this, void 0, void 0, function () {
            var contact, _a, _b, _c;
            var _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.repos.contacts.findOne({ where: { id: jid } })];
                    case 1:
                        contact = _e.sent();
                        if (!contact)
                            return [2 /*return*/, sock === null || sock === void 0 ? void 0 : sock.profilePictureUrl(jid)];
                        if (!(typeof contact.imgUrl === "undefined")) return [3 /*break*/, 4];
                        _b = (_a = this.repos.contacts).save;
                        _c = [__assign({}, contact)];
                        _d = {};
                        return [4 /*yield*/, (sock === null || sock === void 0 ? void 0 : sock.profilePictureUrl(jid))];
                    case 2: return [4 /*yield*/, _b.apply(_a, [__assign.apply(void 0, _c.concat([(_d.imgUrl = _e.sent(), _d)]))])];
                    case 3:
                        _e.sent();
                        _e.label = 4;
                    case 4: return [2 /*return*/, contact.imgUrl];
                }
            });
        }); };
        this.fetchGroupMetadata = function (jid, sock) { return __awaiter(_this, void 0, void 0, function () {
            var group, metadata, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.repos.groups.findOneBy({
                            id: jid,
                            DBAuth: { id: this.auth.id },
                        })];
                    case 1:
                        group = _b.sent();
                        if (!!group) return [3 /*break*/, 5];
                        return [4 /*yield*/, (sock === null || sock === void 0 ? void 0 : sock.groupMetadata(jid))];
                    case 2:
                        metadata = _b.sent();
                        _a = metadata;
                        if (!_a) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.repos.groups.save(__assign(__assign({}, metadata), { DBAuth: { id: this.auth.id } }))];
                    case 3:
                        _a = (group = _b.sent());
                        _b.label = 4;
                    case 4:
                        _a;
                        _b.label = 5;
                    case 5: return [2 /*return*/, group];
                }
            });
        }); };
        this.fetchMessageReceipts = function (_a) {
            var remoteJid = _a.remoteJid, id = _a.id;
            return __awaiter(_this, void 0, void 0, function () {
                var dictionary, msg;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.repos.messageDics.findOne({
                                where: {
                                    jid: remoteJid,
                                    DBAuth: { id: this.auth.id },
                                },
                                relations: ["messages"],
                            })];
                        case 1:
                            dictionary = _b.sent();
                            msg = dictionary.messages.find(function (x) { return x.msgId === id; });
                            return [2 /*return*/, msg === null || msg === void 0 ? void 0 : msg.userReceipt];
                    }
                });
            });
        };
        this.options = __assign({ disableDelete: [] }, (this.options || {}));
    }
    return StoreHandle;
}());
exports.default = StoreHandle;
//# sourceMappingURL=StoreHandle.js.map