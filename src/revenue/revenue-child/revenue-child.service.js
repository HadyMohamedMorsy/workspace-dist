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
exports.RevenueChildService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const filter_service_1 = require("../../shared/filters/filter.service");
const typeorm_2 = require("typeorm");
const revenue_service_1 = require("../revenue.service");
const revenue_child_entity_1 = require("./revenue-child.entity");
let RevenueChildService = class RevenueChildService {
    constructor(revenueChildRepository, apiFeaturesService, revenueService) {
        this.revenueChildRepository = revenueChildRepository;
        this.apiFeaturesService = apiFeaturesService;
        this.revenueService = revenueService;
    }
    async create(createRevenueChildDto) {
        const revenue = await this.revenueService.findOne(createRevenueChildDto.revenueChild_id);
        const totalRevenue = (revenue.total || 0) + createRevenueChildDto.amount;
        revenue.total = totalRevenue;
        await this.revenueService.update({
            id: revenue.id,
            total: totalRevenue,
        });
        const revenueChild = this.revenueChildRepository.create({
            ...createRevenueChildDto,
            revenue: revenue,
        });
        return await this.revenueChildRepository.save(revenueChild);
    }
    async findAll(filterData) {
        const queryBuilder = this.apiFeaturesService.setRepository(revenue_child_entity_1.RevenueChild).buildQuery(filterData);
        if (filterData.revenueChild_id) {
            queryBuilder.leftJoin("e.revenue", "r").andWhere("r.id = :revenueChild_id", {
                revenueChild_id: filterData.revenueChild_id,
            });
        }
        if (filterData?.customFilters?.start_date && filterData?.customFilters?.end_date) {
            queryBuilder.andWhere("r.created_at BETWEEN :start_date AND :end_date", {
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
        const revenueChild = await this.revenueChildRepository.findOne({ where: { id } });
        if (!revenueChild) {
            throw new common_1.NotFoundException(`${revenueChild} with id ${id} not found`);
        }
        return revenueChild;
    }
    async update(updateRevenueChildDto) {
        const revenue = await this.revenueService.findOne(updateRevenueChildDto.revenueChild_id);
        const totalRevenue = (revenue.total || 0) + updateRevenueChildDto.amount;
        revenue.total = totalRevenue;
        await this.revenueService.update({
            id: revenue.id,
            total: totalRevenue,
        });
        await this.revenueChildRepository.update(updateRevenueChildDto.id, {
            ...updateRevenueChildDto,
            revenue: revenue,
        });
        return this.revenueChildRepository.findOne({
            where: { id: updateRevenueChildDto.id },
        });
    }
    async remove(id) {
        await this.revenueChildRepository.delete(id);
    }
};
exports.RevenueChildService = RevenueChildService;
exports.RevenueChildService = RevenueChildService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(revenue_child_entity_1.RevenueChild)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        filter_service_1.APIFeaturesService,
        revenue_service_1.RevenueService])
], RevenueChildService);
//# sourceMappingURL=revenue-child.service.js.map