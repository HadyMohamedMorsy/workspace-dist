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
exports.OrdersService = exports.orderItem = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const products_service_1 = require("../products/products.service");
const filter_service_1 = require("../shared/filters/filter.service");
const typeorm_2 = require("typeorm");
const order_entity_1 = require("./order.entity");
class orderItem {
}
exports.orderItem = orderItem;
let OrdersService = class OrdersService {
    constructor(orderRepository, apiFeaturesService, productService) {
        this.orderRepository = orderRepository;
        this.apiFeaturesService = apiFeaturesService;
        this.productService = productService;
    }
    async create(createOrderDto, reqBody) {
        const totalOrder = createOrderDto.order_items.reduce((total, item) => {
            return total + this.getOrderItemTotalPrice(item, createOrderDto.type_order);
        }, 0);
        const orderPrice = createOrderDto.order_items.reduce((total, item) => {
            return total + this.getOrderItemTotalPrice(item, "PAID");
        }, 0);
        const payload = {
            ...createOrderDto,
            total_order: totalOrder,
            order_price: orderPrice,
            createdBy: reqBody.createdBy,
            [createOrderDto.type_user]: reqBody.customer,
            order_items: createOrderDto.order_items.map(item => {
                return {
                    product: item.product.id,
                    quantity: item.quantity,
                };
            }),
        };
        const order = this.orderRepository.create(payload);
        const orderSaved = await this.orderRepository.save(order);
        if (orderSaved) {
            const updateProducts = createOrderDto.order_items.map(item => {
                const { quantity, product } = item;
                const { store, ...otherItem } = product;
                return {
                    store: store - quantity,
                    ...otherItem,
                };
            });
            updateProducts.forEach(async (product) => {
                await this.productService.update(product);
            });
        }
        return orderSaved;
    }
    async findAll(filterData) {
        const queryBuilder = this.apiFeaturesService.setRepository(order_entity_1.Order).buildQuery(filterData);
        queryBuilder
            .leftJoin("e.individual", "ep")
            .addSelect(["ep.id", "ep.name", "ep.whatsApp"])
            .leftJoin("e.company", "ec")
            .addSelect(["ec.id", "ec.phone", "ec.name"])
            .leftJoin("e.studentActivity", "es")
            .addSelect(["es.id", "es.name", "es.unviresty"])
            .leftJoin("e.createdBy", "ecr")
            .addSelect(["ecr.id", "ecr.firstName", "ecr.lastName"]);
        if (filterData.search.value) {
            queryBuilder.andWhere(`ep.name LIKE :name OR ec.name LIKE :name OR es.name LIKE :name OR ecr.firstName LIKE :name`, {
                name: `%${filterData.search.value}%`,
            });
            queryBuilder.andWhere(`ec.whatsApp LIKE :number OR ep.whatsApp LIKE :number`, {
                number: `%${filterData.search.value}%`,
            });
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
    async findOrderByUserAll(filterData) {
        const queryBuilder = this.apiFeaturesService.setRepository(order_entity_1.Order).buildQuery(filterData);
        queryBuilder
            .leftJoin("e.createdBy", "ec")
            .addSelect(["ec.id", "ec.firstName", "ec.lastName"])
            .andWhere("ec.id = :user_id", { user_id: filterData.user_id });
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        return {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
    }
    async findOrderByIndividualAll(filterData) {
        const queryBuilder = this.apiFeaturesService.setRepository(order_entity_1.Order).buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.individual", "ei")
            .andWhere("ei.id = :individual_id", { individual_id: filterData.individual_id })
            .leftJoin("e.createdBy", "ec")
            .addSelect(["ec.id", "ec.firstName", "ec.lastName"]);
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        return {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
    }
    async findOrderByComapnyAll(filterData) {
        const queryBuilder = this.apiFeaturesService.setRepository(order_entity_1.Order).buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.company", "ec")
            .andWhere("ec.id = :company_id", { company_id: filterData.company_id })
            .leftJoin("e.createdBy", "ecr")
            .addSelect(["ecr.id", "ecr.firstName", "ecr.lastName"]);
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        return {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
    }
    async findOrderByStudentActivityAll(filterData) {
        const queryBuilder = this.apiFeaturesService.setRepository(order_entity_1.Order).buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.studentActivity", "es")
            .andWhere("es.id = :studentActivity_id", {
            studentActivity_id: filterData.studentActivity_id,
        })
            .leftJoin("e.createdBy", "ec")
            .addSelect(["ec.id", "ec.firstName", "ec.lastName"]);
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        return {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
    }
    async findOne(id) {
        const order = await this.orderRepository.findOne({ where: { id } });
        if (!order) {
            throw new common_1.NotFoundException(`order is not found`);
        }
        return order;
    }
    async findMany(ids) {
        const orders = await this.orderRepository.find({
            where: {
                id: (0, typeorm_2.In)(ids),
            },
        });
        if (!orders) {
            throw new common_1.NotFoundException(`orders is  not found`);
        }
        return orders;
    }
    async update(updateOrderDto) {
        await this.orderRepository.update(updateOrderDto.id, updateOrderDto);
        return this.orderRepository.findOne({ where: { id: updateOrderDto.id } });
    }
    async remove(orderId) {
        await this.orderRepository.delete(orderId);
    }
    getOrderItemTotalPrice(item, key) {
        let quantity = 0;
        let accesKey = "";
        switch (key) {
            case "PAID":
            case "HOLD":
                quantity = item.quantity;
                accesKey = "selling_price";
                break;
            case "COST":
                quantity = item.quantity;
                accesKey = "purshase_price";
                break;
            case "FREE":
                quantity = 0;
                accesKey = "selling_price";
                break;
            default:
                quantity = item.quantity;
                accesKey = "selling_price";
                break;
        }
        return item.product[accesKey] * quantity;
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        filter_service_1.APIFeaturesService,
        products_service_1.ProductService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map