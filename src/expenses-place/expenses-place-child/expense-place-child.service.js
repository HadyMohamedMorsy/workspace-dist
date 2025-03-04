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
exports.ExpensesPlaceChildService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const filter_service_1 = require("../../shared/filters/filter.service");
const typeorm_2 = require("typeorm");
const expense_place_service_1 = require("../expense-place.service");
const expense_place_child_entity_1 = require("./expense-place-child.entity");
let ExpensesPlaceChildService = class ExpensesPlaceChildService {
    constructor(expensesPlaceChildRepository, apiFeaturesService, expenseService) {
        this.expensesPlaceChildRepository = expensesPlaceChildRepository;
        this.apiFeaturesService = apiFeaturesService;
        this.expenseService = expenseService;
    }
    async create(createExpensePlaceChildDto) {
        const expenses = await this.expenseService.findOne(createExpensePlaceChildDto.expensePlace_id);
        const totalExpense = (expenses.total || 0) + createExpensePlaceChildDto.cost;
        expenses.total = totalExpense;
        await this.expenseService.update({
            id: expenses.id,
            total: totalExpense,
        });
        const expensesSalaries = this.expensesPlaceChildRepository.create({
            ...createExpensePlaceChildDto,
            expensePlace: expenses,
        });
        return await this.expensesPlaceChildRepository.save(expensesSalaries);
    }
    async findAll(filterData) {
        const queryBuilder = this.apiFeaturesService
            .setRepository(expense_place_child_entity_1.ExpensePlaceChild)
            .buildQuery(filterData);
        if (filterData.expensePlace_id) {
            queryBuilder.leftJoin("e.expensePlace", "ep").andWhere("ep.id = :expenseplace_id", {
                expenseplace_id: filterData.expensePlace_id,
            });
        }
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
    async findOne(id) {
        const expensesSalaries = await this.expensesPlaceChildRepository.findOne({ where: { id } });
        if (!expensesSalaries) {
            throw new common_1.NotFoundException(`${expensesSalaries} with id ${id} not found`);
        }
        return expensesSalaries;
    }
    async update(updateExpensePlaceChildDto) {
        const expenses = await this.expenseService.findOne(updateExpensePlaceChildDto.expensePlace_id);
        const totalExpense = (expenses.total || 0) + updateExpensePlaceChildDto.cost;
        expenses.total = totalExpense;
        await this.expenseService.update({
            id: expenses.id,
            total: totalExpense,
        });
        await this.expensesPlaceChildRepository.update(updateExpensePlaceChildDto.id, {
            ...updateExpensePlaceChildDto,
            expensePlace: expenses,
        });
        return this.expensesPlaceChildRepository.findOne({
            where: { id: updateExpensePlaceChildDto.id },
        });
    }
    async remove(id) {
        await this.expensesPlaceChildRepository.delete(id);
    }
};
exports.ExpensesPlaceChildService = ExpensesPlaceChildService;
exports.ExpensesPlaceChildService = ExpensesPlaceChildService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(expense_place_child_entity_1.ExpensePlaceChild)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        filter_service_1.APIFeaturesService,
        expense_place_service_1.ExpensesPlaceService])
], ExpensesPlaceChildService);
//# sourceMappingURL=expense-place-child.service.js.map