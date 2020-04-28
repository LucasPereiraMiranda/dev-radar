
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:vyvxlknb087@cluster0-zbvy8.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors({}));
app.use(express.json());
app.use(routes);

app.listen(3333);





// metodos HTTP : GET,POST,PUT,DELETE

// tipos de parametros

// Query params: request.query (filtros, ordenação, paginação)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-Relacional)