import { APIFeaturesService } from "src/shared/filters/filter.service";
import { Repository } from "typeorm";
import { RevenueService } from "../revenue.service";
import { CreateRevenueChildDto } from "./dto/create-revenue-child.dto";
import { UpdateRevenueChildDto } from "./dto/update-revenue-child.dto";
import { RevenueChild } from "./revenue-child.entity";
export declare class RevenueChildService {
    private revenueChildRepository;
    protected readonly apiFeaturesService: APIFeaturesService;
    protected readonly revenueService: RevenueService;
    constructor(revenueChildRepository: Repository<RevenueChild>, apiFeaturesService: APIFeaturesService, revenueService: RevenueService);
    create(createRevenueChildDto: CreateRevenueChildDto): Promise<RevenueChild>;
    findAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findOne(id: number): Promise<RevenueChild>;
    update(updateRevenueChildDto: UpdateRevenueChildDto): Promise<RevenueChild>;
    remove(id: number): Promise<void>;
}
