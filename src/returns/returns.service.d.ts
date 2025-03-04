import { ProductService } from "src/products/products.service";
import { APIFeaturesService } from "src/shared/filters/filter.service";
import { Repository } from "typeorm";
import { CreateReturnsDto } from "./dto/create-returns.dto";
import { UpdateReturnsDto } from "./dto/update-returns.dto";
import { Returns } from "./returns.entity";
export declare class ReturnsService {
    private returnRepository;
    protected readonly apiFeaturesService: APIFeaturesService;
    protected readonly productService: ProductService;
    constructor(returnRepository: Repository<Returns>, apiFeaturesService: APIFeaturesService, productService: ProductService);
    create(createReturnsDto: CreateReturnsDto): Promise<Returns>;
    findAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findOne(id: number): Promise<Returns>;
    update(updateReturnsDto: UpdateReturnsDto): Promise<Returns>;
    remove(id: number): Promise<void>;
}
