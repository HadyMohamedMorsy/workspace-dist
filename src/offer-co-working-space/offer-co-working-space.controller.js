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
exports.OfferCoWorkingSpaceController = void 0;
const common_1 = require("@nestjs/common");
const authroization_guard_1 = require("../auth/guards/access-token/authroization.guard");
const clear_cache_decorator_1 = require("../shared/decorators/clear-cache.decorator");
const global_enum_1 = require("../shared/enum/global-enum");
const caching_delete_antoher_modeule_interceptor_1 = require("../shared/interceptor/caching-delete-antoher-modeule.interceptor");
const caching_delete_response_interceptor_1 = require("../shared/interceptor/caching-delete-response.interceptor");
const caching_response_interceptor_1 = require("../shared/interceptor/caching-response.interceptor");
const permissions_decorator_1 = require("../shared/decorators/permissions.decorator");
const create_offer_co_working_space_dto_1 = require("./dto/create-offer-co-working-space.dto");
const update_offer_co_working_space_dto_1 = require("./dto/update-offer-co-working-space.dto");
const offer_co_working_space_service_1 = require("./offer-co-working-space.service");
let OfferCoWorkingSpaceController = class OfferCoWorkingSpaceController {
    constructor(offerCoWorkingSpaceService) {
        this.offerCoWorkingSpaceService = offerCoWorkingSpaceService;
    }
    async findAll(filterQueryDto) {
        return this.offerCoWorkingSpaceService.findAll(filterQueryDto);
    }
    async create(createProductDto) {
        return await this.offerCoWorkingSpaceService.create(createProductDto);
    }
    async update(updateProductDto) {
        return await this.offerCoWorkingSpaceService.update(updateProductDto);
    }
    async remove(bodyDelete) {
        return this.offerCoWorkingSpaceService.remove(bodyDelete.id);
    }
};
exports.OfferCoWorkingSpaceController = OfferCoWorkingSpaceController;
__decorate([
    (0, common_1.Post)("/index"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.OfferWorkingSpace,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OfferCoWorkingSpaceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)("/store"),
    (0, clear_cache_decorator_1.ClearCacheAnotherModules)([
        "/api/v1/individual",
        "/api/v1/company",
        "/api/v1/studentActivity",
        "/api/v1/lists",
    ]),
    (0, common_1.UseInterceptors)(caching_delete_response_interceptor_1.DeleteCacheInterceptor, caching_delete_antoher_modeule_interceptor_1.ClearCacheAnotherModulesIsnterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.OfferWorkingSpace,
            actions: [global_enum_1.Permission.CREATE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_offer_co_working_space_dto_1.CreateCoWorkingSpaceDto]),
    __metadata("design:returntype", Promise)
], OfferCoWorkingSpaceController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("/update"),
    (0, clear_cache_decorator_1.ClearCacheAnotherModules)([
        "/api/v1/individual",
        "/api/v1/company",
        "/api/v1/studentActivity",
        "/api/v1/lists",
    ]),
    (0, common_1.UseInterceptors)(caching_delete_response_interceptor_1.DeleteCacheInterceptor, caching_delete_antoher_modeule_interceptor_1.ClearCacheAnotherModulesIsnterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.OfferWorkingSpace,
            actions: [global_enum_1.Permission.UPDATE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_offer_co_working_space_dto_1.UpdateCoWorkingSpaceDto]),
    __metadata("design:returntype", Promise)
], OfferCoWorkingSpaceController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)("/delete"),
    (0, clear_cache_decorator_1.ClearCacheAnotherModules)([
        "/api/v1/individual",
        "/api/v1/company",
        "/api/v1/studentActivity",
        "/api/v1/lists",
    ]),
    (0, common_1.UseInterceptors)(caching_delete_response_interceptor_1.DeleteCacheInterceptor, caching_delete_antoher_modeule_interceptor_1.ClearCacheAnotherModulesIsnterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.OfferWorkingSpace,
            actions: [global_enum_1.Permission.DELETE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OfferCoWorkingSpaceController.prototype, "remove", null);
exports.OfferCoWorkingSpaceController = OfferCoWorkingSpaceController = __decorate([
    (0, common_1.UseGuards)(authroization_guard_1.AuthorizationGuard),
    (0, common_1.Controller)("offer-co-working-space"),
    __metadata("design:paramtypes", [offer_co_working_space_service_1.OfferCoWorkingSpaceService])
], OfferCoWorkingSpaceController);
//# sourceMappingURL=offer-co-working-space.controller.js.map