import { AssignesMembership } from "src/assignes-memberships/assignes-membership.entity";
import { AssignesPackages } from "src/assigness-packages-offers/assignes-packages.entity";
import { Company } from "src/companies/company.entity";
import { Deals } from "src/deals/deals.entity";
import { GeneralOffer } from "src/general-offer/generalOffer.entity";
import { Individual } from "src/individual/individual.entity";
import { Deskarea } from "src/reservations/deskarea/deskarea.entity";
import { ReservationRoom } from "src/reservations/rooms/reservation-room.entity";
import { Shared } from "src/reservations/shared/shared.entity";
import { TypeUser } from "src/shared/enum/global-enum";
import { StudentActivity } from "src/student-activity/StudentActivity.entity";
import { User } from "src/users/user.entity";
export declare class AssignGeneralOffer {
    id: number;
    individual: Individual;
    company: Company;
    studentActivity: StudentActivity;
    type_user: TypeUser;
    generalOffer: GeneralOffer;
    createdBy: User;
    shared: Shared;
    deskarea: Deskarea;
    reservationRooms: ReservationRoom;
    deals: Deals;
    assignesPackages: AssignesPackages;
    assignessMemebership: AssignesMembership;
    created_at: Date;
    updated_at: Date;
}
