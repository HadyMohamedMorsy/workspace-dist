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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const products_service_1 = require("../products/products.service");
const filter_service_1 = require("../shared/filters/filter.service");
const typeorm_2 = require("typeorm");
const category_entity_1 = require("./category.entity");
let CategoryService = class CategoryService {
    constructor(categoryRepository, apiFeaturesService, productService) {
        this.categoryRepository = categoryRepository;
        this.apiFeaturesService = apiFeaturesService;
        this.productService = productService;
    }
    async create(createCategoryDto) {
        const category = this.categoryRepository.create(createCategoryDto);
        return await this.categoryRepository.save(category);
    }
    async findAll(filterData) {
        const queryBuilder = this.apiFeaturesService.setRepository(category_entity_1.Category).buildQuery(filterData);
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        return {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
    }
    async findlist() {
        const categories = await this.categoryRepository.find();
        return {
            data: categories,
        };
    }
    async findOne(filterData) {
        const category = await this.categoryRepository.findOne({
            where: { id: filterData.category_id },
        });
        if (!category) {
            throw new common_1.NotFoundException(`category not exist`);
        }
        return await this.productService.getProductsRelatedCategory(filterData);
    }
    async findList() {
        const categories = await this.categoryRepository.find({});
        return {
            data: categories,
        };
    }
    async findMany(ids) {
        const categories = await this.categoryRepository.find({
            where: {
                id: (0, typeorm_2.In)(ids),
            },
        });
        if (!categories) {
            throw new common_1.NotFoundException(`${categories} with id ${ids} not found`);
        }
        return categories;
    }
    async update(updateCategoryDto) {
        await this.categoryRepository.update(updateCategoryDto.id, updateCategoryDto);
        return this.categoryRepository.findOne({ where: { id: updateCategoryDto.id } });
    }
    async remove(categoryId) {
        await this.categoryRepository.delete(categoryId);
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => products_service_1.ProductService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        filter_service_1.APIFeaturesService,
        products_service_1.ProductService])
], CategoryService);
//# sourceMappingURL=category.service.js.map