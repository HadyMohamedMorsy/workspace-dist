import { AssignGeneralOfferservice } from "src/assignes-global-offers/assignes-general-offer.service";
import { AssignesPackagesService } from "src/assigness-packages-offers/assignes-packages.service";
import { DealsService } from "src/deals/deals.service";
import { GeneralOfferService } from "src/general-offer/generalOffer.service";
import { RoomsService } from "src/rooms/rooms.service";
import { APIFeaturesService } from "src/shared/filters/filter.service";
import { Repository } from "typeorm";
import { CreateReservationRoomDto } from "./dto/create-reservation-rooms.dto";
import { UpdateReservationRoomDto } from "./dto/update-reservation-rooms.dto";
import { ReservationRoom } from "./reservation-room.entity";
export declare class ReservationRoomService {
    private reservationRoomRepository;
    private readonly apiFeaturesService;
    private readonly assignGlobalOffer;
    private readonly globalOffer;
    private readonly room;
    private readonly packageRooms;
    private readonly deal;
    constructor(reservationRoomRepository: Repository<ReservationRoom>, apiFeaturesService: APIFeaturesService, assignGlobalOffer: AssignGeneralOfferservice, globalOffer: GeneralOfferService, room: RoomsService, packageRooms: AssignesPackagesService, deal: DealsService);
    create(createDto: CreateReservationRoomDto, reqBody: any): Promise<ReservationRoom[]>;
    createReservationByPackage(createDto: CreateReservationRoomDto, reqBody: any): Promise<ReservationRoom[]>;
    createReservationByDeal(createDto: CreateReservationRoomDto, reqBody: any): Promise<ReservationRoom[]>;
    getReservationsForThisWeek(filterData: any): Promise<{
        data: any[];
    }>;
    private formatReservation;
    private getFreeSlots;
    findRoomsByUserType(filterData: any, userType: string): Promise<{
        data: any;
        recordsFiltered: any;
        totalRecords: any;
    }>;
    findRoomsByIndividualAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findRoomsByComapnyAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findRoomsByStudentActivityAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findRoomsByUserAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findIndividuaPackageRoomAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findCompanyPackageRoomAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findStudentActivityPackageRoomAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findIndividualDealAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findCompanyDealAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findStudentActivityDealAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findOne(id: number): Promise<ReservationRoom>;
    update(updateDto: UpdateReservationRoomDto): Promise<ReservationRoom>;
    remove(id: number): Promise<void>;
    private handleReservationCreation;
    private calculateTimes;
    private createMoment;
    private adjustHour;
    private validateTimeSlot;
    private getValidRoom;
    private processAdditionalData;
    private buildReservationEntity;
    private buildBaseQuery;
    private executePaginatedQuery;
    private processOffer;
    private processCalcNormal;
    private processPackage;
    private processDeal;
    private updatePackageUsage;
    private updateDealUsage;
    private validatePackage;
    private validateDeal;
    private validatePackageRange;
    private validateDealRange;
    findActiveOrInactiveReservationsForCustomer(customer_id: number, customer_type: string): Promise<void>;
    private getActiveReservations;
    private checkOverlap;
    private calculatePrice;
    private handleCancellation;
    private ato24h;
    private createCairoTime;
}
