import { AssignGeneralOfferservice } from "src/assignes-global-offers/assignes-general-offer.service";
import { AssignesMembership } from "src/assignes-memberships/assignes-membership.entity";
import { AssignesMembershipService } from "src/assignes-memberships/assignes-membership.service";
import { Company } from "src/companies/company.entity";
import { GeneralOfferService } from "src/general-offer/generalOffer.service";
import { GeneralSettingsService } from "src/general-settings/settings.service";
import { Individual } from "src/individual/individual.entity";
import { APIFeaturesService } from "src/shared/filters/filter.service";
import { StudentActivity } from "src/student-activity/StudentActivity.entity";
import { User } from "src/users/user.entity";
import { Repository } from "typeorm";
import { CreateSharedDto } from "./dto/create-shared.dto";
import { UpdateSharedDto } from "./dto/update-shared.dto";
import { Shared } from "./shared.entity";
export declare class SharedService {
    private sharedRepository;
    protected readonly apiFeaturesService: APIFeaturesService;
    protected readonly assignGlobalOffer: AssignGeneralOfferservice;
    protected readonly offer: GeneralOfferService;
    protected readonly settings: GeneralSettingsService;
    protected readonly membership: AssignesMembershipService;
    constructor(sharedRepository: Repository<Shared>, apiFeaturesService: APIFeaturesService, assignGlobalOffer: AssignGeneralOfferservice, offer: GeneralOfferService, settings: GeneralSettingsService, membership: AssignesMembershipService);
    create(createSharedDto: CreateSharedDto, reqBody: {
        customer: Individual | Company | StudentActivity;
        createdBy: User;
    }): Promise<Shared>;
    findAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findActiveOrInactiveReservationsForCustomer(customer_id: number, customer_type: string): Promise<Shared[]>;
    findOne(id: number): Promise<Shared>;
    findReservationsByIndividual(filterData: any): Promise<{
        data: Shared[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findReservationsByCompany(filterData: any): Promise<{
        data: Shared[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findReservationsByStudentActivity(filterData: any): Promise<{
        data: Shared[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findSharedByIndividualAll(filterData: any): Promise<{
        data: Shared[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findSharedByComapnyAll(filterData: any): Promise<{
        data: Shared[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findSharedByStudentActivityAll(filterData: any): Promise<{
        data: Shared[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findSharedByUserAll(filterData: any): Promise<{
        data: Shared[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    update(updateSharedDto: UpdateSharedDto): Promise<Shared>;
    private handleCancelledStatus;
    private handleCompletedStatus;
    findSetting(settingId: number): Promise<import("../../general-settings/general-settings.entity").GeneralSettings>;
    calculateCoWrokingSpaceTotalPrice(rest: Partial<UpdateSharedDto>, settingId: number, offerId: number): Promise<number>;
    createReservationByMememberShip(createSharedDto: CreateSharedDto, reqBody: {
        customer: Individual | Company | StudentActivity;
        createdBy: User;
    }): Promise<AssignesMembership>;
    validateCustomerReservation(customerId: number, typeUser: string): Promise<void>;
    private validateMembership;
    private validateMembershipUsage;
    private validateMembershipDateRange;
    private updateMembershipUsage;
    private createAndSaveSharedReservation;
    remove(sharedId: number): Promise<void>;
    private buildBaseQuery;
    private getPaginatedResults;
    private addMembershipJoin;
    private addGeneralOfferJoin;
    findReservationsByUserType(filterData: any, userType: "individual" | "company" | "studentActivity", idKey: string): Promise<{
        data: Shared[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findSharedByUserTypeAll(filterData: any, userType: "individual" | "company" | "studentActivity", idKey: string): Promise<{
        data: Shared[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
}
