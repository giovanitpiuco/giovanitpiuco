const {createProxyMiddleware}  = require ("http-proxy-middleware")

//regra do meu proxy

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: "http://localhost:3669/"
        })
    )
        
    
}
