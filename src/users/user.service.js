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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const hashing_provider_1 = require("../auth/providers/hashing.provider");
const global_enum_1 = require("../shared/enum/global-enum");
const filter_service_1 = require("../shared/filters/filter.service");
const typeorm_2 = require("typeorm");
const permissions_default_1 = require("./permissions-default");
const user_entity_1 = require("./user.entity");
let UserService = class UserService {
    constructor(hashingProvider, apiFeaturesService, repository) {
        this.hashingProvider = hashingProvider;
        this.apiFeaturesService = apiFeaturesService;
        this.repository = repository;
    }
    async findAll(filterData) {
        const queryBuilder = this.apiFeaturesService.setRepository(user_entity_1.User).buildQuery(filterData);
        queryBuilder.leftJoinAndSelect("e.orders", "eo", "eo.type_order = :typeOrder", {
            typeOrder: "HOLD",
        });
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        return {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
    }
    async findList() {
        const users = await this.repository.find({ where: { status: global_enum_1.UserStatus.ACTIVE } });
        return {
            data: users,
        };
    }
    async findOneById(id) {
        const user = await this.repository.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException(`${user} with id ${id} not found`);
        }
        return user;
    }
    async findOneByEmail(email) {
        const user = await this.repository.findOne({ where: { email } });
        if (!user) {
            throw new common_1.UnauthorizedException(`${email} not found`);
        }
        return user;
    }
    async createUser(createUserDto) {
        delete createUserDto.password_confirmation;
        const rolePermissionsMap = {
            [global_enum_1.Role.TECHNICAL_SUPPORT]: permissions_default_1.TECHNICALSUPPORT,
            [global_enum_1.Role.FOUNDER]: permissions_default_1.FOUNDER,
            [global_enum_1.Role.GENERAL_MANAGER]: permissions_default_1.GENERALMANGER,
            [global_enum_1.Role.OPERATION_MANAGER]: permissions_default_1.OPERATIONMANGER,
            [global_enum_1.Role.COMMUNITY_OFFICER]: permissions_default_1.COMMUNITY_OFFICER,
            [global_enum_1.Role.ACCOUNTANT]: permissions_default_1.ACCOUNTANT,
            [global_enum_1.Role.SALES]: permissions_default_1.SALES,
        };
        createUserDto.permission = rolePermissionsMap[createUserDto.role] || null;
        createUserDto.password = await this.hashingProvider.hashPassword(createUserDto.password);
        const newUser = this.repository.create(createUserDto);
        const user = await this.repository.save(newUser);
        delete user.password;
        return user;
    }
    async updateUser(patch) {
        if (patch.password) {
            patch.password = await this.hashingProvider.hashPassword(patch.password);
            delete patch.password_confirmation;
        }
        await this.repository.update(patch.id, patch);
        const user = await this.repository.findOne({ where: { id: patch.id } });
        delete user.password;
        return user;
    }
    async delete(userId) {
        await this.repository.delete(userId);
        return { deleted: true, userId };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => hashing_provider_1.HashingProvider))),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [hashing_provider_1.HashingProvider,
        filter_service_1.APIFeaturesService,
        typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map