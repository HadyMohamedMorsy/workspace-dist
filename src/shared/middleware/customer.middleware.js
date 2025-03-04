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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerMiddleware = void 0;
const common_1 = require("@nestjs/common");
const company_service_1 = require("../../companies/company.service");
const individual_service_1 = require("../../individual/individual.service");
const studentActivity_service_1 = require("../../student-activity/studentActivity.service");
const user_service_1 = require("../../users/user.service");
const global_enum_1 = require("../enum/global-enum");
let CustomerMiddleware = class CustomerMiddleware {
    constructor(userService, individualService, companyService, studentActivityService) {
        this.userService = userService;
        this.individualService = individualService;
        this.companyService = companyService;
        this.studentActivityService = studentActivityService;
    }
    async use(req, res, next) {
        const { type_user, customer_id } = req.body;
        let customer;
        switch (type_user) {
            case global_enum_1.TypeUser.Individual:
                customer = await this.individualService.findOne(customer_id);
                break;
            case global_enum_1.TypeUser.Company:
                customer = await this.companyService.findOne(customer_id);
                break;
            case global_enum_1.TypeUser.StudentActivity:
                customer = await this.studentActivityService.findOne(customer_id);
                break;
            case global_enum_1.TypeUser.User:
                customer = await this.userService.findOneById(customer_id);
                break;
            default:
                throw new Error("Invalid user type");
        }
        req["customer"] = customer;
        next();
    }
};
exports.CustomerMiddleware = CustomerMiddleware;
exports.CustomerMiddleware = CustomerMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        individual_service_1.IndividualService,
        company_service_1.CompanyService,
        studentActivity_service_1.StudentActivityService])
], CustomerMiddleware);
//# sourceMappingURL=customer.middleware.js.map