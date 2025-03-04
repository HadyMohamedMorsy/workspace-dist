import { User } from "src/users/user.entity";
export declare class Vacation {
    id: number;
    user: User;
    createdBy: User;
    selected_day: string;
    note: string;
    created_at: Date;
    updated_at: Date;
}
