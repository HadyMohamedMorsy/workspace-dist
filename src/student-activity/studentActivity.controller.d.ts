import { CreateStudentActivityDto } from "./dto/create-StudentActivity.dto";
import { UpdateStudentActivityDto } from "./dto/update-StudentActivity.dto";
import { StudentActivityService } from "./studentActivity.service";
export declare class StudentActivityController {
    private readonly studentActivityService;
    constructor(studentActivityService: StudentActivityService);
    findAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findByUserAll(filterQueryDto: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    create(createStudentDto: CreateStudentActivityDto, req: Request): Promise<import("./StudentActivity.entity").StudentActivity>;
    update(updateStudentDto: UpdateStudentActivityDto, req: Request): Promise<import("./StudentActivity.entity").StudentActivity>;
    remove(bodyDelete: {
        id: number;
    }): Promise<void>;
}
