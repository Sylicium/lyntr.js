var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
import { Client } from './Client.js';
const UserAgent = 'lyntr-js/1.1.0';
class APIInterface {
    constructor() {
        this.Regexes = {
            baseURL: /^(?:https?:\/\/)(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/g,
            baseHTTPS: /^(?:https:\/\/)/g
        };
        this.baseURL = null;
        this.BotToken = null;
    }
    setBaseURL(baseURL) {
        if (!baseURL)
            throw new Error('Base URL is undefined');
        let match = baseURL.match(this.Regexes.baseURL);
        if (!match || match[0] !== baseURL) {
            throw new Error('Invalid Base URL. URL must be in the format of https://example.com');
        }
        if (!baseURL.match(this.Regexes.baseHTTPS)) {
            console.warn('Base URL is not HTTPS. This may cause issues with the API');
        }
        this.baseURL = baseURL;
        return baseURL;
    }
    setBotToken(cookie) {
        this.BotToken = cookie;
    }
    buildHeaders(headers) {
        let _headers = {
            'Accept': '*/*',
            'Accept-Language': 'en-US,en;q=0.7',
            'Cookie': `_TOKEN__DO_NOT_SHARE=${this.BotToken}`,
            'Origin': this.baseURL,
            'User-Agent': UserAgent,
            'Cache-Control': 'no-store',
        };
        return Object.assign(Object.assign({}, _headers), headers);
    }
    /**
     * Request an endpoint on the website
     * @param method
     * @param endpoint
     * @param data
     * @param headers
     * @returns
     */
    requestEndpoint(method_1, endpoint_1) {
        return __awaiter(this, arguments, void 0, function* (method, endpoint, data = {}, headers = {}) {
            // Regex to match only the endpoint of a URL (ex: /api/comment)
            if (!endpoint.startsWith("/")) {
                throw new Error('Invalid Endpoint. Endpoint must start with a /');
            }
            const payload = {
                baseURL: this.baseURL,
                method: method,
                url: this.baseURL + endpoint,
                data: data,
                headers: this.buildHeaders(headers),
            };
            try {
                const response = yield axios.request(payload);
                return response.data;
            }
            catch (error) {
                if (Client.Instance.config.verbose >= 5)
                    console.error(`Payload:`, payload);
                if (Client.Instance.config.verbose >= 4)
                    console.trace(`[Lyntr:10000] Error requesting endpoint: ${error}`);
                if (Client.Instance.config.verbose >= 5)
                    console.log(error);
                return null;
            }
        });
    }
}
APIInterface.endpoints = {
    "lynt": "/api/lynt",
    "comment": "/api/comment",
};
const API = new APIInterface();
export default API;
//# sourceMappingURL=APIInterface.js.map