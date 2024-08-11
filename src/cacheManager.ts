
class CacheManager {
    private cache: {[key:string]: Map<any, any>};

    constructor() {
        this.cache = {
            posts: new Map()
        }
    }

    getCache(key:any): Map<any, any> {
        return this.cache[key];
    }
    clearCache(key:any): void {
        this.cache[key].clear();
    }


}

const cacheManager = new CacheManager();
export default cacheManager;