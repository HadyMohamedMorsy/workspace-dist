import { SignInProvider } from "./sign-in.provider";
import { UserService } from "src/users/user.service";
import { SignInDto } from "../dtos/signin.dto";
export declare class AuthService {
    private readonly usersService;
    private readonly signInProvider;
    constructor(usersService: UserService, signInProvider: SignInProvider);
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
    getUserPermissions(userId: number): Promise<import("../../users/user.entity").PermissionsUser[]>;
}
