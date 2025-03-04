import { CreateRoomDto } from "./dto/create-room.dto";
import { UpdateRoomDto } from "./dto/update-room.dto";
import { RoomsService } from "./rooms.service";
export declare class RoomsController {
    private readonly roomsService;
    constructor(roomsService: RoomsService);
    findAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    create(createRoomDto: CreateRoomDto): Promise<import("./room.entity").Room>;
    update(updateRoomDto: UpdateRoomDto): Promise<import("./room.entity").Room>;
    remove(bodyDelete: {
        id: number;
    }): Promise<void>;
}
