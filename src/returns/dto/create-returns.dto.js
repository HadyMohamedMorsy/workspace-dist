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
exports.CreateReturnsDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateReturnsDto {
}
exports.CreateReturnsDto = CreateReturnsDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateReturnsDto.prototype, "type_store", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateReturnsDto.prototype, "note", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)(obj => obj.type_store === "weight"),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateReturnsDto.prototype, "weight_kg", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)(obj => obj.type_store === "weight"),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateReturnsDto.prototype, "weight_g", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)(obj => obj.type_store === "weight"),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateReturnsDto.prototype, "weight_product", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateReturnsDto.prototype, "return_price", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateReturnsDto.prototype, "product_id", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateReturnsDto.prototype, "total", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateReturnsDto.prototype, "return_qty", void 0);
//# sourceMappingURL=create-returns.dto.js.map