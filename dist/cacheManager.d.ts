declare class CacheManager {
    private cache;
    constructor();
    getCache(key: any): Map<any, any>;
    clearCache(key: any): void;
}
declare const cacheManager: CacheManager;
export default cacheManager;
