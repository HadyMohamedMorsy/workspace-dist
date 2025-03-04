import { AssignGeneralOfferservice } from "src/assignes-global-offers/assignes-general-offer.service";
import { Company } from "src/companies/company.entity";
import { GeneralOfferService } from "src/general-offer/generalOffer.service";
import { Individual } from "src/individual/individual.entity";
import { ReservationRoomService } from "src/reservations/rooms/reservation-room.service";
import { RoomsService } from "src/rooms/rooms.service";
import { APIFeaturesService } from "src/shared/filters/filter.service";
import { StudentActivity } from "src/student-activity/StudentActivity.entity";
import { User } from "src/users/user.entity";
import { Repository } from "typeorm";
import { Deals } from "./deals.entity";
import { CreateDealsDto } from "./dto/create-deals.dto";
import { UpdateDealsDto } from "./dto/update-deals.dto";
export declare class DealsService {
    private dealsRepository;
    protected readonly apiFeaturesService: APIFeaturesService;
    protected readonly assignGlobalOffer: AssignGeneralOfferservice;
    protected readonly offer: GeneralOfferService;
    protected readonly roomService: RoomsService;
    private readonly reservationRoom;
    constructor(dealsRepository: Repository<Deals>, apiFeaturesService: APIFeaturesService, assignGlobalOffer: AssignGeneralOfferservice, offer: GeneralOfferService, roomService: RoomsService, reservationRoom: ReservationRoomService);
    create(createDealsDto: CreateDealsDto, reqBody: {
        customer: Individual | Company | StudentActivity;
        createdBy: User;
    }): Promise<Deals>;
    findAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findDealsByIndividualAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findDealsByComapnyAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findDealsByStudentActivityAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findDealsByUserAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findOne(id: number): Promise<Deals>;
    update(updateDealsDto: UpdateDealsDto): Promise<Deals>;
    private handleStatusValidation;
    remove(id: number): Promise<void>;
}
