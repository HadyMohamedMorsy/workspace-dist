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
exports.ListController = void 0;
const common_1 = require("@nestjs/common");
const caching_response_interceptor_1 = require("../../interceptor/caching-response.interceptor");
const list_service_1 = require("./list.service");
const permission_1 = require("./tree/permission");
let ListController = class ListController {
    constructor(listsService) {
        this.listsService = listsService;
    }
    async getLists(keys, req) {
        const result = await this.listsService.getLists(keys, req["lang"]);
        return {
            data: result,
        };
    }
    async getEntityLists(body) {
        return await this.listsService.getEntityList(body.module);
    }
    async getPermissionsTree() {
        const result = await this.listsService.getPermissionTree(permission_1.PERMISSIONS_TREE);
        return {
            data: result,
        };
    }
    async roomsCalender() {
        const result = await this.listsService.filterRoomsCalender();
        return {
            data: result,
        };
    }
};
exports.ListController = ListController;
__decorate([
    (0, common_1.Post)("/list"),
    __param(0, (0, common_1.Body)("keys")),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], ListController.prototype, "getLists", null);
__decorate([
    (0, common_1.Post)("/list-entity"),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ListController.prototype, "getEntityLists", null);
__decorate([
    (0, common_1.Get)("/permission-list-tree"),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ListController.prototype, "getPermissionsTree", null);
__decorate([
    (0, common_1.Get)("/rooms-filters-calender"),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ListController.prototype, "roomsCalender", null);
exports.ListController = ListController = __decorate([
    (0, common_1.Controller)("lists"),
    __metadata("design:paramtypes", [list_service_1.ListService])
], ListController);
//# sourceMappingURL=list-controller.js.map