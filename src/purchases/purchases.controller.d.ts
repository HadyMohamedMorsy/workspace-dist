import { CreatePurchasDto } from "./dto/create-purchases.dto";
import { UpdatePurchasDto } from "./dto/update-purchases.dto";
import { PurchasesService } from "./purchases.service";
export declare class PurchasesController {
    private readonly purchasesService;
    constructor(purchasesService: PurchasesService);
    findAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    create(createProductDto: CreatePurchasDto): Promise<import("./purchases.entity").Purchases>;
    update(updateProductDto: UpdatePurchasDto): Promise<import("./purchases.entity").Purchases>;
    remove(bodyDelete: {
        id: number;
    }): Promise<void>;
}
