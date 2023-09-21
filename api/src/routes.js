const express = require('express')
const ContactsController = require('./app/controllers/ContactsController')
const CategoriesController = require('./app/controllers/CategoriesController')

const router = express.Router()

router.get('/contacts', ContactsController.listAllContacts)
router.get('/contacts/:id', ContactsController.listContactById)
router.post('/contacts', ContactsController.createContact)
router.patch('/contacts/:id', ContactsController.updateContact)
router.delete('/contacts/:id', ContactsController.deleteContact)

router.get('/categories', CategoriesController.listAllCategories)
router.get('/categories/:id', CategoriesController.listCategoryById)
router.post('/categories', CategoriesController.createCategory)
router.patch('/categories/:id', CategoriesController.updateCategory)
router.delete('/categories/:id', CategoriesController.deleteCategory)

module.exports = router;