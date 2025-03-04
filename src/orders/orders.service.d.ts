import { Company } from "src/companies/company.entity";
import { Individual } from "src/individual/individual.entity";
import { Product } from "src/products/product.entity";
import { ProductService } from "src/products/products.service";
import { APIFeaturesService } from "src/shared/filters/filter.service";
import { StudentActivity } from "src/student-activity/StudentActivity.entity";
import { User } from "src/users/user.entity";
import { Repository } from "typeorm";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { Order } from "./order.entity";
export declare class orderItem {
    product: Product;
    quantity: number;
}
export declare class OrdersService {
    private orderRepository;
    protected readonly apiFeaturesService: APIFeaturesService;
    protected readonly productService: ProductService;
    constructor(orderRepository: Repository<Order>, apiFeaturesService: APIFeaturesService, productService: ProductService);
    create(createOrderDto: CreateOrderDto, reqBody: {
        customer: Individual | Company | StudentActivity;
        createdBy: User;
    }): Promise<Order>;
    findAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findOrderByUserAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findOrderByIndividualAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findOrderByComapnyAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findOrderByStudentActivityAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findOne(id: number): Promise<Order>;
    findMany(ids: number[]): Promise<Order[]>;
    update(updateOrderDto: UpdateOrderDto): Promise<Order>;
    remove(orderId: number): Promise<void>;
    getOrderItemTotalPrice(item: any, key: string): number;
}
