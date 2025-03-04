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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_service_1 = require("../categories/category.service");
const filter_service_1 = require("../shared/filters/filter.service");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./product.entity");
let ProductService = class ProductService {
    constructor(productRepository, apiFeaturesService, categoryService) {
        this.productRepository = productRepository;
        this.apiFeaturesService = apiFeaturesService;
        this.categoryService = categoryService;
    }
    async create(createProductDto) {
        const categories = await this.categoryService.findMany(createProductDto.category_ids);
        if (!categories) {
            throw new common_1.NotFoundException(`categories with id ${createProductDto.category_ids} not found`);
        }
        const product = this.productRepository.create({
            ...createProductDto,
            categories,
        });
        return await this.productRepository.save(product);
    }
    async getProductsRelatedCategory(filterData) {
        const queryBuilder = this.productRepository
            .createQueryBuilder("product")
            .innerJoin("product.categories", "category", "category.id = :categoryId", {
            categoryId: filterData.category_id,
        });
        if (filterData.search) {
            queryBuilder.andWhere("(product.name LIKE :searchTerm OR product.code LIKE :searchTerm)", {
                searchTerm: `%${filterData.search}%`,
            });
        }
        const [products, totalProducts] = await queryBuilder
            .skip(filterData.start)
            .take(filterData.length)
            .getManyAndCount();
        return {
            data: products,
            recordsFiltered: products.length,
            totalRecords: +totalProducts,
        };
    }
    async findAll(filterData) {
        const queryBuilder = this.apiFeaturesService.setRepository(product_entity_1.Product).buildQuery(filterData);
        queryBuilder.leftJoin("e.categories", "ep").addSelect(["ep.id", "ep.name"]);
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        return {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
    }
    async findOne(id) {
        const product = await this.productRepository.findOne({ where: { id } });
        if (!product) {
            throw new common_1.NotFoundException(`${product} with id ${id} not found`);
        }
        return product;
    }
    async update(updateProductDto) {
        await this.productRepository.update(updateProductDto.id, updateProductDto);
        return this.productRepository.findOne({ where: { id: updateProductDto.id } });
    }
    async updateWithManyRelation(updateProductDto) {
        const categories = await this.categoryService.findMany(updateProductDto.category_ids);
        if (!categories) {
            throw new common_1.NotFoundException(`categories with id ${updateProductDto.category_ids} not found`);
        }
        const existingProduct = await this.findOne(updateProductDto.id);
        existingProduct.categories = categories;
        existingProduct.name = updateProductDto.name;
        existingProduct.code = updateProductDto.code;
        existingProduct.selling_price = updateProductDto.selling_price;
        existingProduct.store = updateProductDto.store;
        existingProduct.featured_image = updateProductDto.featured_image;
        return await this.productRepository.save(existingProduct);
    }
    async remove(productId) {
        await this.productRepository.delete(productId);
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => category_service_1.CategoryService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        filter_service_1.APIFeaturesService,
        category_service_1.CategoryService])
], ProductService);
//# sourceMappingURL=products.service.js.map