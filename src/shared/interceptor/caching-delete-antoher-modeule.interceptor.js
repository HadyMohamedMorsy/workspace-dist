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
exports.ClearCacheAnotherModulesIsnterceptor = void 0;
const cache_manager_1 = require("@nestjs/cache-manager");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const cache_manager_2 = require("cache-manager");
const filter_service_1 = require("../filters/filter.service");
let ClearCacheAnotherModulesIsnterceptor = class ClearCacheAnotherModulesIsnterceptor {
    constructor(apiFeaturesService, cacheManager, reflector) {
        this.apiFeaturesService = apiFeaturesService;
        this.cacheManager = cacheManager;
        this.reflector = reflector;
    }
    async intercept(context, next) {
        const urls = this.reflector.get("clear_cache_url", context.getHandler());
        if (urls && urls.length) {
            for (const url of urls) {
                await this.clearCache(url);
            }
        }
        return next.handle();
    }
    async clearCache(url) {
        const cacheFilters = this.apiFeaturesService.cacheFilters;
        const keys = cacheFilters.get(url);
        if (keys) {
            for (const key of keys) {
                await this.cacheManager.del(key);
            }
            cacheFilters.delete(url);
        }
    }
};
exports.ClearCacheAnotherModulesIsnterceptor = ClearCacheAnotherModulesIsnterceptor;
exports.ClearCacheAnotherModulesIsnterceptor = ClearCacheAnotherModulesIsnterceptor = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [filter_service_1.APIFeaturesService, typeof (_a = typeof cache_manager_2.Cache !== "undefined" && cache_manager_2.Cache) === "function" ? _a : Object, core_1.Reflector])
], ClearCacheAnotherModulesIsnterceptor);
//# sourceMappingURL=caching-delete-antoher-modeule.interceptor.js.map