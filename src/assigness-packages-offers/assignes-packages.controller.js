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
exports.AssignesPackageController = void 0;
const common_1 = require("@nestjs/common");
const authroization_guard_1 = require("../auth/guards/access-token/authroization.guard");
const clear_cache_decorator_1 = require("../shared/decorators/clear-cache.decorator");
const global_enum_1 = require("../shared/enum/global-enum");
const caching_delete_antoher_modeule_interceptor_1 = require("../shared/interceptor/caching-delete-antoher-modeule.interceptor");
const caching_delete_response_interceptor_1 = require("../shared/interceptor/caching-delete-response.interceptor");
const caching_response_interceptor_1 = require("../shared/interceptor/caching-response.interceptor");
const permissions_decorator_1 = require("../shared/decorators/permissions.decorator");
const assignes_packages_service_1 = require("./assignes-packages.service");
const create_assignes_packages_dto_1 = require("./dto/create-assignes-packages.dto");
const update_assignes_packages_dto_1 = require("./dto/update-assignes-packages.dto");
let AssignesPackageController = class AssignesPackageController {
    constructor(assignesPackagesService) {
        this.assignesPackagesService = assignesPackagesService;
    }
    async findIndividuaAssigneslAll(filterQueryDto) {
        return this.assignesPackagesService.findAssignesByIndividual(filterQueryDto);
    }
    async findCompanyAssigneslAll(filterQueryDto) {
        return this.assignesPackagesService.findAssignesByCompany(filterQueryDto);
    }
    async findStudentActivityAssigneslAll(filterQueryDto) {
        return this.assignesPackagesService.findAssignesByStudentActivity(filterQueryDto);
    }
    async findUserAssigneslAll(filterQueryDto) {
        return this.assignesPackagesService.findAssignesByUser(filterQueryDto);
    }
    async create(createAssignesPackageDto, req) {
        const customer = req["customer"];
        const createdBy = req["createdBy"];
        return await this.assignesPackagesService.create(createAssignesPackageDto, {
            customer,
            createdBy,
        });
    }
    async update(updateAssignesPackageDto) {
        return await this.assignesPackagesService.update(updateAssignesPackageDto);
    }
    async remove(bodyDelete) {
        return this.assignesPackagesService.remove(bodyDelete.id);
    }
};
exports.AssignesPackageController = AssignesPackageController;
__decorate([
    (0, common_1.Post)("/individual"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.AssignesPackage,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AssignesPackageController.prototype, "findIndividuaAssigneslAll", null);
__decorate([
    (0, common_1.Post)("/company"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.AssignesPackage,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AssignesPackageController.prototype, "findCompanyAssigneslAll", null);
__decorate([
    (0, common_1.Post)("/studentActivity"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.AssignesPackage,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AssignesPackageController.prototype, "findStudentActivityAssigneslAll", null);
__decorate([
    (0, common_1.Post)("/user"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.AssignesPackage,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AssignesPackageController.prototype, "findUserAssigneslAll", null);
__decorate([
    (0, common_1.Post)("/store"),
    (0, clear_cache_decorator_1.ClearCacheAnotherModules)(["/api/v1/individual", "/api/v1/company", "/api/v1/studentActivity"]),
    (0, common_1.UseInterceptors)(caching_delete_response_interceptor_1.DeleteCacheInterceptor, caching_delete_antoher_modeule_interceptor_1.ClearCacheAnotherModulesIsnterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.AssignesPackage,
            actions: [global_enum_1.Permission.CREATE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_assignes_packages_dto_1.CreateAssignesPackageDto, Request]),
    __metadata("design:returntype", Promise)
], AssignesPackageController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("/update"),
    (0, clear_cache_decorator_1.ClearCacheAnotherModules)(["/api/v1/individual", "/api/v1/company", "/api/v1/studentActivity"]),
    (0, common_1.UseInterceptors)(caching_delete_response_interceptor_1.DeleteCacheInterceptor, caching_delete_antoher_modeule_interceptor_1.ClearCacheAnotherModulesIsnterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.AssignesPackage,
            actions: [global_enum_1.Permission.UPDATE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_assignes_packages_dto_1.UpdateAssignesPackageDto]),
    __metadata("design:returntype", Promise)
], AssignesPackageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)("/delete"),
    (0, clear_cache_decorator_1.ClearCacheAnotherModules)(["/api/v1/individual", "/api/v1/company", "/api/v1/studentActivity"]),
    (0, common_1.UseInterceptors)(caching_delete_response_interceptor_1.DeleteCacheInterceptor, caching_delete_antoher_modeule_interceptor_1.ClearCacheAnotherModulesIsnterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.AssignesPackage,
            actions: [global_enum_1.Permission.DELETE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AssignesPackageController.prototype, "remove", null);
exports.AssignesPackageController = AssignesPackageController = __decorate([
    (0, common_1.UseGuards)(authroization_guard_1.AuthorizationGuard),
    (0, common_1.Controller)("assignes-package"),
    __metadata("design:paramtypes", [assignes_packages_service_1.AssignesPackagesService])
], AssignesPackageController);
//# sourceMappingURL=assignes-packages.controller.js.map