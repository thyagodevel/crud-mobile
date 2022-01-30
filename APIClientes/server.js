const express = require('express');

const app = express();

// Body-parser config
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// VIEW ENGINE SETUP
app.set('view engine', 'ejs');
app.use(express.static('public'));

// DB CONFIG
const connection = require('./config/db');
connection
    .authenticate()
    .then(() => { console.log("Conexão autenticada"); })
    .catch(error => { console.log(error); });

// SETTING ROUTES
const customersRoutes = require('./routes/customersRoutes');
const pagesRoutes = require('./routes/pagesRoutes');
customersRoutes(app);
pagesRoutes(app);

app.listen(8080, () => { console.log("Tá rodando o back-end Thyagão! 🚀"); });