import { DataSource, EntityTarget, SelectQueryBuilder } from "typeorm";
export declare class APIFeaturesService {
    #private;
    private readonly dataSource;
    cacheFilters: Map<string, Set<string>>;
    constructor(dataSource: DataSource);
    setRepository(entity: EntityTarget<any>): this;
    buildQuery(filterData: any): SelectQueryBuilder<any>;
}
