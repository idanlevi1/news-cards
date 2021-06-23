import { Rest } from "./Rest"
import { URLS, KEYS } from './Enums';


class Api {
    constructor() { }
    // request structure : (auth, path, method, body, params, file)
    GetNews(params) {
        return Rest(`${URLS.NEWS}?access_key=${KEYS.NEWS_URL_ACCESS_KEYS}`, params)
    }
}

const api = new Api()
export default api