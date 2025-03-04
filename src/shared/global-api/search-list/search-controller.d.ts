import { SearchService } from "./search-list.service";
export declare class SearchController {
    private readonly searchService;
    constructor(searchService: SearchService);
    search(payload: {
        module: string;
        query: string;
    }): Promise<{
        data: {
            id: number;
            name: string;
            phone: string;
            city: string;
            company_type: import("../../enum/global-enum").CompanyType;
            address: string;
            whatsApp: string;
            facebook: string;
            website: string;
            instagram: string;
            linkedin: string;
            holders: import("../../../companies/company.entity").holder[] | null;
            deals: import("../../../deals/deals.entity").Deals[];
            orders: import("../../../orders/order.entity").Order[];
            assignGeneralOffers: import("../../../assignes-global-offers/assignes-general-offer.entity").AssignGeneralOffer[];
            assign_memberships: import("../../../assignes-memberships/assignes-membership.entity").AssignesMembership[];
            assignesPackages: import("../../../assigness-packages-offers/assignes-packages.entity").AssignesPackages[];
            shared: import("../../../reservations/shared/shared.entity").Shared[];
            deskarea: import("../../../reservations/deskarea/deskarea.entity").Deskarea[];
            reservationRooms: import("../../../reservations/rooms/reservation-room.entity").ReservationRoom[];
            createdBy: import("../../../users/user.entity").User;
            created_at: Date;
            updated_at: Date;
            label: string;
            value: number;
        }[];
    } | {
        data: {
            id: number;
            name: string;
            unviresty: string;
            college: string;
            deals: import("../../../deals/deals.entity").Deals[];
            orders: import("../../../orders/order.entity").Order[];
            assignGeneralOffers: import("../../../assignes-global-offers/assignes-general-offer.entity").AssignGeneralOffer[];
            assign_memberships: import("../../../assignes-memberships/assignes-membership.entity").AssignesMembership[];
            assignesPackages: import("../../../assigness-packages-offers/assignes-packages.entity").AssignesPackages[];
            shared: import("../../../reservations/shared/shared.entity").Shared[];
            deskarea: import("../../../reservations/deskarea/deskarea.entity").Deskarea[];
            reservationRooms: import("../../../reservations/rooms/reservation-room.entity").ReservationRoom[];
            subjects: string[] | [null];
            holders: import("../../../student-activity/StudentActivity.entity").holder[] | null;
            createdBy: import("../../../users/user.entity").User;
            created_at: Date;
            updated_at: Date;
            label: string;
            value: number;
        }[];
    } | {
        data: {
            id: number;
            name: string;
            number: string;
            whatsApp: string;
            individual_type: string;
            employed_job: string;
            freelancer_job: string;
            unviresty: string;
            college: string;
            deals: import("../../../deals/deals.entity").Deals;
            orders: import("../../../orders/order.entity").Order;
            assignGeneralOffers: import("../../../assignes-global-offers/assignes-general-offer.entity").AssignGeneralOffer[];
            assign_memberships: import("../../../assignes-memberships/assignes-membership.entity").AssignesMembership[];
            assignesPackages: import("../../../assigness-packages-offers/assignes-packages.entity").AssignesPackages[];
            shared: import("../../../reservations/shared/shared.entity").Shared[];
            deskarea: import("../../../reservations/deskarea/deskarea.entity").Deskarea[];
            reservationRooms: import("../../../reservations/rooms/reservation-room.entity").ReservationRoom[];
            createdBy: import("../../../users/user.entity").User;
            created_at: Date;
            updated_at: Date;
            label: string;
            value: number;
        }[];
    } | {
        data: {
            id: number;
            firstName: string;
            lastName: string;
            username: string;
            role: import("../../enum/global-enum").Role;
            permission: import("../../../users/user.entity").PermissionsUser[] | null;
            phone: string;
            email: string;
            password: string;
            task: import("../../../tasks/tasks.entity").Task[];
            createdByTasks: import("../../../tasks/tasks.entity").Task[];
            orders: import("../../../orders/order.entity").Order[];
            createdByPackages: import("../../../assigness-packages-offers/assignes-packages.entity").AssignesPackages[];
            createdByGeneralOffer: import("../../../assignes-global-offers/assignes-general-offer.entity").AssignGeneralOffer[];
            createdByMemebership: import("../../../assignes-memberships/assignes-membership.entity").AssignesMembership[];
            createdByDeal: import("../../../deals/deals.entity").Deals[];
            createdByOrder: import("../../../orders/order.entity").Order[];
            createdByStudentActivity: import("../../../student-activity/StudentActivity.entity").StudentActivity[];
            createdByCompany: import("../../../companies/company.entity").Company[];
            createdByIndividual: import("../../../individual/individual.entity").Individual[];
            createdByShared: import("../../../reservations/shared/shared.entity").Shared[];
            globalOffer: import("../../../general-offer/generalOffer.entity").GeneralOffer[];
            createdByDeskArea: import("../../../reservations/deskarea/deskarea.entity").Deskarea[];
            createdByReservationRoom: import("../../../reservations/rooms/reservation-room.entity").ReservationRoom[];
            salaries: import("../../../users/user.entity").User[];
            status: import("../../enum/global-enum").UserStatus;
            created_at: Date;
            updated_at: Date;
            label: string;
            value: number;
        }[];
    } | {
        data: {
            id: number;
            name: string;
            products: import("../../../products/product.entity").Product[];
            created_at: Date;
            updated_at: Date;
            label: string;
            value: number;
        }[];
    }>;
}
