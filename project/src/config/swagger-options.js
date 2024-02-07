const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
        title: 'API de Mi Backend',
        version: '1.0.0',
        description: 'Documentación de la API de Mi Backend',
    },
    servers: [{
        url: 'http://localhost:3000',
        description: 'Servidor de desarrollo',
    }],
  },
  apis: ["./src/controller/usuario_controller.js", "./src/controller/video_controller.js"],
    // apis: ["./src/routes/usuario_rutas.js"],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {

  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(
    `Version 1 Docs are available on http://localhost:${port}/api/v1/docs`
  );
};

module.exports = { swaggerDocs };