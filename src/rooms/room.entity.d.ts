import { OfferPackages } from "src/offer-packages/offer-package.entity";
import { ReservationRoom } from "src/reservations/rooms/reservation-room.entity";
export declare class Room {
    id: number;
    name: string;
    featured_image: string;
    capacity: number;
    price: number;
    note: string;
    offersRoom: OfferPackages[];
    reservationRoom: ReservationRoom[];
    deal_room: OfferPackages[];
    created_at: Date;
    updated_at: Date;
}
