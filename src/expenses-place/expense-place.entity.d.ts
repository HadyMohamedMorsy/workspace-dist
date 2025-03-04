import { ExpensePlaceChild } from "./expenses-place-child/expense-place-child.entity";
export declare class ExpensePlace {
    id: number;
    name: string;
    rooms: any;
    total: number;
    expensePlaceChild: ExpensePlaceChild[];
    created_at: Date;
    updated_at: Date;
}
