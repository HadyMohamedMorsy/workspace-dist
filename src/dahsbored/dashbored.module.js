"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboredModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const assignes_general_offer_entity_1 = require("../assignes-global-offers/assignes-general-offer.entity");
const assignes_membership_entity_1 = require("../assignes-memberships/assignes-membership.entity");
const assignes_packages_entity_1 = require("../assigness-packages-offers/assignes-packages.entity");
const expense_place_child_entity_1 = require("../expenses-place/expenses-place-child/expense-place-child.entity");
const expense_salaries_entity_1 = require("../expenses-salary/expense-salaries.entity");
const individual_entity_1 = require("../individual/individual.entity");
const order_entity_1 = require("../orders/order.entity");
const purchases_entity_1 = require("../purchases/purchases.entity");
const deskarea_entity_1 = require("../reservations/deskarea/deskarea.entity");
const reservation_room_entity_1 = require("../reservations/rooms/reservation-room.entity");
const shared_entity_1 = require("../reservations/shared/shared.entity");
const returns_entity_1 = require("../returns/returns.entity");
const revenue_child_entity_1 = require("../revenue/revenue-child/revenue-child.entity");
const dahsbored_service_1 = require("./dahsbored.service");
const dashbored_controller_1 = require("./dashbored.controller");
let DashboredModule = class DashboredModule {
};
exports.DashboredModule = DashboredModule;
exports.DashboredModule = DashboredModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                order_entity_1.Order,
                individual_entity_1.Individual,
                expense_place_child_entity_1.ExpensePlaceChild,
                assignes_packages_entity_1.AssignesPackages,
                assignes_membership_entity_1.AssignesMembership,
                assignes_general_offer_entity_1.AssignGeneralOffer,
                shared_entity_1.Shared,
                deskarea_entity_1.Deskarea,
                reservation_room_entity_1.ReservationRoom,
                revenue_child_entity_1.RevenueChild,
                expense_salaries_entity_1.ExpenseSalaries,
                purchases_entity_1.Purchases,
                returns_entity_1.Returns,
            ]),
        ],
        controllers: [dashbored_controller_1.DashboredController],
        providers: [dahsbored_service_1.DahboredService],
    })
], DashboredModule);
//# sourceMappingURL=dashbored.module.js.map