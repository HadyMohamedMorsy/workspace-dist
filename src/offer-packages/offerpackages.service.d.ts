import { RoomsService } from "src/rooms/rooms.service";
import { APIFeaturesService } from "src/shared/filters/filter.service";
import { Repository } from "typeorm";
import { CreateOfferPackagesDto } from "./dto/create-offer-packages.dto";
import { UpdateOfferPackagesDto } from "./dto/update-offer-packages.dto";
import { OfferPackages } from "./offer-package.entity";
export declare class OfferPackagesService {
    private offerpackagesRepository;
    protected readonly apiFeaturesService: APIFeaturesService;
    protected readonly roomService: RoomsService;
    constructor(offerpackagesRepository: Repository<OfferPackages>, apiFeaturesService: APIFeaturesService, roomService: RoomsService);
    create(createOfferpackagesDto: CreateOfferPackagesDto): Promise<OfferPackages>;
    findAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findList(): Promise<{
        data: OfferPackages[];
    }>;
    findOne(id: number): Promise<OfferPackages>;
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
    findOneRelatedRoom(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    update(updateOfferpackagesDto: UpdateOfferPackagesDto): Promise<OfferPackages>;
    remove(id: number): Promise<void>;
}
