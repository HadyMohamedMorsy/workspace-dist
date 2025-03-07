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
exports.GeneralSettings = void 0;
const deskarea_entity_1 = require("../reservations/deskarea/deskarea.entity");
const shared_entity_1 = require("../reservations/shared/shared.entity");
const typeorm_1 = require("typeorm");
let GeneralSettings = class GeneralSettings {
};
exports.GeneralSettings = GeneralSettings;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], GeneralSettings.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], GeneralSettings.prototype, "price_shared", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], GeneralSettings.prototype, "price_deskarea", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], GeneralSettings.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => deskarea_entity_1.Deskarea, deskarea => deskarea.settings),
    __metadata("design:type", deskarea_entity_1.Deskarea)
], GeneralSettings.prototype, "deskarea", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => shared_entity_1.Shared, shared => shared.settings),
    __metadata("design:type", shared_entity_1.Shared)
], GeneralSettings.prototype, "shared", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], GeneralSettings.prototype, "updated_at", void 0);
exports.GeneralSettings = GeneralSettings = __decorate([
    (0, typeorm_1.Entity)()
], GeneralSettings);
//# sourceMappingURL=general-settings.entity.js.map