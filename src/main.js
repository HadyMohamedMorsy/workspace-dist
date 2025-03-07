"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const dotenv = require("dotenv");
const app_module_1 = require("./app.module");
const database_error_filter_1 = require("./shared/global-erros/database-error.filter");
const http_exception_filter_1 = require("./shared/global-erros/http-exception.filter");
dotenv.config({ path: ".env.pro" });
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.setGlobalPrefix("/api/v1");
    app.useGlobalFilters(new database_error_filter_1.DatabaseExceptionFilter(), new http_exception_filter_1.HttpExceptionFilter());
    app.useGlobalPipes(new common_1.ValidationPipe({
        forbidNonWhitelisted: true,
        transform: true,
    }));
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map