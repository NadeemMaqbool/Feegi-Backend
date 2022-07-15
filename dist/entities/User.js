"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
let User = class User extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)("uuid", { primary: true })
], User.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 255, nullable: false })
], User.prototype, "first_name", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 255, nullable: false })
], User.prototype, "last_name", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 255, unique: true, nullable: false })
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 255 })
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 255, default: '' })
], User.prototype, "remember_token", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { default: false })
], User.prototype, "is_verified", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ default: Date.now() })
], User.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ default: Date.now() })
], User.prototype, "updated_at", void 0);
User = __decorate([
    (0, typeorm_1.Entity)('user')
], User);
exports.User = User;
