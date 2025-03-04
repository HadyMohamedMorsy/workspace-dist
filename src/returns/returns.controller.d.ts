import { CreateReturnsDto } from "./dto/create-returns.dto";
import { UpdateReturnsDto } from "./dto/update-returns.dto";
import { ReturnsService } from "./returns.service";
export declare class ReturnsController {
    private readonly returnsService;
    constructor(returnsService: ReturnsService);
    findAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    create(createProductDto: CreateReturnsDto): Promise<import("./returns.entity").Returns>;
    update(updateProductDto: UpdateReturnsDto): Promise<import("./returns.entity").Returns>;
    remove(bodyDelete: {
        id: number;
    }): Promise<void>;
}
