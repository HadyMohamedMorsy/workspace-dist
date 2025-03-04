"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpensesPlaceModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const expense_place_controller_1 = require("./expense-place.controller");
const expense_place_entity_1 = require("./expense-place.entity");
const expense_place_service_1 = require("./expense-place.service");
let ExpensesPlaceModule = class ExpensesPlaceModule {
};
exports.ExpensesPlaceModule = ExpensesPlaceModule;
exports.ExpensesPlaceModule = ExpensesPlaceModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([expense_place_entity_1.ExpensePlace])],
        controllers: [expense_place_controller_1.ExpensesPlaceController],
        providers: [expense_place_service_1.ExpensesPlaceService],
        exports: [expense_place_service_1.ExpensesPlaceService],
    })
], ExpensesPlaceModule);
//# sourceMappingURL=expense-place.module.js.map