import { AssignGeneralOffer } from "src/assignes-global-offers/assignes-general-offer.entity";
import { PRODUCT_TYPE } from "src/shared/enum/global-enum";
import { User } from "src/users/user.entity";
import { DiscountType } from "./dto/create-general-offer.dto";
export declare class GeneralOffer {
    id: number;
    name: string;
    assignessOffers: AssignGeneralOffer;
    start_date: Date;
    end_date: Date;
    type_discount: DiscountType;
    discount: number;
    product: PRODUCT_TYPE;
    createdBy: User;
    created_at: Date;
    updated_at: Date;
}
