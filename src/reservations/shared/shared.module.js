"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const assignes_general_offer_module_1 = require("../../assignes-global-offers/assignes-general-offer.module");
const assignes_membership_module_1 = require("../../assignes-memberships/assignes-membership.module");
const generalOffer_module_1 = require("../../general-offer/generalOffer.module");
const settings_module_1 = require("../../general-settings/settings.module");
const individual_module_1 = require("../../individual/individual.module");
const customer_middleware_1 = require("../../shared/middleware/customer.middleware");
const studentActivity_module_1 = require("../../student-activity/studentActivity.module");
const users_module_1 = require("../../users/users.module");
const company_module_1 = require("./../../companies/company.module");
const shared_controller_1 = require("./shared.controller");
const shared_entity_1 = require("./shared.entity");
const shared_service_1 = require("./shared.service");
let SharedModule = class SharedModule {
    configure(consumer) {
        consumer.apply(customer_middleware_1.CustomerMiddleware).forRoutes("shared/store", "shared/store/reservation");
    }
};
exports.SharedModule = SharedModule;
exports.SharedModule = SharedModule = __decorate([
    (0, common_1.Module)({
        imports: [
            (0, common_1.forwardRef)(() => assignes_membership_module_1.AssignesMembershipModule),
            company_module_1.CompanyModule,
            individual_module_1.IndividualModule,
            settings_module_1.GeneralSettingsModule,
            studentActivity_module_1.StudentActivityModule,
            assignes_general_offer_module_1.AssignGeneralOfferModule,
            generalOffer_module_1.GeneralOfferModule,
            users_module_1.UsersModule,
            typeorm_1.TypeOrmModule.forFeature([shared_entity_1.Shared]),
        ],
        controllers: [shared_controller_1.SharedController],
        providers: [shared_service_1.SharedService],
        exports: [shared_service_1.SharedService],
    })
], SharedModule);
//# sourceMappingURL=shared.module.js.map