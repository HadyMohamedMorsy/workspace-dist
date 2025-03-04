import { Deskarea } from "src/reservations/deskarea/deskarea.entity";
import { Shared } from "src/reservations/shared/shared.entity";
export declare class GeneralSettings {
    id: number;
    price_shared: number;
    price_deskarea: number;
    created_at: Date;
    deskarea: Deskarea;
    shared: Shared;
    updated_at: Date;
}
