import { PermissionsUser } from "src/users/user.entity";
export declare const PERMISSIONS_KEY = "permissions";
export declare const Permissions: (permissions: PermissionsUser[]) => import("@nestjs/common").CustomDecorator<string>;
