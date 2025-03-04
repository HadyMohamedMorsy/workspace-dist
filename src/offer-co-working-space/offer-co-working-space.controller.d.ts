import { CreateCoWorkingSpaceDto } from "./dto/create-offer-co-working-space.dto";
import { UpdateCoWorkingSpaceDto } from "./dto/update-offer-co-working-space.dto";
import { OfferCoWorkingSpaceService } from "./offer-co-working-space.service";
export declare class OfferCoWorkingSpaceController {
    private readonly offerCoWorkingSpaceService;
    constructor(offerCoWorkingSpaceService: OfferCoWorkingSpaceService);
    findAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    create(createProductDto: CreateCoWorkingSpaceDto): Promise<import("./offer-co-working-space.entity").CoWorkingSpace>;
    update(updateProductDto: UpdateCoWorkingSpaceDto): Promise<import("./offer-co-working-space.entity").CoWorkingSpace>;
    remove(bodyDelete: {
        id: number;
    }): Promise<void>;
}
