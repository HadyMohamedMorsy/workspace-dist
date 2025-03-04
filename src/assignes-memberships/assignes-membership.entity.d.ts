import { AssignGeneralOffer } from "src/assignes-global-offers/assignes-general-offer.entity";
import { Company } from "src/companies/company.entity";
import { Individual } from "src/individual/individual.entity";
import { CoWorkingSpace } from "src/offer-co-working-space/offer-co-working-space.entity";
import { Deskarea } from "src/reservations/deskarea/deskarea.entity";
import { Shared } from "src/reservations/shared/shared.entity";
import { ReservationStatus } from "src/shared/enum/global-enum";
import { StudentActivity } from "src/student-activity/StudentActivity.entity";
import { User } from "src/users/user.entity";
export declare class AssignesMembership {
    id: number;
    status: ReservationStatus;
    individual: Individual;
    company: Company;
    studentActivity: StudentActivity;
    memeberShip: CoWorkingSpace;
    deskarea: Deskarea[];
    shared: Shared[];
    assignGeneralOffer: AssignGeneralOffer;
    start_date: Date;
    end_date: Date;
    used: number;
    total_used: number;
    remaining: number;
    total_price: number;
    created_at: Date;
    createdBy: User;
    updated_at: Date;
}
