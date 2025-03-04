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
exports.ReservationRoomService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const moment = require("moment-timezone");
const assignes_general_offer_service_1 = require("../../assignes-global-offers/assignes-general-offer.service");
const assignes_packages_service_1 = require("../../assigness-packages-offers/assignes-packages.service");
const deals_service_1 = require("../../deals/deals.service");
const generalOffer_service_1 = require("../../general-offer/generalOffer.service");
const rooms_service_1 = require("../../rooms/rooms.service");
const global_enum_1 = require("../../shared/enum/global-enum");
const filter_service_1 = require("../../shared/filters/filter.service");
const typeorm_2 = require("typeorm");
const utitlties_1 = require("../helpers/utitlties");
const reservation_room_entity_1 = require("./reservation-room.entity");
let ReservationRoomService = class ReservationRoomService {
    constructor(reservationRoomRepository, apiFeaturesService, assignGlobalOffer, globalOffer, room, packageRooms, deal) {
        this.reservationRoomRepository = reservationRoomRepository;
        this.apiFeaturesService = apiFeaturesService;
        this.assignGlobalOffer = assignGlobalOffer;
        this.globalOffer = globalOffer;
        this.room = room;
        this.packageRooms = packageRooms;
        this.deal = deal;
    }
    async create(createDto, reqBody) {
        return this.handleReservationCreation(createDto, reqBody, createDto.offer_id ? "offer" : "normal");
    }
    async createReservationByPackage(createDto, reqBody) {
        return this.handleReservationCreation(createDto, reqBody, "package");
    }
    async createReservationByDeal(createDto, reqBody) {
        return this.handleReservationCreation(createDto, reqBody, "deal");
    }
    async getReservationsForThisWeek(filterData) {
        const queryBuilder = this.reservationRoomRepository.createQueryBuilder("r");
        const weekStartDate = moment(filterData.weekStartDate);
        const startOfWeek = weekStartDate.clone().startOf("week").startOf("day");
        const endOfWeek = weekStartDate.clone().endOf("week").endOf("day");
        const formattedStartOfWeek = startOfWeek.format("DD/MM/YYYY");
        const formattedEndOfWeek = endOfWeek.format("DD/MM/YYYY");
        queryBuilder
            .leftJoinAndSelect("r.room", "rr")
            .where(`TO_DATE(r.selected_day, 'DD/MM/YYYY') 
        BETWEEN TO_DATE(:startOfWeek, 'DD/MM/YYYY') 
        AND TO_DATE(:endOfWeek, 'DD/MM/YYYY')`, {
            startOfWeek: formattedStartOfWeek,
            endOfWeek: formattedEndOfWeek,
        })
            .leftJoinAndSelect("r.individual", "individual")
            .leftJoinAndSelect("r.company", "company")
            .leftJoinAndSelect("r.studentActivity", "studentActivity")
            .addSelect(`
    COALESCE(individual.name, company.name, studentActivity.name, 'Unknown Client') AS "clientName"
  `);
        if (filterData?.roomIds) {
            queryBuilder.andWhere("rr.id IN (:...roomIds)", {
                roomIds: filterData.roomIds.map(id => String(id)),
            });
        }
        const reservations = await queryBuilder.getRawMany();
        if (filterData?.isFree) {
            const freeSlots = this.getFreeSlots(reservations, filterData.roomIds);
            return { data: freeSlots };
        }
        const formattedReservations = reservations.map(res => this.formatReservation(res));
        return {
            data: formattedReservations,
        };
    }
    formatReservation(res) {
        const timeZone = "Africa/Cairo";
        const startHour = this.ato24h(res.r_start_hour, res.r_start_minute, res.r_start_time);
        const endHour = this.ato24h(res.r_end_hour, res.r_end_minute, res.r_end_time);
        const start = this.createCairoTime(res.r_selected_day, startHour, res.r_start_minute, timeZone);
        const end = this.createCairoTime(res.r_selected_day, endHour, res.r_end_minute, timeZone);
        return {
            id: String(res.r_id),
            title: res.clientName || "Unknown Client",
            start: start.format("YYYY-MM-DDTHH:mm:ssZ"),
            end: end.format("YYYY-MM-DDTHH:mm:ssZ"),
            extendedProps: {
                roomName: res.rr_name,
            },
        };
    }
    getFreeSlots(reservations, roomIds) {
        const timeZone = "Africa/Cairo";
        const freeSlots = [];
        const rooms = roomIds || [...new Set(reservations.map(res => res.rr_id))];
        rooms.forEach(roomId => {
            const roomReservations = reservations.filter(res => res.rr_id === roomId);
            const roomName = roomReservations.length > 0 ? roomReservations[0].rr_name : "Unknown Room";
            roomReservations.sort((a, b) => {
                const startA = this.createCairoTime(a.r_selected_day, a.r_start_hour, a.r_start_minute, timeZone).valueOf();
                const startB = this.createCairoTime(b.r_selected_day, b.r_start_hour, b.r_start_minute, timeZone).valueOf();
                return startA - startB;
            });
            let lastEndTime = moment.tz("00:00", "HH:mm", timeZone);
            roomReservations.forEach(res => {
                const startHour = this.ato24h(res.r_start_hour, res.r_start_minute, res.r_start_time);
                const endHour = this.ato24h(res.r_end_hour, res.r_end_minute, res.r_end_time);
                const start = this.createCairoTime(res.r_selected_day, startHour, res.r_start_minute, timeZone);
                const end = this.createCairoTime(res.r_selected_day, endHour, res.r_end_minute, timeZone);
                if (start.diff(lastEndTime, "minutes") > 0) {
                    freeSlots.push({
                        roomId,
                        roomName: roomName,
                        start: lastEndTime.format("YYYY-MM-DDTHH:mm:ssZ"),
                        end: start.format("YYYY-MM-DDTHH:mm:ssZ"),
                    });
                }
                lastEndTime = end;
            });
            const endOfDay = moment.tz("23:59", "HH:mm", timeZone);
            if (endOfDay.diff(lastEndTime, "minutes") > 0) {
                freeSlots.push({
                    roomId,
                    roomName: roomName,
                    start: lastEndTime.format("YYYY-MM-DDTHH:mm:ssZ"),
                    end: endOfDay.format("YYYY-MM-DDTHH:mm:ssZ"),
                });
            }
        });
        return freeSlots;
    }
    async findRoomsByUserType(filterData, userType) {
        const query = this.buildBaseQuery(filterData)
            .leftJoinAndSelect(`e.${userType}`, "user")
            .andWhere(`user.id = :id`, { id: filterData[`${userType}_id`] });
        return this.executePaginatedQuery(query);
    }
    async findRoomsByIndividualAll(filterData) {
        const queryBuilder = this.apiFeaturesService
            .setRepository(reservation_room_entity_1.ReservationRoom)
            .buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.individual", "ei")
            .leftJoinAndSelect("e.room", "er")
            .andWhere("ei.id = :individual_id", { individual_id: filterData.individual_id })
            .leftJoinAndSelect("e.assignGeneralOffer", "es")
            .leftJoinAndSelect("es.generalOffer", "eg")
            .andWhere("e.assignesPackages IS NULL")
            .andWhere("e.deals IS NULL")
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
    async findRoomsByComapnyAll(filterData) {
        const queryBuilder = this.apiFeaturesService
            .setRepository(reservation_room_entity_1.ReservationRoom)
            .buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.company", "ecc")
            .leftJoinAndSelect("e.room", "er")
            .andWhere("ecc.id = :company_id", { company_id: filterData.company_id })
            .leftJoinAndSelect("e.assignGeneralOffer", "es")
            .leftJoinAndSelect("es.generalOffer", "eg")
            .andWhere("e.assignesPackages IS NULL")
            .andWhere("e.deals IS NULL")
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
    async findRoomsByStudentActivityAll(filterData) {
        const queryBuilder = this.apiFeaturesService
            .setRepository(reservation_room_entity_1.ReservationRoom)
            .buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.studentActivity", "es")
            .leftJoinAndSelect("e.room", "er")
            .andWhere("es.id = :studentActivity_id", {
            studentActivity_id: filterData.studentActivity_id,
        })
            .leftJoinAndSelect("e.assignGeneralOffer", "ess")
            .leftJoinAndSelect("ess.generalOffer", "eg")
            .andWhere("e.assignesPackages IS NULL")
            .andWhere("e.deals IS NULL")
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
    async findRoomsByUserAll(filterData) {
        const queryBuilder = this.apiFeaturesService
            .setRepository(reservation_room_entity_1.ReservationRoom)
            .buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.room", "er")
            .leftJoin("e.createdBy", "ec")
            .addSelect(["ec.id", "ec.firstName", "ec.lastName"])
            .leftJoinAndSelect("e.assignGeneralOffer", "es")
            .leftJoinAndSelect("es.generalOffer", "eg")
            .andWhere("e.assignesPackages IS NULL")
            .andWhere("e.deals IS NULL")
            .andWhere("ec.id = :user_id", {
            user_id: filterData.user_id,
        });
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        const results = {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
        return results;
    }
    async findIndividuaPackageRoomAll(filterData) {
        const queryBuilder = this.apiFeaturesService
            .setRepository(reservation_room_entity_1.ReservationRoom)
            .buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.individual", "ei")
            .leftJoinAndSelect("e.assignesPackages", "em")
            .andWhere("ei.id = :individual_id", { individual_id: filterData.individual_id })
            .andWhere("em.id = :package_id", { package_id: filterData.package_id })
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
    async findCompanyPackageRoomAll(filterData) {
        const queryBuilder = this.apiFeaturesService
            .setRepository(reservation_room_entity_1.ReservationRoom)
            .buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.company", "ec")
            .leftJoinAndSelect("e.assignesPackages", "em")
            .andWhere("ei.id = :company_id", { company_id: filterData.company_id })
            .andWhere("em.id = :package_id", { package_id: filterData.package_id })
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
    async findStudentActivityPackageRoomAll(filterData) {
        const queryBuilder = this.apiFeaturesService
            .setRepository(reservation_room_entity_1.ReservationRoom)
            .buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.studentActivity", "es")
            .leftJoinAndSelect("e.assignesPackages", "em")
            .andWhere("es.id = :studentActivity_id", {
            studentActivity_id: filterData.studentActivity_id,
        })
            .andWhere("em.id = :package_id", { package_id: filterData.package_id })
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
    async findIndividualDealAll(filterData) {
        const queryBuilder = this.apiFeaturesService
            .setRepository(reservation_room_entity_1.ReservationRoom)
            .buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.individual", "ei")
            .leftJoinAndSelect("e.deals", "em")
            .andWhere("ei.id = :individual_id", { individual_id: filterData.individual_id })
            .andWhere("em.id = :deal_id", { deal_id: filterData.deal_id })
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
    async findCompanyDealAll(filterData) {
        const queryBuilder = this.apiFeaturesService
            .setRepository(reservation_room_entity_1.ReservationRoom)
            .buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.company", "ec")
            .leftJoinAndSelect("e.deals", "em")
            .andWhere("ei.id = :company_id", { company_id: filterData.company_id })
            .andWhere("em.id = :deal_id", { deal_id: filterData.deal_id })
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
    async findStudentActivityDealAll(filterData) {
        const queryBuilder = this.apiFeaturesService
            .setRepository(reservation_room_entity_1.ReservationRoom)
            .buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.studentActivity", "es")
            .leftJoinAndSelect("e.deals", "em")
            .andWhere("es.id = :studentActivity_id", {
            studentActivity_id: filterData.studentActivity_id,
        })
            .andWhere("em.id = :deal_id", { deal_id: filterData.deal_id })
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
    async findOne(id) {
        const reservation = await this.reservationRoomRepository.findOne({ where: { id } });
        if (!reservation)
            throw new common_1.NotFoundException(`Reservation ${id} not found`);
        return reservation;
    }
    async update(updateDto) {
        const { status, room_id, type_user, selected_day, customer_id, offer_id, deal_id, package_id, ...rest } = updateDto;
        if (status === global_enum_1.ReservationStatus.CANCELLED) {
            await this.handleCancellation(updateDto);
        }
        else {
            await this.reservationRoomRepository.update(updateDto.id, {
                ...rest,
                status: global_enum_1.ReservationStatus.COMPLETE,
            });
        }
        return this.findOne(updateDto.id);
    }
    async remove(id) {
        await this.reservationRoomRepository.delete(id);
    }
    async handleReservationCreation(dto, reqBody, type) {
        const { room_id, selected_day, ...rest } = dto;
        const selectedDay = (0, utitlties_1.formatDate)(selected_day);
        const { startTime, endTime } = this.calculateTimes(rest, selectedDay);
        await this.validateTimeSlot(room_id, selectedDay, startTime, endTime);
        const room = await this.getValidRoom(room_id);
        const additionalData = await this.processAdditionalData(type, dto, reqBody);
        const reservation = this.buildReservationEntity(rest, room, selectedDay, additionalData, reqBody);
        return this.reservationRoomRepository.save(reservation);
    }
    calculateTimes(details, selectedDay) {
        return {
            startTime: this.createMoment(selectedDay, details.start_hour, details.start_minute, details.start_time),
            endTime: this.createMoment(selectedDay, details.end_hour, details.end_minute, details.end_time),
        };
    }
    createMoment(day, hour, minute, period) {
        const [d, m, y] = day.split("/");
        const adjustedHour = this.adjustHour(hour, period);
        return moment(`${y}-${m}-${d} ${adjustedHour}:${minute}`, "YYYY-MM-DD HH:mm");
    }
    adjustHour(hour, period) {
        if (period === global_enum_1.TimeOfDay.PM && hour !== 12)
            return hour + 12;
        if (period === global_enum_1.TimeOfDay.AM && hour === 12)
            return 0;
        return hour;
    }
    async validateTimeSlot(roomId, day, start, end) {
        if (end.isBefore(start)) {
            throw new common_1.BadRequestException("End time must be after start time.");
        }
        const parsedDay = moment(day, "DD/MM/YYYY");
        const startOfDay = parsedDay.clone().startOf("day");
        const endOfDay = parsedDay.clone().endOf("day");
        if (end.isBefore(startOfDay) || end.isAfter(endOfDay)) {
            throw new common_1.BadRequestException("End time must be within the same day.");
        }
        const existing = await this.getActiveReservations(roomId, day);
        if (this.checkOverlap(existing, start, end)) {
            throw new common_1.BadRequestException("Time slot overlaps with existing reservation");
        }
    }
    async getValidRoom(roomId) {
        const room = await this.room.findOne(roomId);
        if (!room)
            throw new common_1.BadRequestException("Room not found");
        return room;
    }
    async processAdditionalData(type, dto, reqBody) {
        switch (type) {
            case "offer":
                return this.processOffer(dto, reqBody);
            case "package":
                return this.processPackage(dto.package_id, dto);
            case "deal":
                return this.processDeal(dto.deal_id, dto);
            default:
                return this.processCalcNormal(dto);
        }
    }
    buildReservationEntity(dto, room, selectedDay, additionalData, reqBody) {
        const diffHours = (0, utitlties_1.calculateHours)({
            start_hour: dto.start_hour,
            start_minute: dto.start_minute,
            start_time: dto.start_time,
            end_hour: dto.end_hour,
            end_minute: dto.end_minute,
            end_time: dto.end_time,
        });
        return this.reservationRoomRepository.create({
            ...dto,
            room,
            selected_day: selectedDay,
            total_time: diffHours,
            ...additionalData,
            createdBy: reqBody.createdBy,
            [dto.type_user]: reqBody.customer,
        });
    }
    buildBaseQuery(filterData) {
        return this.apiFeaturesService
            .setRepository(reservation_room_entity_1.ReservationRoom)
            .buildQuery(filterData)
            .leftJoinAndSelect("e.room", "room")
            .leftJoin("e.createdBy", "creator")
            .addSelect(["creator.id", "creator.firstName", "creator.lastName"]);
    }
    async executePaginatedQuery(query) {
        const [data, total] = await Promise.all([query.getMany(), query.getCount()]);
        return { data, recordsFiltered: data.length, totalRecords: total };
    }
    async processOffer(dto, reqBody) {
        if (!dto.offer_id)
            return {};
        const payload = {
            customer_id: dto.customer_id,
            offer_id: dto.offer_id,
            type_user: dto.type_user,
        };
        const assignOffer = await this.assignGlobalOffer.create(payload, reqBody);
        const offer = await this.globalOffer.findOne(dto.offer_id);
        return {
            assignGeneralOffer: assignOffer,
            total_price: await this.calculatePrice(offer, dto.room_id, dto),
        };
    }
    async processCalcNormal(dto) {
        return {
            assignGeneralOffer: null,
            total_price: await this.calculatePrice(null, dto.room_id, dto),
        };
    }
    async processPackage(packageId, dto) {
        const packageRoom = await this.validatePackage(packageId);
        this.validatePackageRange(packageRoom, (0, utitlties_1.formatDate)(dto.selected_day));
        const diffHours = (0, utitlties_1.calculateHours)({
            start_hour: dto.start_hour,
            start_minute: dto.start_minute,
            start_time: dto.start_time,
            end_hour: dto.end_hour,
            end_minute: dto.end_minute,
            end_time: dto.end_time,
        });
        await this.updatePackageUsage(diffHours, packageRoom);
        return { assignesPackages: packageRoom };
    }
    async processDeal(dealId, dto) {
        const deal = await this.validateDeal(dealId);
        this.validateDealRange(deal, (0, utitlties_1.formatDate)(dto.selected_day));
        const diffHours = (0, utitlties_1.calculateHours)({
            start_hour: dto.start_hour,
            start_minute: dto.start_minute,
            start_time: dto.start_time,
            end_hour: dto.end_hour,
            end_minute: dto.end_minute,
            end_time: dto.end_time,
        });
        await this.updateDealUsage(diffHours, deal);
        return { deals: deal };
    }
    async updatePackageUsage(diffHours, pkg) {
        const newUsed = pkg.used + diffHours;
        const newRemaining = pkg.total_used - newUsed;
        if (pkg.total_used < newUsed) {
            throw new common_1.BadRequestException(`Your package quota is exhausted. Please create a new package.`);
        }
        await this.packageRooms.update({
            id: pkg.id,
            used: newUsed,
            remaining: newRemaining,
        });
    }
    async updateDealUsage(diffHours, deal) {
        const newUsed = deal.used + diffHours;
        const newRemaining = deal.total_used - newUsed;
        if (deal.total_used < newUsed) {
            throw new common_1.BadRequestException(`Your deal quota is exhausted. Please create a new deal.`);
        }
        await this.deal.update({
            id: deal.id,
            used: newUsed,
            remaining: newRemaining,
        });
    }
    async validatePackage(id) {
        const pkg = await this.packageRooms.findOne(id);
        if (!pkg)
            throw new common_1.BadRequestException("Invalid package");
        return pkg;
    }
    async validateDeal(id) {
        const deal = await this.deal.findOne(id);
        if (!deal)
            throw new common_1.BadRequestException("Invalid deal");
        return deal;
    }
    validatePackageRange(pkg, selectedDay) {
        const date = moment(selectedDay, "DD/MM/YYYY");
        const start = moment(pkg.start_date);
        const end = moment(pkg.end_date);
        if (!start.isSameOrBefore(date) || !end.isSameOrAfter(date)) {
            throw new common_1.BadRequestException("Package not active for selected date");
        }
    }
    validateDealRange(deal, selectedDay) {
        const date = moment(selectedDay, "DD/MM/YYYY");
        const start = moment(deal.start_date);
        const end = moment(deal.end_date);
        if (!start.isSameOrBefore(date) || !end.isSameOrAfter(date)) {
            throw new common_1.BadRequestException("Deal not active for selected date");
        }
    }
    async findActiveOrInactiveReservationsForCustomer(customer_id, customer_type) {
        const customerRelationMap = {
            individual: "individual",
            company: "company",
            studentActivity: "studentActivity",
        };
        const customerRelationField = customerRelationMap[customer_type];
        const customerCondition = { [customerRelationField]: { id: customer_id } };
        const existingReservations = await this.reservationRoomRepository.find({
            relations: [customerRelationField],
            where: [
                {
                    status: global_enum_1.ReservationStatus.ACTIVE,
                    ...customerCondition,
                },
            ],
        });
        if (existingReservations.length) {
            throw new common_1.BadRequestException(`You can't create another reservation for this user.`);
        }
    }
    async getActiveReservations(roomId, day) {
        return this.reservationRoomRepository
            .createQueryBuilder("reservation")
            .innerJoinAndSelect("reservation.room", "room")
            .where("room.id = :roomId", { roomId })
            .andWhere("reservation.selected_day = :day", { day })
            .andWhere("reservation.status IN (:...statuses)", {
            statuses: [global_enum_1.ReservationStatus.ACTIVE, global_enum_1.ReservationStatus.COMPLETE],
        })
            .getMany();
    }
    checkOverlap(reservations, newStart, newEnd) {
        return reservations.some(reservation => {
            const existingStart = this.createMoment(reservation.selected_day, reservation.start_hour, reservation.start_minute, reservation.start_time);
            const existingEnd = this.createMoment(reservation.selected_day, reservation.end_hour, reservation.end_minute, reservation.end_time);
            return newStart.isSameOrBefore(existingEnd) && newEnd.isSameOrAfter(existingStart);
        });
    }
    async calculatePrice(offer, roomId, details) {
        const priceRoom = await this.room.findOne(roomId);
        const diffHours = (0, utitlties_1.diffrentHour)(details);
        let discount = 0;
        const totalPrice = diffHours ? +priceRoom.price * diffHours : +priceRoom.price;
        if (offer) {
            const typeDiscount = offer.type_discount;
            const discountAmount = offer.discount;
            discount = typeDiscount === "amount" ? discountAmount : totalPrice * (discountAmount / 100);
        }
        return totalPrice - discount;
    }
    async handleCancellation(dto) {
        const { start_hour, start_minute, start_time, end_hour, end_minute, end_time, ...rest } = dto;
        const diffHours = (0, utitlties_1.calculateHours)({
            start_hour,
            start_minute,
            start_time,
            end_hour,
            end_minute,
            end_time,
        });
        if (dto.package_id) {
            const pkg = await this.validatePackage(dto.package_id);
            await this.packageRooms.update({
                id: pkg.id,
                used: pkg.used - diffHours,
                remaining: pkg.remaining + diffHours,
            });
        }
        if (dto.deal_id) {
            const deal = await this.validateDeal(dto.deal_id);
            await this.deal.update({
                id: deal.id,
                used: deal.used - diffHours,
                remaining: deal.remaining + diffHours,
            });
        }
        await this.reservationRoomRepository.update(dto.id, rest);
    }
    ato24h(hourStr, minuteStr, period) {
        const hour = parseInt(hourStr, 10);
        const periodLower = period.toLowerCase();
        if (periodLower === "pm" && hour !== 12)
            return hour + 12;
        if (periodLower === "am" && hour === 12)
            return 0;
        return hour;
    }
    createCairoTime(date, hour, minute, timeZone) {
        return moment.tz(`${date} ${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`, "DD/MM/YYYY HH:mm", timeZone);
    }
};
exports.ReservationRoomService = ReservationRoomService;
exports.ReservationRoomService = ReservationRoomService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(reservation_room_entity_1.ReservationRoom)),
    __param(5, (0, common_1.Inject)((0, common_1.forwardRef)(() => assignes_packages_service_1.AssignesPackagesService))),
    __param(6, (0, common_1.Inject)((0, common_1.forwardRef)(() => deals_service_1.DealsService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        filter_service_1.APIFeaturesService,
        assignes_general_offer_service_1.AssignGeneralOfferservice,
        generalOffer_service_1.GeneralOfferService,
        rooms_service_1.RoomsService,
        assignes_packages_service_1.AssignesPackagesService,
        deals_service_1.DealsService])
], ReservationRoomService);
//# sourceMappingURL=reservation-room.service.js.map