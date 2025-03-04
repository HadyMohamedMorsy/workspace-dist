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
exports.AssignesMembershipService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const assignes_general_offer_service_1 = require("../assignes-global-offers/assignes-general-offer.service");
const generalOffer_service_1 = require("../general-offer/generalOffer.service");
const offer_co_working_space_service_1 = require("../offer-co-working-space/offer-co-working-space.service");
const deskarea_service_1 = require("../reservations/deskarea/deskarea.service");
const shared_service_1 = require("../reservations/shared/shared.service");
const global_enum_1 = require("../shared/enum/global-enum");
const filter_service_1 = require("../shared/filters/filter.service");
const typeorm_2 = require("typeorm");
const assignes_membership_entity_1 = require("./assignes-membership.entity");
let AssignesMembershipService = class AssignesMembershipService {
    constructor(assignesMembershipRepository, apiFeaturesService, assignGlobalOffer, offer, offerCoWorkingSpaceService, shared, deskarea) {
        this.assignesMembershipRepository = assignesMembershipRepository;
        this.apiFeaturesService = apiFeaturesService;
        this.assignGlobalOffer = assignGlobalOffer;
        this.offer = offer;
        this.offerCoWorkingSpaceService = offerCoWorkingSpaceService;
        this.shared = shared;
        this.deskarea = deskarea;
    }
    async create(create, reqBody) {
        const memeberShip = await this.offerCoWorkingSpaceService.findOne(create.membership_id);
        if (!memeberShip) {
            throw new common_1.NotFoundException(`${memeberShip} with  not found`);
        }
        const { customer_id, type_user, offer_id } = create;
        let assignGeneralOffer = null;
        if (offer_id) {
            const payload = {
                customer_id,
                offer_id,
                type_user,
            };
            assignGeneralOffer = await this.assignGlobalOffer.create(payload, reqBody);
        }
        const totalPrice = await this.calculateCoWrokingSpaceTotalPrice(offer_id, memeberShip.price);
        const assignesMembership = this.assignesMembershipRepository.create({
            ...create,
            createdBy: reqBody.createdBy,
            total_used: +memeberShip.days,
            total_price: totalPrice,
            assignGeneralOffer,
            used: 0,
            remaining: +memeberShip.days,
            [create.type_user]: reqBody.customer,
            memeberShip,
        });
        const newMember = await this.assignesMembershipRepository.save(assignesMembership);
        return await this.findOne(newMember.id);
    }
    async findOne(id) {
        const assignesMembership = await this.assignesMembershipRepository.findOne({
            where: { id },
            relations: ["memeberShip"],
        });
        if (!assignesMembership) {
            throw new common_1.NotFoundException(`AssignesMembership with id ${id} not found`);
        }
        return assignesMembership;
    }
    async findAssignesByUser(filterData) {
        const queryBuilder = this.apiFeaturesService
            .setRepository(assignes_membership_entity_1.AssignesMembership)
            .buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.memeberShip", "em")
            .leftJoinAndSelect("e.shared", "es")
            .leftJoinAndSelect("e.deskarea", "ed")
            .leftJoinAndSelect("e.assignGeneralOffer", "ess")
            .leftJoinAndSelect("ess.generalOffer", "eg")
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
            .setRepository(assignes_membership_entity_1.AssignesMembership)
            .buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.individual", "ei")
            .leftJoinAndSelect("e.memeberShip", "em")
            .leftJoinAndSelect("e.shared", "es")
            .leftJoinAndSelect("e.deskarea", "ed")
            .leftJoinAndSelect("e.assignGeneralOffer", "ess")
            .leftJoinAndSelect("ess.generalOffer", "eg")
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
            .setRepository(assignes_membership_entity_1.AssignesMembership)
            .buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.company", "ec")
            .leftJoinAndSelect("e.memeberShip", "em")
            .leftJoinAndSelect("e.shared", "es")
            .leftJoinAndSelect("e.deskarea", "ed")
            .leftJoinAndSelect("e.assignGeneralOffer", "ess")
            .leftJoinAndSelect("ess.generalOffer", "eg")
            .andWhere("ec.id = :company_id", { company_id: filterData.company_id })
            .leftJoin("e.createdBy", "eu")
            .addSelect(["eu.id", "eu.firstName", "eu.lastName"]);
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
            .setRepository(assignes_membership_entity_1.AssignesMembership)
            .buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.studentActivity", "es")
            .leftJoinAndSelect("e.memeberShip", "em")
            .leftJoinAndSelect("e.shared", "esh")
            .leftJoinAndSelect("e.deskarea", "ed")
            .leftJoinAndSelect("e.assignGeneralOffer", "ess")
            .leftJoinAndSelect("ess.generalOffer", "eg")
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
    async update(updateAssignesMembershipDto) {
        const { type, type_user, user_id, status, id, ...rest } = updateAssignesMembershipDto;
        if (status === global_enum_1.ReservationStatus.COMPLETE || status === global_enum_1.ReservationStatus.CANCELLED) {
            await this.handleValidationIfNeeded(user_id, type, type_user);
        }
        await this.assignesMembershipRepository.update(id, {
            status,
            ...rest,
        });
        return await this.getUpdatedEntity(id);
    }
    async handleValidationIfNeeded(user_id, type, type_user) {
        if (!type && !type_user)
            return;
        const validationService = this.getValidationService(type);
        await validationService?.validateCustomerReservation(user_id, type_user);
    }
    getValidationService(type) {
        return type === "shared" ? this.shared : this.deskarea;
    }
    async getUpdatedEntity(id) {
        return this.assignesMembershipRepository.findOne({
            where: { id },
        });
    }
    async remove(id) {
        await this.assignesMembershipRepository.delete(id);
    }
    async calculateCoWrokingSpaceTotalPrice(offerId, basePrice) {
        let discount = 0;
        const totalPrice = basePrice;
        if (offerId) {
            const offer = await this.offer.findOne(offerId);
            const typeDiscount = offer.type_discount;
            const discountAmount = offer.discount;
            discount = typeDiscount === "amount" ? discountAmount : totalPrice * (discountAmount / 100);
        }
        return totalPrice - discount;
    }
};
exports.AssignesMembershipService = AssignesMembershipService;
exports.AssignesMembershipService = AssignesMembershipService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(assignes_membership_entity_1.AssignesMembership)),
    __param(5, (0, common_1.Inject)((0, common_1.forwardRef)(() => shared_service_1.SharedService))),
    __param(6, (0, common_1.Inject)((0, common_1.forwardRef)(() => deskarea_service_1.DeskareaService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        filter_service_1.APIFeaturesService,
        assignes_general_offer_service_1.AssignGeneralOfferservice,
        generalOffer_service_1.GeneralOfferService,
        offer_co_working_space_service_1.OfferCoWorkingSpaceService,
        shared_service_1.SharedService,
        deskarea_service_1.DeskareaService])
], AssignesMembershipService);
//# sourceMappingURL=assignes-membership.service.js.map