"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionSource = void 0;
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
const typeorm_1 = require("typeorm");
(0, dotenv_1.config)({ path: ".env.pro" });
const configService = new config_1.ConfigService();
const config = {
    type: "postgres",
    host: configService.get("DATABASE_HOST"),
    port: configService.get("DATABASE_PORT"),
    username: configService.get("DATABASE_USER"),
    password: configService.get("DATABASE_PASSWORD"),
    database: configService.get("DATABASE_NAME"),
    synchronize: false,
    entities: [__dirname + "/src/**/*.entity{.ts,.js}"],
    migrations: [__dirname + "/src/migrations/*{.ts,.js}"],
    autoLoadEntities: true,
};
exports.default = (0, config_1.registerAs)("typeorm", () => config);
exports.connectionSource = new typeorm_1.DataSource(config);
//# sourceMappingURL=typeorm-cli.js.map