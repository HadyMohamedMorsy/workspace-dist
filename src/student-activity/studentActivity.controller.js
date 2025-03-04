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
exports.StudentActivityController = void 0;
const common_1 = require("@nestjs/common");
const authroization_guard_1 = require("../auth/guards/access-token/authroization.guard");
const global_enum_1 = require("../shared/enum/global-enum");
const caching_delete_response_interceptor_1 = require("../shared/interceptor/caching-delete-response.interceptor");
const caching_response_interceptor_1 = require("../shared/interceptor/caching-response.interceptor");
const permissions_decorator_1 = require("../shared/decorators/permissions.decorator");
const create_StudentActivity_dto_1 = require("./dto/create-StudentActivity.dto");
const update_StudentActivity_dto_1 = require("./dto/update-StudentActivity.dto");
const studentActivity_service_1 = require("./studentActivity.service");
let StudentActivityController = class StudentActivityController {
    constructor(studentActivityService) {
        this.studentActivityService = studentActivityService;
    }
    async findAll(filterQueryDto) {
        return this.studentActivityService.findAll(filterQueryDto);
    }
    async findByUserAll(filterQueryDto) {
        return this.studentActivityService.findByUserAll(filterQueryDto);
    }
    async create(createStudentDto, req) {
        const payload = { ...createStudentDto, createdBy: req["createdBy"] };
        return await this.studentActivityService.create(payload);
    }
    async update(updateStudentDto, req) {
        const payload = { ...updateStudentDto, createdBy: req["createdBy"] };
        return await this.studentActivityService.update(payload);
    }
    async remove(bodyDelete) {
        return this.studentActivityService.remove(bodyDelete.id);
    }
};
exports.StudentActivityController = StudentActivityController;
__decorate([
    (0, common_1.Post)("/index"),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.StudentActivity,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentActivityController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)("/user"),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.StudentActivity,
            actions: [global_enum_1.Permission.INDEX],
        },
    ]),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentActivityController.prototype, "findByUserAll", null);
__decorate([
    (0, common_1.Post)("/store"),
    (0, common_1.UseInterceptors)(caching_delete_response_interceptor_1.DeleteCacheInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.StudentActivity,
            actions: [global_enum_1.Permission.CREATE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_StudentActivity_dto_1.CreateStudentActivityDto, Request]),
    __metadata("design:returntype", Promise)
], StudentActivityController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("/update"),
    (0, common_1.UseInterceptors)(caching_delete_response_interceptor_1.DeleteCacheInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.StudentActivity,
            actions: [global_enum_1.Permission.UPDATE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_StudentActivity_dto_1.UpdateStudentActivityDto, Request]),
    __metadata("design:returntype", Promise)
], StudentActivityController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)("/delete"),
    (0, common_1.UseInterceptors)(caching_delete_response_interceptor_1.DeleteCacheInterceptor),
    (0, permissions_decorator_1.Permissions)([
        {
            resource: global_enum_1.Resource.StudentActivity,
            actions: [global_enum_1.Permission.DELETE],
        },
    ]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentActivityController.prototype, "remove", null);
exports.StudentActivityController = StudentActivityController = __decorate([
    (0, common_1.UseGuards)(authroization_guard_1.AuthorizationGuard),
    (0, common_1.Controller)("studentActivity"),
    __metadata("design:paramtypes", [studentActivity_service_1.StudentActivityService])
], StudentActivityController);
//# sourceMappingURL=studentActivity.controller.js.map