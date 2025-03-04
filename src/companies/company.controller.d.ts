import { CompanyService } from "./company.service";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { UpdateCompanyDto } from "./dto/update-company.dto";
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    findAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findByUserAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    create(createCompanyDto: CreateCompanyDto, req: Request): Promise<import("./company.entity").Company>;
    update(updateCompanyDto: UpdateCompanyDto, req: Request): Promise<import("./company.entity").Company>;
    remove(bodyDelete: {
        id: number;
    }): Promise<void>;
}
