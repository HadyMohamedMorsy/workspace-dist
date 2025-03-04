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
exports.RefreshTokensProvider = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../../users/user.service");
const jwt_config_1 = require("../config/jwt.config");
const generate_tokens_provider_1 = require("./generate-tokens.provider");
let RefreshTokensProvider = class RefreshTokensProvider {
    constructor(jwtService, jwtConfiguration, usersService, generateTokensProvider) {
        this.jwtService = jwtService;
        this.jwtConfiguration = jwtConfiguration;
        this.usersService = usersService;
        this.generateTokensProvider = generateTokensProvider;
    }
    async refreshTokens(refreshTokenDto) {
        try {
            const { sub } = await this.jwtService.verifyAsync(refreshTokenDto.refreshToken, {
                secret: this.jwtConfiguration.secret,
                audience: this.jwtConfiguration.audience,
                issuer: this.jwtConfiguration.issuer,
            });
            const user = await this.usersService.findOneById(sub);
            return await this.generateTokensProvider.generateTokens(user);
        }
        catch (error) {
            throw new common_1.UnauthorizedException(error);
        }
    }
};
exports.RefreshTokensProvider = RefreshTokensProvider;
exports.RefreshTokensProvider = RefreshTokensProvider = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(jwt_config_1.default.KEY)),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => user_service_1.UserService))),
    __metadata("design:paramtypes", [jwt_1.JwtService, void 0, user_service_1.UserService,
        generate_tokens_provider_1.GenerateTokensProvider])
], RefreshTokensProvider);
//# sourceMappingURL=refresh-tokens.provider.js.map