const CategoriesRepository = require("../repositories/CategoriesRepository");

class CategoriesController {
    async listAllCategories(request, response) {
        const { orderBy } = request.query
        const categories = await CategoriesRepository.findAll(orderBy);

        response.status(200).json(categories);
    }

    async listCategoryById(request, response) {
        const { id } = request.params;
        const category = await CategoriesRepository.findById(id);
        if (!category) {
            return response.status(404).json({ error: "Category not found" });
        }
        response.status(200).json(category);
    }

    async createCategory(request, response) {
        const { name } = request.body;

        if (!name) {
            return response.status(400).json({ error: "Name is required." });
        }

        const categoryExists = await CategoriesRepository.findByName(name);

        if (categoryExists) {
            return response
                .status(400)
                .json({ error: "This category is already registered." });
        }

        const category = await CategoriesRepository.create({ name });
        response.status(201).json(category);
    }

    async updateCategory(request, response) {
        const { id } = request.params;
        const { name } = request.body

        const categoryExists = await CategoriesRepository.findById(id);
        const categoryNameExists = await CategoriesRepository.findByName(name);

        if (!categoryExists) {
            return response.status(404).json({ error: "Category not found." });
        }

        if (!name) {
            return response.status(400).json({ error: "Name is required." });
        }

        if (categoryNameExists && categoryNameExists.id !== id) {
            return response.status(400).json({ error: "This category is already registered." });
        }

        const category = await CategoriesRepository.update(id, { name });
        response.status(200).json(category);
    }

    async deleteCategory(request, response) {
        const { id } = request.params;

        await CategoriesRepository.delete(id);
        response.sendStatus(204);
    }
}
module.exports = new CategoriesController();