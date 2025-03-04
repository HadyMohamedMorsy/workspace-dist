import { APIFeaturesService } from "src/shared/filters/filter.service";
import { Repository } from "typeorm";
import { CreateVacationDto } from "./dto/create-vacation.dto";
import { UpdateVacationDto } from "./dto/update-vacation.dto";
import { Vacation } from "./vacation.entity";
export declare class VacationService {
    private vacationRepository;
    protected readonly apiFeaturesService: APIFeaturesService;
    constructor(vacationRepository: Repository<Vacation>, apiFeaturesService: APIFeaturesService);
    create(create: CreateVacationDto): Promise<Vacation>;
    findAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findUserAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findOne(id: number): Promise<Vacation>;
    update(updateTaskDto: UpdateVacationDto): Promise<Vacation>;
    remove(id: number): Promise<void>;
}
