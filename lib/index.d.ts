import { DataSource, DataSourceOptions } from "typeorm";
import AuthHandle from "./bottle/AuthHandle";
import StoreHandle, { StoreHandleOptions } from "./bottle/StoreHandle";
declare class BaileysBottle {
    static instance: BaileysBottle;
    private constructor();
    private createStore;
    init: (db: DataSourceOptions, options?: {
        debug?: boolean;
        sync?: boolean;
    }) => Promise<{
        createStore: (storeName?: string, storeOptions?: StoreHandleOptions) => Promise<{
            auth: AuthHandle;
            store: StoreHandle;
            _ds: DataSource;
        }>;
    }>;
}
declare const _default: BaileysBottle;
export default _default;
