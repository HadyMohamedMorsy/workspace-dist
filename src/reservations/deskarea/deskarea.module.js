"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeskareaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const assignes_general_offer_module_1 = require("../../assignes-global-offers/assignes-general-offer.module");
const assignes_membership_module_1 = require("../../assignes-memberships/assignes-membership.module");
const company_module_1 = require("../../companies/company.module");
const generalOffer_module_1 = require("../../general-offer/generalOffer.module");
const settings_module_1 = require("../../general-settings/settings.module");
const individual_module_1 = require("../../individual/individual.module");
const customer_middleware_1 = require("../../shared/middleware/customer.middleware");
const studentActivity_module_1 = require("../../student-activity/studentActivity.module");
const users_module_1 = require("../../users/users.module");
const deskarea_controller_1 = require("./deskarea.controller");
const deskarea_entity_1 = require("./deskarea.entity");
const deskarea_service_1 = require("./deskarea.service");
let DeskareaModule = class DeskareaModule {
    configure(consumer) {
        consumer.apply(customer_middleware_1.CustomerMiddleware).forRoutes("deskarea/store");
    }
};
exports.DeskareaModule = DeskareaModule;
exports.DeskareaModule = DeskareaModule = __decorate([
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
            typeorm_1.TypeOrmModule.forFeature([deskarea_entity_1.Deskarea]),
        ],
        controllers: [deskarea_controller_1.DeskareaController],
        providers: [deskarea_service_1.DeskareaService],
        exports: [deskarea_service_1.DeskareaService],
    })
], DeskareaModule);
//# sourceMappingURL=deskarea.module.js.map