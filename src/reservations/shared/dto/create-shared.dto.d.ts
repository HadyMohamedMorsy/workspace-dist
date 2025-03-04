import { ReservationStatus, TimeOfDay, TypeUser } from "src/shared/enum/global-enum";
export declare class CreateSharedDto {
    selected_day: string;
    start_hour: number;
    start_minute: number;
    start_time: TimeOfDay;
    customer_id: number;
    offer_id: number;
    setting_id: number;
    membership_id: number;
    type_user: TypeUser;
    note: string;
    status: ReservationStatus;
}
