import { User } from "src/users/user.entity";
export declare class ExpenseSalaries {
    id: number;
    cost: number;
    type_sallary: string;
    name: string;
    destination: string;
    user: User;
    created_at: Date;
    updated_at: Date;
}
