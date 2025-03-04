import { CategoryService } from "src/categories/category.service";
import { APIFeaturesService } from "src/shared/filters/filter.service";
import { Repository } from "typeorm";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./product.entity";
export declare class ProductService {
    private productRepository;
    protected readonly apiFeaturesService: APIFeaturesService;
    private readonly categoryService;
    constructor(productRepository: Repository<Product>, apiFeaturesService: APIFeaturesService, categoryService: CategoryService);
    create(createProductDto: CreateProductDto): Promise<Product>;
    getProductsRelatedCategory(filterData: any): Promise<{
        data: Product[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findOne(id: number): Promise<Product>;
    update(updateProductDto: UpdateProductDto): Promise<Product>;
    updateWithManyRelation(updateProductDto: UpdateProductDto): Promise<Product>;
    remove(productId: number): Promise<void>;
}
