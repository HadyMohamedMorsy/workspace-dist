import { APIFeaturesService } from "src/shared/filters/filter.service";
import { Repository } from "typeorm";
import { CreateCoWorkingSpaceDto } from "./dto/create-offer-co-working-space.dto";
import { UpdateCoWorkingSpaceDto } from "./dto/update-offer-co-working-space.dto";
import { CoWorkingSpace } from "./offer-co-working-space.entity";
export declare class OfferCoWorkingSpaceService {
    private offerCoWorkingSpaceRepository;
    protected readonly apiFeaturesService: APIFeaturesService;
    constructor(offerCoWorkingSpaceRepository: Repository<CoWorkingSpace>, apiFeaturesService: APIFeaturesService);
    create(createCoWorkingSpaceDto: CreateCoWorkingSpaceDto): Promise<CoWorkingSpace>;
    findAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findListShared(): Promise<{
        data: CoWorkingSpace[];
    }>;
    findListDeskArea(): Promise<{
        data: CoWorkingSpace[];
    }>;
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
    findOneRelatedShared(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findOneRelatedDeskArea(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findOne(id: number): Promise<CoWorkingSpace>;
    update(updateGeneralOfferDto: UpdateCoWorkingSpaceDto): Promise<CoWorkingSpace>;
    remove(id: number): Promise<void>;
}
