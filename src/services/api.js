import { CancelToken, get } from "axios";

export class ApiService {
    constructor(url) {
        this.url = url;
        this.cancelToken = CancelToken.source();

    }

    async httpGet(endpoint = '') {
        this.cancelToken.cancel("Cancelled outgoing request");
        this.cancelToken = CancelToken.source();
        const response = await get(`${this.url}${endpoint}`, {cancelToken: this.cancelToken});
        return response.data;
    }


}