"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralSettingsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const general_settings_entity_1 = require("./general-settings.entity");
const settings_controller_1 = require("./settings.controller");
const settings_service_1 = require("./settings.service");
let GeneralSettingsModule = class GeneralSettingsModule {
};
exports.GeneralSettingsModule = GeneralSettingsModule;
exports.GeneralSettingsModule = GeneralSettingsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([general_settings_entity_1.GeneralSettings])],
        controllers: [settings_controller_1.GeneralSettingsController],
        providers: [settings_service_1.GeneralSettingsService],
        exports: [settings_service_1.GeneralSettingsService],
    })
], GeneralSettingsModule);
//# sourceMappingURL=settings.module.js.map