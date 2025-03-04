import { Product } from "src/products/product.entity";
export declare class Purchases {
    id: number;
    type_store: string;
    purshase_price: number;
    weight_kg: number;
    weight_g: number;
    weight_product: number;
    purshase_qty: number;
    total: number;
    product: Product;
    created_at: Date;
    updated_at: Date;
}
