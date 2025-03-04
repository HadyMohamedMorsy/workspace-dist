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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _APIFeaturesService_instances, _APIFeaturesService_repository, _APIFeaturesService_handleColumnSelection, _APIFeaturesService_applyCustomFiltersToQuery, _APIFeaturesService_applySearchFilter, _APIFeaturesService_applySorting, _APIFeaturesService_applyPagination, _APIFeaturesService_applyCustomFilters;
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIFeaturesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let APIFeaturesService = class APIFeaturesService {
    constructor(dataSource) {
        _APIFeaturesService_instances.add(this);
        this.dataSource = dataSource;
        _APIFeaturesService_repository.set(this, void 0);
        this.cacheFilters = new Map();
    }
    setRepository(entity) {
        __classPrivateFieldSet(this, _APIFeaturesService_repository, this.dataSource.getRepository(entity), "f");
        return this;
    }
    buildQuery(filterData) {
        const queryBuilder = __classPrivateFieldGet(this, _APIFeaturesService_repository, "f").createQueryBuilder("e");
        __classPrivateFieldGet(this, _APIFeaturesService_instances, "m", _APIFeaturesService_handleColumnSelection).call(this, filterData, queryBuilder);
        __classPrivateFieldGet(this, _APIFeaturesService_instances, "m", _APIFeaturesService_applyCustomFiltersToQuery).call(this, filterData, queryBuilder);
        __classPrivateFieldGet(this, _APIFeaturesService_instances, "m", _APIFeaturesService_applySearchFilter).call(this, filterData, queryBuilder);
        __classPrivateFieldGet(this, _APIFeaturesService_instances, "m", _APIFeaturesService_applySorting).call(this, filterData, queryBuilder);
        __classPrivateFieldGet(this, _APIFeaturesService_instances, "m", _APIFeaturesService_applyPagination).call(this, filterData, queryBuilder);
        return queryBuilder;
    }
};
exports.APIFeaturesService = APIFeaturesService;
_APIFeaturesService_repository = new WeakMap();
_APIFeaturesService_instances = new WeakSet();
_APIFeaturesService_handleColumnSelection = function _APIFeaturesService_handleColumnSelection(filterData, queryBuilder) {
    const filterValidColumns = fields => {
        if (!fields || fields.length === 0)
            return [];
        return fields
            .filter(field => typeof field.name === "string" &&
            !field.name.includes(".") &&
            field.name !== "id" &&
            field.name !== "created_at")
            .map(field => `e.${field.name}`);
    };
    if (filterData.columns && Array.isArray(filterData.columns)) {
        const validColumns = filterValidColumns(filterData.columns);
        if (validColumns.length > 0) {
            queryBuilder.select([...validColumns, "e.id", "e.created_at"]);
        }
    }
    if (filterData.provideFields && Array.isArray(filterData.provideFields)) {
        if (filterData.provideFields.length > 0) {
            queryBuilder.addSelect(filterData.provideFields.map(col => `e.${col}`));
        }
    }
};
_APIFeaturesService_applyCustomFiltersToQuery = function _APIFeaturesService_applyCustomFiltersToQuery(filterData, queryBuilder) {
    if (filterData.customFilters) {
        const customFilters = __classPrivateFieldGet(this, _APIFeaturesService_instances, "m", _APIFeaturesService_applyCustomFilters).call(this, filterData.customFilters);
        if (customFilters) {
            Object.entries(customFilters)
                .filter(([key, value]) => !["start_date", "end_date"].includes(key) && value != null && value !== "")
                .forEach(([key, value]) => {
                queryBuilder.andWhere(`e.${key} = :${key}`, { [key]: value });
            });
        }
    }
};
_APIFeaturesService_applySearchFilter = function _APIFeaturesService_applySearchFilter(filterData, queryBuilder) {
    if (filterData.search && filterData.search.value) {
        const searchableColumns = filterData.columns.filter((col) => col.searchable && !col.name.includes("."));
        if (searchableColumns.length) {
            searchableColumns.forEach(column => {
                queryBuilder.orWhere(`e.${column.name} LIKE :search`, {
                    search: `%${filterData.search.value}%`,
                });
            });
        }
    }
};
_APIFeaturesService_applySorting = function _APIFeaturesService_applySorting(filterData, queryBuilder) {
    if (filterData.order && filterData.order.length > 0 && filterData.columns.length > 0) {
        filterData.order.forEach(({ column, dir }) => {
            const columnInfo = filterData.columns[column];
            if (columnInfo && columnInfo.orderable) {
                queryBuilder.addOrderBy(`e.${columnInfo.name}`, dir.toUpperCase());
            }
        });
    }
    else {
        queryBuilder.addOrderBy("e.created_at", "DESC");
    }
};
_APIFeaturesService_applyPagination = function _APIFeaturesService_applyPagination(filterData, queryBuilder) {
    const { start, length } = filterData;
    queryBuilder.skip(start ?? 0).take(length ?? 10);
};
_APIFeaturesService_applyCustomFilters = function _APIFeaturesService_applyCustomFilters(customFilters) {
    const filterConditions = {};
    for (const [key, value] of Object.entries(customFilters)) {
        filterConditions[key] = value;
    }
    return filterConditions;
};
exports.APIFeaturesService = APIFeaturesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], APIFeaturesService);
//# sourceMappingURL=filter.service.js.map