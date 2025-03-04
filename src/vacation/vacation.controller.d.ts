import { CreateVacationDto } from "./dto/create-vacation.dto";
import { UpdateVacationDto } from "./dto/update-vacation.dto";
import { VacationService } from "./vacation.service";
export declare class VacationController {
    private readonly vacationService;
    constructor(vacationService: VacationService);
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
    create(createVacationDto: CreateVacationDto, req: Request): Promise<import("./vacation.entity").Vacation>;
    update(updateVacationDto: UpdateVacationDto, req: Request): Promise<import("./vacation.entity").Vacation>;
    remove(bodyDelete: {
        id: number;
    }): Promise<void>;
}
