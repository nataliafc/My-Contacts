import HttpClient from "../utils/HttpClient";

class ContactsService {
    httpClient: HttpClient;

    constructor() {
        this.httpClient = new HttpClient(`http://localhost:3002`);
    }
    async listContacts(orderBy = "asc") {
        return this.httpClient.get(`/conatacts?orderBy=${orderBy}`);
    }
    async listContactById(id: string) {
        return this.httpClient.get(`/contacts/${id}`);
    }
    async createContact(contact: any) {
        return this.httpClient.post(`/contacts`, contact);
    }
    async updateContact(id: string) {
        return this.httpClient.put(`/contacts/${id}`);
    }
    async deleteContact(id: string) {
        return this.httpClient.delete(`/contacts/${id}`);
    }
}

export default new ContactsService();