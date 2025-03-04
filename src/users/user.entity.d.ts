import { AssignGeneralOffer } from "src/assignes-global-offers/assignes-general-offer.entity";
import { AssignesMembership } from "src/assignes-memberships/assignes-membership.entity";
import { AssignesPackages } from "src/assigness-packages-offers/assignes-packages.entity";
import { Company } from "src/companies/company.entity";
import { Deals } from "src/deals/deals.entity";
import { GeneralOffer } from "src/general-offer/generalOffer.entity";
import { Individual } from "src/individual/individual.entity";
import { Order } from "src/orders/order.entity";
import { Deskarea } from "src/reservations/deskarea/deskarea.entity";
import { ReservationRoom } from "src/reservations/rooms/reservation-room.entity";
import { Shared } from "src/reservations/shared/shared.entity";
import { Permission, Role, UserStatus } from "src/shared/enum/global-enum";
import { StudentActivity } from "src/student-activity/StudentActivity.entity";
import { Task } from "src/tasks/tasks.entity";
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    role: Role;
    permission: PermissionsUser[] | null;
    phone: string;
    email: string;
    password: string;
    task: Task[];
    createdByTasks: Task[];
    orders: Order[];
    createdByPackages: AssignesPackages[];
    createdByGeneralOffer: AssignGeneralOffer[];
    createdByMemebership: AssignesMembership[];
    createdByDeal: Deals[];
    createdByOrder: Order[];
    createdByStudentActivity: StudentActivity[];
    createdByCompany: Company[];
    createdByIndividual: Individual[];
    createdByShared: Shared[];
    globalOffer: GeneralOffer[];
    createdByDeskArea: Deskarea[];
    createdByReservationRoom: ReservationRoom[];
    salaries: User[];
    status: UserStatus;
    created_at: Date;
    updated_at: Date;
}
export declare class PermissionsUser {
    resource: string;
    actions: Permission[];
}
