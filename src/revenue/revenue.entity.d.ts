import { RevenueChild } from "./revenue-child/revenue-child.entity";
export declare class Revenue {
    id: number;
    name: string;
    total: number;
    revenueChild: RevenueChild[];
    created_at: Date;
    updated_at: Date;
}
