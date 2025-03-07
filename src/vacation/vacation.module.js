"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VacationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("../users/users.module");
const vacation_middleware_1 = require("./middleware/vacation.middleware");
const vacation_controller_1 = require("./vacation.controller");
const vacation_entity_1 = require("./vacation.entity");
const vacation_service_1 = require("./vacation.service");
let VacationModule = class VacationModule {
    configure(consumer) {
        consumer.apply(vacation_middleware_1.VacationMiddleware).forRoutes("vacation/store", "vacation/update");
    }
};
exports.VacationModule = VacationModule;
exports.VacationModule = VacationModule = __decorate([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule, typeorm_1.TypeOrmModule.forFeature([vacation_entity_1.Vacation])],
        controllers: [vacation_controller_1.VacationController],
        providers: [vacation_service_1.VacationService],
        exports: [vacation_service_1.VacationService],
    })
], VacationModule);
//# sourceMappingURL=vacation.module.js.map