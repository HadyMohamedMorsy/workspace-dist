"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignGeneralOfferModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const company_module_1 = require("../companies/company.module");
const generalOffer_module_1 = require("../general-offer/generalOffer.module");
const individual_module_1 = require("../individual/individual.module");
const customer_middleware_1 = require("../shared/middleware/customer.middleware");
const studentActivity_module_1 = require("../student-activity/studentActivity.module");
const users_module_1 = require("../users/users.module");
const assignes_general_offer_controller_1 = require("./assignes-general-offer.controller");
const assignes_general_offer_entity_1 = require("./assignes-general-offer.entity");
const assignes_general_offer_service_1 = require("./assignes-general-offer.service");
let AssignGeneralOfferModule = class AssignGeneralOfferModule {
    configure(consumer) {
        consumer.apply(customer_middleware_1.CustomerMiddleware).forRoutes("assign-general-offer/store");
    }
};
exports.AssignGeneralOfferModule = AssignGeneralOfferModule;
exports.AssignGeneralOfferModule = AssignGeneralOfferModule = __decorate([
    (0, common_1.Module)({
        imports: [
            generalOffer_module_1.GeneralOfferModule,
            individual_module_1.IndividualModule,
            company_module_1.CompanyModule,
            studentActivity_module_1.StudentActivityModule,
            users_module_1.UsersModule,
            typeorm_1.TypeOrmModule.forFeature([assignes_general_offer_entity_1.AssignGeneralOffer]),
        ],
        controllers: [assignes_general_offer_controller_1.AssignGeneralOfferController],
        providers: [assignes_general_offer_service_1.AssignGeneralOfferservice],
        exports: [assignes_general_offer_service_1.AssignGeneralOfferservice],
    })
], AssignGeneralOfferModule);
//# sourceMappingURL=assignes-general-offer.module.js.map