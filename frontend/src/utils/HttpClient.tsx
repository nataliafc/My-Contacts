import APIError from "../errors/apiError";
import { delay } from "../utils/delay";

class HttpClient {
    baseURL: string;

    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    async makeRequest(path: string, options: any) {
        await delay(1000);

        const headers = new Headers();

        if (options.body) {
            headers.append("Content-Type", "application/json");
        }

        if (options.headers) {
            Object.keys(options.headers).forEach((name) => {
                headers.append(name, options.headers[name]);
            });
        }

        const response = await fetch(`${this.baseURL}${path}`, {
            method: options.method,
            body: JSON.stringify(options.body),
            headers,
        });

        let responseBody = null;
        const contentType = response.headers.get("Content-Type");

        if (contentType?.includes("application/json")) {
            responseBody = await response.json();
        }

        if (response.ok) {
            return responseBody;
        }

        // vai lançar um erro que será capturado no catch de onde esse get ta sendo chamado, e não precisa tratar com if/else no try
        throw new APIError(
            responseBody
                ? responseBody.error
                : `${response.status} - ${response.statusText}`
        );
    }

    get(path: string) {
        return this.makeRequest(path, { method: "GET" });
    }

    post(path: string, body: any) {
        return this.makeRequest(path, {
            method: "POST",
            body,
        });
    }

    put(path: string, id: string, body: any) {
        return this.makeRequest(`${path}/${id}`, {
            method: "PUT",
            body,
        });
    }

    delete(path: string, id: string) {
        return this.makeRequest(`${path}/${id}`, {
            method: "DELETE",
        });
    }
}

export default HttpClient;
