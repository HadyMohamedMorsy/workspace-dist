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
exports.OfferPackagesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const generalOffer_entity_1 = require("../general-offer/generalOffer.entity");
const rooms_service_1 = require("../rooms/rooms.service");
const filter_service_1 = require("../shared/filters/filter.service");
const typeorm_2 = require("typeorm");
const offer_package_entity_1 = require("./offer-package.entity");
let OfferPackagesService = class OfferPackagesService {
    constructor(offerpackagesRepository, apiFeaturesService, roomService) {
        this.offerpackagesRepository = offerpackagesRepository;
        this.apiFeaturesService = apiFeaturesService;
        this.roomService = roomService;
    }
    async create(createOfferpackagesDto) {
        const room = await this.roomService.findOne(createOfferpackagesDto.room_id);
        const offerpackages = this.offerpackagesRepository.create({
            ...createOfferpackagesDto,
            room,
        });
        return await this.offerpackagesRepository.save(offerpackages);
    }
    async findAll(filterData) {
        const queryBuilder = this.apiFeaturesService
            .setRepository(offer_package_entity_1.OfferPackages)
            .buildQuery(filterData);
        queryBuilder.leftJoin("e.room", "er").addSelect(["er.id", "er.name"]);
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        return {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
    }
    async findList() {
        const offers = await this.offerpackagesRepository.find({
            relations: ["room"],
        });
        return {
            data: offers,
        };
    }
    async findOne(id) {
        return this.offerpackagesRepository.findOne({ where: { id } });
    }
    async findOneRelatedIndividual(filterData) {
        this.apiFeaturesService.setRepository(generalOffer_entity_1.GeneralOffer);
        const queryBuilder = this.apiFeaturesService.setRepository(generalOffer_entity_1.GeneralOffer).buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.assignesPackages", "ea")
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
            .leftJoinAndSelect("e.assignesPackages", "ea")
            .leftJoinAndSelect("ea.company", "ec")
            .andWhere("e.id = :offer_package_id", {
            offer_package_id: filterData.id,
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
            .leftJoinAndSelect("e.assignesPackages", "ea")
            .leftJoinAndSelect("ea.studentActivity", "es")
            .andWhere("e.id = :offer_package_id", {
            offer_package_id: filterData.id,
        });
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        return {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
    }
    async findOneRelatedRoom(filterData) {
        this.apiFeaturesService.setRepository(generalOffer_entity_1.GeneralOffer);
        const queryBuilder = this.apiFeaturesService.setRepository(generalOffer_entity_1.GeneralOffer).buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.assignesPackages", "ea")
            .leftJoinAndSelect("ea.room", "es")
            .andWhere("e.id = :offer_package_id", {
            offer_package_id: filterData.id,
        });
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        return {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
    }
    async update(updateOfferpackagesDto) {
        const room = await this.roomService.findOne(updateOfferpackagesDto.room_id);
        await this.offerpackagesRepository.update(updateOfferpackagesDto.id, {
            ...updateOfferpackagesDto,
            room,
        });
        return this.offerpackagesRepository.findOne({ where: { id: updateOfferpackagesDto.id } });
    }
    async remove(id) {
        await this.offerpackagesRepository.delete(id);
    }
};
exports.OfferPackagesService = OfferPackagesService;
exports.OfferPackagesService = OfferPackagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(offer_package_entity_1.OfferPackages)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        filter_service_1.APIFeaturesService,
        rooms_service_1.RoomsService])
], OfferPackagesService);
//# sourceMappingURL=offerpackages.service.js.map