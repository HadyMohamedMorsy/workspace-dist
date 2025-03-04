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
exports.DashboredController = void 0;
const common_1 = require("@nestjs/common");
const caching_response_interceptor_1 = require("../shared/interceptor/caching-response.interceptor");
const dahsbored_service_1 = require("./dahsbored.service");
const filter_dashbored_dto_1 = require("./dto/filter-dashbored.dto");
let DashboredController = class DashboredController {
    constructor(dashboredService) {
        this.dashboredService = dashboredService;
    }
    async getAnalytics(filterQueryDto, req) {
        const user = req["userData"];
        const allowedRoles = ["founder", "technical-support", "general-manager", "accountant"];
        const hasAccess = allowedRoles.includes(user.role);
        const [[totalInternalSallary, totalExternalSallary, totalExpanses], expensesResults, revenueResults, [totalCountPurshase, totalCountReturns, totalPurshase, totalReturns], orderCounts, orderTotals, [totalOrderPrice], [totalCompletedHourShared, totalCompletedHourDesk, totalCompletedHourRooms], [totalCompletedDeal, totalCancelledDeal, totalActiveDeal], [totalCompletedPackages, totalCancelledPackages, totalActivePackages], [totalCompletedShared, totalCancelledShared, totalActiveShared], [totalCompletedDeskArea, totalCancelledDeskArea, totalActiveDeskArea], [totalCompletedReservationRoom, totalCancelledReservationRoom, totalActiveReservationRoom], [totalCompletedMembership, totalCancelledMembership, totalActiveMembership], [totalOffer],] = await Promise.all([
            Promise.all([
                this.dashboredService.getAllExapsesInternalSallary(filterQueryDto),
                this.dashboredService.getAllExapsesExternalSallary(filterQueryDto),
                this.dashboredService.getAllExapsesPlace(filterQueryDto),
            ]),
            Promise.all([
                this.dashboredService.getAllExapsesInsurance(filterQueryDto),
                this.dashboredService.getAllExapsesSystemFees(filterQueryDto),
                this.dashboredService.getAllExapsesRents(filterQueryDto),
                this.dashboredService.getAllExapsesElectricityBills(filterQueryDto),
                this.dashboredService.getAllExapsesBonuses(filterQueryDto),
                this.dashboredService.getAllExapsesAssetsPurchased(filterQueryDto),
                this.dashboredService.getAllExapsesKitchenCost(filterQueryDto),
                this.dashboredService.getAllExapsesCoursesCost(filterQueryDto),
                this.dashboredService.getAllExapsesCharteredAccountantFees(filterQueryDto),
                this.dashboredService.getAllExapsesLoans(filterQueryDto),
                this.dashboredService.getAllExapsesOther(filterQueryDto),
            ]),
            Promise.all([
                this.dashboredService.getAllRevenueVirtualOfficeIncome(filterQueryDto),
                this.dashboredService.getAllRevenueOfficesIncome(filterQueryDto),
                this.dashboredService.getAllRevenueStoresIncome(filterQueryDto),
                this.dashboredService.getAllRevenuePrintIncome(filterQueryDto),
                this.dashboredService.getAllRevenueLockerIncome(filterQueryDto),
                this.dashboredService.getAllRevenueExtraInternetIncome(filterQueryDto),
                this.dashboredService.getAllRevenueCoursesIncome(filterQueryDto),
                this.dashboredService.getAllRevenueCoursesNetProfit(filterQueryDto),
                this.dashboredService.getAllRevenueElectronicIncomeInvoices(filterQueryDto),
                this.dashboredService.getAllRevenueElectronicExpensesInvoices(filterQueryDto),
                this.dashboredService.getAllRevenueOther(filterQueryDto),
            ]),
            Promise.all([
                this.dashboredService.getAllCountPurshases(filterQueryDto),
                this.dashboredService.getAllCountReturns(filterQueryDto),
                this.dashboredService.getTotalPurshases(filterQueryDto),
                this.dashboredService.getTotalReturns(filterQueryDto),
            ]),
            Promise.all([
                this.dashboredService.getCountPaidOrders(filterQueryDto),
                this.dashboredService.getCountCostOrders(filterQueryDto),
                this.dashboredService.getCountFreeOrders(filterQueryDto),
                this.dashboredService.getCountHoldOrders(filterQueryDto),
            ]),
            Promise.all([
                this.dashboredService.getTotalPaidOrders(filterQueryDto),
                this.dashboredService.getTotalCostOrders(filterQueryDto),
                this.dashboredService.getTotalHoldOrders(filterQueryDto),
            ]),
            Promise.all([this.dashboredService.getTotalOrderPriceOrders(filterQueryDto)]),
            Promise.all([
                this.dashboredService.getAllTotalHourSharedCompleted(filterQueryDto),
                this.dashboredService.getAllTotalHourDeskareaCompleted(filterQueryDto),
                this.dashboredService.getAllTotalHourReservationRoomCompleted(filterQueryDto),
            ]),
            Promise.all([
                this.dashboredService.getAllTotalDeal(filterQueryDto),
                this.dashboredService.getAllTotalCancelledDeal(filterQueryDto),
                this.dashboredService.getAllTotalActiveDeal(filterQueryDto),
            ]),
            Promise.all([
                this.dashboredService.getAllTotalPackages(filterQueryDto),
                this.dashboredService.getAllTotalCancelledPackages(filterQueryDto),
                this.dashboredService.getAllTotalActivePackages(filterQueryDto),
            ]),
            Promise.all([
                this.dashboredService.getAllTotalShared(filterQueryDto),
                this.dashboredService.getAllTotalCancelledShared(filterQueryDto),
                this.dashboredService.getAllTotalActiveShared(filterQueryDto),
            ]),
            Promise.all([
                this.dashboredService.getAllTotalDeskArea(filterQueryDto),
                this.dashboredService.getAllTotalCancelledDeskArea(filterQueryDto),
                this.dashboredService.getAllTotalActiveDeskArea(filterQueryDto),
            ]),
            Promise.all([
                this.dashboredService.getAllTotalReservationRoom(filterQueryDto),
                this.dashboredService.getAllTotalCancelledReservationRoom(filterQueryDto),
                this.dashboredService.getAllTotalActiveReservationRoom(filterQueryDto),
            ]),
            Promise.all([
                this.dashboredService.getAllTotalMemberShip(filterQueryDto),
                this.dashboredService.getAllTotalCancelledMemberShip(filterQueryDto),
                this.dashboredService.getAllTotalActiveMemberShip(filterQueryDto),
            ]),
            Promise.all([this.dashboredService.getAllTotalOffer(filterQueryDto)]),
        ]);
        const getValue = (obj, prop) => obj?.[prop] ?? 0;
        return [
            ...(hasAccess
                ? this.createMetrics([
                    ["Total Salary internal salaries", getValue(totalInternalSallary, "totalCost")],
                    ["Total Salary external salaries", getValue(totalExternalSallary, "totalCost")],
                    ["Total Expenses Cost", getValue(totalExpanses, "totalCost")],
                ], "pi pi-wallet")
                : []),
            ...(hasAccess
                ? this.createMetrics([
                    ["Total Insurance Cost", getValue(expensesResults[0], "totalCost")],
                    ["Total System Fees Cost", getValue(expensesResults[1], "totalCost")],
                    ["Total Rent Cost", getValue(expensesResults[2], "totalCost")],
                    ["Total Electricity Bills Cost", getValue(expensesResults[3], "totalCost")],
                    ["Total Bonus Cost", getValue(expensesResults[4], "totalCost")],
                    ["Total Assets Purchased", getValue(expensesResults[5], "totalCost")],
                    ["Total Kitchen Cost", getValue(expensesResults[6], "totalCost")],
                    ["Total Courses Cost", getValue(expensesResults[7], "totalCost")],
                    ["Total Chartered Accountant Fees", getValue(expensesResults[8], "totalCost")],
                    ["Total Loans Cost", getValue(expensesResults[9], "totalCost")],
                    ["Total Other Cost", getValue(expensesResults[10], "totalCost")],
                ], "pi pi-wallet")
                : []),
            ...(hasAccess
                ? this.createMetrics([
                    ["Total virtual office income", getValue(revenueResults[0], "totalRevenue")],
                    ["Total offices income", getValue(revenueResults[1], "totalRevenue")],
                    ["Total stores income", getValue(revenueResults[2], "totalRevenue")],
                    ["Total print income", getValue(revenueResults[3], "totalRevenue")],
                    ["Total locker income", getValue(revenueResults[4], "totalRevenue")],
                    ["Total extra internet income", getValue(revenueResults[5], "totalRevenue")],
                    ["Total courses income", getValue(revenueResults[6], "totalRevenue")],
                    ["Total courses net profit", getValue(revenueResults[7], "totalRevenue")],
                    ["Total electronic income invoices", getValue(revenueResults[8], "totalRevenue")],
                    ["Total electronic expenses invoices", getValue(revenueResults[9], "totalRevenue")],
                ], "pi pi-money-bill")
                : []),
            ...(hasAccess
                ? this.createMetrics([
                    ["Total Count Purchase", getValue(totalCountPurshase, "count")],
                    ["Total Count Returns", getValue(totalCountReturns, "count")],
                    ["Total Purchase", getValue(totalPurshase, "total")],
                    ["Total Returns", getValue(totalReturns, "total")],
                ], "pi pi-box")
                : []),
            ...this.createMetrics([
                ["Count Orders Paid", getValue(orderCounts[0], "count")],
                ["Count Orders Cost", getValue(orderCounts[1], "count")],
                ["Count Orders Free", getValue(orderCounts[2], "count")],
                ["Count Orders Hold", getValue(orderCounts[3], "count")],
            ], "pi pi-inbox"),
            ...(hasAccess
                ? this.createMetrics([
                    ["Total Orders Paid", getValue(orderTotals[0], "total")],
                    ["Total Orders Cost", getValue(orderTotals[1], "total")],
                    ["Total Orders Hold", getValue(orderTotals[2], "total")],
                    ["Amount Orders Kitchen", getValue(totalOrderPrice, "total")],
                    [
                        "Total Orders Kitchen",
                        getValue(orderTotals[0], "total") + getValue(orderTotals[1], "total"),
                    ],
                ], "pi pi-inbox")
                : []),
            ...this.createMetrics([
                ["Total Completed Hours Shared", getValue(totalCompletedHourShared, "totalHour")],
                ["Total Completed Hours Deskarea", getValue(totalCompletedHourDesk, "totalHour")],
                ["Total Completed Hours Rooms", getValue(totalCompletedHourRooms, "totalHour")],
            ], "pi pi-box"),
            ...(hasAccess
                ? this.createMetrics([
                    ["Total Completed Deal Revenue", getValue(totalCompletedDeal, "totalRevenue")],
                    ["Total Cancelled Deal Revenue", getValue(totalCancelledDeal, "totalRevenue")],
                    ["Total Active Deal Revenue", getValue(totalActiveDeal, "totalRevenue")],
                ], "pi pi-box")
                : []),
            ...(hasAccess
                ? this.createMetrics([
                    [
                        "Total Completed Packages Revenue",
                        getValue(totalCompletedPackages, "totalRevenue"),
                    ],
                    [
                        "Total Cancelled Packages Revenue",
                        getValue(totalCancelledPackages, "totalRevenue"),
                    ],
                    ["Total Active Packages Revenue", getValue(totalActivePackages, "totalRevenue")],
                ], "pi pi-box")
                : []),
            ...(hasAccess
                ? this.createMetrics([
                    ["Total Completed Shared Revenue", getValue(totalCompletedShared, "totalRevenue")],
                    ["Total Cancelled Shared Revenue", getValue(totalCancelledShared, "totalRevenue")],
                    ["Total Active Shared Revenue", getValue(totalActiveShared, "totalRevenue")],
                ], "pi pi-box")
                : []),
            ...(hasAccess
                ? this.createMetrics([
                    [
                        "Total Completed Desk Area Revenue",
                        getValue(totalCompletedDeskArea, "totalRevenue"),
                    ],
                    [
                        "Total Cancelled Desk Area Revenue",
                        getValue(totalCancelledDeskArea, "totalRevenue"),
                    ],
                    ["Total Active Desk Area Revenue", getValue(totalActiveDeskArea, "totalRevenue")],
                ], "pi pi-box")
                : []),
            ...(hasAccess
                ? this.createMetrics([
                    [
                        "Total Completed Reservation Room Revenue",
                        getValue(totalCompletedReservationRoom, "totalRevenue"),
                    ],
                    [
                        "Total Cancelled Reservation Room Revenue",
                        getValue(totalCancelledReservationRoom, "totalRevenue"),
                    ],
                    [
                        "Total Active Reservation Room Revenue",
                        getValue(totalActiveReservationRoom, "totalRevenue"),
                    ],
                ], "pi pi-box")
                : []),
            ...(hasAccess
                ? this.createMetrics([
                    [
                        "Total Completed Membership Revenue",
                        getValue(totalCompletedMembership, "totalRevenue"),
                    ],
                    [
                        "Total Cancelled Membership Revenue",
                        getValue(totalCancelledMembership, "totalRevenue"),
                    ],
                    ["Total Active Membership Revenue", getValue(totalActiveMembership, "totalRevenue")],
                ], "pi pi-box")
                : []),
            ...this.createMetrics([["Total Offers", getValue(totalOffer, "count")]], "pi pi-box"),
        ];
    }
    createMetrics(items, icon) {
        return items.map(([title, value]) => ({
            title,
            value: value || 0,
            icon,
        }));
    }
};
exports.DashboredController = DashboredController;
__decorate([
    (0, common_1.Post)("analytics"),
    (0, common_1.UseInterceptors)(caching_response_interceptor_1.CachingInterceptor),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dashbored_dto_1.FiltersDashboredDto, Request]),
    __metadata("design:returntype", Promise)
], DashboredController.prototype, "getAnalytics", null);
exports.DashboredController = DashboredController = __decorate([
    (0, common_1.Controller)("dashboard"),
    __metadata("design:paramtypes", [dahsbored_service_1.DahboredService])
], DashboredController);
//# sourceMappingURL=dashbored.controller.js.map