import HttpClient from "../utils/HttpClient";

class ContactsService {
    httpClient: HttpClient;

    constructor() {
        this.httpClient = new HttpClient(`http://localhost:3002`);
    }
    async listContacts(orderBy = "asc") {
        return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
    }
    async listContactById(id: string) {
        return this.httpClient.get(`/contacts/${id}`);
    }
    async createContact(body: any) {
        return this.httpClient.post(`/contacts`, body);
    }
    // async updateContact(id: string) {
    //     return this.httpClient.put(`/contacts/${id}`);
    // }
    // async deleteContact(id: string) {
    //     return this.httpClient.delete(`/contacts/${id}`);
    // }
}

export default new ContactsService();
