module.exports = ((request, response, next) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "GET, DELETE, PUT, POST, PATCH");
    next();
});