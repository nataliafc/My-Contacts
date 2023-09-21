const express = require("express");
const routes = require("./routes");
require('express-async-errors')

const app = express();

// middlewares
// sempre que um middleware tiver 4 argumentos, o Express já reconhece como um Error Handler
app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
    console.log(error);
    response.sendStatus(500);
});

app.listen(3002, () =>
    console.log("🔥 Server running at http://localhost:3002")
);
