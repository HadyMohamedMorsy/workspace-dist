import { Cache } from "cache-manager";
import { RefreshTokenDto } from "./dtos/refresh-token.dto";
import { SignInDto } from "./dtos/signin.dto";
import { AuthService } from "./providers/auth.service";
export declare class AuthController {
    private readonly authService;
    private cacheManager;
    constructor(authService: AuthService, cacheManager: Cache);
    signIn(signInDto: SignInDto): Promise<{
        access_token: string;
        refreshToken: string;
        token_type: string;
        user: import("../users/user.entity").User;
    }>;
    refreshTokens(refreshTokenDto: RefreshTokenDto): Promise<{
        access_token: string;
        refreshToken: string;
        token_type: string;
        user: import("../users/user.entity").User;
    }>;
    logout(req: any): Promise<{
        data: boolean;
    }>;
}
