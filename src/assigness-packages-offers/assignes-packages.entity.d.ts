import { AssignGeneralOffer } from "src/assignes-global-offers/assignes-general-offer.entity";
import { Company } from "src/companies/company.entity";
import { Individual } from "src/individual/individual.entity";
import { OfferPackages } from "src/offer-packages/offer-package.entity";
import { ReservationRoom } from "src/reservations/rooms/reservation-room.entity";
import { ReservationStatus } from "src/shared/enum/global-enum";
import { StudentActivity } from "src/student-activity/StudentActivity.entity";
import { User } from "src/users/user.entity";
export declare class AssignesPackages {
    id: number;
    status: ReservationStatus;
    individual: Individual;
    company: Company;
    studentActivity: StudentActivity;
    packages: OfferPackages;
    reservationRooms: ReservationRoom;
    assignGeneralOffer: AssignGeneralOffer;
    start_date: Date;
    end_date: Date;
    used: number;
    total_used: number;
    remaining: number;
    total_price: number;
    createdBy: User;
    created_at: Date;
    updated_at: Date;
}
