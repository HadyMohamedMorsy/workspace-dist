import { CreateIndividualDto } from "./dto/create-individual.dto";
import { UpdateIndividualDto } from "./dto/update-individual.dto";
import { IndividualService } from "./individual.service";
export declare class IndividualController {
    private readonly individualService;
    constructor(individualService: IndividualService);
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
    create(createProductDto: CreateIndividualDto, req: Request): Promise<import("./individual.entity").Individual>;
    update(updateProductDto: UpdateIndividualDto, req: Request): Promise<import("./individual.entity").Individual>;
    remove(bodyDelete: {
        id: number;
    }): Promise<void>;
}
