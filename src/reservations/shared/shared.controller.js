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
exports.SharedController = void 0;
const common_1 = require("@nestjs/common");
const authroization_guard_1 = require("../../auth/guards/access-token/authroization.guard");
const clear_cache_decorator_1 = require("../../shared/decorators/clear-cache.decorator");
const global_enum_1 = require("../../shared/enum/global-enum");
const caching_delete_antoher_modeule_interceptor_1 = require("../../shared/interceptor/caching-delete-antoher-modeule.interceptor");
const caching_delete_response_interceptor_1 = require("../../shared/interceptor/caching-delete-response.interceptor");
const caching_response_interceptor_1 = require("../../shared/interceptor/caching-response.interceptor");
const permissions_decorator_1 = require("../../shared/decorators/permissions.decorator");
const create_shared_dto_1 = require("./dto/create-shared.dto");
const update_shared_dto_1 = require("./dto/update-shared.dto");
const shared_service_1 = require("./shared.service");
let SharedController = class SharedController {
    constructor(sharedService) {
        this.sharedService = sharedService;
    }
    async findAll(filterQueryDto) {
        return this.sharedService.findAll(filterQueryDto);
    }
    async findIndividuaSharedAll(filterQueryDto) {
        return this.sharedService.findSharedByIndividualAll(filterQueryDto);
    }
    async findCompanySharedAll(filterQueryDto) {
        return this.sharedService.findSharedByComapnyAll(filterQueryDto);
    }
    async findStudentSharedAll(filterQueryDto) {
        return this.sharedService.findSharedByStudentActivityAll(filterQueryDto);
    }
    async findUserSharedAll(filterQueryDto) {
        return this.sharedService.findSharedByUserAll(filterQueryDto);
    }
    async create(createSharedDto, req) {
        const customer = req["customer"];
        const createdBy = req["createdBy"];
        return await this.sharedService.create(createSharedDto, {
            customer,
            createdBy,
        });
    }
    async createReservationByMememberShip(createSharedDto, req) {
        const customer = req["customer"];
        const createdBy = req["createdBy"];
        return await this.sharedService.createReservationByMememberShip(createSharedDto, {
            customer,
            createdBy,
        });
    }
    async findReservationIndividualAll(filterQueryDto) {
        return this.sharedService.findReservationsByIndividual(filterQueryDto);
    }
    async findReservationCompanyAll(filterQueryDto) {
        return this.sharedService.findReservationsByCompany(filterQueryDto);
    }
    async findReservationStudentActivityAll(filterQueryDto) {
        return this.sharedService.findReservationsByStudentActivity(filterQueryDto);
    }
    async update(updateSharedDto) {
        return await this.sharedService.update(updateSharedDto);
    }
    async remove(bodyDelete) {
        return this.sharedService.remove(bodyDelete.id);
    }
};
exports.SharedController = SharedController;
__decorate([
    (0, common_1.Post)("/index"),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, common_1.HttpCode)(200),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Shared,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SharedController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)("/individual"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Shared,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SharedController.prototype, "findIndividuaSharedAll", null);
__decorate([
    (0, common_1.Post)("/company"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Shared,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SharedController.prototype, "findCompanySharedAll", null);
__decorate([
    (0, common_1.Post)("/studentActivity"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Shared,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SharedController.prototype, "findStudentSharedAll", null);
__decorate([
    (0, common_1.Post)("/user"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Shared,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SharedController.prototype, "findUserSharedAll", null);
__decorate([
    (0, common_1.Post)("/store"),
    (0, clear_cache_decorator_1.ClearCacheAnotherModules)([
        "/api/v1/individual",
        "/api/v1/company",
        "/api/v1/studentActivity",
        "/api/v1/user",
        "/api/v1/assign-general-offer",
    ]),
    (0, common_1.UseInterceptors)(caching_delete_response_interceptor_1.DeleteCacheInterceptor, caching_delete_antoher_modeule_interceptor_1.ClearCacheAnotherModulesIsnterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Shared,
            actions: [global_enum_1.Permission.CREATE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_shared_dto_1.CreateSharedDto, Request]),
    __metadata("design:returntype", Promise)
], SharedController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("/store/reservation"),
    (0, clear_cache_decorator_1.ClearCacheAnotherModules)([
        "/api/v1/individual",
        "/api/v1/company",
        "/api/v1/studentActivity",
        "/api/v1/user",
        "/api/v1/assignes-membership",
    ]),
    (0, common_1.UseInterceptors)(caching_delete_response_interceptor_1.DeleteCacheInterceptor, caching_delete_antoher_modeule_interceptor_1.ClearCacheAnotherModulesIsnterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Shared,
            actions: [global_enum_1.Permission.CREATE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_shared_dto_1.CreateSharedDto,
        Request]),
    __metadata("design:returntype", Promise)
], SharedController.prototype, "createReservationByMememberShip", null);
__decorate([
    (0, common_1.Post)("reservation/individual"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Shared,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SharedController.prototype, "findReservationIndividualAll", null);
__decorate([
    (0, common_1.Post)("reservation/company"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Shared,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SharedController.prototype, "findReservationCompanyAll", null);
__decorate([
    (0, common_1.Post)("reservation/studentActivity"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Shared,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SharedController.prototype, "findReservationStudentActivityAll", null);
__decorate([
    (0, common_1.Post)("/update"),
    (0, clear_cache_decorator_1.ClearCacheAnotherModules)([
        "/api/v1/individual",
        "/api/v1/company",
        "/api/v1/studentActivity",
        "/api/v1/user",
        "/api/v1/assign-general-offer",
        "/api/v1/assignes-membership",
    ]),
    (0, common_1.UseInterceptors)(caching_delete_response_interceptor_1.DeleteCacheInterceptor, caching_delete_antoher_modeule_interceptor_1.ClearCacheAnotherModulesIsnterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Shared,
            actions: [global_enum_1.Permission.UPDATE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_shared_dto_1.UpdateSharedDto]),
    __metadata("design:returntype", Promise)
], SharedController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)("/delete"),
    (0, common_1.UseInterceptors)(caching_delete_response_interceptor_1.DeleteCacheInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Shared,
            actions: [global_enum_1.Permission.DELETE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SharedController.prototype, "remove", null);
exports.SharedController = SharedController = __decorate([
    (0, common_1.UseGuards)(authroization_guard_1.AuthorizationGuard),
    (0, common_1.Controller)("shared"),
    __metadata("design:paramtypes", [shared_service_1.SharedService])
], SharedController);
//# sourceMappingURL=shared.controller.js.map