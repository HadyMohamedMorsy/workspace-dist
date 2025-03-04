import { APIFeaturesService } from "src/shared/filters/filter.service";
import { Repository } from "typeorm";
import { CreateRoomDto } from "./dto/create-room.dto";
import { UpdateRoomDto } from "./dto/update-room.dto";
import { Room } from "./room.entity";
export declare class RoomsService {
    private roomsRepository;
    protected readonly apiFeaturesService: APIFeaturesService;
    constructor(roomsRepository: Repository<Room>, apiFeaturesService: APIFeaturesService);
    create(createRoomsDto: CreateRoomDto): Promise<Room>;
    findAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findList(): Promise<{
        data: Room[];
    }>;
    findOne(id: number): Promise<Room>;
    update(updateRoomsDto: UpdateRoomDto): Promise<Room>;
    remove(id: number): Promise<void>;
}
