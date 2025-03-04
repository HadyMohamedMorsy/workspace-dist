"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralOfferModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const generalOffer_controller_1 = require("./generalOffer.controller");
const generalOffer_entity_1 = require("./generalOffer.entity");
const generalOffer_service_1 = require("./generalOffer.service");
let GeneralOfferModule = class GeneralOfferModule {
};
exports.GeneralOfferModule = GeneralOfferModule;
exports.GeneralOfferModule = GeneralOfferModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([generalOffer_entity_1.GeneralOffer])],
        controllers: [generalOffer_controller_1.GeneralOfferController],
        providers: [generalOffer_service_1.GeneralOfferService],
        exports: [generalOffer_service_1.GeneralOfferService],
    })
], GeneralOfferModule);
//# sourceMappingURL=generalOffer.module.js.map