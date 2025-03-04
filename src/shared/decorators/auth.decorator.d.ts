import { AuthType } from "../enum/global-enum";
export declare const AUTH_TYPE_KEY = "Bearer";
export declare const Auth: (...authTypes: AuthType[]) => import("@nestjs/common").CustomDecorator<string>;
