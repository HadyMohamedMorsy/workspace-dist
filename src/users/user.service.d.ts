import { HashingProvider } from "src/auth/providers/hashing.provider";
import { APIFeaturesService } from "src/shared/filters/filter.service";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dtos/create-user.dto";
import { PatchUserDto } from "./dtos/patch-user.dto";
import { User } from "./user.entity";
export declare class UserService {
    private readonly hashingProvider;
    private readonly apiFeaturesService;
    private readonly repository;
    constructor(hashingProvider: HashingProvider, apiFeaturesService: APIFeaturesService, repository: Repository<User>);
    findAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findList(): Promise<{
        data: User[];
    }>;
    findOneById(id: number): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    updateUser(patch: PatchUserDto): Promise<User>;
    delete(userId: number): Promise<{
        deleted: boolean;
        userId: number;
    }>;
}
