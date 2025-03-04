import { Product } from "src/products/product.entity";
export declare class Category {
    id: number;
    name: string;
    products: Product[];
    created_at: Date;
    updated_at: Date;
}
