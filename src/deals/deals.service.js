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
exports.DealsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const assignes_general_offer_service_1 = require("../assignes-global-offers/assignes-general-offer.service");
const generalOffer_service_1 = require("../general-offer/generalOffer.service");
const reservation_room_service_1 = require("../reservations/rooms/reservation-room.service");
const rooms_service_1 = require("../rooms/rooms.service");
const global_enum_1 = require("../shared/enum/global-enum");
const filter_service_1 = require("../shared/filters/filter.service");
const typeorm_2 = require("typeorm");
const deals_entity_1 = require("./deals.entity");
let DealsService = class DealsService {
    constructor(dealsRepository, apiFeaturesService, assignGlobalOffer, offer, roomService, reservationRoom) {
        this.dealsRepository = dealsRepository;
        this.apiFeaturesService = apiFeaturesService;
        this.assignGlobalOffer = assignGlobalOffer;
        this.offer = offer;
        this.roomService = roomService;
        this.reservationRoom = reservationRoom;
    }
    async create(createDealsDto, reqBody) {
        const room = await this.roomService.findOne(createDealsDto.room_id);
        const { customer_id, type_user, offer_id } = createDealsDto;
        let assignGeneralOffer = null;
        if (offer_id) {
            const payload = {
                customer_id,
                offer_id,
                type_user,
            };
            assignGeneralOffer = await this.assignGlobalOffer.create(payload, reqBody);
        }
        const deals = this.dealsRepository.create({
            ...createDealsDto,
            total_used: +createDealsDto.hours,
            used: 0,
            remaining: +createDealsDto.hours,
            room,
            assignGeneralOffer,
            createdBy: reqBody.createdBy,
            [type_user]: reqBody.customer,
        });
        return await this.dealsRepository.save(deals);
    }
    async findAll(filterData) {
        this.apiFeaturesService.setRepository(deals_entity_1.Deals);
        const queryBuilder = this.apiFeaturesService.setRepository(deals_entity_1.Deals).buildQuery(filterData);
        queryBuilder.leftJoin("e.createdBy", "ec").addSelect(["ec.id", "ec.firstName", "ec.lastName"]);
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        return {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
    }
    async findDealsByIndividualAll(filterData) {
        const queryBuilder = this.apiFeaturesService.setRepository(deals_entity_1.Deals).buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.individual", "ei")
            .leftJoinAndSelect("e.room", "er")
            .leftJoinAndSelect("e.assignGeneralOffer", "ess")
            .leftJoinAndSelect("ess.generalOffer", "eg")
            .andWhere("ei.id = :individual_id", { individual_id: filterData.individual_id })
            .leftJoin("e.createdBy", "ec")
            .addSelect(["ec.id", "ec.firstName", "ec.lastName"]);
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        return {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
    }
    async findDealsByComapnyAll(filterData) {
        const queryBuilder = this.apiFeaturesService.setRepository(deals_entity_1.Deals).buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.company", "ec")
            .leftJoinAndSelect("e.room", "er")
            .andWhere("ec.id = :company_id", { company_id: filterData.company_id })
            .leftJoinAndSelect("e.assignGeneralOffer", "ess")
            .leftJoinAndSelect("ess.generalOffer", "eg")
            .leftJoin("e.createdBy", "ecc")
            .addSelect(["ecc.id", "ecc.firstName", "ecc.lastName"]);
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        return {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
    }
    async findDealsByStudentActivityAll(filterData) {
        const queryBuilder = this.apiFeaturesService.setRepository(deals_entity_1.Deals).buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.studentActivity", "es")
            .leftJoinAndSelect("e.room", "er")
            .leftJoinAndSelect("e.assignGeneralOffer", "ess")
            .leftJoinAndSelect("ess.generalOffer", "eg")
            .andWhere("es.id = :studentActivity_id", {
            studentActivity_id: filterData.studentActivity_id,
        })
            .leftJoin("e.createdBy", "ec")
            .addSelect(["ec.id", "ec.firstName", "ec.lastName"]);
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        return {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
    }
    async findDealsByUserAll(filterData) {
        const queryBuilder = this.apiFeaturesService.setRepository(deals_entity_1.Deals).buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.room", "er")
            .leftJoin("e.createdBy", "ec")
            .leftJoinAndSelect("e.assignGeneralOffer", "ess")
            .leftJoinAndSelect("ess.generalOffer", "eg")
            .addSelect(["ec.id", "ec.firstName", "ec.lastName"])
            .andWhere("ec.id = :user_id", {
            user_id: filterData.user_id,
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
        const deal = this.dealsRepository.findOne({
            where: { id },
            relations: ["room"],
        });
        if (!deal) {
            throw new common_1.NotFoundException(`deal with id not found`);
        }
        return deal;
    }
    async update(updateDealsDto) {
        const { status, user_id, type_user, id, ...rest } = updateDealsDto;
        await this.handleStatusValidation(status, user_id, type_user);
        await this.dealsRepository.update(id, {
            status,
            ...rest,
        });
        return this.dealsRepository.findOne({ where: { id: updateDealsDto.id } });
    }
    async handleStatusValidation(status, userId, typeUser) {
        if ((status === global_enum_1.ReservationStatus.COMPLETE || global_enum_1.ReservationStatus.CANCELLED) && userId) {
            return await this.reservationRoom.findActiveOrInactiveReservationsForCustomer(userId, typeUser);
        }
    }
    async remove(id) {
        await this.dealsRepository.delete(id);
    }
};
exports.DealsService = DealsService;
exports.DealsService = DealsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(deals_entity_1.Deals)),
    __param(5, (0, common_1.Inject)((0, common_1.forwardRef)(() => reservation_room_service_1.ReservationRoomService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        filter_service_1.APIFeaturesService,
        assignes_general_offer_service_1.AssignGeneralOfferservice,
        generalOffer_service_1.GeneralOfferService,
        rooms_service_1.RoomsService,
        reservation_room_service_1.ReservationRoomService])
], DealsService);
//# sourceMappingURL=deals.service.js.map