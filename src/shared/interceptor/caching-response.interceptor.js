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
exports.CachingInterceptor = void 0;
const cache_manager_1 = require("@nestjs/cache-manager");
const common_1 = require("@nestjs/common");
const cache_manager_2 = require("cache-manager");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const filter_service_1 = require("../filters/filter.service");
let CachingInterceptor = class CachingInterceptor {
    constructor(cacheManager, apiFeaturesService) {
        this.cacheManager = cacheManager;
        this.apiFeaturesService = apiFeaturesService;
    }
    async intercept(context, next) {
        const cacheFilters = this.apiFeaturesService.cacheFilters;
        const request = context.switchToHttp().getRequest();
        const { cacheKey, prefix } = this.generateCacheKey(request);
        const cachedResponse = await this.cacheManager.get(cacheKey);
        if (cachedResponse) {
            return new rxjs_1.Observable(observer => {
                observer.next(cachedResponse);
                observer.complete();
            });
        }
        return next.handle().pipe((0, operators_1.tap)(async (data) => {
            await this.cacheManager.set(cacheKey, data, { ttl: 86400 });
            if (!cacheFilters.has(prefix)) {
                cacheFilters.set(prefix, new Set());
            }
            cacheFilters.get(prefix)?.add(cacheKey);
        }));
    }
    generateCacheKey(request) {
        const { method, url, body } = request;
        const prefix = () => {
            const parts = url.split("/");
            return parts.slice(0, 4).join("/");
        };
        const cacheKey = `${method}:${url}:${JSON.stringify(body)}`;
        return { cacheKey, prefix: prefix() };
    }
};
exports.CachingInterceptor = CachingInterceptor;
exports.CachingInterceptor = CachingInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [typeof (_a = typeof cache_manager_2.Cache !== "undefined" && cache_manager_2.Cache) === "function" ? _a : Object, filter_service_1.APIFeaturesService])
], CachingInterceptor);
//# sourceMappingURL=caching-response.interceptor.js.map