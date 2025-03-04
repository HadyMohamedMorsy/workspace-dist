import { CreateGeneralSettingsDto } from "./dto/create-settings.dto";
import { UpdateGeneralSettingsDto } from "./dto/update-settings-packages.dto";
import { GeneralSettingsService } from "./settings.service";
export declare class GeneralSettingsController {
    private readonly generalSettingsService;
    constructor(generalSettingsService: GeneralSettingsService);
    findAll(filterQueryDto: any): Promise<any[]>;
    create(createGeneralSettingsDto: CreateGeneralSettingsDto): Promise<import("./general-settings.entity").GeneralSettings>;
    update(updateGeneralSettingsDto: UpdateGeneralSettingsDto): Promise<import("./general-settings.entity").GeneralSettings>;
}
