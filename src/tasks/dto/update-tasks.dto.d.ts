import { CreateTaskDto } from "./create-tasks.dto";
declare const UpdateTaskDto_base: import("@nestjs/common").Type<Partial<CreateTaskDto>>;
export declare class UpdateTaskDto extends UpdateTaskDto_base {
    id: number;
}
export {};
