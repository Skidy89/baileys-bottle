import { DataSourceOptions } from "typeorm";
declare class DB {
    static instance: DB;
    private dataSource;
    private constructor();
    get: (db: DataSourceOptions, options?: {
        debug?: boolean;
        sync?: boolean;
    }) => any;
}
declare const _default: DB;
export default _default;
