import { AssignesPackagesService } from "./assignes-packages.service";
import { CreateAssignesPackageDto } from "./dto/create-assignes-packages.dto";
import { UpdateAssignesPackageDto } from "./dto/update-assignes-packages.dto";
export declare class AssignesPackageController {
    private readonly assignesPackagesService;
    constructor(assignesPackagesService: AssignesPackagesService);
    findIndividuaAssigneslAll(filterQueryDto: any): Promise<{
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
    create(createAssignesPackageDto: CreateAssignesPackageDto, req: Request): Promise<import("./assignes-packages.entity").AssignesPackages>;
    update(updateAssignesPackageDto: UpdateAssignesPackageDto): Promise<import("./assignes-packages.entity").AssignesPackages>;
    remove(bodyDelete: {
        id: number;
    }): Promise<void>;
}
