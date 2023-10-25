import APIError from "../errors/apiError";
import { delay } from "../utils/delay";

class HttpClient {
    baseURL: string;

    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    async get(path: string) {
        await delay(1000);

        const response = await fetch(`${this.baseURL}${path}`);

        let body = null;
        const contentType = response.headers.get("Content-Type");

        if (contentType?.includes("application/json")) {
            body = await response.json();
        }

        if (response.ok) {
            return body;
        }

        throw new APIError(
            body ? body.error : `${response.status} - ${response.statusText}`
        );
        // vai lançar um erro que será capturado no catch de onde esse get ta sendo chamado, e não precisa tratar com if/else no try
    }

    async post(path: string, _contact: any) {
        const response = await fetch(path);
        await delay(1000);
        return response.json();
    }

    async delete(id: string) {
        const response = await fetch(`${this.baseURL}/contacts/${id}`);
        // await delay(1000);
        return response.json();
    }
    async put(id: string) {
        const response = await fetch(`${this.baseURL}/contacts/${id}`);
        await delay(1000);
        return response.json();
    }
}

export default HttpClient;
