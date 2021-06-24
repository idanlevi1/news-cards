import { Rest } from "./Rest"
import { URLS, KEYS } from './Enums';


class Api {
    constructor() {
        this.newsUrl = `${URLS.NEWS}?access_key=${KEYS.NEWS_URL_ACCESS_KEYS}`
    }
    GetNews(params) {
        return Rest(this.newsUrl, params)
    }
}

const api = new Api()
export default api