"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignesPackagesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const assignes_general_offer_module_1 = require("../assignes-global-offers/assignes-general-offer.module");
const company_module_1 = require("../companies/company.module");
const generalOffer_module_1 = require("../general-offer/generalOffer.module");
const individual_module_1 = require("../individual/individual.module");
const offerpackages_module_1 = require("../offer-packages/offerpackages.module");
const reservation_room_module_1 = require("../reservations/rooms/reservation-room.module");
const customer_middleware_1 = require("../shared/middleware/customer.middleware");
const studentActivity_module_1 = require("../student-activity/studentActivity.module");
const users_module_1 = require("../users/users.module");
const assignes_packages_controller_1 = require("./assignes-packages.controller");
const assignes_packages_entity_1 = require("./assignes-packages.entity");
const assignes_packages_service_1 = require("./assignes-packages.service");
const assigness_packages_middleware_1 = require("./middleware/assigness-packages,middleware");
let AssignesPackagesModule = class AssignesPackagesModule {
    configure(consumer) {
        consumer
            .apply(assigness_packages_middleware_1.CheckActivePackagesMiddleware, customer_middleware_1.CustomerMiddleware)
            .forRoutes("assignes-package/store");
    }
};
exports.AssignesPackagesModule = AssignesPackagesModule;
exports.AssignesPackagesModule = AssignesPackagesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            company_module_1.CompanyModule,
            (0, common_1.forwardRef)(() => reservation_room_module_1.ReservationRoomModule),
            individual_module_1.IndividualModule,
            studentActivity_module_1.StudentActivityModule,
            assignes_general_offer_module_1.AssignGeneralOfferModule,
            generalOffer_module_1.GeneralOfferModule,
            offerpackages_module_1.OfferPackageModule,
            users_module_1.UsersModule,
            typeorm_1.TypeOrmModule.forFeature([assignes_packages_entity_1.AssignesPackages]),
        ],
        controllers: [assignes_packages_controller_1.AssignesPackageController],
        providers: [assignes_packages_service_1.AssignesPackagesService],
        exports: [assignes_packages_service_1.AssignesPackagesService],
    })
], AssignesPackagesModule);
//# sourceMappingURL=assignes-packages.module.js.map