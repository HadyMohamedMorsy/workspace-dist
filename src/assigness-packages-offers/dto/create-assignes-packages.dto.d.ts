import { ReservationStatus, TypeUser } from "src/shared/enum/global-enum";
export declare class CreateAssignesPackageDto {
    customer_id: number;
    package_id: number;
    offer_id?: number;
    type_user: TypeUser;
    start_date: string;
    end_date: string;
    used: number;
    total_used: number;
    remaining: number;
    total_price: number;
    user_id?: number;
    status: ReservationStatus;
}
