import { ReservationStatus, TypeUser } from "src/shared/enum/global-enum";
export declare class CreateAssignesMembershipDto {
    customer_id: number;
    membership_id: number;
    start_date: string;
    end_date: string;
    type_user: TypeUser;
    type?: string;
    user_id?: number;
    offer_id?: number;
    used: number;
    total_used: number;
    remaining: number;
    total_price: number;
    status: ReservationStatus;
}
