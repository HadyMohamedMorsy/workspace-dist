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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpensesSalariesController = void 0;
const common_1 = require("@nestjs/common");
const authroization_guard_1 = require("../auth/guards/access-token/authroization.guard");
const global_enum_1 = require("../shared/enum/global-enum");
const caching_delete_response_interceptor_1 = require("../shared/interceptor/caching-delete-response.interceptor");
const caching_response_interceptor_1 = require("../shared/interceptor/caching-response.interceptor");
const permissions_decorator_1 = require("../shared/decorators/permissions.decorator");
const create_expense_salaries_dto_1 = require("./dto/create-expense-salaries.dto");
const update_expense_salaries_dto_1 = require("./dto/update-expense-salaries.dto");
const expense_salaries_service_1 = require("./expense-salaries.service");
let ExpensesSalariesController = class ExpensesSalariesController {
    constructor(expensesSalariesService) {
        this.expensesSalariesService = expensesSalariesService;
    }
    async findAll(filterQueryDto) {
        return this.expensesSalariesService.findAll(filterQueryDto);
    }
    async findByUserAll(filterQueryDto) {
        return this.expensesSalariesService.findByUserAll(filterQueryDto);
    }
    async create(createProductDto) {
        return await this.expensesSalariesService.create(createProductDto);
    }
    async update(updateProductDto) {
        return await this.expensesSalariesService.update(updateProductDto);
    }
    async remove(bodyDelete) {
        return this.expensesSalariesService.remove(bodyDelete.id);
    }
};
exports.ExpensesSalariesController = ExpensesSalariesController;
__decorate([
    (0, common_1.Post)("/index"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.ExpensesSalaries,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExpensesSalariesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)("/user"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.ExpensesSalaries,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExpensesSalariesController.prototype, "findByUserAll", null);
__decorate([
    (0, common_1.Post)("/store"),
    (0, common_1.UseInterceptors)(caching_delete_response_interceptor_1.DeleteCacheInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.ExpensesSalaries,
            actions: [global_enum_1.Permission.CREATE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_expense_salaries_dto_1.CreateExpenseSalariesDto]),
    __metadata("design:returntype", Promise)
], ExpensesSalariesController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("/update"),
    (0, common_1.UseInterceptors)(caching_delete_response_interceptor_1.DeleteCacheInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.ExpensesSalaries,
            actions: [global_enum_1.Permission.UPDATE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_expense_salaries_dto_1.UpdateExpenseSalariesDto]),
    __metadata("design:returntype", Promise)
], ExpensesSalariesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)("/delete"),
    (0, common_1.UseInterceptors)(caching_delete_response_interceptor_1.DeleteCacheInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.ExpensesSalaries,
            actions: [global_enum_1.Permission.DELETE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExpensesSalariesController.prototype, "remove", null);
exports.ExpensesSalariesController = ExpensesSalariesController = __decorate([
    (0, common_1.UseGuards)(authroization_guard_1.AuthorizationGuard),
    (0, common_1.Controller)("salary"),
    __metadata("design:paramtypes", [expense_salaries_service_1.ExpensesSalariesService])
], ExpensesSalariesController);
//# sourceMappingURL=expense-salaries.controller.js.map