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
exports.AssignesPackagesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const assignes_general_offer_service_1 = require("../assignes-global-offers/assignes-general-offer.service");
const generalOffer_service_1 = require("../general-offer/generalOffer.service");
const offerpackages_service_1 = require("../offer-packages/offerpackages.service");
const reservation_room_service_1 = require("../reservations/rooms/reservation-room.service");
const global_enum_1 = require("../shared/enum/global-enum");
const filter_service_1 = require("../shared/filters/filter.service");
const typeorm_2 = require("typeorm");
const assignes_packages_entity_1 = require("./assignes-packages.entity");
let AssignesPackagesService = class AssignesPackagesService {
    constructor(assignesPackagesRepository, apiFeaturesService, assignGlobalOffer, offer, offerPackagesService, reservationRoom) {
        this.assignesPackagesRepository = assignesPackagesRepository;
        this.apiFeaturesService = apiFeaturesService;
        this.assignGlobalOffer = assignGlobalOffer;
        this.offer = offer;
        this.offerPackagesService = offerPackagesService;
        this.reservationRoom = reservationRoom;
    }
    async create(create, reqBody) {
        const packages = await this.offerPackagesService.findOne(create.package_id);
        if (!packages) {
            throw new common_1.NotFoundException(`packages with  not found`);
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
        const totalPrice = await this.calculatePackagePrice(offer_id, packages.price, packages.hours);
        const assignes_packages = this.assignesPackagesRepository.create({
            ...create,
            total_used: +packages.hours,
            used: 0,
            assignGeneralOffer,
            total_price: totalPrice,
            remaining: +packages.hours,
            createdBy: reqBody.createdBy,
            [create.type_user]: reqBody.customer,
            packages,
        });
        const newPackage = await this.assignesPackagesRepository.save(assignes_packages);
        return this.findOne(newPackage.id);
    }
    async findOne(id) {
        const assignes_packages = await this.assignesPackagesRepository.findOne({
            where: { id },
            relations: ["packages", "packages.room"],
        });
        if (!assignes_packages) {
            throw new common_1.NotFoundException(`assignes_packages with id ${id} not found`);
        }
        return assignes_packages;
    }
    async findAssignesByUser(filterData) {
        const queryBuilder = this.apiFeaturesService
            .setRepository(assignes_packages_entity_1.AssignesPackages)
            .buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.packages", "ep")
            .leftJoinAndSelect("ep.room", "epr")
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
            .setRepository(assignes_packages_entity_1.AssignesPackages)
            .buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.individual", "ei")
            .leftJoinAndSelect("e.packages", "ep")
            .leftJoinAndSelect("ep.room", "epr")
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
            .setRepository(assignes_packages_entity_1.AssignesPackages)
            .buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.company", "ei")
            .leftJoinAndSelect("e.packages", "ep")
            .leftJoinAndSelect("ep.room", "epr")
            .leftJoinAndSelect("e.assignGeneralOffer", "ess")
            .leftJoinAndSelect("ess.generalOffer", "eg")
            .andWhere("ei.id = :company_id", { company_id: filterData.company_id })
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
    async findAssignesByStudentActivity(filterData) {
        const queryBuilder = this.apiFeaturesService
            .setRepository(assignes_packages_entity_1.AssignesPackages)
            .buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.studentActivity", "ei")
            .leftJoinAndSelect("e.packages", "ep")
            .leftJoinAndSelect("ep.room", "epr")
            .leftJoinAndSelect("e.assignGeneralOffer", "ess")
            .leftJoinAndSelect("ess.generalOffer", "eg")
            .andWhere("ei.id = :studentActivity_id", {
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
    async update(updateassignesPackagesDto) {
        const { status, user_id, type_user, id, ...rest } = updateassignesPackagesDto;
        await this.handleStatusValidation(status, user_id, type_user);
        await this.assignesPackagesRepository.update(id, {
            status,
            ...rest,
        });
        return await this.fetchUpdatedPackage(id);
    }
    async handleStatusValidation(status, userId, typeUser) {
        if ((status === global_enum_1.ReservationStatus.COMPLETE || global_enum_1.ReservationStatus.CANCELLED) && userId) {
            return await this.reservationRoom.findActiveOrInactiveReservationsForCustomer(userId, typeUser);
        }
    }
    async fetchUpdatedPackage(id) {
        return this.assignesPackagesRepository.findOne({
            where: { id },
        });
    }
    async remove(id) {
        await this.assignesPackagesRepository.delete(id);
    }
    async calculatePackagePrice(offerId, basePrice, hours) {
        let discount = 0;
        const totalPrice = basePrice * hours;
        if (offerId) {
            const offer = await this.offer.findOne(offerId);
            const typeDiscount = offer.type_discount;
            const discountAmount = offer.discount;
            discount = typeDiscount === "amount" ? discountAmount : totalPrice * (discountAmount / 100);
        }
        return totalPrice - discount;
    }
};
exports.AssignesPackagesService = AssignesPackagesService;
exports.AssignesPackagesService = AssignesPackagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(assignes_packages_entity_1.AssignesPackages)),
    __param(5, (0, common_1.Inject)((0, common_1.forwardRef)(() => reservation_room_service_1.ReservationRoomService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        filter_service_1.APIFeaturesService,
        assignes_general_offer_service_1.AssignGeneralOfferservice,
        generalOffer_service_1.GeneralOfferService,
        offerpackages_service_1.OfferPackagesService,
        reservation_room_service_1.ReservationRoomService])
], AssignesPackagesService);
//# sourceMappingURL=assignes-packages.service.js.map