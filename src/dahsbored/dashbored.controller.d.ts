import { DahboredService } from "./dahsbored.service";
import { FiltersDashboredDto } from "./dto/filter-dashbored.dto";
export declare class DashboredController {
    private readonly dashboredService;
    constructor(dashboredService: DahboredService);
    getAnalytics(filterQueryDto: FiltersDashboredDto, req: Request): Promise<{
        title: string;
        value: number;
        icon: string;
    }[]>;
    private createMetrics;
}
