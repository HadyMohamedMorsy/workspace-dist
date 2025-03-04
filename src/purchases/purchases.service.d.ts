import { ProductService } from "src/products/products.service";
import { APIFeaturesService } from "src/shared/filters/filter.service";
import { Repository } from "typeorm";
import { CreatePurchasDto } from "./dto/create-purchases.dto";
import { UpdatePurchasDto } from "./dto/update-purchases.dto";
import { Purchases } from "./purchases.entity";
export declare class PurchasesService {
    private purchasesRepository;
    protected readonly apiFeaturesService: APIFeaturesService;
    protected readonly productService: ProductService;
    constructor(purchasesRepository: Repository<Purchases>, apiFeaturesService: APIFeaturesService, productService: ProductService);
    create(createPurchasDto: CreatePurchasDto): Promise<Purchases>;
    findAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findOne(id: number): Promise<Purchases>;
    update(updatePurchasDto: UpdatePurchasDto): Promise<Purchases>;
    remove(id: number): Promise<void>;
}
