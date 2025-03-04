"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevenueChildModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const revenue_module_1 = require("../revenue.module");
const revenue_child_controller_1 = require("./revenue-child.controller");
const revenue_child_entity_1 = require("./revenue-child.entity");
const revenue_child_service_1 = require("./revenue-child.service");
let RevenueChildModule = class RevenueChildModule {
};
exports.RevenueChildModule = RevenueChildModule;
exports.RevenueChildModule = RevenueChildModule = __decorate([
    (0, common_1.Module)({
        imports: [revenue_module_1.RevenueModule, typeorm_1.TypeOrmModule.forFeature([revenue_child_entity_1.RevenueChild])],
        controllers: [revenue_child_controller_1.RevenueChildController],
        providers: [revenue_child_service_1.RevenueChildService],
        exports: [revenue_child_service_1.RevenueChildService],
    })
], RevenueChildModule);
//# sourceMappingURL=revenue-child.module.js.map