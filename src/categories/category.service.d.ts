import { ProductService } from "src/products/products.service";
import { APIFeaturesService } from "src/shared/filters/filter.service";
import { Repository } from "typeorm";
import { Category } from "./category.entity";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
export declare class CategoryService {
    private categoryRepository;
    protected readonly apiFeaturesService: APIFeaturesService;
    private readonly productService;
    constructor(categoryRepository: Repository<Category>, apiFeaturesService: APIFeaturesService, productService: ProductService);
    create(createCategoryDto: CreateCategoryDto): Promise<Category>;
    findAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findlist(): Promise<{
        data: Category[];
    }>;
    findOne(filterData: any): Promise<{
        data: import("../products/product.entity").Product[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findList(): Promise<{
        data: Category[];
    }>;
    findMany(ids: number[]): Promise<Category[]>;
    update(updateCategoryDto: UpdateCategoryDto): Promise<Category>;
    remove(categoryId: number): Promise<void>;
}
