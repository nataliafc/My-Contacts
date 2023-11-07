const ContactsRepository = require("../repositories/ContactsRepository");
const isValidUUID = require("../utils/isValidUUID");

class ContactsController {
    async listAllContacts(request, response) {
        const { orderBy } = request.query;
        const contacts = await ContactsRepository.findAll(orderBy);
        if (!contacts) {
            return response.status(404).json({ error: "Empty list!" });
        }

        response.status(200).json(contacts);
    }

    async listContactById(request, response) {
        const { id } = request.params;

        if (!isValidUUID(id)) {
            return response.status(400).json({ error: "Invalid contact id" });
        }

        const contact = await ContactsRepository.findById(id);
        if (!contact) {
            return response.status(404).json({ error: "Contact not found" });
        }
        response.status(200).json(contact);
    }


    async createContact(request, response) {
        const { name, email, phone, category_id } = request.body;
        if (!name) {
            return response.status(400).json({ error: "Name is required" });
        }

        if (category_id && !isValidUUID(category_id)) {
            return response.status(400).json({ error: "Invalid category" });
        }

        if(email) {
            const contactExists = await ContactsRepository.findByEmail(email);
            if (contactExists) {
                return response
                    .status(400)
                    .json({ error: "This email is already in use" });
            }
        }


        const contact = await ContactsRepository.create({
            name,
            email: email || null,
            phone,
            category_id: category_id || null,
        });
        response.status(201).json(contact);
    }

    async updateContact(request, response) {
        const { id } = request.params;
        const { name, email, phone, category_id } = request.body;

        if (!isValidUUID(id)) {
            return response.status(400).json({ error: "Invalid contact id" });
        }

        if (category_id && !isValidUUID(category_id)) {
            return response.status(400).json({ error: "Invalid category" });
        }

        if (!name) {
            return response.status(400).json({ error: "Name is required." });
        }

        const contactExists = await ContactsRepository.findById(id);
        if (!contactExists) {
            return response.status(404).json({ error: "Contact not found" });
        }

        if(email) {
            const emailContactExists = await ContactsRepository.findByEmail(email);
            if (emailContactExists && emailContactExists.id !== id) {
                return response
                    .status(400)
                    .json({ error: "This email is already in use" });
            }
        }


        const contact = await ContactsRepository.update(id, {
            name,
            email: email || null,
            phone,
            category_id: category_id || null,
        });
        response.status(200).json(contact);
    }

    async deleteContact(request, response) {
        const { id } = request.params;

        if (!isValidUUID(id)) {
            return response.status(400).json({ error: "Invalid contact id" });
        }

        await ContactsRepository.delete(id);
        response.sendStatus(204);
    }
}

module.exports = new ContactsController();
