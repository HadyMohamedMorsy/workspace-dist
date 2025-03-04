import { UpdateDeskAreaDto } from "../deskarea/dto/update-deskarea.dto";
import { UpdateSharedDto } from "../shared/dto/update-shared.dto";
export interface calulateHour {
    start_hour: number;
    start_minute: number;
    start_time: string;
    end_hour: number;
    end_minute: number;
    end_time: string;
}
export declare function convertTo24HourDate(hour: number, minute: number, period: string): Date;
export declare function calculateTimeDifferenceInHours(startDate: Date, endDate: Date): number;
export declare function formatDate(date: string): string;
export declare function diffrentHour(rest: Partial<UpdateDeskAreaDto | UpdateSharedDto>): number;
export declare function calculateHours(details: calulateHour): number;
