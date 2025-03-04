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
exports.CreateDeskAreaDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const global_enum_1 = require("../../../shared/enum/global-enum");
class CreateDeskAreaDto {
    constructor() {
        this.status = global_enum_1.ReservationStatus.ACTIVE;
    }
}
exports.CreateDeskAreaDto = CreateDeskAreaDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateDeskAreaDto.prototype, "selected_day", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateDeskAreaDto.prototype, "start_hour", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateDeskAreaDto.prototype, "start_minute", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(global_enum_1.TimeOfDay),
    __metadata("design:type", String)
], CreateDeskAreaDto.prototype, "start_time", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateDeskAreaDto.prototype, "customer_id", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateDeskAreaDto.prototype, "setting_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateDeskAreaDto.prototype, "offer_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateDeskAreaDto.prototype, "membership_id", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(global_enum_1.TypeUser, {
        message: "type order must be one of the following: individual or company or studentActivity or User",
    }),
    __metadata("design:type", String)
], CreateDeskAreaDto.prototype, "type_user", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateDeskAreaDto.prototype, "note", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(global_enum_1.ReservationStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateDeskAreaDto.prototype, "status", void 0);
//# sourceMappingURL=create-deskarea.dto.js.map