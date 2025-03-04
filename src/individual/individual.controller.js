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
exports.IndividualController = void 0;
const common_1 = require("@nestjs/common");
const authroization_guard_1 = require("../auth/guards/access-token/authroization.guard");
const global_enum_1 = require("../shared/enum/global-enum");
const caching_delete_response_interceptor_1 = require("../shared/interceptor/caching-delete-response.interceptor");
const caching_response_interceptor_1 = require("../shared/interceptor/caching-response.interceptor");
const permissions_decorator_1 = require("../shared/decorators/permissions.decorator");
const create_individual_dto_1 = require("./dto/create-individual.dto");
const update_individual_dto_1 = require("./dto/update-individual.dto");
const individual_service_1 = require("./individual.service");
let IndividualController = class IndividualController {
    constructor(individualService) {
        this.individualService = individualService;
    }
    async findAll(filterQueryDto) {
        return this.individualService.findAll(filterQueryDto);
    }
    async findByUserAll(filterQueryDto) {
        return this.individualService.findByUserAll(filterQueryDto);
    }
    async create(createProductDto, req) {
        const payload = { ...createProductDto, createdBy: req["createdBy"] };
        return await this.individualService.create(payload);
    }
    async update(updateProductDto, req) {
        const payload = { ...updateProductDto, createdBy: req["createdBy"] };
        return await this.individualService.update(payload);
    }
    async remove(bodyDelete) {
        return this.individualService.remove(bodyDelete.id);
    }
};
exports.IndividualController = IndividualController;
__decorate([
    (0, common_1.Post)("/index"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Individual,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IndividualController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)("/user"),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Individual,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IndividualController.prototype, "findByUserAll", null);
__decorate([
    (0, common_1.Post)("/store"),
    (0, common_1.UseInterceptors)(caching_delete_response_interceptor_1.DeleteCacheInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Individual,
            actions: [global_enum_1.Permission.CREATE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_individual_dto_1.CreateIndividualDto, Request]),
    __metadata("design:returntype", Promise)
], IndividualController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("/update"),
    (0, common_1.UseInterceptors)(caching_delete_response_interceptor_1.DeleteCacheInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Individual,
            actions: [global_enum_1.Permission.UPDATE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_individual_dto_1.UpdateIndividualDto, Request]),
    __metadata("design:returntype", Promise)
], IndividualController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)("/delete"),
    (0, common_1.UseInterceptors)(caching_delete_response_interceptor_1.DeleteCacheInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.Individual,
            actions: [global_enum_1.Permission.DELETE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IndividualController.prototype, "remove", null);
exports.IndividualController = IndividualController = __decorate([
    (0, common_1.UseGuards)(authroization_guard_1.AuthorizationGuard),
    (0, common_1.Controller)("individual"),
    __metadata("design:paramtypes", [individual_service_1.IndividualService])
], IndividualController);
//# sourceMappingURL=individual.controller.js.map