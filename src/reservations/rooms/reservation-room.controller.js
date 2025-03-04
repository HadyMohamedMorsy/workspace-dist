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
exports.ReservationRoomController = void 0;
const common_1 = require("@nestjs/common");
const authroization_guard_1 = require("../../auth/guards/access-token/authroization.guard");
const clear_cache_decorator_1 = require("../../shared/decorators/clear-cache.decorator");
const global_enum_1 = require("../../shared/enum/global-enum");
const caching_delete_antoher_modeule_interceptor_1 = require("../../shared/interceptor/caching-delete-antoher-modeule.interceptor");
const caching_delete_response_interceptor_1 = require("../../shared/interceptor/caching-delete-response.interceptor");
const caching_response_interceptor_1 = require("../../shared/interceptor/caching-response.interceptor");
const permissions_decorator_1 = require("../../shared/decorators/permissions.decorator");
const create_reservation_rooms_dto_1 = require("./dto/create-reservation-rooms.dto");
const update_reservation_rooms_dto_1 = require("./dto/update-reservation-rooms.dto");
const reservation_room_service_1 = require("./reservation-room.service");
let ReservationRoomController = class ReservationRoomController {
    constructor(reservationRoomService) {
        this.reservationRoomService = reservationRoomService;
    }
    async findAll(filterQueryDto) {
        return this.reservationRoomService.getReservationsForThisWeek(filterQueryDto);
    }
    async findIndividuaRoomAll(filterQueryDto) {
        return this.reservationRoomService.findRoomsByIndividualAll(filterQueryDto);
    }
    async findStudentRoomAll(filterQueryDto) {
        return this.reservationRoomService.findRoomsByStudentActivityAll(filterQueryDto);
    }
    async findCompanyRoomAll(filterQueryDto) {
        return this.reservationRoomService.findRoomsByComapnyAll(filterQueryDto);
    }
    async findUserRoomAll(filterQueryDto) {
        return this.reservationRoomService.findRoomsByUserAll(filterQueryDto);
    }
    async findIndividuaPackageRoomAll(filterQueryDto) {
        return this.reservationRoomService.findIndividuaPackageRoomAll(filterQueryDto);
    }
    async findCompanyPackageRoomAll(filterQueryDto) {
        return this.reservationRoomService.findCompanyPackageRoomAll(filterQueryDto);
    }
    async findStudentActivityPackageRoomAll(filterQueryDto) {
        return this.reservationRoomService.findStudentActivityPackageRoomAll(filterQueryDto);
    }
    async findIndividualDealAll(filterQueryDto) {
        return this.reservationRoomService.findIndividualDealAll(filterQueryDto);
    }
    async findCompanyDealAll(filterQueryDto) {
        return this.reservationRoomService.findCompanyDealAll(filterQueryDto);
    }
    async findStudentActivityDealAll(filterQueryDto) {
        return this.reservationRoomService.findStudentActivityDealAll(filterQueryDto);
    }
    async create(createReservationRoomDto, req) {
        const customer = req["customer"];
        const createdBy = req["createdBy"];
        return await this.reservationRoomService.create(createReservationRoomDto, {
            customer,
            createdBy,
        });
    }
    async createReservationByPackage(createReservationRoomDto, req) {
        const customer = req["customer"];
        const createdBy = req["createdBy"];
        return await this.reservationRoomService.createReservationByPackage(createReservationRoomDto, {
            customer,
            createdBy,
        });
    }
    async createReservationByDeal(createReservationRoomDto, req) {
        const customer = req["customer"];
        const createdBy = req["createdBy"];
        return await this.reservationRoomService.createReservationByDeal(createReservationRoomDto, {
            customer,
            createdBy,
        });
    }
    async update(updateReservationRoomDto) {
        return await this.reservationRoomService.update(updateReservationRoomDto);
    }
    async remove(bodyDelete) {
        return this.reservationRoomService.remove(bodyDelete.id);
    }
};
exports.ReservationRoomController = ReservationRoomController;
__decorate([
    (0, common_1.Post)("/index"),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReservationRoomController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)("/individual"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.ReservationRoom,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReservationRoomController.prototype, "findIndividuaRoomAll", null);
__decorate([
    (0, common_1.Post)("/studentActivity"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.ReservationRoom,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReservationRoomController.prototype, "findStudentRoomAll", null);
__decorate([
    (0, common_1.Post)("/company"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.ReservationRoom,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReservationRoomController.prototype, "findCompanyRoomAll", null);
__decorate([
    (0, common_1.Post)("/user"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.ReservationRoom,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReservationRoomController.prototype, "findUserRoomAll", null);
__decorate([
    (0, common_1.Post)("/packages/individual"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.ReservationRoom,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReservationRoomController.prototype, "findIndividuaPackageRoomAll", null);
__decorate([
    (0, common_1.Post)("/packages/company"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.ReservationRoom,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReservationRoomController.prototype, "findCompanyPackageRoomAll", null);
__decorate([
    (0, common_1.Post)("/packages/studentActivity"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.ReservationRoom,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReservationRoomController.prototype, "findStudentActivityPackageRoomAll", null);
__decorate([
    (0, common_1.Post)("/deals/individual"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.ReservationRoom,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReservationRoomController.prototype, "findIndividualDealAll", null);
__decorate([
    (0, common_1.Post)("/deals/company"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.ReservationRoom,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReservationRoomController.prototype, "findCompanyDealAll", null);
__decorate([
    (0, common_1.Post)("/deals/studentActivity"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.ReservationRoom,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReservationRoomController.prototype, "findStudentActivityDealAll", null);
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
            resource: global_enum_1.Resource.ReservationRoom,
            actions: [global_enum_1.Permission.CREATE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reservation_rooms_dto_1.CreateReservationRoomDto, Request]),
    __metadata("design:returntype", Promise)
], ReservationRoomController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("/store/package"),
    (0, clear_cache_decorator_1.ClearCacheAnotherModules)([
        "/api/v1/individual",
        "/api/v1/company",
        "/api/v1/studentActivity",
        "/api/v1/user",
        "/api/v1/assignes-package",
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
    __metadata("design:paramtypes", [create_reservation_rooms_dto_1.CreateReservationRoomDto,
        Request]),
    __metadata("design:returntype", Promise)
], ReservationRoomController.prototype, "createReservationByPackage", null);
__decorate([
    (0, common_1.Post)("/store/deal"),
    (0, clear_cache_decorator_1.ClearCacheAnotherModules)([
        "/api/v1/individual",
        "/api/v1/company",
        "/api/v1/studentActivity",
        "/api/v1/user",
        "/api/v1/deals",
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
    __metadata("design:paramtypes", [create_reservation_rooms_dto_1.CreateReservationRoomDto,
        Request]),
    __metadata("design:returntype", Promise)
], ReservationRoomController.prototype, "createReservationByDeal", null);
__decorate([
    (0, common_1.Post)("/update"),
    (0, clear_cache_decorator_1.ClearCacheAnotherModules)([
        "/api/v1/individual",
        "/api/v1/company",
        "/api/v1/studentActivity",
        "/api/v1/user",
        "/api/v1/assignes-package",
        "/api/v1/deals",
    ]),
    (0, common_1.UseInterceptors)(caching_delete_response_interceptor_1.DeleteCacheInterceptor, caching_delete_antoher_modeule_interceptor_1.ClearCacheAnotherModulesIsnterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.ReservationRoom,
            actions: [global_enum_1.Permission.UPDATE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_reservation_rooms_dto_1.UpdateReservationRoomDto]),
    __metadata("design:returntype", Promise)
], ReservationRoomController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)("/delete"),
    (0, common_1.UseInterceptors)(caching_delete_response_interceptor_1.DeleteCacheInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.ReservationRoom,
            actions: [global_enum_1.Permission.DELETE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReservationRoomController.prototype, "remove", null);
exports.ReservationRoomController = ReservationRoomController = __decorate([
    (0, common_1.UseGuards)(authroization_guard_1.AuthorizationGuard),
    (0, common_1.Controller)("reservation-room"),
    __metadata("design:paramtypes", [reservation_room_service_1.ReservationRoomService])
], ReservationRoomController);
//# sourceMappingURL=reservation-room.controller.js.map