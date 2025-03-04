"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const express_1 = require("express");
const typeorm_1 = require("typeorm");
let DatabaseExceptionFilter = class DatabaseExceptionFilter {
    catch(exception, host) {
        const response = host.switchToHttp().getResponse();
        const error = exception;
        const errorMessages = {
            UQ_6236cfa94a940a14729b69d4e64: "The phone number is already taken.",
            UQ_589d633a38525c92dd87f1ee93b: "The WhatsApp number is already registered.",
            UQ_e53ef0697f9d5d933fa075be1c3: "The phone number is already taken.",
            UQ_dbb467625f453730336a9136d6c: "The WhatsApp number is already registered.",
            UQ_6d09f7c3e4ddf573f842bfa51c7: "The Facebook is already registered.",
            UQ_96c8a2ca6771f4e66d01e5270eb: "The Website is already registered.",
            UQ_7dc7f95dd5c92a645c93a9417ba: "Instagram is already registered.",
            UQ_5b43f77b200fd08d92dbf00c5f3: "Linkedin is already registered.",
            UQ_99c39b067cfa73c783f0fc49a61: "The code is already taken.",
            UQ_8e1f623798118e629b46a9e6299: "The phone number is already taken.",
            UQ_2adbece51b154348b42ae313f7e: "The name offer is already taken.",
        };
        if (error.code === "23505" && error.constraint in errorMessages) {
            const message = errorMessages[error.constraint];
            return response.status(409).json({
                statusCode: 409,
                timestamp: new Date().toISOString(),
                path: express_1.request.url,
                message: message,
            });
        }
        return response.status(500).json({
            message: "Unable to process your request at the moment, please try again later.",
            description: `Error connecting to the database: ${exception.message}`,
        });
    }
};
exports.DatabaseExceptionFilter = DatabaseExceptionFilter;
exports.DatabaseExceptionFilter = DatabaseExceptionFilter = __decorate([
    (0, common_1.Catch)(typeorm_1.QueryFailedError)
], DatabaseExceptionFilter);
//# sourceMappingURL=database-error.filter.js.map