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
exports.AssignGeneralOfferController = void 0;
const common_1 = require("@nestjs/common");
const authroization_guard_1 = require("../auth/guards/access-token/authroization.guard");
const clear_cache_decorator_1 = require("../shared/decorators/clear-cache.decorator");
const global_enum_1 = require("../shared/enum/global-enum");
const caching_delete_antoher_modeule_interceptor_1 = require("../shared/interceptor/caching-delete-antoher-modeule.interceptor");
const caching_delete_response_interceptor_1 = require("../shared/interceptor/caching-delete-response.interceptor");
const caching_response_interceptor_1 = require("../shared/interceptor/caching-response.interceptor");
const permissions_decorator_1 = require("../shared/decorators/permissions.decorator");
const assignes_general_offer_service_1 = require("./assignes-general-offer.service");
const create_assign_general_offer_dto_1 = require("./dto/create-assign-general-offer.dto");
const update_assign_general_offer_dto_1 = require("./dto/update-assign-general-offer.dto");
let AssignGeneralOfferController = class AssignGeneralOfferController {
    constructor(assignGeneralOfferservice) {
        this.assignGeneralOfferservice = assignGeneralOfferservice;
    }
    async findIndividuaAssigneslAll(filterQueryDto) {
        return this.assignGeneralOfferservice.findAssignesByIndividual(filterQueryDto);
    }
    async findCompanyAssigneslAll(filterQueryDto) {
        return this.assignGeneralOfferservice.findAssignesByCompany(filterQueryDto);
    }
    async findStudentAssigneslAll(filterQueryDto) {
        return this.assignGeneralOfferservice.findAssignesByStudentActivity(filterQueryDto);
    }
    async findUserAssigneslAll(filterQueryDto) {
        return this.assignGeneralOfferservice.findAssignesByUser(filterQueryDto);
    }
    async create(createAssignGeneralOfferDto, req) {
        const customer = req["customer"];
        const createdBy = req["createdBy"];
        return await this.assignGeneralOfferservice.create(createAssignGeneralOfferDto, {
            customer,
            createdBy,
        });
    }
    async update(updateAssignGeneralOfferDto) {
        return await this.assignGeneralOfferservice.update(updateAssignGeneralOfferDto);
    }
    async remove(bodyDelete) {
        return this.assignGeneralOfferservice.remove(bodyDelete.id);
    }
};
exports.AssignGeneralOfferController = AssignGeneralOfferController;
__decorate([
    (0, common_1.Post)("/individual"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.AssignGeneralOffer,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AssignGeneralOfferController.prototype, "findIndividuaAssigneslAll", null);
__decorate([
    (0, common_1.Post)("/company"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.AssignGeneralOffer,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AssignGeneralOfferController.prototype, "findCompanyAssigneslAll", null);
__decorate([
    (0, common_1.Post)("/studentActivity"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.AssignGeneralOffer,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AssignGeneralOfferController.prototype, "findStudentAssigneslAll", null);
__decorate([
    (0, common_1.Post)("/user"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.AssignGeneralOffer,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AssignGeneralOfferController.prototype, "findUserAssigneslAll", null);
__decorate([
    (0, common_1.Post)("/store"),
    (0, clear_cache_decorator_1.ClearCacheAnotherModules)(["/api/v1/individual", "/api/v1/company", "/api/v1/studentActivity"]),
    (0, common_1.UseInterceptors)(caching_delete_response_interceptor_1.DeleteCacheInterceptor, caching_delete_antoher_modeule_interceptor_1.ClearCacheAnotherModulesIsnterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.AssignGeneralOffer,
            actions: [global_enum_1.Permission.CREATE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_assign_general_offer_dto_1.CreateAssignGeneralOfferDto,
        Request]),
    __metadata("design:returntype", Promise)
], AssignGeneralOfferController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("/update"),
    (0, clear_cache_decorator_1.ClearCacheAnotherModules)(["/api/v1/individual", "/api/v1/company", "/api/v1/studentActivity"]),
    (0, common_1.UseInterceptors)(caching_delete_response_interceptor_1.DeleteCacheInterceptor, caching_delete_antoher_modeule_interceptor_1.ClearCacheAnotherModulesIsnterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.AssignGeneralOffer,
            actions: [global_enum_1.Permission.UPDATE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_assign_general_offer_dto_1.UpdateAssignGeneralOfferDto]),
    __metadata("design:returntype", Promise)
], AssignGeneralOfferController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)("/delete"),
    (0, clear_cache_decorator_1.ClearCacheAnotherModules)(["/api/v1/individual", "/api/v1/company", "/api/v1/studentActivity"]),
    (0, common_1.UseInterceptors)(caching_delete_response_interceptor_1.DeleteCacheInterceptor, caching_delete_antoher_modeule_interceptor_1.ClearCacheAnotherModulesIsnterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.AssignGeneralOffer,
            actions: [global_enum_1.Permission.DELETE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AssignGeneralOfferController.prototype, "remove", null);
exports.AssignGeneralOfferController = AssignGeneralOfferController = __decorate([
    (0, common_1.UseGuards)(authroization_guard_1.AuthorizationGuard),
    (0, common_1.Controller)("assign-general-offer"),
    __metadata("design:paramtypes", [assignes_general_offer_service_1.AssignGeneralOfferservice])
], AssignGeneralOfferController);
//# sourceMappingURL=assignes-general-offer.controller.js.map