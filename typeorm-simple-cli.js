"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionSource = void 0;
const dotenv_1 = require("dotenv");
const typeorm_1 = require("typeorm");
(0, dotenv_1.config)({ path: ".env" });
const config = {
    type: "postgres",
    host: `host`,
    port: `port`,
    username: `database-user`,
    password: `password`,
    database: `database-name`,
    entities: ["dist/**/*.entity{.ts,.js}"],
    migrations: ["dist/migrations/*{.ts,.js}"],
    autoLoadEntities: true,
    synchronize: false,
};
exports.connectionSource = new typeorm_1.DataSource(config);
//# sourceMappingURL=typeorm-simple-cli.js.map