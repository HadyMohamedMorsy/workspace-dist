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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const sign_in_provider_1 = require("./sign-in.provider");
const user_service_1 = require("../../users/user.service");
let AuthService = class AuthService {
    constructor(usersService, signInProvider) {
        this.usersService = usersService;
        this.signInProvider = signInProvider;
    }
    async signIn(signInDto) {
        return await this.signInProvider.signIn(signInDto);
    }
    async refreshToken(refreshToken) {
        return await this.signInProvider.refreshToken(refreshToken);
    }
    async getUserPermissions(userId) {
        const user = await this.usersService.findOneById(userId);
        if (!user)
            throw new common_1.BadRequestException("User Is Not Exist");
        return user.permission;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => user_service_1.UserService))),
    __metadata("design:paramtypes", [user_service_1.UserService,
        sign_in_provider_1.SignInProvider])
], AuthService);
//# sourceMappingURL=auth.service.js.map