
const { Router } = require('express');
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')
// index -> listar todos 
// show -> listar um especifico
// store -> para criar
// update -> atualizar
// destroy -> deletar


const routes = Router();
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search',SearchController.index);

module.exports = routes
