import { CreateRevenueChildDto } from "./dto/create-revenue-child.dto";
import { UpdateRevenueChildDto } from "./dto/update-revenue-child.dto";
import { RevenueChildService } from "./revenue-child.service";
export declare class RevenueChildController {
    private readonly revenueChildService;
    constructor(revenueChildService: RevenueChildService);
    findAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    create(createRevenueDto: CreateRevenueChildDto): Promise<import("./revenue-child.entity").RevenueChild>;
    update(updateRevenueDto: UpdateRevenueChildDto): Promise<import("./revenue-child.entity").RevenueChild>;
    remove(bodyDelete: {
        id: number;
    }): Promise<void>;
}
