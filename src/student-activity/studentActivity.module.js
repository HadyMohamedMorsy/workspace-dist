"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentActivityModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const studentActivity_controller_1 = require("./studentActivity.controller");
const StudentActivity_entity_1 = require("./StudentActivity.entity");
const studentActivity_service_1 = require("./studentActivity.service");
let StudentActivityModule = class StudentActivityModule {
};
exports.StudentActivityModule = StudentActivityModule;
exports.StudentActivityModule = StudentActivityModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([StudentActivity_entity_1.StudentActivity])],
        controllers: [studentActivity_controller_1.StudentActivityController],
        providers: [studentActivity_service_1.StudentActivityService],
        exports: [studentActivity_service_1.StudentActivityService],
    })
], StudentActivityModule);
//# sourceMappingURL=studentActivity.module.js.map