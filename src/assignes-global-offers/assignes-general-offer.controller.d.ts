import { AssignGeneralOfferservice } from "./assignes-general-offer.service";
import { CreateAssignGeneralOfferDto } from "./dto/create-assign-general-offer.dto";
import { UpdateAssignGeneralOfferDto } from "./dto/update-assign-general-offer.dto";
export declare class AssignGeneralOfferController {
    private readonly assignGeneralOfferservice;
    constructor(assignGeneralOfferservice: AssignGeneralOfferservice);
    findIndividuaAssigneslAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findCompanyAssigneslAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findStudentAssigneslAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findUserAssigneslAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    create(createAssignGeneralOfferDto: CreateAssignGeneralOfferDto, req: Request): Promise<import("./assignes-general-offer.entity").AssignGeneralOffer>;
    update(updateAssignGeneralOfferDto: UpdateAssignGeneralOfferDto): Promise<import("./assignes-general-offer.entity").AssignGeneralOffer>;
    remove(bodyDelete: {
        id: number;
    }): Promise<void>;
}
