import { ReservationStatus, TimeOfDay, TypeUser } from "src/shared/enum/global-enum";
export declare class CreateReservationRoomDto {
    selected_day: string;
    start_hour: number;
    start_minute: number;
    start_time: TimeOfDay;
    end_hour: number;
    end_minute: number;
    end_time: TimeOfDay;
    customer_id: number;
    room_id: number;
    offer_id: number;
    deal_id: number;
    package_id: number;
    type_user: TypeUser;
    price: number;
    note: string;
    status: ReservationStatus;
}
