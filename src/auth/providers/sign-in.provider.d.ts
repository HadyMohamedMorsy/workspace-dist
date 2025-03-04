import { UserService } from "src/users/user.service";
import { SignInDto } from "../dtos/signin.dto";
import { GenerateTokensProvider } from "./generate-tokens.provider";
import { HashingProvider } from "./hashing.provider";
import { RefreshTokensProvider } from "./refresh-tokens.provider";
export declare class SignInProvider {
    private readonly usersService;
    private readonly hashingProvider;
    private readonly generateTokensProvider;
    private readonly refreshTokensProvider;
    constructor(usersService: UserService, hashingProvider: HashingProvider, generateTokensProvider: GenerateTokensProvider, refreshTokensProvider: RefreshTokensProvider);
    signIn(signInDto: SignInDto): Promise<{
        access_token: string;
        refreshToken: string;
        token_type: string;
        user: import("../../users/user.entity").User;
    }>;
    refreshToken(refreshToken: {
        refreshToken: string;
    }): Promise<{
        access_token: string;
        refreshToken: string;
        token_type: string;
        user: import("../../users/user.entity").User;
    }>;
}
