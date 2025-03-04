import { PRODUCT_TYPE } from "src/shared/enum/global-enum";
export declare enum DiscountType {
    PERCENTAGE = "percentage",
    AMOUNT = "amount"
}
export declare class CreateGeneralOfferDto {
    name: string;
    product: PRODUCT_TYPE;
    start_date: any;
    end_date: string;
    type_discount: DiscountType;
    discount: number;
}
