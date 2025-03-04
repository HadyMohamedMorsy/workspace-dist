import { Company } from "src/companies/company.entity";
import { GeneralOfferService } from "src/general-offer/generalOffer.service";
import { Individual } from "src/individual/individual.entity";
import { APIFeaturesService } from "src/shared/filters/filter.service";
import { StudentActivity } from "src/student-activity/StudentActivity.entity";
import { User } from "src/users/user.entity";
import { Repository } from "typeorm";
import { AssignGeneralOffer } from "./assignes-general-offer.entity";
import { CreateAssignGeneralOfferDto } from "./dto/create-assign-general-offer.dto";
import { UpdateAssignGeneralOfferDto } from "./dto/update-assign-general-offer.dto";
export declare class AssignGeneralOfferservice {
    private assignGeneralOfferRepository;
    protected readonly apiFeaturesService: APIFeaturesService;
    protected readonly generalOfferService: GeneralOfferService;
    constructor(assignGeneralOfferRepository: Repository<AssignGeneralOffer>, apiFeaturesService: APIFeaturesService, generalOfferService: GeneralOfferService);
    create(create: CreateAssignGeneralOfferDto, reqBody: {
        customer: Individual | Company | StudentActivity;
        createdBy: User;
    }): Promise<AssignGeneralOffer>;
    findOne(id: number): Promise<AssignGeneralOffer>;
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
    update(updateAssignGeneralOfferDto: UpdateAssignGeneralOfferDto): Promise<AssignGeneralOffer>;
    remove(id: number): Promise<void>;
}
