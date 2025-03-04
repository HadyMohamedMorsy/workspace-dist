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
exports.PurchasesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const products_service_1 = require("../products/products.service");
const filter_service_1 = require("../shared/filters/filter.service");
const typeorm_2 = require("typeorm");
const purchases_entity_1 = require("./purchases.entity");
let PurchasesService = class PurchasesService {
    constructor(purchasesRepository, apiFeaturesService, productService) {
        this.purchasesRepository = purchasesRepository;
        this.apiFeaturesService = apiFeaturesService;
        this.productService = productService;
    }
    async create(createPurchasDto) {
        const product = await this.productService.findOne(createPurchasDto.product_id);
        const newStore = (product.store || 0) + createPurchasDto.purshase_qty;
        product.store = newStore;
        product.purshase_price = createPurchasDto.purshase_price;
        await this.productService.update({
            id: product.id,
            store: newStore,
            purshase_price: createPurchasDto.purshase_price,
        });
        const purchase = this.purchasesRepository.create({
            ...createPurchasDto,
            product,
        });
        return await this.purchasesRepository.save(purchase);
    }
    async findAll(filterData) {
        const queryBuilder = this.apiFeaturesService.setRepository(purchases_entity_1.Purchases).buildQuery(filterData);
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
        const purshase = await this.purchasesRepository.findOne({ where: { id } });
        if (!purshase) {
            throw new common_1.NotFoundException(`${purshase} with id ${id} not found`);
        }
        return purshase;
    }
    async update(updatePurchasDto) {
        const product = await this.productService.findOne(updatePurchasDto.product_id);
        if (!product) {
            throw new common_1.NotFoundException(`${product} with id ${updatePurchasDto.product_id} not found`);
        }
        if (product.store <= 0) {
            throw new common_1.BadRequestException("Cannot process return. Product stock is 0 or insufficient.");
        }
        if (updatePurchasDto.purshase_qty > product.store) {
            throw new common_1.BadRequestException("Return quantity exceeds available stock.");
        }
        const newStore = (product.store || 0) + updatePurchasDto.purshase_qty;
        product.store = newStore;
        product.purshase_price = updatePurchasDto.purshase_price;
        await this.productService.update({
            id: product.id,
            store: newStore,
            purshase_price: updatePurchasDto.purshase_price,
        });
        await this.purchasesRepository.update(updatePurchasDto.id, {
            ...updatePurchasDto,
            product,
        });
        return this.purchasesRepository.findOne({ where: { id: updatePurchasDto.id } });
    }
    async remove(id) {
        await this.purchasesRepository.delete(id);
    }
};
exports.PurchasesService = PurchasesService;
exports.PurchasesService = PurchasesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(purchases_entity_1.Purchases)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        filter_service_1.APIFeaturesService,
        products_service_1.ProductService])
], PurchasesService);
//# sourceMappingURL=purchases.service.js.map