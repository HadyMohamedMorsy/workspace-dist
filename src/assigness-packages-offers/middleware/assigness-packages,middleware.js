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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckActivePackagesMiddleware = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const global_enum_1 = require("../../shared/enum/global-enum");
const typeorm_2 = require("typeorm");
const assignes_packages_entity_1 = require("../assignes-packages.entity");
let CheckActivePackagesMiddleware = class CheckActivePackagesMiddleware {
    constructor(assignesPackagesRepositry) {
        this.assignesPackagesRepositry = assignesPackagesRepositry;
    }
    async use(req, res, next) {
        const { customer_id, package_id, type_user } = req.body;
        if (!["individual", "company", "studentActivity"].includes(type_user)) {
            throw new Error("Invalid customer type");
        }
        let customerCondition;
        switch (type_user) {
            case "individual":
                customerCondition = { individual: { id: customer_id } };
                break;
            case "company":
                customerCondition = { company: { id: customer_id } };
                break;
            case "studentActivity":
                customerCondition = { studentActivity: { id: customer_id } };
                break;
        }
        const existingOfferPackage = await this.assignesPackagesRepositry.findOne({
            where: {
                ...customerCondition,
                packages: { id: package_id },
                status: global_enum_1.ReservationStatus.ACTIVE,
            },
        });
        if (existingOfferPackage) {
            throw new common_1.ConflictException("An active offer Package already exists for this customer and offer Package.");
        }
        next();
    }
};
exports.CheckActivePackagesMiddleware = CheckActivePackagesMiddleware;
exports.CheckActivePackagesMiddleware = CheckActivePackagesMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(assignes_packages_entity_1.AssignesPackages)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CheckActivePackagesMiddleware);
//# sourceMappingURL=assigness-packages,middleware.js.map