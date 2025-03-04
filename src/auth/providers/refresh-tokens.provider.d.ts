import { ConfigType } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/users/user.service";
import jwtConfig from "../config/jwt.config";
import { RefreshTokenDto } from "../dtos/refresh-token.dto";
import { GenerateTokensProvider } from "./generate-tokens.provider";
export declare class RefreshTokensProvider {
    private readonly jwtService;
    private readonly jwtConfiguration;
    private readonly usersService;
    private readonly generateTokensProvider;
    constructor(jwtService: JwtService, jwtConfiguration: ConfigType<typeof jwtConfig>, usersService: UserService, generateTokensProvider: GenerateTokensProvider);
    refreshTokens(refreshTokenDto: RefreshTokenDto): Promise<{
        access_token: string;
        refreshToken: string;
        token_type: string;
        user: import("../../users/user.entity").User;
    }>;
}
