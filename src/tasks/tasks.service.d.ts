import { APIFeaturesService } from "src/shared/filters/filter.service";
import { Repository } from "typeorm";
import { CreateTaskDto } from "./dto/create-tasks.dto";
import { UpdateTaskDto } from "./dto/update-tasks.dto";
import { Task } from "./tasks.entity";
export declare class TaskService {
    private taskRepository;
    protected readonly apiFeaturesService: APIFeaturesService;
    constructor(taskRepository: Repository<Task>, apiFeaturesService: APIFeaturesService);
    create(create: CreateTaskDto): Promise<Task>;
    findAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findUserAll(filterData: any): Promise<{
        data: any[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findOne(id: number): Promise<Task>;
    update(updateTaskDto: UpdateTaskDto): Promise<Task>;
    remove(id: number): Promise<void>;
}
