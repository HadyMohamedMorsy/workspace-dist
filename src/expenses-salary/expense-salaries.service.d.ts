import { APIFeaturesService } from "src/shared/filters/filter.service";
import { UserService } from "src/users/user.service";
import { Repository } from "typeorm";
import { CreateExpenseSalariesDto } from "./dto/create-expense-salaries.dto";
import { UpdateExpenseSalariesDto } from "./dto/update-expense-salaries.dto";
import { ExpenseSalaries } from "./expense-salaries.entity";
export declare class ExpensesSalariesService {
    private expensesSalariesRepository;
    protected readonly apiFeaturesService: APIFeaturesService;
    private readonly usersService;
    constructor(expensesSalariesRepository: Repository<ExpenseSalaries>, apiFeaturesService: APIFeaturesService, usersService: UserService);
    create(createExpensesSalariesDto: CreateExpenseSalariesDto): Promise<ExpenseSalaries>;
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
    findOne(id: number): Promise<ExpenseSalaries>;
    update(updateExpensesSalariesDto: UpdateExpenseSalariesDto): Promise<ExpenseSalaries>;
    remove(id: number): Promise<void>;
}
