import axios from 'axios';
import * as Types from './Types/index.js';

const UserAgent = 'lyntr-js/1.1.0';

class APIInterface {
    private baseURL: string | null;
    private Regexes: {[key:string]: RegExp} = {
        baseURL: /^(?:https?:\/\/)(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/g,
        baseHTTPS: /^(?:https:\/\/)/g
    }
    private BotToken: string | null;
    public static endpoints: {[key:string]: string} = {
        "lynt": "/api/lynt",
        "comment": "/api/comment",
    }
    constructor() {
        this.baseURL = null
        this.BotToken = null;
    }

    public setBaseURL(baseURL: string | undefined) {
        if(!baseURL) throw new Error('Base URL is undefined');
        let match = baseURL.match(this.Regexes.baseURL);
        if(!match || match[0] !== baseURL) {
            throw new Error('Invalid Base URL. URL must be in the format of https://example.com');
        }
        if(!baseURL.match(this.Regexes.baseHTTPS)) {
            console.warn('Base URL is not HTTPS. This may cause issues with the API');
        }
        this.baseURL = baseURL;
        return baseURL;
    }
    public setBotToken(cookie: string) {
        this.BotToken = cookie;
    }
    
    private buildHeaders(headers: {[key:string]: string}) {
        let _headers = {
            'Accept': '*/*',
            'Accept-Language': 'en-US,en;q=0.7',
            'Cookie': `_TOKEN__DO_NOT_SHARE=${this.BotToken}`,
            'Origin': this.baseURL as string,
            'User-Agent': UserAgent,
            'Cache-Control': 'no-store',
        }
        return {..._headers, ...headers};
    }

    /**
     * Request an endpoint on the website
     * @param method 
     * @param endpoint 
     * @param data 
     * @param headers
     * @returns
     */
    public async requestEndpoint(method: Types.global.HTTPMethod, endpoint:string, data: {[key:string]: any}={}, headers: {[key:string]: string}={}): Promise<any> {
        // Regex to match only the endpoint of a URL (ex: /api/comment)
        if(!endpoint.startsWith("/")) {
            throw new Error('Invalid Endpoint. Endpoint must start with a /');
        }
        const payload = {
            baseURL: this.baseURL as string,
            method: method,
            url: this.baseURL + endpoint,
            data: data,
            headers: this.buildHeaders(headers),
        }
        try {
            const response = await axios.request(payload)
            return response.data;
        } catch (error) {
            console.error(`Payload:`, payload);
            console.trace(`[Lyntr:10000] Error requesting endpoint: ${error}`,);
            console.log(error)
            return null;
        }
    }

}

const API = new APIInterface();
export default API;
