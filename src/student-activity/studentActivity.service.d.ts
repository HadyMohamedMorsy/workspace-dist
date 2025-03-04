import { APIFeaturesService } from "src/shared/filters/filter.service";
import { Repository } from "typeorm";
import { CreateStudentActivityDto } from "./dto/create-StudentActivity.dto";
import { UpdateStudentActivityDto } from "./dto/update-StudentActivity.dto";
import { StudentActivity } from "./StudentActivity.entity";
export declare class StudentActivityService {
    private studentActivityRepository;
    protected readonly apiFeaturesService: APIFeaturesService;
    constructor(studentActivityRepository: Repository<StudentActivity>, apiFeaturesService: APIFeaturesService);
    create(createStudentActivityDto: CreateStudentActivityDto): Promise<StudentActivity>;
    findAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findByUserAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findOne(id: number): Promise<StudentActivity>;
    update(updateStudentActivityDto: UpdateStudentActivityDto): Promise<StudentActivity>;
    remove(studentActivityId: number): Promise<void>;
}
