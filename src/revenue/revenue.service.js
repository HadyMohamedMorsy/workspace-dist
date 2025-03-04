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
exports.RevenueService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const filter_service_1 = require("../shared/filters/filter.service");
const typeorm_2 = require("typeorm");
const revenue_entity_1 = require("./revenue.entity");
let RevenueService = class RevenueService {
    constructor(revenueRepository, apiFeaturesService) {
        this.revenueRepository = revenueRepository;
        this.apiFeaturesService = apiFeaturesService;
    }
    async create(createRevenueDto) {
        const revenue = this.revenueRepository.create(createRevenueDto);
        return await this.revenueRepository.save(revenue);
    }
    async findAll(filterData) {
        const queryBuilder = this.apiFeaturesService.setRepository(revenue_entity_1.Revenue).buildQuery(filterData);
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        return {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
    }
    async findOne(id) {
        const revenue = await this.revenueRepository.findOne({ where: { id } });
        if (!revenue) {
            throw new common_1.NotFoundException(`${revenue} with id ${id} not found`);
        }
        return revenue;
    }
    async update(updateRevenueDto) {
        await this.revenueRepository.update(updateRevenueDto.id, updateRevenueDto);
        return this.revenueRepository.findOne({ where: { id: updateRevenueDto.id } });
    }
    async remove(id) {
        await this.revenueRepository.delete(id);
    }
};
exports.RevenueService = RevenueService;
exports.RevenueService = RevenueService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(revenue_entity_1.Revenue)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        filter_service_1.APIFeaturesService])
], RevenueService);
//# sourceMappingURL=revenue.service.js.map