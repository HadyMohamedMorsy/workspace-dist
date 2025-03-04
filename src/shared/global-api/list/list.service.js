"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ListService_lists;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListService = void 0;
const common_1 = require("@nestjs/common");
const category_service_1 = require("../../../categories/category.service");
const generalOffer_service_1 = require("../../../general-offer/generalOffer.service");
const offer_co_working_space_service_1 = require("../../../offer-co-working-space/offer-co-working-space.service");
const offerpackages_service_1 = require("../../../offer-packages/offerpackages.service");
const rooms_service_1 = require("../../../rooms/rooms.service");
const user_service_1 = require("../../../users/user.service");
const city_1 = require("./lists/city/city");
const expenses_1 = require("./lists/expenses/expenses");
const revenue_1 = require("./lists/revenue/revenue");
const roles_1 = require("./lists/roles/roles");
const type_company_1 = require("./lists/type-company/type-company");
const type_discount_1 = require("./lists/type-discount/type-discount");
const type_order_1 = require("./lists/type-order/type-order");
const type_product_1 = require("./lists/type-product/type-product");
const type_sallary_1 = require("./lists/type-sallary/type-sallary");
const type_user_1 = require("./lists/type-user/type-user");
const type_work_1 = require("./lists/type-work/type-work");
let ListService = class ListService {
    constructor(usersService, roomService, generalOfferService, categoryService, offerPackagesService, offerCoWorkingSpaceService) {
        this.usersService = usersService;
        this.roomService = roomService;
        this.generalOfferService = generalOfferService;
        this.categoryService = categoryService;
        this.offerPackagesService = offerPackagesService;
        this.offerCoWorkingSpaceService = offerCoWorkingSpaceService;
        _ListService_lists.set(this, {
            roles: {
                en: roles_1.LISTS_ROLES_EN,
                ar: roles_1.LISTS_ROLES_AR,
            },
            type_company: {
                en: type_company_1.LISTS_TYPE_COMPANY_EN,
                ar: type_company_1.LISTS_TYPE_COMPANY_AR,
            },
            type_work: {
                en: type_work_1.LIST_TYOE_WORK_EN,
                ar: type_work_1.LIST_TYOE_WORK_AR,
            },
            city: {
                en: city_1.LIST_CITY_EN,
                ar: city_1.LIST_CITY_AR,
            },
            type_order: {
                en: type_order_1.LIST_TYPE_ORDER_EN,
                ar: type_order_1.LIST_TYPE_ORDER_AR,
            },
            type_order_user: {
                en: type_user_1.LIST_TYPE_USER_EN,
                ar: type_user_1.LIST_TYPE_USER_AR,
            },
            type_sallary: {
                en: type_sallary_1.LIST_TYPE_SALLARY_EN,
                ar: type_sallary_1.LIST_TYPE_SALLARY_AR,
            },
            type_discount: {
                en: type_discount_1.LIST_TYPE_DISCOUNT_EN,
                ar: type_discount_1.LIST_TYPE_DISCOUNT_AR,
            },
            type_product: {
                en: type_product_1.LIST_TYPE_PRODUCT_EN,
                ar: type_product_1.LIST_TYPE_PRODUCT_AR,
            },
            expenses: {
                en: expenses_1.LISTS_EXPENSES_EN,
                ar: expenses_1.LISTS_EXPENSES_AR,
            },
            revenue: {
                en: revenue_1.LISTS_REVENUE_EN,
                ar: revenue_1.LISTS_REVENUE_AR,
            },
        });
    }
    async getLists(keys, lang) {
        return keys.reduce((result, key) => {
            if (__classPrivateFieldGet(this, _ListService_lists, "f")[key]?.[lang]) {
                result[key] = __classPrivateFieldGet(this, _ListService_lists, "f")[key][lang];
            }
            return result;
        }, {});
    }
    async getEntityList(module) {
        if (module === "user")
            return await this.usersService.findList();
        if (module === "room")
            return await this.roomService.findList();
        if (module === "categories")
            return await this.categoryService.findList();
        if (module === "global-offer-shared")
            return await this.generalOfferService.findShared();
        if (module === "global-offer-deskarea")
            return await this.generalOfferService.findDeskArea();
        if (module === "global-offer-membership")
            return await this.generalOfferService.findMembership();
        if (module === "global-offer-deals")
            return await this.generalOfferService.findDeals();
        if (module === "global-offer-packages")
            return await this.generalOfferService.findPackages();
        if (module === "global-offer-rooms")
            return await this.generalOfferService.findRooms();
        if (module === "membership-offer-shared")
            return await this.offerCoWorkingSpaceService.findListShared();
        if (module === "membership-offer-deskarea")
            return await this.offerCoWorkingSpaceService.findListDeskArea();
        if (module === "offer-package-offer")
            return await this.offerPackagesService.findList();
    }
    async filterRoomsCalender() {
        const rooms = await this.roomService.findList();
        return rooms.data.map((room, index) => ({
            key: index.toString(),
            label: room.name.charAt(0).toUpperCase() + room.name.slice(1),
            value: room.id,
        }));
    }
    async getPermissionTree(permissions) {
        return permissions.map((permission, resourceIndex) => ({
            key: resourceIndex.toString(),
            label: permission.resource.charAt(0).toUpperCase() + permission.resource.slice(1),
            data: `${permission.resource}`,
            children: permission.actions.map((action, actionIndex) => ({
                key: `${resourceIndex}-${actionIndex}`,
                label: action.charAt(0).toUpperCase() + action.slice(1).toLowerCase(),
                data: `${permission.resource}:${action}`,
            })),
        }));
    }
};
exports.ListService = ListService;
_ListService_lists = new WeakMap();
exports.ListService = ListService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        rooms_service_1.RoomsService,
        generalOffer_service_1.GeneralOfferService,
        category_service_1.CategoryService,
        offerpackages_service_1.OfferPackagesService,
        offer_co_working_space_service_1.OfferCoWorkingSpaceService])
], ListService);
//# sourceMappingURL=list.service.js.map