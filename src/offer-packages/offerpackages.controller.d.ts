import { CreateOfferPackagesDto } from "./dto/create-offer-packages.dto";
import { UpdateOfferPackagesDto } from "./dto/update-offer-packages.dto";
import { OfferPackagesService } from "./offerpackages.service";
export declare class OfferPackagesController {
    private readonly offerpackagesService;
    constructor(offerpackagesService: OfferPackagesService);
    findAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    create(createPackageDto: CreateOfferPackagesDto): Promise<import("./offer-package.entity").OfferPackages>;
    update(updatePackageDto: UpdateOfferPackagesDto): Promise<import("./offer-package.entity").OfferPackages>;
    remove(bodyDelete: {
        id: number;
    }): Promise<void>;
}
