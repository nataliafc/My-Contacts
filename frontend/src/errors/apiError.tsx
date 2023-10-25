export default class APIError extends Error {
    constructor(message: string) {
        super(message);

        this.name = "API Error";
    }
}
