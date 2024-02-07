const express = require('express');
const morgan = require('morgan');
const config = require('./config/config.js');

const usuarios = require('./routes/usuarios_rutas.js');
const videos = require('./routes/videos_rutas.js');
const errors = require('./red/errors');

const bodyParser = require("body-parser");
const { swaggerDocs: V1SwaggerDocs } = require("./config/swagger-options.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/usuarios", usuarios);
app.use("/api/v1/videos", videos);

app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
    V1SwaggerDocs(app, PORT);
});  

//Middlewares
app.use(morgan('dev'));

app.use(express.json());

app.set('port', config.app.port);

// app.use('/api/usuarios', usuarios);
app.use('/api/videos', videos);
app.use(errors);

module.exports = app;