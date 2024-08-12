var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import APIInterface from './APIInterface.js';
import ClientEmitter from './ClientEmitter.js';
import cacheManager from './cacheManager.js';
import * as mainLoop from './mainLoop.js';
class Client {
    constructor(botInputConfig) {
        this.on = ClientEmitter.on;
        this.emit = ClientEmitter.emit;
        if (Client.Instance)
            throw new Error("Client already exists");
        Client.Instance = this;
        if (botInputConfig == undefined || typeof botInputConfig !== 'object' || !botInputConfig)
            throw new Error("botInputConfig is required");
        if (!botInputConfig.hasOwnProperty("baseURL"))
            throw new Error("Base URL is required");
        this.config = {
            verbose: botInputConfig.hasOwnProperty("verbose") ? botInputConfig.verbose : false
        };
        APIInterface.setBaseURL(botInputConfig.baseURL);
        this.token = null;
        this.logged = false;
        this.cacheManager = cacheManager;
        this.loggedAt = new Date(99999999999999);
        this.loggedAtTimestamp = 99999999999999;
        this._user = null;
    }
    get isLogged() { return this.logged && this.token !== null; }
    get user() { return this._user; }
    get posts() {
        return this.cacheManager.getCache('posts');
    }
    login(token) {
        return __awaiter(this, void 0, void 0, function* () {
            this.token = token;
            APIInterface.setBotToken(token);
            yield mainLoop.__init__();
            mainLoop.start();
            const user = yield APIInterface.requestEndpoint('GET', '/api/me');
            this._user = user;
            this.logged = true;
            this.loggedAt = new Date(Date.now());
            this.loggedAtTimestamp = Date.now();
            ClientEmitter.emit("ready", this.loggedAt, user);
        });
    }
    post(content, image) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isLogged)
                throw new Error("Not logged in");
            let body = {
                content: content,
            };
            if (image) {
                throw new Error("Image is not supported yet");
            }
            if (image) {
                body['image'] = image;
            }
            let req = yield APIInterface.requestEndpoint('POST', '/api/lynt', body, {
                'Content-Type': 'application/x-www-form-urlencoded'
            });
            return req;
        });
    }
}
export { Client };
//# sourceMappingURL=Client.js.map