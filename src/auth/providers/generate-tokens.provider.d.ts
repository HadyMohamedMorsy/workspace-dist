import { ConfigType } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/users/user.entity";
import jwtConfig from "../config/jwt.config";
export declare class GenerateTokensProvider {
    private readonly jwtService;
    private readonly jwtConfiguration;
    constructor(jwtService: JwtService, jwtConfiguration: ConfigType<typeof jwtConfig>);
    signToken<T>(userId: number, expiresIn: number, payload?: T): Promise<string>;
    generateTokens(user: User): Promise<{
        access_token: string;
        refreshToken: string;
        token_type: string;
        user: User;
    }>;
}
