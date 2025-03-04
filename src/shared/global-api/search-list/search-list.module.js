"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("../../../categories/category.entity");
const company_entity_1 = require("../../../companies/company.entity");
const individual_entity_1 = require("../../../individual/individual.entity");
const StudentActivity_entity_1 = require("../../../student-activity/StudentActivity.entity");
const user_entity_1 = require("../../../users/user.entity");
const search_controller_1 = require("./search-controller");
const search_list_service_1 = require("./search-list.service");
let SearchModule = class SearchModule {
};
exports.SearchModule = SearchModule;
exports.SearchModule = SearchModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([StudentActivity_entity_1.StudentActivity, company_entity_1.Company, individual_entity_1.Individual, category_entity_1.Category, user_entity_1.User])],
        controllers: [search_controller_1.SearchController],
        providers: [search_list_service_1.SearchService],
        exports: [search_list_service_1.SearchService],
    })
], SearchModule);
//# sourceMappingURL=search-list.module.js.map