import { CreateReservationRoomDto } from "./dto/create-reservation-rooms.dto";
import { UpdateReservationRoomDto } from "./dto/update-reservation-rooms.dto";
import { ReservationRoomService } from "./reservation-room.service";
export declare class ReservationRoomController {
    private readonly reservationRoomService;
    constructor(reservationRoomService: ReservationRoomService);
    findAll(filterQueryDto: any): Promise<{
        data: any[];
    }>;
    findIndividuaRoomAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findStudentRoomAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findCompanyRoomAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findUserRoomAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findIndividuaPackageRoomAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findCompanyPackageRoomAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findStudentActivityPackageRoomAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findIndividualDealAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findCompanyDealAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findStudentActivityDealAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    create(createReservationRoomDto: CreateReservationRoomDto, req: Request): Promise<import("./reservation-room.entity").ReservationRoom[]>;
    createReservationByPackage(createReservationRoomDto: CreateReservationRoomDto, req: Request): Promise<import("./reservation-room.entity").ReservationRoom[]>;
    createReservationByDeal(createReservationRoomDto: CreateReservationRoomDto, req: Request): Promise<import("./reservation-room.entity").ReservationRoom[]>;
    update(updateReservationRoomDto: UpdateReservationRoomDto): Promise<import("./reservation-room.entity").ReservationRoom>;
    remove(bodyDelete: {
        id: number;
    }): Promise<void>;
}
