import { Permission, Role } from "src/shared/enum/global-enum";
export declare class CreateUserDto {
    firstName: string;
    lastName?: string;
    email: string;
    username: string;
    role: Role;
    permission: ResourcePermissionDto[];
    phone: string;
    password: string;
    password_confirmation: string;
}
export declare class ResourcePermissionDto {
    resource: string;
    actions: Permission[];
}
