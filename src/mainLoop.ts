import * as SF from 'somefunctions';
import ClientEmitter from './ClientEmitter.js';
import APIInterface from './APIInterface.js';
import cacheManager from './cacheManager.js';
import * as Types from './Types/index.js';
import { Lynt } from './classes/Lynt.js';


export async function __init__() {

    async function addAllPostsToCache() {
        let newPosts: Types.API.Lynt[] = (await APIInterface.requestEndpoint("GET", "/api/feed?type=New")).lynts;
        
        // Emit new posts to client and add them to cache
        newPosts.forEach((post: Types.API.Lynt) => {
            const lynt = new Lynt(post);
            cacheManager.getCache("posts").set(post.id, lynt);
        })
    }
    await addAllPostsToCache();

    return true;
}


export async function start() {


    const main = new mainLoop();

    main.setIntervalFunction("test", async () => {
        let newPosts: Types.API.Lynt[] = (await APIInterface.requestEndpoint("GET", "/api/feed?type=New")).lynts;

        // Filter new posts if not in cache using cache.keys()
        let cachedIDs = [...cacheManager.getCache("posts").keys()];
        let temp1 = newPosts.filter((post) => {
            return !cachedIDs.includes(post.id);
        })

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
        newPosts.forEach((post: Types.API.Lynt) => {
            const lynt = new Lynt(post);
            ClientEmitter.emit("post", lynt);
            cacheManager.getCache("posts").set(post.id, lynt);
        })
    }, 2000);

    main.start();
}


class mainLoop {
    functions: {[key: string]: any};

    constructor() {
        this.functions = {};
        
    }

    setIntervalFunction(funcName:string, func: Function, interval: number) {
        this.functions[funcName] = {
            "func": func,
            interval: interval,
            lastRun: 0
        }
    }

    async start() {
        while(true) {
            for(let func in this.functions) {
                if(Date.now() - this.functions[func].lastRun >= this.functions[func].interval) {
                    this.functions[func].lastRun = Date.now();
                    this.functions[func].func();
                }
            }
            await SF.sleep(10); // Performance reasons
        }

    }

}