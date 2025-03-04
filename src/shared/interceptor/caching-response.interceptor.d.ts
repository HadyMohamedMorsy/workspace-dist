import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Cache } from "cache-manager";
import { Observable } from "rxjs";
import { APIFeaturesService } from "../filters/filter.service";
export declare class CachingInterceptor implements NestInterceptor {
    private readonly cacheManager;
    protected readonly apiFeaturesService: APIFeaturesService;
    constructor(cacheManager: Cache, apiFeaturesService: APIFeaturesService);
    intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>>;
    private generateCacheKey;
}
