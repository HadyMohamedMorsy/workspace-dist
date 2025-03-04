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
exports.CoWorkingSpace = void 0;
const assignes_membership_entity_1 = require("../assignes-memberships/assignes-membership.entity");
const global_enum_1 = require("../shared/enum/global-enum");
const typeorm_1 = require("typeorm");
let CoWorkingSpace = class CoWorkingSpace {
};
exports.CoWorkingSpace = CoWorkingSpace;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CoWorkingSpace.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CoWorkingSpace.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CoWorkingSpace.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CoWorkingSpace.prototype, "days", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: global_enum_1.TypeMember, default: global_enum_1.TypeMember.Shared }),
    __metadata("design:type", String)
], CoWorkingSpace.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => assignes_membership_entity_1.AssignesMembership, assignesMembership => assignesMembership.memeberShip),
    __metadata("design:type", Array)
], CoWorkingSpace.prototype, "assignessMemebership", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], CoWorkingSpace.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], CoWorkingSpace.prototype, "updated_at", void 0);
exports.CoWorkingSpace = CoWorkingSpace = __decorate([
    (0, typeorm_1.Entity)()
], CoWorkingSpace);
//# sourceMappingURL=offer-co-working-space.entity.js.map