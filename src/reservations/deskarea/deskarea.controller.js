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
exports.DeskareaController = void 0;
const common_1 = require("@nestjs/common");
const authroization_guard_1 = require("../../auth/guards/access-token/authroization.guard");
const clear_cache_decorator_1 = require("../../shared/decorators/clear-cache.decorator");
const global_enum_1 = require("../../shared/enum/global-enum");
const caching_delete_antoher_modeule_interceptor_1 = require("../../shared/interceptor/caching-delete-antoher-modeule.interceptor");
const caching_delete_response_interceptor_1 = require("../../shared/interceptor/caching-delete-response.interceptor");
const caching_response_interceptor_1 = require("../../shared/interceptor/caching-response.interceptor");
const permissions_decorator_1 = require("../../shared/decorators/permissions.decorator");
const deskarea_service_1 = require("./deskarea.service");
const create_deskarea_dto_1 = require("./dto/create-deskarea.dto");
const update_deskarea_dto_1 = require("./dto/update-deskarea.dto");
let DeskareaController = class DeskareaController {
    constructor(deskareaService) {
        this.deskareaService = deskareaService;
    }
    async findAll(filterQueryDto) {
        return this.deskareaService.findAll(filterQueryDto);
    }
    async findIndividuaDeskareaAll(filterQueryDto) {
        return this.deskareaService.findDeskareaByIndividualAll(filterQueryDto);
    }
    async findCompanyDeskareaAll(filterQueryDto) {
        return this.deskareaService.findDeskareaByComapnyAll(filterQueryDto);
    }
    async findStudentDeskareaAll(filterQueryDto) {
        return this.deskareaService.findDeskareaByStudentActivityAll(filterQueryDto);
    }
    async findUserDeskareaAll(filterQueryDto) {
        return this.deskareaService.findDeskareaByUserAll(filterQueryDto);
    }
    async create(createDeskareaDto, req) {
        const customer = req["customer"];
        const createdBy = req["createdBy"];
        return await this.deskareaService.create(createDeskareaDto, {
            customer,
            createdBy,
        });
    }
    async createReservationByMememberShip(createSharedAreaDto, req) {
        const customer = req["customer"];
        const createdBy = req["createdBy"];
        return await this.deskareaService.createReservationByMememberShip(createSharedAreaDto, {
            customer,
            createdBy,
        });
    }
    async findReservationIndividualAll(filterQueryDto) {
        return this.deskareaService.findReservationsByIndividual(filterQueryDto);
    }
    async findReservationCompanyAll(filterQueryDto) {
        return this.deskareaService.findReservationsByCompany(filterQueryDto);
    }
    async findReservationStudentActivityAll(filterQueryDto) {
        return this.deskareaService.findReservationsByStudentActivity(filterQueryDto);
    }
    async update(updateDeskareaDto) {
        return await this.deskareaService.update(updateDeskareaDto);
    }
    async remove(bodyDelete) {
        return this.deskareaService.remove(bodyDelete.id);
    }
};
exports.DeskareaController = DeskareaController;
__decorate([
    (0, common_1.Post)("/index"),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, common_1.HttpCode)(200),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Deskarea,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DeskareaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)("/individual"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Deskarea,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DeskareaController.prototype, "findIndividuaDeskareaAll", null);
__decorate([
    (0, common_1.Post)("/company"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Deskarea,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DeskareaController.prototype, "findCompanyDeskareaAll", null);
__decorate([
    (0, common_1.Post)("/studentActivity"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Deskarea,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DeskareaController.prototype, "findStudentDeskareaAll", null);
__decorate([
    (0, common_1.Post)("/user"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Deskarea,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DeskareaController.prototype, "findUserDeskareaAll", null);
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
            resource: global_enum_1.Resource.Deskarea,
            actions: [global_enum_1.Permission.CREATE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_deskarea_dto_1.CreateDeskAreaDto, Request]),
    __metadata("design:returntype", Promise)
], DeskareaController.prototype, "create", null);
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
            resource: global_enum_1.Resource.Deskarea,
            actions: [global_enum_1.Permission.CREATE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_deskarea_dto_1.CreateDeskAreaDto,
        Request]),
    __metadata("design:returntype", Promise)
], DeskareaController.prototype, "createReservationByMememberShip", null);
__decorate([
    (0, common_1.Post)("reservation/individual"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Deskarea,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DeskareaController.prototype, "findReservationIndividualAll", null);
__decorate([
    (0, common_1.Post)("reservation/company"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Deskarea,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DeskareaController.prototype, "findReservationCompanyAll", null);
__decorate([
    (0, common_1.Post)("reservation/studentActivity"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Deskarea,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DeskareaController.prototype, "findReservationStudentActivityAll", null);
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
            resource: global_enum_1.Resource.Deskarea,
            actions: [global_enum_1.Permission.UPDATE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_deskarea_dto_1.UpdateDeskAreaDto]),
    __metadata("design:returntype", Promise)
], DeskareaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)("/delete"),
    (0, common_1.UseInterceptors)(caching_delete_response_interceptor_1.DeleteCacheInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Deskarea,
            actions: [global_enum_1.Permission.DELETE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DeskareaController.prototype, "remove", null);
exports.DeskareaController = DeskareaController = __decorate([
    (0, common_1.UseGuards)(authroization_guard_1.AuthorizationGuard),
    (0, common_1.Controller)("deskarea"),
    __metadata("design:paramtypes", [deskarea_service_1.DeskareaService])
], DeskareaController);
//# sourceMappingURL=deskarea.controller.js.map