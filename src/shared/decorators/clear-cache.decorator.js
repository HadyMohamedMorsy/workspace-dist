"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClearCacheAnotherModules = exports.CLEAR_CACHE_URL = void 0;
const common_1 = require("@nestjs/common");
exports.CLEAR_CACHE_URL = "clear_cache_url";
const ClearCacheAnotherModules = (urls) => (0, common_1.SetMetadata)(exports.CLEAR_CACHE_URL, urls);
exports.ClearCacheAnotherModules = ClearCacheAnotherModules;
//# sourceMappingURL=clear-cache.decorator.js.map