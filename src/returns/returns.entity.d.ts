import { Product } from "src/products/product.entity";
export declare class Returns {
    id: number;
    type_store: string;
    return_price: number;
    weight_kg: number;
    weight_g: number;
    weight_product: number;
    return_qty: number;
    total: number;
    product: Product;
    note: string;
    created_at: Date;
    updated_at: Date;
}
