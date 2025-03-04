import { TasksStatus } from "src/shared/enum/global-enum";
export declare class CreateTaskDto {
    user_id: number;
    name: string;
    note: string;
    status: TasksStatus;
}
