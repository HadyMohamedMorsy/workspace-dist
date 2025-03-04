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
exports.RoomsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const filter_service_1 = require("../shared/filters/filter.service");
const typeorm_2 = require("typeorm");
const room_entity_1 = require("./room.entity");
let RoomsService = class RoomsService {
    constructor(roomsRepository, apiFeaturesService) {
        this.roomsRepository = roomsRepository;
        this.apiFeaturesService = apiFeaturesService;
    }
    async create(createRoomsDto) {
        const rooms = this.roomsRepository.create(createRoomsDto);
        return await this.roomsRepository.save(rooms);
    }
    async findAll(filterData) {
        const queryBuilder = this.apiFeaturesService.setRepository(room_entity_1.Room).buildQuery(filterData);
        const filteredRecord = await queryBuilder.getMany();
        const totalRecords = await queryBuilder.getCount();
        return {
            data: filteredRecord,
            recordsFiltered: filteredRecord.length,
            totalRecords: +totalRecords,
        };
    }
    async findList() {
        const rooms = await this.roomsRepository.find({});
        return {
            data: rooms,
        };
    }
    async findOne(id) {
        return this.roomsRepository.findOne({ where: { id } });
    }
    async update(updateRoomsDto) {
        await this.roomsRepository.update(updateRoomsDto.id, updateRoomsDto);
        return this.roomsRepository.findOne({ where: { id: updateRoomsDto.id } });
    }
    async remove(id) {
        await this.roomsRepository.delete(id);
    }
};
exports.RoomsService = RoomsService;
exports.RoomsService = RoomsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(room_entity_1.Room)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        filter_service_1.APIFeaturesService])
], RoomsService);
//# sourceMappingURL=rooms.service.js.map