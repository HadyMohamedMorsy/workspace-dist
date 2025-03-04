import { CreateExpenseSalariesDto } from "./dto/create-expense-salaries.dto";
import { UpdateExpenseSalariesDto } from "./dto/update-expense-salaries.dto";
import { ExpensesSalariesService } from "./expense-salaries.service";
export declare class ExpensesSalariesController {
    private readonly expensesSalariesService;
    constructor(expensesSalariesService: ExpensesSalariesService);
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
    create(createProductDto: CreateExpenseSalariesDto): Promise<import("./expense-salaries.entity").ExpenseSalaries>;
    update(updateProductDto: UpdateExpenseSalariesDto): Promise<import("./expense-salaries.entity").ExpenseSalaries>;
    remove(bodyDelete: {
        id: number;
    }): Promise<void>;
}
