import { AssignGeneralOffer } from "src/assignes-global-offers/assignes-general-offer.entity";
import { AssignesMembership } from "src/assignes-memberships/assignes-membership.entity";
import { AssignesPackages } from "src/assigness-packages-offers/assignes-packages.entity";
import { Deals } from "src/deals/deals.entity";
import { Order } from "src/orders/order.entity";
import { Deskarea } from "src/reservations/deskarea/deskarea.entity";
import { ReservationRoom } from "src/reservations/rooms/reservation-room.entity";
import { Shared } from "src/reservations/shared/shared.entity";
import { User } from "src/users/user.entity";
export declare class Individual {
    id: number;
    name: string;
    number: string;
    whatsApp: string;
    individual_type: string;
    employed_job: string;
    freelancer_job: string;
    unviresty: string;
    college: string;
    deals: Deals;
    orders: Order;
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
