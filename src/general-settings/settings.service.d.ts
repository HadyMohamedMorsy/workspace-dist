import { APIFeaturesService } from "src/shared/filters/filter.service";
import { Repository } from "typeorm";
import { CreateGeneralSettingsDto } from "./dto/create-settings.dto";
import { UpdateGeneralSettingsDto } from "./dto/update-settings-packages.dto";
import { GeneralSettings } from "./general-settings.entity";
export declare class GeneralSettingsService {
    private generalSettingsRepository;
    protected readonly apiFeaturesService: APIFeaturesService;
    constructor(generalSettingsRepository: Repository<GeneralSettings>, apiFeaturesService: APIFeaturesService);
    create(createGeneralSettingsDto: CreateGeneralSettingsDto): Promise<GeneralSettings>;
    findOne(id: number): Promise<GeneralSettings>;
    findAll(filterData: any): Promise<any[]>;
    update(updateGeneralSettingsDto: UpdateGeneralSettingsDto): Promise<GeneralSettings>;
}
