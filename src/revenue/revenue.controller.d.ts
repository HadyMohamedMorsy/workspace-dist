import { CreateRevenueDto } from "./dto/create-revenue.dto";
import { UpdateRevenueDto } from "./dto/update-revenue.dto";
import { RevenueService } from "./revenue.service";
export declare class RevenueController {
    private readonly revenueService;
    constructor(revenueService: RevenueService);
    findAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    create(createRevenueDto: CreateRevenueDto): Promise<import("./revenue.entity").Revenue>;
    update(updateRevenueDto: UpdateRevenueDto): Promise<import("./revenue.entity").Revenue>;
    remove(bodyDelete: {
        id: number;
    }): Promise<void>;
}
