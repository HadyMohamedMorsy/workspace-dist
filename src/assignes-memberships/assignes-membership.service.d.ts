import { AssignGeneralOfferservice } from "src/assignes-global-offers/assignes-general-offer.service";
import { Company } from "src/companies/company.entity";
import { GeneralOfferService } from "src/general-offer/generalOffer.service";
import { Individual } from "src/individual/individual.entity";
import { OfferCoWorkingSpaceService } from "src/offer-co-working-space/offer-co-working-space.service";
import { DeskareaService } from "src/reservations/deskarea/deskarea.service";
import { SharedService } from "src/reservations/shared/shared.service";
import { APIFeaturesService } from "src/shared/filters/filter.service";
import { StudentActivity } from "src/student-activity/StudentActivity.entity";
import { User } from "src/users/user.entity";
import { Repository } from "typeorm";
import { AssignesMembership } from "./assignes-membership.entity";
import { CreateAssignesMembershipDto } from "./dto/create-assignes-membership.dto";
import { UpdateAssignesMembershipDto } from "./dto/update-assignes-membership.dto";
export declare class AssignesMembershipService {
    private assignesMembershipRepository;
    protected readonly apiFeaturesService: APIFeaturesService;
    protected readonly assignGlobalOffer: AssignGeneralOfferservice;
    protected readonly offer: GeneralOfferService;
    protected readonly offerCoWorkingSpaceService: OfferCoWorkingSpaceService;
    private readonly shared;
    private readonly deskarea;
    constructor(assignesMembershipRepository: Repository<AssignesMembership>, apiFeaturesService: APIFeaturesService, assignGlobalOffer: AssignGeneralOfferservice, offer: GeneralOfferService, offerCoWorkingSpaceService: OfferCoWorkingSpaceService, shared: SharedService, deskarea: DeskareaService);
    create(create: CreateAssignesMembershipDto, reqBody: {
        customer: Individual | Company | StudentActivity;
        createdBy: User;
    }): Promise<AssignesMembership>;
    findOne(id: number): Promise<AssignesMembership>;
    findAssignesByUser(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findAssignesByIndividual(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findAssignesByCompany(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findAssignesByStudentActivity(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    update(updateAssignesMembershipDto: UpdateAssignesMembershipDto): Promise<AssignesMembership>;
    private handleValidationIfNeeded;
    private getValidationService;
    private getUpdatedEntity;
    remove(id: number): Promise<void>;
    calculateCoWrokingSpaceTotalPrice(offerId: number, basePrice: number): Promise<number>;
}
