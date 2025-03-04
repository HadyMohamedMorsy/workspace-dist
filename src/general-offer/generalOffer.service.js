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
exports.GeneralOfferService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const moment = require("moment");
const global_enum_1 = require("../shared/enum/global-enum");
const filter_service_1 = require("../shared/filters/filter.service");
const typeorm_2 = require("typeorm");
const generalOffer_entity_1 = require("./generalOffer.entity");
let GeneralOfferService = class GeneralOfferService {
    constructor(generalOfferRepository, apiFeaturesService) {
        this.generalOfferRepository = generalOfferRepository;
        this.apiFeaturesService = apiFeaturesService;
    }
    async create(createGeneralOfferDto) {
        const generalOffer = this.generalOfferRepository.create(createGeneralOfferDto);
        return await this.generalOfferRepository.save(generalOffer);
    }
    async findShared() {
        const now = moment();
        const offers = await this.generalOfferRepository
            .createQueryBuilder("offer")
            .where("offer.product = :productType", { productType: global_enum_1.PRODUCT_TYPE.Shared })
            .andWhere("offer.start_date <= :now AND offer.end_date > :now", {
            now: now.toDate(),
        })
            .getMany();
        return {
            data: offers,
        };
    }
    async findDeskArea() {
        const now = moment();
        const offers = await this.generalOfferRepository
            .createQueryBuilder("offer")
            .where("offer.product = :productType", { productType: global_enum_1.PRODUCT_TYPE.Deskarea })
            .andWhere("offer.start_date <= :now AND offer.end_date > :now", {
            now: now.toDate(),
        })
            .getMany();
        return {
            data: offers,
        };
    }
    async findMembership() {
        const now = moment();
        const offers = await this.generalOfferRepository
            .createQueryBuilder("offer")
            .where("offer.product = :productType", { productType: global_enum_1.PRODUCT_TYPE.Membership })
            .andWhere("offer.start_date <= :now AND offer.end_date > :now", {
            now: now.toDate(),
        })
            .getMany();
        return {
            data: offers,
        };
    }
    async findDeals() {
        const now = moment();
        const offers = await this.generalOfferRepository
            .createQueryBuilder("offer")
            .where("offer.product = :productType", { productType: global_enum_1.PRODUCT_TYPE.Deals })
            .andWhere("offer.start_date <= :now AND offer.end_date > :now", {
            now: now.toDate(),
        })
            .getMany();
        return {
            data: offers,
        };
    }
    async findPackages() {
        const now = moment();
        const offers = await this.generalOfferRepository
            .createQueryBuilder("offer")
            .where("offer.product = :productType", { productType: global_enum_1.PRODUCT_TYPE.Packages })
            .andWhere("offer.start_date <= :now AND offer.end_date > :now", {
            now: now.toDate(),
        })
            .getMany();
        return {
            data: offers,
        };
    }
    async findRooms() {
        const now = moment();
        const offers = await this.generalOfferRepository
            .createQueryBuilder("offer")
            .where("offer.product = :productType", { productType: global_enum_1.PRODUCT_TYPE.Room })
            .andWhere("offer.start_date <= :now AND offer.end_date > :now", {
            now: now.toDate(),
        })
            .getMany();
        return {
            data: offers,
        };
    }
    async findAll(filterData) {
        this.apiFeaturesService.setRepository(generalOffer_entity_1.GeneralOffer);
        const queryBuilder = this.apiFeaturesService.setRepository(generalOffer_entity_1.GeneralOffer).buildQuery(filterData);
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        return {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
    }
    async findOne(id) {
        return this.generalOfferRepository.findOne({ where: { id } });
    }
    async findOneRelatedIndividual(filterData) {
        this.apiFeaturesService.setRepository(generalOffer_entity_1.GeneralOffer);
        const queryBuilder = this.apiFeaturesService.setRepository(generalOffer_entity_1.GeneralOffer).buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.assignessOffers", "ea")
            .leftJoinAndSelect("ea.individual", "ei")
            .andWhere("e.id = :offer_id", {
            offer_id: filterData.id,
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
            .leftJoinAndSelect("e.assignessOffers", "ea")
            .leftJoinAndSelect("ea.company", "ec")
            .andWhere("e.id = :offer_id", {
            offer_id: filterData.id,
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
            .leftJoinAndSelect("e.assignessOffers", "ea")
            .leftJoinAndSelect("ea.studentActivity", "es")
            .andWhere("e.id = :offer_id", {
            offer_id: filterData.id,
        });
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        return {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
    }
    async update(updateGeneralOfferDto) {
        await this.generalOfferRepository.update(updateGeneralOfferDto.id, updateGeneralOfferDto);
        return this.generalOfferRepository.findOne({ where: { id: updateGeneralOfferDto.id } });
    }
    async remove(id) {
        await this.generalOfferRepository.delete(id);
    }
};
exports.GeneralOfferService = GeneralOfferService;
exports.GeneralOfferService = GeneralOfferService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(generalOffer_entity_1.GeneralOffer)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        filter_service_1.APIFeaturesService])
], GeneralOfferService);
//# sourceMappingURL=generalOffer.service.js.map