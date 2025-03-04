import { CreateUserDto } from "./dtos/create-user.dto";
import { PatchUserDto } from "./dtos/patch-user.dto";
import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    index(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    createUsers(createUserDto: CreateUserDto): Promise<import("./user.entity").User>;
    updateUsers(updateProductDto: PatchUserDto): Promise<import("./user.entity").User>;
    delete(id: number): Promise<{
        deleted: boolean;
        userId: number;
    }>;
}
