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
exports.DahboredService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const assignes_general_offer_entity_1 = require("../assignes-global-offers/assignes-general-offer.entity");
const assignes_membership_entity_1 = require("../assignes-memberships/assignes-membership.entity");
const assignes_packages_entity_1 = require("../assigness-packages-offers/assignes-packages.entity");
const expense_place_child_entity_1 = require("../expenses-place/expenses-place-child/expense-place-child.entity");
const expense_salaries_entity_1 = require("../expenses-salary/expense-salaries.entity");
const order_entity_1 = require("../orders/order.entity");
const purchases_entity_1 = require("../purchases/purchases.entity");
const deskarea_entity_1 = require("../reservations/deskarea/deskarea.entity");
const reservation_room_entity_1 = require("../reservations/rooms/reservation-room.entity");
const shared_entity_1 = require("../reservations/shared/shared.entity");
const returns_entity_1 = require("../returns/returns.entity");
const revenue_child_entity_1 = require("../revenue/revenue-child/revenue-child.entity");
const global_enum_1 = require("../shared/enum/global-enum");
const typeorm_2 = require("typeorm");
let DahboredService = class DahboredService {
    constructor(expensePlaceChildRepository, revenueChildRepository, expenseSalariesRepository, purchasesRepository, returnsRepository, orderRepository, packagesRepository, membershipRepository, generalOfferRepository, sharedRepository, deskAreaRepository, reservationRoomRepository) {
        this.expensePlaceChildRepository = expensePlaceChildRepository;
        this.revenueChildRepository = revenueChildRepository;
        this.expenseSalariesRepository = expenseSalariesRepository;
        this.purchasesRepository = purchasesRepository;
        this.returnsRepository = returnsRepository;
        this.orderRepository = orderRepository;
        this.packagesRepository = packagesRepository;
        this.membershipRepository = membershipRepository;
        this.generalOfferRepository = generalOfferRepository;
        this.sharedRepository = sharedRepository;
        this.deskAreaRepository = deskAreaRepository;
        this.reservationRoomRepository = reservationRoomRepository;
    }
    async getAllExapsesInternalSallary(filter) {
        return await this.expenseSalariesRepository
            .createQueryBuilder("expenseSalaries")
            .select("SUM(expenseSalaries.cost)", "totalCost")
            .where("expenseSalaries.cost > 0")
            .andWhere("expenseSalaries.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .andWhere("expenseSalaries.type_sallary = :typeSalary", { typeSalary: global_enum_1.TypeSallary.Internal })
            .getRawOne();
    }
    async getAllExapsesExternalSallary(filter) {
        return await this.expenseSalariesRepository
            .createQueryBuilder("expenseSalaries")
            .select("SUM(expenseSalaries.cost)", "totalCost")
            .where("expenseSalaries.cost > 0")
            .andWhere("expenseSalaries.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .andWhere("expenseSalaries.type_sallary = :typeSalary", { typeSalary: global_enum_1.TypeSallary.External })
            .getRawOne();
    }
    async getAllExapsesPlace(filter) {
        return await this.expensePlaceChildRepository
            .createQueryBuilder("expensePlaceChild")
            .select("SUM(expensePlaceChild.cost)", "totalCost")
            .where("expensePlaceChild.cost > 0")
            .andWhere("expensePlaceChild.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .getRawOne();
    }
    async getAllExapsesInsurance(filter) {
        return await this.expensePlaceChildRepository
            .createQueryBuilder("expensePlaceChild")
            .select("SUM(expensePlaceChild.cost)", "totalCost")
            .where("expensePlaceChild.cost > 0")
            .andWhere("expensePlaceChild.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .leftJoin("expensePlaceChild.expensePlace", "ee")
            .andWhere("ee.name = :name", { name: "insurance" })
            .getRawOne();
    }
    async getAllExapsesSystemFees(filter) {
        return await this.expensePlaceChildRepository
            .createQueryBuilder("expensePlaceChild")
            .select("SUM(expensePlaceChild.cost)", "totalCost")
            .where("expensePlaceChild.cost > 0")
            .andWhere("expensePlaceChild.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .leftJoin("expensePlaceChild.expensePlace", "ee")
            .andWhere("ee.name = :name", { name: "internet_system_fees" })
            .getRawOne();
    }
    async getAllExapsesRents(filter) {
        return await this.expensePlaceChildRepository
            .createQueryBuilder("expensePlaceChild")
            .select("SUM(expensePlaceChild.cost)", "totalCost")
            .where("expensePlaceChild.cost > 0")
            .andWhere("expensePlaceChild.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .leftJoin("expensePlaceChild.expensePlace", "ee")
            .andWhere("ee.name = :name", { name: "rents" })
            .getRawOne();
    }
    async getAllExapsesElectricityBills(filter) {
        return await this.expensePlaceChildRepository
            .createQueryBuilder("expensePlaceChild")
            .select("SUM(expensePlaceChild.cost)", "totalCost")
            .where("expensePlaceChild.cost > 0")
            .andWhere("expensePlaceChild.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .leftJoin("expensePlaceChild.expensePlace", "ee")
            .andWhere("ee.name = :name", { name: "electricity_bills" })
            .getRawOne();
    }
    async getAllExapsesBonuses(filter) {
        return await this.expensePlaceChildRepository
            .createQueryBuilder("expensePlaceChild")
            .select("SUM(expensePlaceChild.cost)", "totalCost")
            .where("expensePlaceChild.cost > 0")
            .andWhere("expensePlaceChild.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .leftJoin("expensePlaceChild.expensePlace", "ee")
            .andWhere("ee.name = :name", { name: "bonuses" })
            .getRawOne();
    }
    async getAllExapsesAssetsPurchased(filter) {
        return await this.expensePlaceChildRepository
            .createQueryBuilder("expensePlaceChild")
            .select("SUM(expensePlaceChild.cost)", "totalCost")
            .where("expensePlaceChild.cost > 0")
            .andWhere("expensePlaceChild.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .leftJoin("expensePlaceChild.expensePlace", "ee")
            .andWhere("ee.name = :name", { name: "assets_purchased" })
            .getRawOne();
    }
    async getAllExapsesKitchenCost(filter) {
        return await this.expensePlaceChildRepository
            .createQueryBuilder("expensePlaceChild")
            .select("SUM(expensePlaceChild.cost)", "totalCost")
            .where("expensePlaceChild.cost > 0")
            .andWhere("expensePlaceChild.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .leftJoin("expensePlaceChild.expensePlace", "ee")
            .andWhere("ee.name = :name", { name: "kitchen_cost" })
            .getRawOne();
    }
    async getAllExapsesCoursesCost(filter) {
        return await this.expensePlaceChildRepository
            .createQueryBuilder("expensePlaceChild")
            .select("SUM(expensePlaceChild.cost)", "totalCost")
            .where("expensePlaceChild.cost > 0")
            .andWhere("expensePlaceChild.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .leftJoin("expensePlaceChild.expensePlace", "ee")
            .andWhere("ee.name = :name", { name: "courses_cost" })
            .getRawOne();
    }
    async getAllExapsesCharteredAccountantFees(filter) {
        return await this.expensePlaceChildRepository
            .createQueryBuilder("expensePlaceChild")
            .select("SUM(expensePlaceChild.cost)", "totalCost")
            .where("expensePlaceChild.cost > 0")
            .andWhere("expensePlaceChild.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .leftJoin("expensePlaceChild.expensePlace", "ee")
            .andWhere("ee.name = :name", { name: "chartered_accountant_fees" })
            .getRawOne();
    }
    async getAllExapsesLoans(filter) {
        return await this.expensePlaceChildRepository
            .createQueryBuilder("expensePlaceChild")
            .select("SUM(expensePlaceChild.cost)", "totalCost")
            .where("expensePlaceChild.cost > 0")
            .andWhere("expensePlaceChild.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .leftJoin("expensePlaceChild.expensePlace", "ee")
            .andWhere("ee.name = :name", { name: "loans" })
            .getRawOne();
    }
    async getAllExapsesOther(filter) {
        return await this.expensePlaceChildRepository
            .createQueryBuilder("expensePlaceChild")
            .select("SUM(expensePlaceChild.cost)", "totalCost")
            .where("expensePlaceChild.cost > 0")
            .andWhere("expensePlaceChild.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .leftJoin("expensePlaceChild.expensePlace", "ee")
            .andWhere("ee.name = :name", { name: "other" })
            .getRawOne();
    }
    async getAllCountPurshases(filter) {
        return await this.purchasesRepository
            .createQueryBuilder("purshase")
            .select("COUNT(purshase.id)", "count")
            .where("purshase.total > 0")
            .andWhere("purshase.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .getRawOne();
    }
    async getAllRevenueVirtualOfficeIncome(filter) {
        return await this.revenueChildRepository
            .createQueryBuilder("revenueChild")
            .select("SUM(revenueChild.amount)", "totalRevenue")
            .where("revenueChild.amount > 0")
            .andWhere("revenueChild.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .leftJoin("revenueChild.revenue", "ee")
            .andWhere("ee.name = :name", { name: "virtual_office_income" })
            .getRawOne();
    }
    async getAllRevenueOfficesIncome(filter) {
        return await this.revenueChildRepository
            .createQueryBuilder("revenueChild")
            .select("SUM(revenueChild.amount)", "totalRevenue")
            .where("revenueChild.amount > 0")
            .andWhere("revenueChild.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .leftJoin("revenueChild.revenue", "ee")
            .andWhere("ee.name = :name", { name: "offices_income" })
            .getRawOne();
    }
    async getAllRevenueStoresIncome(filter) {
        return await this.revenueChildRepository
            .createQueryBuilder("revenueChild")
            .select("SUM(revenueChild.amount)", "totalRevenue")
            .where("revenueChild.amount > 0")
            .andWhere("revenueChild.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .leftJoin("revenueChild.revenue", "ee")
            .andWhere("ee.name = :name", { name: "stores_income" })
            .getRawOne();
    }
    async getAllRevenuePrintIncome(filter) {
        return await this.revenueChildRepository
            .createQueryBuilder("revenueChild")
            .select("SUM(revenueChild.amount)", "totalRevenue")
            .where("revenueChild.amount > 0")
            .andWhere("revenueChild.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .leftJoin("revenueChild.revenue", "ee")
            .andWhere("ee.name = :name", { name: "print_income" })
            .getRawOne();
    }
    async getAllRevenueLockerIncome(filter) {
        return await this.revenueChildRepository
            .createQueryBuilder("revenueChild")
            .select("SUM(revenueChild.amount)", "totalRevenue")
            .where("revenueChild.amount > 0")
            .andWhere("revenueChild.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .leftJoin("revenueChild.revenue", "ee")
            .andWhere("ee.name = :name", { name: "locker_income" })
            .getRawOne();
    }
    async getAllRevenueExtraInternetIncome(filter) {
        return await this.revenueChildRepository
            .createQueryBuilder("revenueChild")
            .select("SUM(revenueChild.amount)", "totalRevenue")
            .where("revenueChild.amount > 0")
            .andWhere("revenueChild.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .leftJoin("revenueChild.revenue", "ee")
            .andWhere("ee.name = :name", { name: "extra_internet_income" })
            .getRawOne();
    }
    async getAllRevenueCoursesIncome(filter) {
        return await this.revenueChildRepository
            .createQueryBuilder("revenueChild")
            .select("SUM(revenueChild.amount)", "totalRevenue")
            .where("revenueChild.amount > 0")
            .andWhere("revenueChild.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .leftJoin("revenueChild.revenue", "ee")
            .andWhere("ee.name = :name", { name: "courses_income" })
            .getRawOne();
    }
    async getAllRevenueCoursesNetProfit(filter) {
        return await this.revenueChildRepository
            .createQueryBuilder("revenueChild")
            .select("SUM(revenueChild.amount)", "totalRevenue")
            .where("revenueChild.amount > 0")
            .andWhere("revenueChild.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .leftJoin("revenueChild.revenue", "ee")
            .andWhere("ee.name = :name", { name: "courses_net_profit" })
            .getRawOne();
    }
    async getAllRevenueElectronicIncomeInvoices(filter) {
        return await this.revenueChildRepository
            .createQueryBuilder("revenueChild")
            .select("SUM(revenueChild.amount)", "totalRevenue")
            .where("revenueChild.amount > 0")
            .andWhere("revenueChild.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .leftJoin("revenueChild.revenue", "ee")
            .andWhere("ee.name = :name", { name: "electronic_income_invoices" })
            .getRawOne();
    }
    async getAllRevenueElectronicExpensesInvoices(filter) {
        return await this.revenueChildRepository
            .createQueryBuilder("revenueChild")
            .select("SUM(revenueChild.amount)", "totalRevenue")
            .where("revenueChild.amount > 0")
            .andWhere("revenueChild.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .leftJoin("revenueChild.revenue", "ee")
            .andWhere("ee.name = :name", { name: "electronic_expenses_invoices" })
            .getRawOne();
    }
    async getAllRevenueOther(filter) {
        return await this.revenueChildRepository
            .createQueryBuilder("revenueChild")
            .select("SUM(revenueChild.amount)", "totalRevenue")
            .where("revenueChild.amount > 0")
            .andWhere("revenueChild.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .leftJoin("revenueChild.revenue", "ee")
            .andWhere("ee.name = :name", { name: "other" })
            .getRawOne();
    }
    async getTotalRevenueByStatus(repository, status, filter, entityName) {
        return await repository
            .createQueryBuilder(entityName)
            .select(`SUM(${entityName}.total_price)`, "totalRevenue")
            .where(`${entityName}.total_price > 0`)
            .andWhere(`${entityName}.status = :status`, { status })
            .andWhere(`${entityName}.created_at BETWEEN :startFrom AND :startTo`, {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .getRawOne();
    }
    async getAllTotalHours(repository, status, filter, entityName) {
        return await repository
            .createQueryBuilder(entityName)
            .select(`SUM(${entityName}.total_time)`, "totalHour")
            .where(`${entityName}.total_time > 0`)
            .andWhere(`${entityName}.status = :status`, { status })
            .andWhere(`${entityName}.created_at BETWEEN :startFrom AND :startTo`, {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .getRawOne();
    }
    async getAllTotalHourSharedCompleted(filter) {
        return this.getAllTotalHours(this.sharedRepository, "complete", filter, "shared");
    }
    async getAllTotalHourDeskareaCompleted(filter) {
        return this.getAllTotalHours(this.deskAreaRepository, "complete", filter, "deskarea");
    }
    async getAllTotalHourReservationRoomCompleted(filter) {
        return this.getAllTotalHours(this.reservationRoomRepository, "complete", filter, "deskarea");
    }
    async getAllTotalPackages(filter) {
        return this.getTotalRevenueByStatus(this.packagesRepository, "complete", filter, "shared");
    }
    async getAllTotalCancelledPackages(filter) {
        return this.getTotalRevenueByStatus(this.packagesRepository, "cancelled", filter, "shared");
    }
    async getAllTotalActivePackages(filter) {
        return this.getTotalRevenueByStatus(this.packagesRepository, "active", filter, "shared");
    }
    async getAllTotalDeal(filter) {
        return this.getTotalRevenueByStatus(this.deskAreaRepository, "complete", filter, "shared");
    }
    async getAllTotalCancelledDeal(filter) {
        return this.getTotalRevenueByStatus(this.deskAreaRepository, "cancelled", filter, "shared");
    }
    async getAllTotalActiveDeal(filter) {
        return this.getTotalRevenueByStatus(this.deskAreaRepository, "active", filter, "shared");
    }
    async getAllTotalShared(filter) {
        return this.getTotalRevenueByStatus(this.sharedRepository, "complete", filter, "shared");
    }
    async getAllTotalCancelledShared(filter) {
        return this.getTotalRevenueByStatus(this.sharedRepository, "cancelled", filter, "shared");
    }
    async getAllTotalActiveShared(filter) {
        return this.getTotalRevenueByStatus(this.sharedRepository, "active", filter, "shared");
    }
    async getAllTotalDeskArea(filter) {
        return this.getTotalRevenueByStatus(this.deskAreaRepository, "complete", filter, "deskarea");
    }
    async getAllTotalCancelledDeskArea(filter) {
        return this.getTotalRevenueByStatus(this.deskAreaRepository, "cancelled", filter, "deskarea");
    }
    async getAllTotalActiveDeskArea(filter) {
        return this.getTotalRevenueByStatus(this.deskAreaRepository, "active", filter, "deskarea");
    }
    async getAllTotalReservationRoom(filter) {
        return this.getTotalRevenueByStatus(this.reservationRoomRepository, "complete", filter, "reservationRoom");
    }
    async getAllTotalCancelledReservationRoom(filter) {
        return this.getTotalRevenueByStatus(this.reservationRoomRepository, "cancelled", filter, "reservationRoom");
    }
    async getAllTotalActiveReservationRoom(filter) {
        return this.getTotalRevenueByStatus(this.reservationRoomRepository, "active", filter, "reservationRoom");
    }
    async getAllTotalMemberShip(filter) {
        return this.getTotalRevenueByStatus(this.membershipRepository, "complete", filter, "membership");
    }
    async getAllTotalCancelledMemberShip(filter) {
        return this.getTotalRevenueByStatus(this.membershipRepository, "cancelled", filter, "membership");
    }
    async getAllTotalActiveMemberShip(filter) {
        return this.getTotalRevenueByStatus(this.membershipRepository, "active", filter, "membership");
    }
    async getAllTotalOffer(filter) {
        return await this.generalOfferRepository
            .createQueryBuilder("offer")
            .select("COUNT(offer.id)", "count")
            .andWhere("offer.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .getRawOne();
    }
    async getAllCountReturns(filter) {
        return await this.returnsRepository
            .createQueryBuilder("returns")
            .select("COUNT(returns.id)", "count")
            .where("returns.total > 0")
            .andWhere("returns.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .getRawOne();
    }
    async getTotalReturns(filter) {
        return await this.returnsRepository
            .createQueryBuilder("returns")
            .select("SUM(returns.total)", "total")
            .where("returns.total > 0")
            .andWhere("returns.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .getRawOne();
    }
    async getTotalPurshases(filter) {
        return await this.purchasesRepository
            .createQueryBuilder("purshase")
            .select("SUM(purshase.total)", "total")
            .where("purshase.total > 0")
            .andWhere("purshase.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .getRawOne();
    }
    async getCountPaidOrders(filter) {
        return await this.orderRepository
            .createQueryBuilder("order")
            .select("COUNT(order.id)", "count")
            .where("order.type_order = 'PAID'")
            .andWhere("order.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .getRawOne();
    }
    async getCountCostOrders(filter) {
        return await this.orderRepository
            .createQueryBuilder("order")
            .select("COUNT(order.id)", "count")
            .where("order.type_order = 'COST'")
            .andWhere("order.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .getRawOne();
    }
    async getCountFreeOrders(filter) {
        return await this.orderRepository
            .createQueryBuilder("order")
            .select("COUNT(order.id)", "count")
            .where("order.type_order = 'FREE'")
            .andWhere("order.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .getRawOne();
    }
    async getCountHoldOrders(filter) {
        return await this.orderRepository
            .createQueryBuilder("order")
            .select("COUNT(order.id)", "count")
            .where("order.type_order = 'HOLD'")
            .andWhere("order.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .getRawOne();
    }
    async getTotalPaidOrders(filter) {
        return await this.orderRepository
            .createQueryBuilder("order")
            .select("SUM(order.total_order)", "total")
            .where("order.total_order > 0")
            .andWhere("order.type_order = 'PAID'")
            .andWhere("order.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .getRawOne();
    }
    async getTotalCostOrders(filter) {
        return await this.orderRepository
            .createQueryBuilder("order")
            .select("SUM(order.total_order)", "total")
            .where("order.total_order > 0")
            .andWhere("order.type_order = 'COST'")
            .andWhere("order.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .getRawOne();
    }
    async getTotalHoldOrders(filter) {
        return await this.orderRepository
            .createQueryBuilder("order")
            .select("SUM(order.total_order)", "total")
            .where("order.total_order > 0")
            .andWhere("order.type_order = 'HOLD'")
            .andWhere("order.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .getRawOne();
    }
    async getTotalOrderPriceOrders(filter) {
        return await this.orderRepository
            .createQueryBuilder("order")
            .select("SUM(order.order_price)", "total")
            .where("order.order_price > 0")
            .andWhere("order.created_at BETWEEN :startFrom AND :startTo", {
            startFrom: filter.start_date,
            startTo: filter.end_date,
        })
            .getRawOne();
    }
};
exports.DahboredService = DahboredService;
exports.DahboredService = DahboredService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(expense_place_child_entity_1.ExpensePlaceChild)),
    __param(1, (0, typeorm_1.InjectRepository)(revenue_child_entity_1.RevenueChild)),
    __param(2, (0, typeorm_1.InjectRepository)(expense_salaries_entity_1.ExpenseSalaries)),
    __param(3, (0, typeorm_1.InjectRepository)(purchases_entity_1.Purchases)),
    __param(4, (0, typeorm_1.InjectRepository)(returns_entity_1.Returns)),
    __param(5, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __param(6, (0, typeorm_1.InjectRepository)(assignes_packages_entity_1.AssignesPackages)),
    __param(7, (0, typeorm_1.InjectRepository)(assignes_membership_entity_1.AssignesMembership)),
    __param(8, (0, typeorm_1.InjectRepository)(assignes_general_offer_entity_1.AssignGeneralOffer)),
    __param(9, (0, typeorm_1.InjectRepository)(shared_entity_1.Shared)),
    __param(10, (0, typeorm_1.InjectRepository)(deskarea_entity_1.Deskarea)),
    __param(11, (0, typeorm_1.InjectRepository)(reservation_room_entity_1.ReservationRoom)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], DahboredService);
//# sourceMappingURL=dahsbored.service.js.map