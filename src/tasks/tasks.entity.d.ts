import { TasksStatus } from "src/shared/enum/global-enum";
import { User } from "src/users/user.entity";
export declare class Task {
    id: number;
    user: User;
    status: TasksStatus;
    createdBy: User;
    name: string;
    note: string;
    created_at: Date;
    updated_at: Date;
}
