"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityName = void 0;
const common_1 = require("@nestjs/common");
const EntityName = (entity, idField = "id") => (0, common_1.SetMetadata)("entity", { entity, idField });
exports.EntityName = EntityName;
//# sourceMappingURL=entity-name.decorator.js.map