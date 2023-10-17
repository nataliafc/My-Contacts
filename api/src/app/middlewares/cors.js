module.exports = ((request, response, next) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "X-App-ID");
    response.setHeader("Access-Control-Max-Age", "10"); // cacheamento da requisição de preflight
    response.setHeader("Access-Control-Allow-Methods", "GET, DELETE, PUT, POST, PATCH");

    next();
});