import * as Types from './Types/index.js';
declare class APIInterface {
    private baseURL;
    private Regexes;
    private BotToken;
    static endpoints: {
        [key: string]: string;
    };
    constructor();
    setBaseURL(baseURL: string | undefined): string;
    setBotToken(cookie: string): void;
    private buildHeaders;
    /**
     * Request an endpoint on the website
     * @param method
     * @param endpoint
     * @param data
     * @param headers
     * @returns
     */
    requestEndpoint(method: Types.global.HTTPMethod, endpoint: string, data?: {
        [key: string]: any;
    }, headers?: {
        [key: string]: string;
    }): Promise<any>;
}
declare const API: APIInterface;
export default API;
