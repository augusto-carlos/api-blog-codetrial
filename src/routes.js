const express = require('express')

const routes = express.Router()

// Controllers
const UsersController = require('./controllers/UsersController')
const PostsController = require('./controllers/PostsController')
const CategoriesController = require('./controllers/CategoriesController')


// Users
routes.get('/users', UsersController.show)
routes.get('/users/:id', UsersController.single)
routes.post('/users', UsersController.create)
routes.put('/users/:id', UsersController.update)
routes.delete('/users/:id', UsersController.delete)

// Categories
routes.get('/categories', CategoriesController.show)
routes.get('/categories/:id', CategoriesController.single)
routes.post('/categories', CategoriesController.create)
routes.put('/categories/:id', CategoriesController.update)
routes.delete('/categories/:id', CategoriesController.delete)

// Posts
routes.get('/posts', PostsController.show)
routes.get('/posts/:id', PostsController.single)
routes.post('/posts', PostsController.create)
routes.put('/posts/:id', PostsController.update)
routes.delete('/posts/:id', PostsController.delete)

module.exports = routes;
