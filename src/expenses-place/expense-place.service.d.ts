import { APIFeaturesService } from "src/shared/filters/filter.service";
import { Repository } from "typeorm";
import { CreateExpensePlaceDto } from "./dto/create-expense-place.dto";
import { UpdateExpensePlaceDto } from "./dto/update-expense-place.dto";
import { ExpensePlace } from "./expense-place.entity";
export declare class ExpensesPlaceService {
    private expensesPlaceRepository;
    protected readonly apiFeaturesService: APIFeaturesService;
    constructor(expensesPlaceRepository: Repository<ExpensePlace>, apiFeaturesService: APIFeaturesService);
    create(createExpenseSalariesDto: CreateExpensePlaceDto): Promise<ExpensePlace>;
    findAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findOne(id: number): Promise<ExpensePlace>;
    update(updateExpensePlaceDto: UpdateExpensePlaceDto): Promise<ExpensePlace>;
    remove(id: number): Promise<void>;
}
