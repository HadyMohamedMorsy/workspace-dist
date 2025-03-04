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
exports.DeskareaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const moment = require("moment");
const assignes_general_offer_service_1 = require("../../assignes-global-offers/assignes-general-offer.service");
const assignes_membership_service_1 = require("../../assignes-memberships/assignes-membership.service");
const generalOffer_service_1 = require("../../general-offer/generalOffer.service");
const settings_service_1 = require("../../general-settings/settings.service");
const global_enum_1 = require("../../shared/enum/global-enum");
const filter_service_1 = require("../../shared/filters/filter.service");
const typeorm_2 = require("typeorm");
const utitlties_1 = require("../helpers/utitlties");
const deskarea_entity_1 = require("./deskarea.entity");
let DeskareaService = class DeskareaService {
    constructor(deskareaRepository, apiFeaturesService, assignGlobalOffer, settings, offer, membership) {
        this.deskareaRepository = deskareaRepository;
        this.apiFeaturesService = apiFeaturesService;
        this.assignGlobalOffer = assignGlobalOffer;
        this.settings = settings;
        this.offer = offer;
        this.membership = membership;
    }
    async create(createDeskareaDto, reqBody) {
        const { customer_id, type_user, offer_id } = createDeskareaDto;
        await this.validateCustomerReservation(customer_id, type_user);
        let assignGeneralOffer = null;
        if (offer_id) {
            const payload = {
                customer_id,
                offer_id,
                type_user,
            };
            assignGeneralOffer = await this.assignGlobalOffer.create(payload, reqBody);
        }
        const settings = await this.findSetting(createDeskareaDto.setting_id);
        const deskarea = this.deskareaRepository.create({
            ...createDeskareaDto,
            assignGeneralOffer,
            settings,
            createdBy: reqBody.createdBy,
            [type_user]: reqBody.customer,
        });
        return await this.deskareaRepository.save(deskarea);
    }
    async findAll(filterData) {
        const queryBuilder = this.apiFeaturesService.setRepository(deskarea_entity_1.Deskarea).buildQuery(filterData);
        queryBuilder.leftJoin("e.createdBy", "ec").addSelect(["ec.id", "ec.firstName", "ec.lastName"]);
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        const results = {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
        return results;
    }
    async findActiveOrInactiveReservationsForCustomer(customer_id, customer_type) {
        const customerRelationMap = {
            individual: "individual",
            company: "company",
            studentActivity: "studentActivity",
        };
        const customerRelationField = customerRelationMap[customer_type];
        const customerCondition = { [customerRelationField]: { id: customer_id } };
        const existingReservations = await this.deskareaRepository.find({
            relations: [customerRelationField],
            where: [
                {
                    status: global_enum_1.ReservationStatus.ACTIVE,
                    ...customerCondition,
                },
            ],
        });
        return existingReservations;
    }
    async findOne(id) {
        const deskarea = await this.deskareaRepository.findOne({ where: { id } });
        if (!deskarea) {
            throw new common_1.NotFoundException(`${deskarea} with id ${id} not found`);
        }
        return deskarea;
    }
    async findDeskareaByIndividualAll(filterData) {
        return this.findDeskareaByUserType(filterData, "individual", "individual_id");
    }
    async findDeskareaByComapnyAll(filterData) {
        return this.findDeskareaByUserType(filterData, "company", "company_id");
    }
    async findDeskareaByStudentActivityAll(filterData) {
        return this.findDeskareaByUserType(filterData, "studentActivity", "studentActivity_id");
    }
    async findDeskareaByUserAll(filterData) {
        const queryBuilder = this.buildBaseQuery(filterData).andWhere("ec.id = :user_id", {
            user_id: filterData.user_id,
        });
        return this.getPaginatedResults(queryBuilder);
    }
    async findReservationsByIndividual(filterData) {
        return this.findReservationsByUserType(filterData, "individual", "individual_id");
    }
    async findReservationsByCompany(filterData) {
        return this.findReservationsByUserType(filterData, "company", "company_id");
    }
    async findReservationsByStudentActivity(filterData) {
        return this.findReservationsByUserType(filterData, "studentActivity", "studentActivity_id");
    }
    async createReservationByMememberShip(createDeskareaDto, reqBody) {
        const { customer_id, type_user, membership_id, selected_day } = createDeskareaDto;
        await this.validateCustomerReservation(customer_id, type_user);
        const memberShip = await this.validateMembership(membership_id);
        const selectedDay = (0, utitlties_1.formatDate)(selected_day);
        this.validateMembershipUsage(memberShip);
        this.validateMembershipDateRange(memberShip, selectedDay);
        await this.updateMembershipUsage(memberShip);
        return await this.createAndSaveDeskareaReservation(createDeskareaDto, reqBody, memberShip);
    }
    async createAndSaveDeskareaReservation(createSharedDto, reqBody, memberShip) {
        const { type_user } = createSharedDto;
        const shared = this.deskareaRepository.create({
            ...createSharedDto,
            assignessMemebership: memberShip,
            createdBy: reqBody.createdBy,
            [type_user]: reqBody.customer,
        });
        await this.deskareaRepository.save(shared);
        return this.membership.findOne(memberShip.id);
    }
    async validateCustomerReservation(customerId, typeUser) {
        const existingReservations = await this.findActiveOrInactiveReservationsForCustomer(customerId, typeUser);
        if (existingReservations.length) {
            throw new common_1.BadRequestException(`You can't create another reservation for this user.`);
        }
    }
    async validateMembership(membershipId) {
        const memberShip = await this.membership.findOne(membershipId);
        if (!memberShip) {
            throw new common_1.BadRequestException(`You must have a valid membership.`);
        }
        return memberShip;
    }
    validateMembershipUsage(memberShip) {
        if (memberShip.used == memberShip.total_used) {
            throw new common_1.BadRequestException(`Your membership quota is exhausted. Please create a new membership.`);
        }
    }
    validateMembershipDateRange(memberShip, selectedDay) {
        const selectedDate = moment(selectedDay, "DD/MM/YYYY");
        const startDate = moment(memberShip.start_date);
        const endDate = moment(memberShip.end_date);
        if (!startDate.isSameOrBefore(selectedDate) || !endDate.isSameOrAfter(selectedDate)) {
            throw new common_1.BadRequestException(`The memberShip is not active for the selected date.`);
        }
    }
    async updateMembershipUsage(memberShip, operator = "plus") {
        const newUsed = operator === "plus" ? memberShip.used + 1 : memberShip.used - 1;
        const newRemaining = operator === "plus" ? memberShip.total_used - newUsed : memberShip.remaining;
        await this.membership.update({
            id: memberShip.id,
            used: newUsed,
            remaining: newRemaining,
        });
    }
    async update(updateDeskareaDto) {
        const { customer_id, offer_id, type_user, membership_id, ...rest } = updateDeskareaDto;
        if (updateDeskareaDto.status === global_enum_1.ReservationStatus.CANCELLED) {
            await this.handleCancelledStatus(updateDeskareaDto, membership_id, rest);
        }
        else {
            await this.handleCompletedStatus(updateDeskareaDto, offer_id, rest);
        }
        return this.deskareaRepository.findOne({ where: { id: updateDeskareaDto.id } });
    }
    async handleCancelledStatus(updateDeskareaDto, membershipId, rest) {
        if (membershipId) {
            const memberShip = await this.validateMembership(membershipId);
            await this.updateMembershipUsage(memberShip, "minus");
        }
        await this.deskareaRepository.update(updateDeskareaDto.id, rest);
    }
    async handleCompletedStatus(updateDeskareaDto, offerId, rest) {
        const { setting_id, ...updateDto } = rest;
        const totalPrice = await this.calculateCoWrokingSpaceTotalPrice(rest, setting_id, offerId);
        const diffInHours = (0, utitlties_1.diffrentHour)(rest);
        await this.deskareaRepository.update(updateDeskareaDto.id, {
            ...updateDto,
            total_time: diffInHours,
            total_price: totalPrice,
            status: global_enum_1.ReservationStatus.COMPLETE,
        });
    }
    async findSetting(settingId) {
        return await this.settings.findOne(settingId);
    }
    async calculateCoWrokingSpaceTotalPrice(rest, settingId, offerId) {
        const diffInHours = (0, utitlties_1.diffrentHour)(rest);
        const settings = await this.findSetting(settingId);
        let discount = 0;
        const totalPrice = diffInHours
            ? settings.price_deskarea * +diffInHours
            : settings.price_deskarea;
        if (offerId) {
            const offer = await this.offer.findOne(offerId);
            const typeDiscount = offer.type_discount;
            const discountAmount = offer.discount;
            discount = typeDiscount === "amount" ? discountAmount : totalPrice * (discountAmount / 100);
        }
        return totalPrice - discount;
    }
    async remove(deskareaId) {
        await this.deskareaRepository.delete(deskareaId);
    }
    buildBaseQuery(filterData) {
        return this.apiFeaturesService
            .setRepository(deskarea_entity_1.Deskarea)
            .buildQuery(filterData)
            .leftJoin("e.createdBy", "ec")
            .addSelect(["ec.id", "ec.firstName", "ec.lastName"]);
    }
    async getPaginatedResults(queryBuilder) {
        const [data, totalRecords] = await Promise.all([
            queryBuilder.getMany(),
            queryBuilder.getCount(),
        ]);
        return {
            data,
            recordsFiltered: data.length,
            totalRecords: +totalRecords,
        };
    }
    addMembershipJoin(queryBuilder, membershipId) {
        return queryBuilder
            .leftJoinAndSelect("e.assignessMemebership", "em")
            .andWhere("em.id = :membership_id", { membership_id: membershipId });
    }
    addGeneralOfferJoin(queryBuilder) {
        return queryBuilder
            .leftJoinAndSelect("e.assignGeneralOffer", "es")
            .leftJoinAndSelect("es.generalOffer", "eg");
    }
    async findDeskareaByUserType(filterData, userType, idKey) {
        const queryBuilder = this.buildBaseQuery(filterData)
            .leftJoinAndSelect(`e.${userType}`, "user")
            .leftJoinAndSelect("e.settings", "settings")
            .andWhere(`user.id = :${idKey}`, { [idKey]: filterData[idKey] })
            .andWhere("e.assignessMemebership IS NULL");
        this.addGeneralOfferJoin(queryBuilder);
        return this.getPaginatedResults(queryBuilder);
    }
    async findReservationsByUserType(filterData, userType, idKey) {
        const queryBuilder = this.buildBaseQuery(filterData)
            .leftJoinAndSelect(`e.${userType}`, "user")
            .andWhere(`user.id = :${idKey}`, { [idKey]: filterData[idKey] });
        this.addMembershipJoin(queryBuilder, filterData.membership_id);
        return this.getPaginatedResults(queryBuilder);
    }
};
exports.DeskareaService = DeskareaService;
exports.DeskareaService = DeskareaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(deskarea_entity_1.Deskarea)),
    __param(5, (0, common_1.Inject)((0, common_1.forwardRef)(() => assignes_membership_service_1.AssignesMembershipService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        filter_service_1.APIFeaturesService,
        assignes_general_offer_service_1.AssignGeneralOfferservice,
        settings_service_1.GeneralSettingsService,
        generalOffer_service_1.GeneralOfferService,
        assignes_membership_service_1.AssignesMembershipService])
], DeskareaService);
//# sourceMappingURL=deskarea.service.js.map