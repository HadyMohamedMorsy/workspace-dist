import { PermissionsUser } from "src/users/user.entity";
export interface ActiveUserData {
    id: number;
    sub: number;
    email: string;
    permission: PermissionsUser[];
}
