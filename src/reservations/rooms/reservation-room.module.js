"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationRoomModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const assignes_general_offer_module_1 = require("../../assignes-global-offers/assignes-general-offer.module");
const assignes_packages_module_1 = require("../../assigness-packages-offers/assignes-packages.module");
const company_module_1 = require("../../companies/company.module");
const deals_module_1 = require("../../deals/deals.module");
const generalOffer_entity_1 = require("../../general-offer/generalOffer.entity");
const generalOffer_module_1 = require("../../general-offer/generalOffer.module");
const individual_module_1 = require("../../individual/individual.module");
const rooms_module_1 = require("../../rooms/rooms.module");
const customer_middleware_1 = require("../../shared/middleware/customer.middleware");
const studentActivity_module_1 = require("../../student-activity/studentActivity.module");
const users_module_1 = require("../../users/users.module");
const reservation_room_controller_1 = require("./reservation-room.controller");
const reservation_room_entity_1 = require("./reservation-room.entity");
const reservation_room_service_1 = require("./reservation-room.service");
let ReservationRoomModule = class ReservationRoomModule {
    configure(consumer) {
        consumer
            .apply(customer_middleware_1.CustomerMiddleware)
            .forRoutes("reservation-room/store", "reservation-room/store/package", "reservation-room/store/deal");
    }
};
exports.ReservationRoomModule = ReservationRoomModule;
exports.ReservationRoomModule = ReservationRoomModule = __decorate([
    (0, common_1.Module)({
        imports: [
            generalOffer_entity_1.GeneralOffer,
            company_module_1.CompanyModule,
            individual_module_1.IndividualModule,
            studentActivity_module_1.StudentActivityModule,
            rooms_module_1.RoomsModule,
            assignes_general_offer_module_1.AssignGeneralOfferModule,
            generalOffer_module_1.GeneralOfferModule,
            users_module_1.UsersModule,
            (0, common_1.forwardRef)(() => assignes_packages_module_1.AssignesPackagesModule),
            (0, common_1.forwardRef)(() => deals_module_1.DealsModule),
            typeorm_1.TypeOrmModule.forFeature([reservation_room_entity_1.ReservationRoom]),
        ],
        controllers: [reservation_room_controller_1.ReservationRoomController],
        providers: [reservation_room_service_1.ReservationRoomService],
        exports: [reservation_room_service_1.ReservationRoomService],
    })
], ReservationRoomModule);
//# sourceMappingURL=reservation-room.module.js.map