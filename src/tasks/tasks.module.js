"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("../users/users.module");
const task_middleware_1 = require("./middleware/task.middleware");
const tasks_controller_1 = require("./tasks.controller");
const tasks_entity_1 = require("./tasks.entity");
const tasks_service_1 = require("./tasks.service");
let TaskModule = class TaskModule {
    configure(consumer) {
        consumer.apply(task_middleware_1.TaskMiddleware).forRoutes("task/store", "task/update");
    }
};
exports.TaskModule = TaskModule;
exports.TaskModule = TaskModule = __decorate([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule, typeorm_1.TypeOrmModule.forFeature([tasks_entity_1.Task])],
        controllers: [tasks_controller_1.TaskController],
        providers: [tasks_service_1.TaskService],
        exports: [tasks_service_1.TaskService],
    })
], TaskModule);
//# sourceMappingURL=tasks.module.js.map