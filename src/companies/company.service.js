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
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const global_enum_1 = require("../shared/enum/global-enum");
const filter_service_1 = require("../shared/filters/filter.service");
const typeorm_2 = require("typeorm");
const company_entity_1 = require("./company.entity");
let CompanyService = class CompanyService {
    constructor(companyRepository, apiFeaturesService) {
        this.companyRepository = companyRepository;
        this.apiFeaturesService = apiFeaturesService;
    }
    async create(createCompanyDto) {
        const company = this.companyRepository.create(createCompanyDto);
        if (company) {
            const newClient = await this.companyRepository.save(company);
            return await this.findOne(newClient.id);
        }
    }
    async findAll(filterData) {
        const queryBuilder = this.apiFeaturesService.setRepository(company_entity_1.Company).buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.assign_memberships", "ep", "ep.status = :status_memeber", {
            status_memeber: global_enum_1.ReservationStatus.ACTIVE,
        })
            .leftJoinAndSelect("ep.memeberShip", "ms")
            .leftJoinAndSelect("e.assignesPackages", "es", "es.status = :status_package", {
            status_package: global_enum_1.ReservationStatus.ACTIVE,
        })
            .leftJoinAndSelect("es.packages", "pa")
            .leftJoinAndSelect("pa.room", "pr")
            .leftJoin("e.createdBy", "ec")
            .addSelect(["ec.id", "ec.firstName", "ec.lastName"])
            .leftJoinAndSelect("e.orders", "eo", "eo.type_order = :typeOrder", {
            typeOrder: "HOLD",
        });
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        return {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
    }
    async findByUserAll(filterData) {
        const queryBuilder = this.apiFeaturesService.setRepository(company_entity_1.Company).buildQuery(filterData);
        queryBuilder
            .leftJoin("e.createdBy", "ec")
            .addSelect(["ec.id", "ec.firstName", "ec.lastName"])
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
        const company = await this.companyRepository.findOne({
            where: { id },
            relations: ["assignGeneralOffers", "assign_memberships", "assignesPackages", "createdBy"],
        });
        if (!company) {
            throw new common_1.NotFoundException(`${company} with id ${id} not found`);
        }
        return company;
    }
    async update(updateCompanyDto) {
        await this.companyRepository.update(updateCompanyDto.id, updateCompanyDto);
        return this.companyRepository.findOne({ where: { id: updateCompanyDto.id } });
    }
    async remove(companyId) {
        await this.companyRepository.delete(companyId);
    }
};
exports.CompanyService = CompanyService;
exports.CompanyService = CompanyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(company_entity_1.Company)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        filter_service_1.APIFeaturesService])
], CompanyService);
//# sourceMappingURL=company.service.js.map