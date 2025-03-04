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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const cache_manager_1 = require("@nestjs/cache-manager");
const cache_manager_2 = require("cache-manager");
const auth_decorator_1 = require("../shared/decorators/auth.decorator");
const global_enum_1 = require("../shared/enum/global-enum");
const refresh_token_dto_1 = require("./dtos/refresh-token.dto");
const signin_dto_1 = require("./dtos/signin.dto");
const auth_service_1 = require("./providers/auth.service");
let AuthController = class AuthController {
    constructor(authService, cacheManager) {
        this.authService = authService;
        this.cacheManager = cacheManager;
    }
    signIn(signInDto) {
        return this.authService.signIn(signInDto);
    }
    refreshTokens(refreshTokenDto) {
        return this.authService.refreshToken(refreshTokenDto);
    }
    async logout(req) {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token)
            throw new common_1.UnauthorizedException("Invalid Token");
        await this.cacheManager.reset();
        return {
            data: true,
        };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)("login"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, auth_decorator_1.Auth)(global_enum_1.AuthType.None),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signin_dto_1.SignInDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signIn", null);
__decorate([
    (0, auth_decorator_1.Auth)(global_enum_1.AuthType.None),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)("refresh-tokens"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [refresh_token_dto_1.RefreshTokenDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "refreshTokens", null);
__decorate([
    (0, common_1.Post)("logout"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)("auth"),
    __param(1, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [auth_service_1.AuthService, typeof (_a = typeof cache_manager_2.Cache !== "undefined" && cache_manager_2.Cache) === "function" ? _a : Object])
], AuthController);
//# sourceMappingURL=auth.controller.js.map