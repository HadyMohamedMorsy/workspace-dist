"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
exports.default = Joi.object({
    NODE_ENV: Joi.string().valid("dev", "pro").default("dev"),
    DATABASE_PORT: Joi.number().port().default(5432),
    DATABASE_PASSWORD: Joi.string().required(),
    DATABASE_HOST: Joi.string().required(),
    DATABASE_NAME: Joi.string().required(),
    DATABASE_USER: Joi.string().required(),
    JWT_SECRET: Joi.string().required(),
});
//# sourceMappingURL=env.validation.js.map