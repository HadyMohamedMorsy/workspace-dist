import { DealsService } from "./deals.service";
import { CreateDealsDto } from "./dto/create-deals.dto";
import { UpdateDealsDto } from "./dto/update-deals.dto";
export declare class DealsController {
    private readonly dealsService;
    constructor(dealsService: DealsService);
    findIndividuaDealsAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findStudentDealsAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findCompanyDealsAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findUserDealsAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    create(createDealsDto: CreateDealsDto, req: Request): Promise<import("./deals.entity").Deals>;
    update(updateDealsDto: UpdateDealsDto): Promise<import("./deals.entity").Deals>;
    remove(bodyDelete: {
        id: number;
    }): Promise<void>;
}
