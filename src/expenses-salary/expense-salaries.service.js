"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpensesSalariesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const global_enum_1 = require("../shared/enum/global-enum");
const filter_service_1 = require("../shared/filters/filter.service");
const user_service_1 = require("../users/user.service");
const typeorm_2 = require("typeorm");
const expense_salaries_entity_1 = require("./expense-salaries.entity");
let ExpensesSalariesService = class ExpensesSalariesService {
    constructor(expensesSalariesRepository, apiFeaturesService, usersService) {
        this.expensesSalariesRepository = expensesSalariesRepository;
        this.apiFeaturesService = apiFeaturesService;
        this.usersService = usersService;
    }
    async create(createExpensesSalariesDto) {
        let user = null;
        let expensesSalaries = null;
        if (createExpensesSalariesDto.type_sallary === global_enum_1.TypeSallary.Internal) {
            user = await this.usersService.findOneById(createExpensesSalariesDto.user_id);
            if (!user) {
                throw new common_1.NotFoundException(`user is not found `);
            }
            expensesSalaries = this.expensesSalariesRepository.create({
                ...createExpensesSalariesDto,
                user,
            });
        }
        else {
            expensesSalaries = this.expensesSalariesRepository.create(createExpensesSalariesDto);
        }
        return await this.expensesSalariesRepository.save(expensesSalaries);
    }
    async findAll(filterData) {
        const queryBuilder = this.apiFeaturesService
            .setRepository(expense_salaries_entity_1.ExpenseSalaries)
            .buildQuery(filterData);
        queryBuilder
            .leftJoin("e.user", "ep")
            .addSelect(["ep.id", "ep.firstName", "ep.lastName", "ep.phone"]);
        if (filterData?.customFilters?.start_date && filterData?.customFilters?.end_date) {
            queryBuilder.andWhere("e.created_at BETWEEN :start_date AND :end_date", {
                start_date: filterData.customFilters.start_date,
                end_date: filterData.customFilters.end_date,
            });
        }
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        return {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
    }
    async findByUserAll(filterData) {
        const queryBuilder = this.apiFeaturesService
            .setRepository(expense_salaries_entity_1.ExpenseSalaries)
            .buildQuery(filterData);
        queryBuilder
            .leftJoin("e.user", "ep")
            .addSelect(["ep.id", "ep.firstName", "ep.lastName", "ep.phone"])
            .andWhere("ep.id = :user_id", { user_id: filterData.user_id });
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        return {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
    }
    async findOne(id) {
        const expensesSalaries = await this.expensesSalariesRepository.findOne({ where: { id } });
        if (!expensesSalaries) {
            throw new common_1.NotFoundException(`${expensesSalaries} with id ${id} not found`);
        }
        return expensesSalaries;
    }
    async update(updateExpensesSalariesDto) {
        let user = null;
        const { user_id, ...updateDto } = updateExpensesSalariesDto;
        if (updateExpensesSalariesDto.type_sallary === global_enum_1.TypeSallary.Internal) {
            user = await this.usersService.findOneById(user_id);
            if (!user) {
                throw new common_1.NotFoundException(`user is not found `);
            }
            await this.expensesSalariesRepository.update(updateDto.id, {
                ...updateDto,
                user,
            });
        }
        else {
            await this.expensesSalariesRepository.update(updateDto.id, updateDto);
        }
        return this.expensesSalariesRepository.findOne({
            where: { id: updateExpensesSalariesDto.id },
            relations: ["user"],
        });
    }
    async remove(id) {
        await this.expensesSalariesRepository.delete(id);
    }
};
exports.ExpensesSalariesService = ExpensesSalariesService;
exports.ExpensesSalariesService = ExpensesSalariesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(expense_salaries_entity_1.ExpenseSalaries)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        filter_service_1.APIFeaturesService,
        user_service_1.UserService])
], ExpensesSalariesService);
//# sourceMappingURL=expense-salaries.service.js.map