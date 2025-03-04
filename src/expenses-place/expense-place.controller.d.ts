import { CreateExpensePlaceDto } from "./dto/create-expense-place.dto";
import { UpdateExpensePlaceDto } from "./dto/update-expense-place.dto";
import { ExpensesPlaceService } from "./expense-place.service";
export declare class ExpensesPlaceController {
    private readonly expensesPlaceService;
    constructor(expensesPlaceService: ExpensesPlaceService);
    findAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    create(createProductDto: CreateExpensePlaceDto): Promise<import("./expense-place.entity").ExpensePlace>;
    update(updateProductDto: UpdateExpensePlaceDto): Promise<import("./expense-place.entity").ExpensePlace>;
    remove(bodyDelete: {
        id: number;
    }): Promise<void>;
}
