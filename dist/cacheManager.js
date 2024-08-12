class CacheManager {
    constructor() {
        this.cache = {
            posts: new Map()
        };
    }
    getCache(key) {
        return this.cache[key];
    }
    clearCache(key) {
        this.cache[key].clear();
    }
}
const cacheManager = new CacheManager();
export default cacheManager;
//# sourceMappingURL=cacheManager.js.map