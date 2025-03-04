"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const company_module_1 = require("../companies/company.module");
const individual_module_1 = require("../individual/individual.module");
const products_module_1 = require("../products/products.module");
const filter_date_module_1 = require("../shared/filters/filter-date.module");
const customer_middleware_1 = require("../shared/middleware/customer.middleware");
const studentActivity_module_1 = require("../student-activity/studentActivity.module");
const users_module_1 = require("../users/users.module");
const order_controller_1 = require("./order.controller");
const order_entity_1 = require("./order.entity");
const orders_service_1 = require("./orders.service");
let OrdersModule = class OrdersModule {
    configure(consumer) {
        consumer.apply(customer_middleware_1.CustomerMiddleware).forRoutes("order/store");
    }
};
exports.OrdersModule = OrdersModule;
exports.OrdersModule = OrdersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            company_module_1.CompanyModule,
            individual_module_1.IndividualModule,
            studentActivity_module_1.StudentActivityModule,
            users_module_1.UsersModule,
            products_module_1.ProductsModule,
            filter_date_module_1.FilterDateModule,
            typeorm_1.TypeOrmModule.forFeature([order_entity_1.Order]),
        ],
        controllers: [order_controller_1.OrderController],
        providers: [orders_service_1.OrdersService],
        exports: [orders_service_1.OrdersService],
    })
], OrdersModule);
//# sourceMappingURL=orders.module.js.map