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
import { Deskarea } from "./deskarea.entity";
import { CreateDeskAreaDto } from "./dto/create-deskarea.dto";
import { UpdateDeskAreaDto } from "./dto/update-deskarea.dto";
export declare class DeskareaService {
    private deskareaRepository;
    protected readonly apiFeaturesService: APIFeaturesService;
    protected readonly assignGlobalOffer: AssignGeneralOfferservice;
    protected readonly settings: GeneralSettingsService;
    protected readonly offer: GeneralOfferService;
    protected readonly membership: AssignesMembershipService;
    constructor(deskareaRepository: Repository<Deskarea>, apiFeaturesService: APIFeaturesService, assignGlobalOffer: AssignGeneralOfferservice, settings: GeneralSettingsService, offer: GeneralOfferService, membership: AssignesMembershipService);
    create(createDeskareaDto: CreateDeskAreaDto, reqBody: {
        customer: Individual | Company | StudentActivity;
        createdBy: User;
    }): Promise<Deskarea>;
    findAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findActiveOrInactiveReservationsForCustomer(customer_id: number, customer_type: string): Promise<Deskarea[]>;
    findOne(id: number): Promise<Deskarea>;
    findDeskareaByIndividualAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findDeskareaByComapnyAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findDeskareaByStudentActivityAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findDeskareaByUserAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findReservationsByIndividual(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findReservationsByCompany(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findReservationsByStudentActivity(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    createReservationByMememberShip(createDeskareaDto: CreateDeskAreaDto, reqBody: {
        customer: Individual | Company | StudentActivity;
        createdBy: User;
    }): Promise<AssignesMembership>;
    private createAndSaveDeskareaReservation;
    validateCustomerReservation(customerId: number, typeUser: string): Promise<void>;
    private validateMembership;
    private validateMembershipUsage;
    private validateMembershipDateRange;
    private updateMembershipUsage;
    update(updateDeskareaDto: UpdateDeskAreaDto): Promise<Deskarea>;
    private handleCancelledStatus;
    private handleCompletedStatus;
    findSetting(settingId: number): Promise<import("../../general-settings/general-settings.entity").GeneralSettings>;
    calculateCoWrokingSpaceTotalPrice(rest: Partial<UpdateDeskAreaDto>, settingId: number, offerId: number): Promise<number>;
    remove(deskareaId: number): Promise<void>;
    private buildBaseQuery;
    private getPaginatedResults;
    private addMembershipJoin;
    private addGeneralOfferJoin;
    private findDeskareaByUserType;
    private findReservationsByUserType;
}
