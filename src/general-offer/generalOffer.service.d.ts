import { APIFeaturesService } from "src/shared/filters/filter.service";
import { Repository } from "typeorm";
import { CreateGeneralOfferDto } from "./dto/create-general-offer.dto";
import { UpdateGeneralOfferDto } from "./dto/update-general-offer.dto";
import { GeneralOffer } from "./generalOffer.entity";
export declare class GeneralOfferService {
    private generalOfferRepository;
    protected readonly apiFeaturesService: APIFeaturesService;
    constructor(generalOfferRepository: Repository<GeneralOffer>, apiFeaturesService: APIFeaturesService);
    create(createGeneralOfferDto: CreateGeneralOfferDto): Promise<GeneralOffer>;
    findShared(): Promise<{
        data: GeneralOffer[];
    }>;
    findDeskArea(): Promise<{
        data: GeneralOffer[];
    }>;
    findMembership(): Promise<{
        data: GeneralOffer[];
    }>;
    findDeals(): Promise<{
        data: GeneralOffer[];
    }>;
    findPackages(): Promise<{
        data: GeneralOffer[];
    }>;
    findRooms(): Promise<{
        data: GeneralOffer[];
    }>;
    findAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findOne(id: number): Promise<GeneralOffer>;
    findOneRelatedIndividual(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findOneRelatedCompany(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findOneRelatedStudentActivity(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    update(updateGeneralOfferDto: UpdateGeneralOfferDto): Promise<GeneralOffer>;
    remove(id: number): Promise<void>;
}
