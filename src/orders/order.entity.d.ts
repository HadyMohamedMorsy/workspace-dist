import { Company } from "src/companies/company.entity";
import { Individual } from "src/individual/individual.entity";
import { TypeOrder, TypeUser } from "src/shared/enum/global-enum";
import { StudentActivity } from "src/student-activity/StudentActivity.entity";
import { User } from "src/users/user.entity";
export declare class Order {
    id: number;
    order_number: string;
    type_order: TypeOrder;
    type_user: TypeUser;
    individual: Individual;
    company: Company;
    studentActivity: StudentActivity;
    employed: User;
    order_price: number;
    total_order: number;
    order_items: OrderItemDto[] | null;
    createdBy: User;
    created_at: Date;
    updated_at: Date;
}
export declare class OrderItemDto {
    product: number;
    quantity: number;
}
