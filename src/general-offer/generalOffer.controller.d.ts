import { CreateGeneralOfferDto } from "./dto/create-general-offer.dto";
import { UpdateGeneralOfferDto } from "./dto/update-general-offer.dto";
import { GeneralOfferService } from "./generalOffer.service";
export declare class GeneralOfferController {
    private readonly generalOfferService;
    constructor(generalOfferService: GeneralOfferService);
    findAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    create(createProductDto: CreateGeneralOfferDto): Promise<import("./generalOffer.entity").GeneralOffer>;
    update(updateProductDto: UpdateGeneralOfferDto): Promise<import("./generalOffer.entity").GeneralOffer>;
    remove(bodyDelete: {
        id: number;
    }): Promise<void>;
}
