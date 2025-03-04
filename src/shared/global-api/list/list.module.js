"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listModule = void 0;
const common_1 = require("@nestjs/common");
const category_module_1 = require("../../../categories/category.module");
const generalOffer_module_1 = require("../../../general-offer/generalOffer.module");
const offer_co_working_space_module_1 = require("../../../offer-co-working-space/offer-co-working-space.module");
const offerpackages_module_1 = require("../../../offer-packages/offerpackages.module");
const rooms_module_1 = require("../../../rooms/rooms.module");
const users_module_1 = require("../../../users/users.module");
const list_controller_1 = require("./list-controller");
const list_service_1 = require("./list.service");
let listModule = class listModule {
};
exports.listModule = listModule;
exports.listModule = listModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            offerpackages_module_1.OfferPackageModule,
            category_module_1.CategoryModule,
            offer_co_working_space_module_1.OfferCoWorkingSpaceModule,
            generalOffer_module_1.GeneralOfferModule,
            rooms_module_1.RoomsModule,
        ],
        controllers: [list_controller_1.ListController],
        providers: [list_service_1.ListService],
        exports: [list_service_1.ListService],
    })
], listModule);
//# sourceMappingURL=list.module.js.map