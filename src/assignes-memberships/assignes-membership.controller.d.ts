import { AssignesMembershipService } from "./assignes-membership.service";
import { CreateAssignesMembershipDto } from "./dto/create-assignes-membership.dto";
import { UpdateAssignesMembershipDto } from "./dto/update-assignes-membership.dto";
export declare class AssignesMembershipController {
    private readonly assignesMembershipService;
    constructor(assignesMembershipService: AssignesMembershipService);
    findIndividualAssigneslAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findCompanyAssigneslAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findStudentActivityAssigneslAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findUserAssigneslAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    create(createAssignesMembershipDto: CreateAssignesMembershipDto, req: Request): Promise<import("./assignes-membership.entity").AssignesMembership>;
    update(updateAssignesMembershipDto: UpdateAssignesMembershipDto): Promise<import("./assignes-membership.entity").AssignesMembership>;
    remove(bodyDelete: {
        id: number;
    }): Promise<void>;
}
