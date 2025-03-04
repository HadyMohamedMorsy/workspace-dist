import { CreateSharedDto } from "./dto/create-shared.dto";
import { UpdateSharedDto } from "./dto/update-shared.dto";
import { SharedService } from "./shared.service";
export declare class SharedController {
    private readonly sharedService;
    constructor(sharedService: SharedService);
    findAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findIndividuaSharedAll(filterQueryDto: any): Promise<{
        data: import("./shared.entity").Shared[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findCompanySharedAll(filterQueryDto: any): Promise<{
        data: import("./shared.entity").Shared[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findStudentSharedAll(filterQueryDto: any): Promise<{
        data: import("./shared.entity").Shared[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findUserSharedAll(filterQueryDto: any): Promise<{
        data: import("./shared.entity").Shared[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    create(createSharedDto: CreateSharedDto, req: Request): Promise<import("./shared.entity").Shared>;
    createReservationByMememberShip(createSharedDto: CreateSharedDto, req: Request): Promise<import("../../assignes-memberships/assignes-membership.entity").AssignesMembership>;
    findReservationIndividualAll(filterQueryDto: any): Promise<{
        data: import("./shared.entity").Shared[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findReservationCompanyAll(filterQueryDto: any): Promise<{
        data: import("./shared.entity").Shared[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findReservationStudentActivityAll(filterQueryDto: any): Promise<{
        data: import("./shared.entity").Shared[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    update(updateSharedDto: UpdateSharedDto): Promise<import("./shared.entity").Shared>;
    remove(bodyDelete: {
        id: number;
    }): Promise<void>;
}
