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
exports.AssignGeneralOfferservice = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const generalOffer_service_1 = require("../general-offer/generalOffer.service");
const filter_service_1 = require("../shared/filters/filter.service");
const typeorm_2 = require("typeorm");
const assignes_general_offer_entity_1 = require("./assignes-general-offer.entity");
let AssignGeneralOfferservice = class AssignGeneralOfferservice {
    constructor(assignGeneralOfferRepository, apiFeaturesService, generalOfferService) {
        this.assignGeneralOfferRepository = assignGeneralOfferRepository;
        this.apiFeaturesService = apiFeaturesService;
        this.generalOfferService = generalOfferService;
    }
    async create(create, reqBody) {
        const generalOffer = await this.generalOfferService.findOne(create.offer_id);
        if (!generalOffer) {
            throw new common_1.NotFoundException(`${generalOffer} with  not found`);
        }
        const assignGeneralOffer = this.assignGeneralOfferRepository.create({
            ...create,
            createdBy: reqBody.createdBy,
            [create.type_user]: reqBody.customer,
            generalOffer,
        });
        return await this.assignGeneralOfferRepository.save(assignGeneralOffer);
    }
    async findOne(id) {
        const assignGeneralOffer = await this.assignGeneralOfferRepository.findOne({
            where: { id },
            relations: ["generalOffer"],
        });
        if (!assignGeneralOffer) {
            throw new common_1.NotFoundException(`AssignGeneralOffer  not found`);
        }
        return assignGeneralOffer;
    }
    async findAssignesByUser(filterData) {
        const queryBuilder = this.apiFeaturesService
            .setRepository(assignes_general_offer_entity_1.AssignGeneralOffer)
            .buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.generalOffer", "eg")
            .leftJoinAndSelect("e.shared", "es")
            .leftJoinAndSelect("e.deskarea", "ed")
            .leftJoinAndSelect("e.reservationRooms", "er")
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
    async findAssignesByIndividual(filterData) {
        const queryBuilder = this.apiFeaturesService
            .setRepository(assignes_general_offer_entity_1.AssignGeneralOffer)
            .buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.individual", "ei")
            .leftJoinAndSelect("e.generalOffer", "eg")
            .leftJoinAndSelect("e.shared", "es")
            .leftJoinAndSelect("e.deskarea", "ed")
            .leftJoinAndSelect("e.reservationRooms", "er")
            .andWhere("ei.id = :individual_id", { individual_id: filterData.individual_id })
            .leftJoin("e.createdBy", "ec")
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
    async findAssignesByCompany(filterData) {
        const queryBuilder = this.apiFeaturesService
            .setRepository(assignes_general_offer_entity_1.AssignGeneralOffer)
            .buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.company", "ec")
            .leftJoinAndSelect("e.generalOffer", "eg")
            .leftJoinAndSelect("e.shared", "es")
            .leftJoinAndSelect("e.deskarea", "ed")
            .leftJoinAndSelect("e.reservationRooms", "er")
            .andWhere("ec.id = :company_id", { company_id: filterData.company_id })
            .leftJoin("e.createdBy", "ecr")
            .addSelect(["ecr.id", "ecr.firstName", "ecr.lastName"]);
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        const results = {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
        return results;
    }
    async findAssignesByStudentActivity(filterData) {
        const queryBuilder = this.apiFeaturesService
            .setRepository(assignes_general_offer_entity_1.AssignGeneralOffer)
            .buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.studentActivity", "es")
            .leftJoinAndSelect("e.generalOffer", "eg")
            .leftJoinAndSelect("e.shared", "ess")
            .leftJoinAndSelect("e.deskarea", "ed")
            .leftJoinAndSelect("e.reservationRooms", "er")
            .andWhere("es.id = :studentActivity_id", {
            studentActivity_id: filterData.studentActivity_id,
        })
            .leftJoin("e.createdBy", "ec")
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
    async update(updateAssignGeneralOfferDto) {
        await this.assignGeneralOfferRepository.update(updateAssignGeneralOfferDto.id, updateAssignGeneralOfferDto);
        return this.assignGeneralOfferRepository.findOne({
            where: { id: updateAssignGeneralOfferDto.id },
        });
    }
    async remove(id) {
        await this.assignGeneralOfferRepository.delete(id);
    }
};
exports.AssignGeneralOfferservice = AssignGeneralOfferservice;
exports.AssignGeneralOfferservice = AssignGeneralOfferservice = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(assignes_general_offer_entity_1.AssignGeneralOffer)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        filter_service_1.APIFeaturesService,
        generalOffer_service_1.GeneralOfferService])
], AssignGeneralOfferservice);
//# sourceMappingURL=assignes-general-offer.service.js.map