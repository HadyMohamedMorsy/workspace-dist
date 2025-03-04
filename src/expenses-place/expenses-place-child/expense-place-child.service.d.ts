import { APIFeaturesService } from "src/shared/filters/filter.service";
import { Repository } from "typeorm";
import { ExpensesPlaceService } from "../expense-place.service";
import { CreateExpensePlaceChildDto } from "./dto/create-expense-place-child.dto";
import { UpdateExpensePlaceChildDto } from "./dto/update-expense-place-child.dto";
import { ExpensePlaceChild } from "./expense-place-child.entity";
export declare class ExpensesPlaceChildService {
    private expensesPlaceChildRepository;
    protected readonly apiFeaturesService: APIFeaturesService;
    protected readonly expenseService: ExpensesPlaceService;
    constructor(expensesPlaceChildRepository: Repository<ExpensePlaceChild>, apiFeaturesService: APIFeaturesService, expenseService: ExpensesPlaceService);
    create(createExpensePlaceChildDto: CreateExpensePlaceChildDto): Promise<ExpensePlaceChild>;
    findAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findOne(id: number): Promise<ExpensePlaceChild>;
    update(updateExpensePlaceChildDto: UpdateExpensePlaceChildDto): Promise<ExpensePlaceChild>;
    remove(id: number): Promise<void>;
}
