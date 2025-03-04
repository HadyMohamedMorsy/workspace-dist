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
exports.OfferCoWorkingSpaceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const generalOffer_entity_1 = require("../general-offer/generalOffer.entity");
const global_enum_1 = require("../shared/enum/global-enum");
const filter_service_1 = require("../shared/filters/filter.service");
const typeorm_2 = require("typeorm");
const offer_co_working_space_entity_1 = require("./offer-co-working-space.entity");
let OfferCoWorkingSpaceService = class OfferCoWorkingSpaceService {
    constructor(offerCoWorkingSpaceRepository, apiFeaturesService) {
        this.offerCoWorkingSpaceRepository = offerCoWorkingSpaceRepository;
        this.apiFeaturesService = apiFeaturesService;
    }
    async create(createCoWorkingSpaceDto) {
        const generalOffer = this.offerCoWorkingSpaceRepository.create(createCoWorkingSpaceDto);
        return await this.offerCoWorkingSpaceRepository.save(generalOffer);
    }
    async findAll(filterData) {
        const queryBuilder = this.apiFeaturesService
            .setRepository(offer_co_working_space_entity_1.CoWorkingSpace)
            .buildQuery(filterData);
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        return {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
    }
    async findListShared() {
        const offers = await this.offerCoWorkingSpaceRepository.find({
            where: { type: global_enum_1.TypeMember.Shared },
        });
        return {
            data: offers,
        };
    }
    async findListDeskArea() {
        const offers = await this.offerCoWorkingSpaceRepository.find({
            where: { type: global_enum_1.TypeMember.DeskaArea },
        });
        return {
            data: offers,
        };
    }
    async findOneRelatedIndividual(filterData) {
        this.apiFeaturesService.setRepository(generalOffer_entity_1.GeneralOffer);
        const queryBuilder = this.apiFeaturesService.setRepository(generalOffer_entity_1.GeneralOffer).buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.assignessMemebership", "ea")
            .leftJoinAndSelect("ea.individual", "ei")
            .andWhere("e.id = :memeber_id", {
            memeber_id: filterData.id,
        });
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        return {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
    }
    async findOneRelatedCompany(filterData) {
        this.apiFeaturesService.setRepository(generalOffer_entity_1.GeneralOffer);
        const queryBuilder = this.apiFeaturesService.setRepository(generalOffer_entity_1.GeneralOffer).buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.assignessMemebership", "ea")
            .leftJoinAndSelect("ea.company", "ec")
            .andWhere("e.id = :memeber_id", {
            memeber_id: filterData.id,
        });
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        return {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
    }
    async findOneRelatedStudentActivity(filterData) {
        this.apiFeaturesService.setRepository(generalOffer_entity_1.GeneralOffer);
        const queryBuilder = this.apiFeaturesService.setRepository(generalOffer_entity_1.GeneralOffer).buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.assignessMemebership", "ea")
            .leftJoinAndSelect("ea.studentActivity", "es")
            .andWhere("e.id = :memeber_id", {
            memeber_id: filterData.id,
        });
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        return {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
    }
    async findOneRelatedShared(filterData) {
        this.apiFeaturesService.setRepository(generalOffer_entity_1.GeneralOffer);
        const queryBuilder = this.apiFeaturesService.setRepository(generalOffer_entity_1.GeneralOffer).buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.assignessMemebership", "ea")
            .leftJoinAndSelect("ea.shared", "ec")
            .andWhere("e.id = :memeber_id", {
            memeber_id: filterData.id,
        });
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        return {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
    }
    async findOneRelatedDeskArea(filterData) {
        this.apiFeaturesService.setRepository(generalOffer_entity_1.GeneralOffer);
        const queryBuilder = this.apiFeaturesService.setRepository(generalOffer_entity_1.GeneralOffer).buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.assignessMemebership", "ea")
            .leftJoinAndSelect("ea.deskarea", "ec")
            .andWhere("e.id = :memeber_id", {
            memeber_id: filterData.id,
        });
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        return {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
    }
    async findOne(id) {
        return this.offerCoWorkingSpaceRepository.findOne({ where: { id } });
    }
    async update(updateGeneralOfferDto) {
        await this.offerCoWorkingSpaceRepository.update(updateGeneralOfferDto.id, updateGeneralOfferDto);
        return this.offerCoWorkingSpaceRepository.findOne({ where: { id: updateGeneralOfferDto.id } });
    }
    async remove(id) {
        await this.offerCoWorkingSpaceRepository.delete(id);
    }
};
exports.OfferCoWorkingSpaceService = OfferCoWorkingSpaceService;
exports.OfferCoWorkingSpaceService = OfferCoWorkingSpaceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(offer_co_working_space_entity_1.CoWorkingSpace)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        filter_service_1.APIFeaturesService])
], OfferCoWorkingSpaceService);
//# sourceMappingURL=offer-co-working-space.service.js.map