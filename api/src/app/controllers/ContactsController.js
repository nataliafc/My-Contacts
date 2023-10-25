const ContactsRepository = require("../repositories/ContactsRepository");

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
        const contact = await ContactsRepository.findById(id);
        if (!contact) {
            return response.status(404).json({ error: "Contact not found" });
        }
        response.status(200).json(contact);
    }



    async createContact(request, response) {
        const { name, email, phone, category_id } = request.body;
        if (!name) {
            return response.status(400).json({ error: "Name is required." });
        }

        const contactExists = await ContactsRepository.findByEmail(email);
        if (contactExists) {
            return response
                .status(400)
                .json({ error: "This email is already in use." });
        }

        const contact = await ContactsRepository.create({
            name,
            email,
            phone,
            category_id,
        });
        response.status(201).json(contact);
    }



    async updateContact(request, response) {
        const { id } = request.params;
        const { name, email, phone, category_id } = request.body;

        const contactExists = await ContactsRepository.findById(id);
        const emailContactExists = await ContactsRepository.findByEmail(email);
        if (!contactExists) {
            return response.status(404).json({ error: "Contact not found" });
        }

        if (!name) {
            return response.status(400).json({ error: "Name is required." });
        }

        if (emailContactExists && emailContactExists.id !== id) {
            return response
                .status(400)
                .json({ error: "This email is already in use." });
        }

        const contact = await ContactsRepository.update(id, {
            name,
            email,
            phone,
            category_id,
        });
        response.status(200).json(contact);
    }



    async deleteContact(request, response) {
        const { id } = request.params;

        await ContactsRepository.delete(id);
        response.sendStatus(204);
    }


}


module.exports = new ContactsController();
