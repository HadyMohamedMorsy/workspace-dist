import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Cache } from "cache-manager";
import { Observable } from "rxjs";
import { APIFeaturesService } from "../filters/filter.service";
export declare class ClearCacheAnotherModulesIsnterceptor implements NestInterceptor {
    private readonly apiFeaturesService;
    private readonly cacheManager;
    private readonly reflector;
    constructor(apiFeaturesService: APIFeaturesService, cacheManager: Cache, reflector: Reflector);
    intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>>;
    private clearCache;
}
