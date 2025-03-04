"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpensesPlaceChildModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const expense_place_module_1 = require("../expense-place.module");
const expense_place_child_controller_1 = require("./expense-place-child.controller");
const expense_place_child_entity_1 = require("./expense-place-child.entity");
const expense_place_child_service_1 = require("./expense-place-child.service");
let ExpensesPlaceChildModule = class ExpensesPlaceChildModule {
};
exports.ExpensesPlaceChildModule = ExpensesPlaceChildModule;
exports.ExpensesPlaceChildModule = ExpensesPlaceChildModule = __decorate([
    (0, common_1.Module)({
        imports: [expense_place_module_1.ExpensesPlaceModule, typeorm_1.TypeOrmModule.forFeature([expense_place_child_entity_1.ExpensePlaceChild])],
        controllers: [expense_place_child_controller_1.ExpensesPlaceChildController],
        providers: [expense_place_child_service_1.ExpensesPlaceChildService],
        exports: [expense_place_child_service_1.ExpensesPlaceChildService],
    })
], ExpensesPlaceChildModule);
//# sourceMappingURL=expense-place-child.module.js.map