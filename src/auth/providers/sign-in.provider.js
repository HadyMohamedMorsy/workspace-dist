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
exports.SignInProvider = void 0;
const common_1 = require("@nestjs/common");
const global_enum_1 = require("../../shared/enum/global-enum");
const user_service_1 = require("../../users/user.service");
const generate_tokens_provider_1 = require("./generate-tokens.provider");
const hashing_provider_1 = require("./hashing.provider");
const refresh_tokens_provider_1 = require("./refresh-tokens.provider");
let SignInProvider = class SignInProvider {
    constructor(usersService, hashingProvider, generateTokensProvider, refreshTokensProvider) {
        this.usersService = usersService;
        this.hashingProvider = hashingProvider;
        this.generateTokensProvider = generateTokensProvider;
        this.refreshTokensProvider = refreshTokensProvider;
    }
    async signIn(signInDto) {
        const user = await this.usersService.findOneByEmail(signInDto.email);
        let isEqual = false;
        if (!user || user.status !== global_enum_1.UserStatus.ACTIVE) {
            throw new common_1.UnauthorizedException("Invalid credentials");
        }
        try {
            isEqual = await this.hashingProvider.comparePassword(signInDto.password, user.password);
        }
        catch (error) {
            throw new common_1.RequestTimeoutException(error, {
                description: "Could not compare the password",
            });
        }
        if (!isEqual) {
            throw new common_1.UnauthorizedException("Password does not match");
        }
        return await this.generateTokensProvider.generateTokens(user);
    }
    async refreshToken(refreshToken) {
        try {
            const newTokens = await this.refreshTokensProvider.refreshTokens(refreshToken);
            return newTokens;
        }
        catch (err) {
            throw new common_1.UnauthorizedException(err.message);
        }
    }
};
exports.SignInProvider = SignInProvider;
exports.SignInProvider = SignInProvider = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => user_service_1.UserService))),
    __metadata("design:paramtypes", [user_service_1.UserService,
        hashing_provider_1.HashingProvider,
        generate_tokens_provider_1.GenerateTokensProvider,
        refresh_tokens_provider_1.RefreshTokensProvider])
], SignInProvider);
//# sourceMappingURL=sign-in.provider.js.map