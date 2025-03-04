import { TimeOfDay } from "src/shared/enum/global-enum";
import { CreateSharedDto } from "./create-shared.dto";
declare const UpdateSharedDto_base: import("@nestjs/common").Type<Partial<CreateSharedDto>>;
export declare class UpdateSharedDto extends UpdateSharedDto_base {
    id: number;
    end_hour: number;
    end_minute: number;
    end_time: TimeOfDay;
}
export {};
