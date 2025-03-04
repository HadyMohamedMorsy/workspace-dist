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
exports.CreateIndividualDto = void 0;
const class_validator_1 = require("class-validator");
class CreateIndividualDto {
}
exports.CreateIndividualDto = CreateIndividualDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateIndividualDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(11),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateIndividualDto.prototype, "number", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateIndividualDto.prototype, "whatsApp", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateIndividualDto.prototype, "individual_type", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)(obj => obj.individual_type === "employed"),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateIndividualDto.prototype, "employed_job", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)(obj => obj.individual_type === "freelancer"),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateIndividualDto.prototype, "freelancer_job", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)(obj => obj.individual_type === "student"),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateIndividualDto.prototype, "unviresty", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)(obj => obj.individual_type === "student"),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateIndividualDto.prototype, "college", void 0);
//# sourceMappingURL=create-individual.dto.js.map