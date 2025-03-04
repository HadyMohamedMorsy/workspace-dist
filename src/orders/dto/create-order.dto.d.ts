import { TypeOrder, TypeUser } from "src/shared/enum/global-enum";
export declare class CreateOrderDto {
    type_order: TypeOrder;
    type_user: TypeUser;
    order_number: string;
    customer_id: number;
    order_items: OrderItemDto[];
}
export declare class OrderItemDto {
    product: any;
    quantity: number;
}
