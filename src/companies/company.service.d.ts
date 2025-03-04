import { APIFeaturesService } from "src/shared/filters/filter.service";
import { Repository } from "typeorm";
import { Company } from "./company.entity";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { UpdateCompanyDto } from "./dto/update-company.dto";
export declare class CompanyService {
    private companyRepository;
    protected readonly apiFeaturesService: APIFeaturesService;
    constructor(companyRepository: Repository<Company>, apiFeaturesService: APIFeaturesService);
    create(createCompanyDto: CreateCompanyDto): Promise<Company>;
    findAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findByUserAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findOne(id: number): Promise<Company>;
    update(updateCompanyDto: UpdateCompanyDto): Promise<Company>;
    remove(companyId: number): Promise<void>;
}
