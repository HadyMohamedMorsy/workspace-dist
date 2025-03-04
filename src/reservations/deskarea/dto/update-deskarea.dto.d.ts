import { TimeOfDay } from "src/shared/enum/global-enum";
import { CreateDeskAreaDto } from "./create-deskarea.dto";
declare const UpdateDeskAreaDto_base: import("@nestjs/common").Type<Partial<CreateDeskAreaDto>>;
export declare class UpdateDeskAreaDto extends UpdateDeskAreaDto_base {
    id: number;
    end_hour: number;
    end_minute: number;
    end_time: TimeOfDay;
}
export {};
