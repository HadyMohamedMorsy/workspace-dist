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
exports.GeneralSettingsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const filter_service_1 = require("../shared/filters/filter.service");
const typeorm_2 = require("typeorm");
const general_settings_entity_1 = require("./general-settings.entity");
let GeneralSettingsService = class GeneralSettingsService {
    constructor(generalSettingsRepository, apiFeaturesService) {
        this.generalSettingsRepository = generalSettingsRepository;
        this.apiFeaturesService = apiFeaturesService;
    }
    async create(createGeneralSettingsDto) {
        const generalSettings = this.generalSettingsRepository.create(createGeneralSettingsDto);
        return await this.generalSettingsRepository.save(generalSettings);
    }
    async findOne(id) {
        const setting = await this.generalSettingsRepository.findOne({
            where: { id },
        });
        if (!setting) {
            throw new common_1.NotFoundException(`${setting} with id ${id} not found`);
        }
        return setting;
    }
    async findAll(filterData) {
        const queryBuilder = this.apiFeaturesService
            .setRepository(general_settings_entity_1.GeneralSettings)
            .buildQuery(filterData);
        const filteredRecord = await queryBuilder.getMany();
        return filteredRecord;
    }
    async update(updateGeneralSettingsDto) {
        await this.generalSettingsRepository.update(updateGeneralSettingsDto.id, updateGeneralSettingsDto);
        return this.generalSettingsRepository.findOne({ where: { id: updateGeneralSettingsDto.id } });
    }
};
exports.GeneralSettingsService = GeneralSettingsService;
exports.GeneralSettingsService = GeneralSettingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(general_settings_entity_1.GeneralSettings)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        filter_service_1.APIFeaturesService])
], GeneralSettingsService);
//# sourceMappingURL=settings.service.js.map