import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { OrdersService } from "./orders.service";
export declare class OrderController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    findAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findIndividuaOrderlAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findCompanyOrderlAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findStudentOrderlAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findUserOrderlAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    create(createOrderDto: CreateOrderDto, req: Request): Promise<import("./order.entity").Order>;
    update(updateOrderDto: UpdateOrderDto): Promise<import("./order.entity").Order>;
    remove(bodyDelete: {
        id: number;
    }): Promise<void>;
}
