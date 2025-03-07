import { Category } from "src/categories/category.entity";
import { Company } from "src/companies/company.entity";
import { Individual } from "src/individual/individual.entity";
import { StudentActivity } from "src/student-activity/StudentActivity.entity";
import { User } from "src/users/user.entity";
import { Repository } from "typeorm";
export declare class SearchService {
    private readonly companyRepository;
    private readonly studentActivityRepository;
    private readonly individualRepository;
    private readonly categoryRepository;
    private readonly userRepository;
    constructor(companyRepository: Repository<Company>, studentActivityRepository: Repository<StudentActivity>, individualRepository: Repository<Individual>, categoryRepository: Repository<Category>, userRepository: Repository<User>);
    search(module: string, query: string): Promise<{
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
            holders: import("src/companies/company.entity").holder[] | null;
            deals: import("../../../deals/deals.entity").Deals[];
            orders: import("../../../orders/order.entity").Order[];
            assignGeneralOffers: import("../../../assignes-global-offers/assignes-general-offer.entity").AssignGeneralOffer[];
            assign_memberships: import("../../../assignes-memberships/assignes-membership.entity").AssignesMembership[];
            assignesPackages: import("../../../assigness-packages-offers/assignes-packages.entity").AssignesPackages[];
            shared: import("../../../reservations/shared/shared.entity").Shared[];
            deskarea: import("../../../reservations/deskarea/deskarea.entity").Deskarea[];
            reservationRooms: import("../../../reservations/rooms/reservation-room.entity").ReservationRoom[];
            createdBy: User;
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
            holders: import("src/student-activity/StudentActivity.entity").holder[] | null;
            createdBy: User;
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
            createdBy: User;
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
            permission: import("src/users/user.entity").PermissionsUser[] | null;
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
            createdByStudentActivity: StudentActivity[];
            createdByCompany: Company[];
            createdByIndividual: Individual[];
            createdByShared: import("../../../reservations/shared/shared.entity").Shared[];
            globalOffer: import("../../../general-offer/generalOffer.entity").GeneralOffer[];
            createdByDeskArea: import("../../../reservations/deskarea/deskarea.entity").Deskarea[];
            createdByReservationRoom: import("../../../reservations/rooms/reservation-room.entity").ReservationRoom[];
            salaries: User[];
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
    private searchStudentActivity;
    private searchCategory;
    private searchIndividual;
    private searchUser;
    private searchCompanies;
}
