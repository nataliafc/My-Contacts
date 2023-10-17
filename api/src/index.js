require("express-async-errors");

const express = require("express");
const routes = require("./routes");
const cors = require("./app/middlewares/cors");
const errorHandler = require("./app/middlewares/errorHandler");

const app = express();

// middlewares
// sempre que um middleware tiver 4 argumentos, o Express já reconhece como um Error Handler (ver a lógica no módulo)
app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandler)

app.listen(3002, () =>
    console.log("🔥 Server running at http://localhost:3002")
);
