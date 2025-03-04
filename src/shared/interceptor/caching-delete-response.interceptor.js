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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCacheInterceptor = void 0;
const cache_manager_1 = require("@nestjs/cache-manager");
const common_1 = require("@nestjs/common");
const cache_manager_2 = require("cache-manager");
const rxjs_1 = require("rxjs");
const filter_service_1 = require("../filters/filter.service");
let DeleteCacheInterceptor = class DeleteCacheInterceptor {
    constructor(cacheManager, apiFeaturesService) {
        this.cacheManager = cacheManager;
        this.apiFeaturesService = apiFeaturesService;
    }
    async intercept(context, next) {
        const cacheFilters = this.apiFeaturesService.cacheFilters;
        const { url } = context.switchToHttp().getRequest();
        return next.handle().pipe((0, rxjs_1.tap)(async () => {
            await this.clearCach(cacheFilters, url);
        }));
    }
    async clearCach(cacheFilters, prefix) {
        const url = () => {
            const parts = prefix.split("/");
            return parts.slice(0, 4).join("/");
        };
        const keys = cacheFilters.get(url());
        if (keys) {
            for (const key of keys) {
                await this.cacheManager.del(key);
            }
            cacheFilters.delete(prefix);
        }
        cacheFilters.delete("/api/v1/dashboard");
        await this.cacheManager.del("/api/v1/dashboard");
    }
};
exports.DeleteCacheInterceptor = DeleteCacheInterceptor;
exports.DeleteCacheInterceptor = DeleteCacheInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [typeof (_a = typeof cache_manager_2.Cache !== "undefined" && cache_manager_2.Cache) === "function" ? _a : Object, filter_service_1.APIFeaturesService])
], DeleteCacheInterceptor);
//# sourceMappingURL=caching-delete-response.interceptor.js.map