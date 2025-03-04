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
exports.VacationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const filter_service_1 = require("../shared/filters/filter.service");
const typeorm_2 = require("typeorm");
const vacation_entity_1 = require("./vacation.entity");
let VacationService = class VacationService {
    constructor(vacationRepository, apiFeaturesService) {
        this.vacationRepository = vacationRepository;
        this.apiFeaturesService = apiFeaturesService;
    }
    async create(create) {
        const vacation = this.vacationRepository.create(create);
        const newVacation = await this.vacationRepository.save(vacation);
        return this.vacationRepository.findOne({
            where: { id: newVacation.id },
            relations: ["user"],
        });
    }
    async findAll(filterData) {
        const queryBuilder = this.apiFeaturesService.setRepository(vacation_entity_1.Vacation).buildQuery(filterData);
        queryBuilder
            .leftJoin("e.user", "eu")
            .leftJoin("e.createdBy", "ec")
            .addSelect(["eu.id", "eu.firstName", "eu.lastName"])
            .addSelect(["ec.id", "ec.firstName", "ec.lastName"]);
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        const results = {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
        return results;
    }
    async findUserAll(filterData) {
        const queryBuilder = this.apiFeaturesService.setRepository(vacation_entity_1.Vacation).buildQuery(filterData);
        queryBuilder
            .leftJoin("e.user", "ec")
            .leftJoin("e.createdBy", "eu")
            .addSelect(["ec.id", "ec.firstName", "ec.lastName"])
            .addSelect(["eu.id", "eu.firstName", "eu.lastName"])
            .andWhere("ec.id = :user_id", { user_id: filterData.user_id });
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        const results = {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
        return results;
    }
    async findOne(id) {
        const task = await this.vacationRepository.findOne({ where: { id } });
        if (!task) {
            throw new common_1.NotFoundException(`Task with id ${id} not found`);
        }
        return task;
    }
    async update(updateTaskDto) {
        const { user_id, ...payload } = updateTaskDto;
        await this.vacationRepository.update(updateTaskDto.id, payload);
        return this.vacationRepository.findOne({
            where: { id: updateTaskDto.id },
            relations: ["user"],
        });
    }
    async remove(id) {
        await this.vacationRepository.delete(id);
    }
};
exports.VacationService = VacationService;
exports.VacationService = VacationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(vacation_entity_1.Vacation)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        filter_service_1.APIFeaturesService])
], VacationService);
//# sourceMappingURL=vacation.service.js.map