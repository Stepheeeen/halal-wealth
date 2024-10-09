const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: '',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
      headers: {
        Connection: 'keep-alive',
      },
    })
  );
};