"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignesMembershipModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const assignes_general_offer_module_1 = require("../assignes-global-offers/assignes-general-offer.module");
const company_module_1 = require("../companies/company.module");
const generalOffer_module_1 = require("../general-offer/generalOffer.module");
const individual_module_1 = require("../individual/individual.module");
const offer_co_working_space_module_1 = require("../offer-co-working-space/offer-co-working-space.module");
const deskarea_module_1 = require("../reservations/deskarea/deskarea.module");
const shared_module_1 = require("../reservations/shared/shared.module");
const customer_middleware_1 = require("../shared/middleware/customer.middleware");
const studentActivity_module_1 = require("../student-activity/studentActivity.module");
const users_module_1 = require("../users/users.module");
const assignes_membership_controller_1 = require("./assignes-membership.controller");
const assignes_membership_entity_1 = require("./assignes-membership.entity");
const assignes_membership_service_1 = require("./assignes-membership.service");
const check_active_assigness_membership_1 = require("./middleware/check-active-assigness-membership");
let AssignesMembershipModule = class AssignesMembershipModule {
    configure(consumer) {
        consumer
            .apply(check_active_assigness_membership_1.CheckActiveMembershipMiddleware, customer_middleware_1.CustomerMiddleware)
            .forRoutes("assignes-membership/store");
    }
};
exports.AssignesMembershipModule = AssignesMembershipModule;
exports.AssignesMembershipModule = AssignesMembershipModule = __decorate([
    (0, common_1.Module)({
        imports: [
            offer_co_working_space_module_1.OfferCoWorkingSpaceModule,
            (0, common_1.forwardRef)(() => shared_module_1.SharedModule),
            (0, common_1.forwardRef)(() => deskarea_module_1.DeskareaModule),
            individual_module_1.IndividualModule,
            company_module_1.CompanyModule,
            assignes_general_offer_module_1.AssignGeneralOfferModule,
            generalOffer_module_1.GeneralOfferModule,
            studentActivity_module_1.StudentActivityModule,
            users_module_1.UsersModule,
            typeorm_1.TypeOrmModule.forFeature([assignes_membership_entity_1.AssignesMembership]),
        ],
        controllers: [assignes_membership_controller_1.AssignesMembershipController],
        providers: [assignes_membership_service_1.AssignesMembershipService],
        exports: [assignes_membership_service_1.AssignesMembershipService],
    })
], AssignesMembershipModule);
//# sourceMappingURL=assignes-membership.module.js.map