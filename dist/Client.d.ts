/// <reference types="node" resolution-mode="require"/>
import * as Types from './Types/index.js';
declare class Client {
    private token;
    private logged;
    private cacheManager;
    loggedAt: Date;
    static Instance: Client;
    constructor(datas: {
        baseURL: string;
    });
    get isLogged(): boolean;
    get posts(): Map<any, any>;
    login(token: string): Promise<void>;
    post(content: string, image?: Buffer): Promise<Types.API.Lynt>;
    on: Function;
    emit: Function;
}
export { Client };
