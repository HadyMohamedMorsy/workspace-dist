import { APIFeaturesService } from "src/shared/filters/filter.service";
import { Repository } from "typeorm";
import { CreateRevenueDto } from "./dto/create-revenue.dto";
import { UpdateRevenueDto } from "./dto/update-revenue.dto";
import { Revenue } from "./revenue.entity";
export declare class RevenueService {
    private revenueRepository;
    protected readonly apiFeaturesService: APIFeaturesService;
    constructor(revenueRepository: Repository<Revenue>, apiFeaturesService: APIFeaturesService);
    create(createRevenueDto: CreateRevenueDto): Promise<Revenue>;
    findAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findOne(id: number): Promise<Revenue>;
    update(updateRevenueDto: UpdateRevenueDto): Promise<Revenue>;
    remove(id: number): Promise<void>;
}
