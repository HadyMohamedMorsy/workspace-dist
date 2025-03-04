import { Category } from "src/categories/category.entity";
import { Purchases } from "src/purchases/purchases.entity";
export declare class Product {
    id: number;
    code: string;
    name: string;
    selling_price: number;
    purshase_price: number;
    store: number;
    featured_image: string;
    created_at: Date;
    updated_at: Date;
    categories: Category[];
    purchases: Purchases[];
    returns: Purchases[];
}
