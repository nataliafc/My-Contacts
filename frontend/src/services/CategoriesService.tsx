import HttpClient from "../utils/HttpClient";

class CategoriesService {
    httpClient: HttpClient;

    constructor() {
        this.httpClient = new HttpClient(`http://localhost:3002`);
    }
    async listCategories() {
        return this.httpClient.get(`/categories`);
    }
    async listCategoriesByName(name: string) {
        return this.httpClient.get(`/categories/${name}`);
    }
    async createCategory(category: any) {
        return this.httpClient.post(`/categories`, category);
    }
    async updateCategory(id: string) {
        return this.httpClient.put(`/categories/${id}`);
    }
    async deleteCategory(id: string) {
        return this.httpClient.delete(`/categories/${id}`);
    }
}

export default new CategoriesService();