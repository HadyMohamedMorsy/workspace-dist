"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const assignes_general_offer_module_1 = require("../assignes-global-offers/assignes-general-offer.module");
const company_module_1 = require("../companies/company.module");
const generalOffer_module_1 = require("../general-offer/generalOffer.module");
const individual_module_1 = require("../individual/individual.module");
const reservation_room_module_1 = require("../reservations/rooms/reservation-room.module");
const rooms_module_1 = require("../rooms/rooms.module");
const customer_middleware_1 = require("../shared/middleware/customer.middleware");
const studentActivity_module_1 = require("../student-activity/studentActivity.module");
const users_module_1 = require("../users/users.module");
const deals_controller_1 = require("./deals.controller");
const deals_entity_1 = require("./deals.entity");
const deals_service_1 = require("./deals.service");
let DealsModule = class DealsModule {
    configure(consumer) {
        consumer.apply(customer_middleware_1.CustomerMiddleware).forRoutes("deals/store");
    }
};
exports.DealsModule = DealsModule;
exports.DealsModule = DealsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            rooms_module_1.RoomsModule,
            (0, common_1.forwardRef)(() => reservation_room_module_1.ReservationRoomModule),
            individual_module_1.IndividualModule,
            company_module_1.CompanyModule,
            assignes_general_offer_module_1.AssignGeneralOfferModule,
            generalOffer_module_1.GeneralOfferModule,
            studentActivity_module_1.StudentActivityModule,
            users_module_1.UsersModule,
            typeorm_1.TypeOrmModule.forFeature([deals_entity_1.Deals]),
        ],
        controllers: [deals_controller_1.DealsController],
        providers: [deals_service_1.DealsService],
        exports: [deals_service_1.DealsService],
    })
], DealsModule);
//# sourceMappingURL=deals.module.js.map