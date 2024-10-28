// next.config.mjs
import { createProxyMiddleware } from 'http-proxy-middleware';

export default {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://sandbox.api.halalwealth.co/services/:path*', // Proxy to API
      },
    ];
  },
};