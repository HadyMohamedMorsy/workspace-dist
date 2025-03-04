import { ReservationStatus, TypeUser } from "src/shared/enum/global-enum";
export declare class CreateDealsDto {
    room_id: number;
    offer_id?: number;
    user_id?: number;
    hours: number;
    start_date: string;
    end_date: string;
    total: number;
    price_hour: number;
    type_user: TypeUser;
    used: number;
    total_used: number;
    remaining: number;
    customer_id: number;
    status: ReservationStatus;
}
