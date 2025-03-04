"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferPackageModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rooms_module_1 = require("../rooms/rooms.module");
const offer_package_entity_1 = require("./offer-package.entity");
const offerpackages_controller_1 = require("./offerpackages.controller");
const offerpackages_service_1 = require("./offerpackages.service");
let OfferPackageModule = class OfferPackageModule {
};
exports.OfferPackageModule = OfferPackageModule;
exports.OfferPackageModule = OfferPackageModule = __decorate([
    (0, common_1.Module)({
        imports: [rooms_module_1.RoomsModule, typeorm_1.TypeOrmModule.forFeature([offer_package_entity_1.OfferPackages])],
        controllers: [offerpackages_controller_1.OfferPackagesController],
        providers: [offerpackages_service_1.OfferPackagesService],
        exports: [offerpackages_service_1.OfferPackagesService],
    })
], OfferPackageModule);
//# sourceMappingURL=offerpackages.module.js.map