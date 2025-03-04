import { AssignGeneralOffer } from "src/assignes-global-offers/assignes-general-offer.entity";
import { AssignesMembership } from "src/assignes-memberships/assignes-membership.entity";
import { AssignesPackages } from "src/assigness-packages-offers/assignes-packages.entity";
import { Deals } from "src/deals/deals.entity";
import { Order } from "src/orders/order.entity";
import { Deskarea } from "src/reservations/deskarea/deskarea.entity";
import { ReservationRoom } from "src/reservations/rooms/reservation-room.entity";
import { Shared } from "src/reservations/shared/shared.entity";
import { CompanyType } from "src/shared/enum/global-enum";
import { User } from "src/users/user.entity";
export declare class Company {
    id: number;
    name: string;
    phone: string;
    city: string;
    company_type: CompanyType;
    address: string;
    whatsApp: string;
    facebook: string;
    website: string;
    instagram: string;
    linkedin: string;
    holders: holder[] | null;
    deals: Deals[];
    orders: Order[];
    assignGeneralOffers: AssignGeneralOffer[];
    assign_memberships: AssignesMembership[];
    assignesPackages: AssignesPackages[];
    shared: Shared[];
    deskarea: Deskarea[];
    reservationRooms: ReservationRoom[];
    createdBy: User;
    created_at: Date;
    updated_at: Date;
}
export declare class holder {
    name: string;
    number: string;
    whatsApp: string;
}
