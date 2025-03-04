"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentActivityService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const global_enum_1 = require("../shared/enum/global-enum");
const filter_service_1 = require("../shared/filters/filter.service");
const typeorm_2 = require("typeorm");
const StudentActivity_entity_1 = require("./StudentActivity.entity");
let StudentActivityService = class StudentActivityService {
    constructor(studentActivityRepository, apiFeaturesService) {
        this.studentActivityRepository = studentActivityRepository;
        this.apiFeaturesService = apiFeaturesService;
    }
    async create(createStudentActivityDto) {
        const studentActivity = this.studentActivityRepository.create(createStudentActivityDto);
        if (studentActivity) {
            const newClient = await this.studentActivityRepository.save(studentActivity);
            return await this.findOne(newClient.id);
        }
    }
    async findAll(filterData) {
        const queryBuilder = this.apiFeaturesService
            .setRepository(StudentActivity_entity_1.StudentActivity)
            .buildQuery(filterData);
        queryBuilder
            .leftJoinAndSelect("e.assign_memberships", "ep", "ep.status = :status_memeber", {
            status_memeber: global_enum_1.ReservationStatus.ACTIVE,
        })
            .leftJoinAndSelect("ep.memeberShip", "ms")
            .leftJoinAndSelect("e.assignesPackages", "es", "es.status = :status_package", {
            status_package: global_enum_1.ReservationStatus.ACTIVE,
        })
            .leftJoinAndSelect("es.packages", "pa")
            .leftJoinAndSelect("pa.room", "pr")
            .leftJoin("e.createdBy", "ec")
            .addSelect(["ec.id", "ec.firstName", "ec.lastName"])
            .leftJoinAndSelect("e.orders", "eo", "eo.type_order = :typeOrder", {
            typeOrder: "HOLD",
        });
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        const results = {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
        return results;
    }
    async findByUserAll(filterData) {
        const queryBuilder = this.apiFeaturesService
            .setRepository(StudentActivity_entity_1.StudentActivity)
            .buildQuery(filterData);
        queryBuilder
            .leftJoin("e.createdBy", "ec")
            .addSelect(["ec.id", "ec.firstName", "ec.lastName"])
            .andWhere("ec.id = :user_id", { user_id: filterData.user_id });
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        const results = {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
        return results;
    }
    async findOne(id) {
        const studentActivity = await this.studentActivityRepository.findOne({
            where: { id },
            relations: ["assignGeneralOffers", "assign_memberships", "assignesPackages", "createdBy"],
        });
        if (!studentActivity) {
            throw new common_1.NotFoundException(`${studentActivity} with id ${id} not found`);
        }
        return studentActivity;
    }
    async update(updateStudentActivityDto) {
        await this.studentActivityRepository.update(updateStudentActivityDto.id, updateStudentActivityDto);
        return this.studentActivityRepository.findOne({ where: { id: updateStudentActivityDto.id } });
    }
    async remove(studentActivityId) {
        await this.studentActivityRepository.delete(studentActivityId);
    }
};
exports.StudentActivityService = StudentActivityService;
exports.StudentActivityService = StudentActivityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(StudentActivity_entity_1.StudentActivity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        filter_service_1.APIFeaturesService])
], StudentActivityService);
//# sourceMappingURL=studentActivity.service.js.map