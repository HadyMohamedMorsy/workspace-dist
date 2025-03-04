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
exports.SearchService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("../../../categories/category.entity");
const company_entity_1 = require("../../../companies/company.entity");
const individual_entity_1 = require("../../../individual/individual.entity");
const StudentActivity_entity_1 = require("../../../student-activity/StudentActivity.entity");
const user_entity_1 = require("../../../users/user.entity");
const typeorm_2 = require("typeorm");
let SearchService = class SearchService {
    constructor(companyRepository, studentActivityRepository, individualRepository, categoryRepository, userRepository) {
        this.companyRepository = companyRepository;
        this.studentActivityRepository = studentActivityRepository;
        this.individualRepository = individualRepository;
        this.categoryRepository = categoryRepository;
        this.userRepository = userRepository;
    }
    async search(module, query) {
        if (!query) {
            throw new Error("Query must not be empty.");
        }
        switch (module) {
            case "company":
                return await this.searchCompanies(query);
            case "studentActivity":
                return await this.searchStudentActivity(query);
            case "individual":
                return await this.searchIndividual(query);
            case "user":
                return await this.searchUser(query);
            case "category":
                return await this.searchCategory(query);
            default:
                throw new Error(`Unsupported module: ${module}`);
        }
    }
    async searchStudentActivity(query) {
        const results = await this.studentActivityRepository
            .createQueryBuilder("studentActivity")
            .where("studentActivity.name ILIKE :query", { query: `%${query}%` })
            .getMany();
        return {
            data: results.map(studentActivity => ({
                label: studentActivity.name,
                value: studentActivity.id,
                ...studentActivity,
            })),
        };
    }
    async searchCategory(query) {
        const results = await this.categoryRepository
            .createQueryBuilder("category")
            .where("category.name ILIKE :query", { query: `%${query}%` })
            .getMany();
        return {
            data: results.map(category => ({
                label: category.name,
                value: category.id,
                ...category,
            })),
        };
    }
    async searchIndividual(query) {
        const results = await this.individualRepository
            .createQueryBuilder("individual")
            .where("individual.name ILIKE :query", { query: `%${query}%` })
            .orWhere("individual.whatsApp ILIKE :query", { query: `%${query}%` })
            .orWhere("individual.number ILIKE :query", { query: `%${query}%` })
            .getMany();
        return {
            data: results.map(individual => ({
                label: individual.name,
                value: individual.id,
                ...individual,
            })),
        };
    }
    async searchUser(query) {
        const results = await this.userRepository
            .createQueryBuilder("user")
            .where("user.firstName ILIKE :query", { query: `%${query}%` })
            .orWhere("user.lastName ILIKE :query", { query: `%${query}%` })
            .orWhere("user.username ILIKE :query", { query: `%${query}%` })
            .orWhere("user.email ILIKE :query", { query: `%${query}%` })
            .orWhere("user.phone ILIKE :query", { query: `%${query}%` })
            .getMany();
        return {
            data: results.map(user => ({
                label: user.firstName + " " + user.lastName,
                value: user.id,
                ...user,
            })),
        };
    }
    async searchCompanies(query) {
        const results = await this.companyRepository
            .createQueryBuilder("company")
            .where("company.name ILIKE :query", { query: `%${query}%` })
            .orWhere("company.whatsApp ILIKE :query", { query: `%${query}%` })
            .orWhere("company.phone ILIKE :query", { query: `%${query}%` })
            .getMany();
        return {
            data: results.map(company => ({
                label: company.name,
                value: company.id,
                ...company,
            })),
        };
    }
};
exports.SearchService = SearchService;
exports.SearchService = SearchService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(company_entity_1.Company)),
    __param(1, (0, typeorm_1.InjectRepository)(StudentActivity_entity_1.StudentActivity)),
    __param(2, (0, typeorm_1.InjectRepository)(individual_entity_1.Individual)),
    __param(3, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __param(4, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], SearchService);
//# sourceMappingURL=search-list.service.js.map