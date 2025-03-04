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
exports.ReturnsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const products_service_1 = require("../products/products.service");
const filter_service_1 = require("../shared/filters/filter.service");
const typeorm_2 = require("typeorm");
const returns_entity_1 = require("./returns.entity");
let ReturnsService = class ReturnsService {
    constructor(returnRepository, apiFeaturesService, productService) {
        this.returnRepository = returnRepository;
        this.apiFeaturesService = apiFeaturesService;
        this.productService = productService;
    }
    async create(createReturnsDto) {
        const product = await this.productService.findOne(createReturnsDto.product_id);
        if (!product) {
            throw new common_1.NotFoundException("Product not found");
        }
        if (product.store <= 0) {
            throw new common_1.BadRequestException("Cannot process return. Product stock is 0 or insufficient.");
        }
        if (createReturnsDto.return_qty > product.store) {
            throw new common_1.BadRequestException("Return quantity exceeds available stock.");
        }
        const newStore = product.store - createReturnsDto.return_qty;
        product.store = newStore;
        await this.productService.update({ id: product.id, store: newStore });
        const returns = this.returnRepository.create({
            ...createReturnsDto,
            product,
        });
        return await this.returnRepository.save(returns);
    }
    async findAll(filterData) {
        const queryBuilder = this.apiFeaturesService.setRepository(returns_entity_1.Returns).buildQuery(filterData);
        if (filterData.product_id) {
            queryBuilder
                .leftJoin("e.product", "ep")
                .addSelect(["ep.id", "ep.name"])
                .andWhere("ep.id = :product_id", { product_id: filterData.product_id });
        }
        if (filterData?.customFilters?.start_date && filterData?.customFilters?.end_date) {
            queryBuilder.andWhere("e.created_at BETWEEN :start_date AND :end_date", {
                start_date: filterData.customFilters.start_date,
                end_date: filterData.customFilters.end_date,
            });
        }
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        return {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
    }
    async findOne(id) {
        const returns = await this.returnRepository.findOne({ where: { id } });
        if (!returns) {
            throw new common_1.NotFoundException(`${returns} with id ${id} not found`);
        }
        return returns;
    }
    async update(updateReturnsDto) {
        const product = await this.productService.findOne(updateReturnsDto.product_id);
        if (!product) {
            throw new common_1.NotFoundException(`${product} with id ${updateReturnsDto.product_id} not found`);
        }
        if (product.store <= 0) {
            throw new common_1.BadRequestException("Cannot process return. Product stock is 0 or insufficient.");
        }
        if (updateReturnsDto.return_qty > product.store) {
            throw new common_1.BadRequestException("Return quantity exceeds available stock.");
        }
        const newStore = product.store - updateReturnsDto.return_qty;
        product.store = newStore;
        await this.productService.update({ id: product.id, store: newStore });
        await this.returnRepository.update(updateReturnsDto.id, {
            ...updateReturnsDto,
            product,
        });
        return this.returnRepository.findOne({ where: { id: updateReturnsDto.id } });
    }
    async remove(id) {
        await this.returnRepository.delete(id);
    }
};
exports.ReturnsService = ReturnsService;
exports.ReturnsService = ReturnsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(returns_entity_1.Returns)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        filter_service_1.APIFeaturesService,
        products_service_1.ProductService])
], ReturnsService);
//# sourceMappingURL=returns.service.js.map