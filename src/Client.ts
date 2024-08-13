
import * as Types from './Types/index.js';
import APIInterface from './APIInterface.js';
import ClientEmitter from './ClientEmitter.js';
import cacheManager from './cacheManager.js';
import * as mainLoop from './mainLoop.js';


export type BotInputConfig = {
    baseURL: string
    verbose?: number
}

class Client {
    private token: string | null; // DO NOT SHARE
    private logged: boolean;
    private cacheManager: typeof cacheManager

    public loggedAt: Date;
    public loggedAtTimestamp: number;
    static Instance: Client;
    private _user: Types.API.GET_api_me | null;

    public readonly config: {[key:string]: any};

    constructor(botInputConfig: BotInputConfig) {
        if(Client.Instance) throw new Error("Client already exists");
        Client.Instance = this;

        if(botInputConfig == undefined || typeof botInputConfig !== 'object' || !botInputConfig) throw new Error("botInputConfig is required");
        if(!botInputConfig.hasOwnProperty("baseURL")) throw new Error("Base URL is required");
    
        this.config = {
            verbose: botInputConfig.hasOwnProperty("verbose") ? botInputConfig.verbose : false
        }

        APIInterface.setBaseURL(botInputConfig.baseURL);

        this.token = null;
        this.logged = false;

        this.cacheManager = cacheManager

        this.loggedAt = new Date(99999999999999);
        this.loggedAtTimestamp = 99999999999999;

        this._user = null;
    }

    public get isLogged() { return this.logged && this.token !== null; }
    public get user() { return this._user as Types.API.GET_api_me; }

    public get posts() { 
        return this.cacheManager.getCache('posts');
    }

    public async login(token:string) {
        if(this.config.verbose >= 1)console.log(`[lyntr.js] Logging in lyntr bot...`)
        this.token = token;

        if(this.config.verbose >= 4)console.log(`[lyntr.js]   Setting bot token to modules...`)
        APIInterface.setBotToken(token);
        if(this.config.verbose >= 4)console.log(`[lyntr.js]     Done.`)
        if(this.config.verbose >= 4)console.log(`[lyntr.js]   Initializing main loop...`);
        await mainLoop.__init__()
        if(this.config.verbose >= 4)console.log(`[lyntr.js]     Done.`);
        if(this.config.verbose >= 4)console.log(`[lyntr.js]   Starting main loop...`);
        mainLoop.start();
        if(this.config.verbose >= 4)console.log(`[lyntr.js]     Done.`);
        if(this.config.verbose >= 4)console.log(`[lyntr.js]   Fetching user data...`)
        const user: Types.API.GET_api_me = await APIInterface.requestEndpoint('GET', '/api/me');
        this._user = user;
        if(this.config.verbose >= 4)console.log(`[lyntr.js]     Done.`);

        this.logged = true;
        this.loggedAt = new Date(Date.now())
        this.loggedAtTimestamp = Date.now();
        if(this.config.verbose >= 1) console.log(`[lyntr.js] Logged in as ${user.handle} (${user.username})`)

        ClientEmitter.emit("ready", this.loggedAt, user);
    }

    public async post(content: string, image?: Buffer) {
        
        if(!this.isLogged) throw new Error("Not logged in");

        let body: {[key:string]: any} = {
            content: content,
        }
        if(image) { throw new Error("Image is not supported yet") }
        if(image) {
            body['image'] = image;
        }
        let req: Types.API.Lynt = await APIInterface.requestEndpoint('POST', '/api/lynt', body, {
            'Content-Type': 'application/x-www-form-urlencoded'
        })
        return req;
    }

    public on = ClientEmitter.on;
    public emit = ClientEmitter.emit;

}

export {
    Client
}
