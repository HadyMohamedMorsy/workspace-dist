import { AssignesPackages } from "src/assigness-packages-offers/assignes-packages.entity";
import { Room } from "src/rooms/room.entity";
export declare class OfferPackages {
    id: number;
    name: string;
    hours: number;
    price: number;
    room: Room;
    assignesPackages: AssignesPackages;
    created_at: Date;
    updated_at: Date;
}
