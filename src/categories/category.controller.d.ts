import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    findAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findList(): Promise<{
        data: import("./category.entity").Category[];
    }>;
    findRelList(filterQueryDto: any): Promise<{
        data: import("../products/product.entity").Product[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    create(createProductDto: CreateCategoryDto): Promise<import("./category.entity").Category>;
    update(updateProductDto: UpdateCategoryDto): Promise<import("./category.entity").Category>;
    remove(bodyDelete: {
        id: number;
    }): Promise<void>;
}
