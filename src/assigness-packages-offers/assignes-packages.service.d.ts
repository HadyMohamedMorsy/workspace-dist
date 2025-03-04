import { AssignGeneralOfferservice } from "src/assignes-global-offers/assignes-general-offer.service";
import { Company } from "src/companies/company.entity";
import { GeneralOfferService } from "src/general-offer/generalOffer.service";
import { Individual } from "src/individual/individual.entity";
import { OfferPackagesService } from "src/offer-packages/offerpackages.service";
import { ReservationRoomService } from "src/reservations/rooms/reservation-room.service";
import { APIFeaturesService } from "src/shared/filters/filter.service";
import { StudentActivity } from "src/student-activity/StudentActivity.entity";
import { User } from "src/users/user.entity";
import { Repository } from "typeorm";
import { AssignesPackages } from "./assignes-packages.entity";
import { CreateAssignesPackageDto } from "./dto/create-assignes-packages.dto";
import { UpdateAssignesPackageDto } from "./dto/update-assignes-packages.dto";
export declare class AssignesPackagesService {
    private assignesPackagesRepository;
    protected readonly apiFeaturesService: APIFeaturesService;
    protected readonly assignGlobalOffer: AssignGeneralOfferservice;
    protected readonly offer: GeneralOfferService;
    protected readonly offerPackagesService: OfferPackagesService;
    private readonly reservationRoom;
    constructor(assignesPackagesRepository: Repository<AssignesPackages>, apiFeaturesService: APIFeaturesService, assignGlobalOffer: AssignGeneralOfferservice, offer: GeneralOfferService, offerPackagesService: OfferPackagesService, reservationRoom: ReservationRoomService);
    create(create: CreateAssignesPackageDto, reqBody: {
        customer: Individual | Company | StudentActivity;
        createdBy: User;
    }): Promise<AssignesPackages>;
    findOne(id: number): Promise<AssignesPackages>;
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
    update(updateassignesPackagesDto: UpdateAssignesPackageDto): Promise<AssignesPackages>;
    private handleStatusValidation;
    private fetchUpdatedPackage;
    remove(id: number): Promise<void>;
    calculatePackagePrice(offerId: number, basePrice: number, hours: number): Promise<number>;
}
