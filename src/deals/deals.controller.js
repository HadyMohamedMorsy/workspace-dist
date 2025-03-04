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
exports.DealsController = void 0;
const common_1 = require("@nestjs/common");
const authroization_guard_1 = require("../auth/guards/access-token/authroization.guard");
const global_enum_1 = require("../shared/enum/global-enum");
const caching_delete_response_interceptor_1 = require("../shared/interceptor/caching-delete-response.interceptor");
const caching_response_interceptor_1 = require("../shared/interceptor/caching-response.interceptor");
const permissions_decorator_1 = require("../shared/decorators/permissions.decorator");
const deals_service_1 = require("./deals.service");
const create_deals_dto_1 = require("./dto/create-deals.dto");
const update_deals_dto_1 = require("./dto/update-deals.dto");
let DealsController = class DealsController {
    constructor(dealsService) {
        this.dealsService = dealsService;
    }
    async findIndividuaDealsAll(filterQueryDto) {
        return this.dealsService.findDealsByIndividualAll(filterQueryDto);
    }
    async findStudentDealsAll(filterQueryDto) {
        return this.dealsService.findDealsByStudentActivityAll(filterQueryDto);
    }
    async findCompanyDealsAll(filterQueryDto) {
        return this.dealsService.findDealsByComapnyAll(filterQueryDto);
    }
    async findUserDealsAll(filterQueryDto) {
        return this.dealsService.findDealsByUserAll(filterQueryDto);
    }
    async create(createDealsDto, req) {
        const customer = req["customer"];
        const createdBy = req["createdBy"];
        return await this.dealsService.create(createDealsDto, {
            customer,
            createdBy,
        });
    }
    async update(updateDealsDto) {
        return await this.dealsService.update(updateDealsDto);
    }
    async remove(bodyDelete) {
        return this.dealsService.remove(bodyDelete.id);
    }
};
exports.DealsController = DealsController;
__decorate([
    (0, common_1.Post)("/individual"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Deals,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DealsController.prototype, "findIndividuaDealsAll", null);
__decorate([
    (0, common_1.Post)("/studentActivity"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Deals,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DealsController.prototype, "findStudentDealsAll", null);
__decorate([
    (0, common_1.Post)("/company"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Deals,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DealsController.prototype, "findCompanyDealsAll", null);
__decorate([
    (0, common_1.Post)("/user"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Deals,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DealsController.prototype, "findUserDealsAll", null);
__decorate([
    (0, common_1.Post)("/store"),
    (0, common_1.UseInterceptors)(caching_delete_response_interceptor_1.DeleteCacheInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Deals,
            actions: [global_enum_1.Permission.CREATE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_deals_dto_1.CreateDealsDto, Request]),
    __metadata("design:returntype", Promise)
], DealsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("/update"),
    (0, common_1.UseInterceptors)(caching_delete_response_interceptor_1.DeleteCacheInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Deals,
            actions: [global_enum_1.Permission.UPDATE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_deals_dto_1.UpdateDealsDto]),
    __metadata("design:returntype", Promise)
], DealsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)("/delete"),
    (0, common_1.UseInterceptors)(caching_delete_response_interceptor_1.DeleteCacheInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Deals,
            actions: [global_enum_1.Permission.DELETE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DealsController.prototype, "remove", null);
exports.DealsController = DealsController = __decorate([
    (0, common_1.UseGuards)(authroization_guard_1.AuthorizationGuard),
    (0, common_1.Controller)("deals"),
    __metadata("design:paramtypes", [deals_service_1.DealsService])
], DealsController);
//# sourceMappingURL=deals.controller.js.map