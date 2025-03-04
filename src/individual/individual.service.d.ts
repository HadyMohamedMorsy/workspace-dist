import { APIFeaturesService } from "src/shared/filters/filter.service";
import { Repository } from "typeorm";
import { CreateIndividualDto } from "./dto/create-individual.dto";
import { UpdateIndividualDto } from "./dto/update-individual.dto";
import { Individual } from "./individual.entity";
export declare class IndividualService {
    private individualRepository;
    protected readonly apiFeaturesService: APIFeaturesService;
    constructor(individualRepository: Repository<Individual>, apiFeaturesService: APIFeaturesService);
    create(createIndividualDto: CreateIndividualDto): Promise<Individual>;
    findAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findByUserAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findOne(id: number): Promise<Individual>;
    update(updateIndividualDto: UpdateIndividualDto): Promise<Individual>;
    remove(id: number): Promise<void>;
}
