import { CreateExpensePlaceChildDto } from "./dto/create-expense-place-child.dto";
import { UpdateExpensePlaceChildDto } from "./dto/update-expense-place-child.dto";
import { ExpensesPlaceChildService } from "./expense-place-child.service";
export declare class ExpensesPlaceChildController {
    private readonly expensesPlaceChildService;
    constructor(expensesPlaceChildService: ExpensesPlaceChildService);
    findAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    create(createExpenseDto: CreateExpensePlaceChildDto): Promise<import("./expense-place-child.entity").ExpensePlaceChild>;
    update(updateExpenseDto: UpdateExpensePlaceChildDto): Promise<import("./expense-place-child.entity").ExpensePlaceChild>;
    remove(bodyDelete: {
        id: number;
    }): Promise<void>;
}
