const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};

// The http-proxy-middleware package is a middleware for Express that enables you to proxy requests from your Express server to another server or API. It allows you to create flexible proxy configurations and handle various proxy scenarios.
