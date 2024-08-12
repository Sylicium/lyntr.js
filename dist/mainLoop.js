var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as SF from 'somefunctions';
import ClientEmitter from './ClientEmitter.js';
import APIInterface from './APIInterface.js';
import cacheManager from './cacheManager.js';
import { Lynt } from './classes/Lynt.js';
export function __init__() {
    return __awaiter(this, void 0, void 0, function* () {
        function addAllPostsToCache() {
            return __awaiter(this, void 0, void 0, function* () {
                let newPosts = (yield APIInterface.requestEndpoint("GET", "/api/feed?type=New")).lynts;
                // Emit new posts to client and add them to cache
                newPosts.forEach((post) => {
                    const lynt = new Lynt(post);
                    cacheManager.getCache("posts").set(post.id, lynt);
                });
            });
        }
        yield addAllPostsToCache();
        return true;
    });
}
export function start() {
    return __awaiter(this, void 0, void 0, function* () {
        const main = new mainLoop();
        main.setIntervalFunction("test", () => __awaiter(this, void 0, void 0, function* () {
            let newPosts = (yield APIInterface.requestEndpoint("GET", "/api/feed?type=New")).lynts;
            // Filter new posts if not in cache using cache.keys()
            let cachedIDs = [...cacheManager.getCache("posts").keys()];
            let temp1 = newPosts.filter((post) => {
                return !cachedIDs.includes(post.id);
            });
            // Sort from oldest to newest
            let temp2 = temp1.sort((a, b) => {
                return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
            });
            /* Not necessary because the first lynts on bot login are already cached.
                // Filter after the Client.loggedAt date to prevent sending old posts on bot login
                // Not working properly though
                let temp3 = temp2.filter((post) => {
                    let createdAt = new Date(post.createdAt)
                    return createdAt.getTime() > Client.Instance.loggedAtTimestamp;
                    //console.log(post.content, createdAt, Client.Instance.loggedAt, createdAt > Client.Instance.loggedAt)
                    //return createdAt.getTime() > Client.Instance.loggedAt.getTime();
                })
            */
            newPosts = temp2;
            // Emit new posts to client and add them to cache
            newPosts.forEach((post) => {
                const lynt = new Lynt(post);
                ClientEmitter.emit("post", lynt);
                cacheManager.getCache("posts").set(post.id, lynt);
            });
        }), 2000);
        main.start();
    });
}
class mainLoop {
    constructor() {
        this.functions = {};
    }
    setIntervalFunction(funcName, func, interval) {
        this.functions[funcName] = {
            "func": func,
            interval: interval,
            lastRun: 0
        };
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            while (true) {
                for (let func in this.functions) {
                    if (Date.now() - this.functions[func].lastRun >= this.functions[func].interval) {
                        this.functions[func].lastRun = Date.now();
                        this.functions[func].func();
                    }
                }
                yield SF.sleep(10); // Performance reasons
            }
        });
    }
}
//# sourceMappingURL=mainLoop.js.map