import { CreateTaskDto } from "./dto/create-tasks.dto";
import { UpdateTaskDto } from "./dto/update-tasks.dto";
import { TaskService } from "./tasks.service";
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
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
    create(createTaskDto: CreateTaskDto, req: Request): Promise<import("./tasks.entity").Task>;
    update(updateTaskDto: UpdateTaskDto, req: Request): Promise<import("./tasks.entity").Task>;
    remove(bodyDelete: {
        id: number;
    }): Promise<void>;
}
