import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ProductService } from "./products.service";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    findAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    create(createProductDto: CreateProductDto): Promise<import("./product.entity").Product>;
    update(updateProductDto: UpdateProductDto): Promise<import("./product.entity").Product>;
    remove(bodyDelete: {
        id: number;
    }): Promise<void>;
}
