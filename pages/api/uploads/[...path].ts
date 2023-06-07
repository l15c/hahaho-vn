import httpProxy from 'http-proxy';
import { NextApiRequest, NextApiResponse } from 'next';

const proxy = httpProxy.createProxyServer();

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};

const handler = (req: NextApiRequest, res: NextApiResponse) =>
  new Promise<void>((resolve) => {
    req.headers.cookie = '';

    req.url = req.url?.replace('/api', '');

    proxy.web(req, res, {
      target: process.env.CMS_API_URL,
      changeOrigin: true,
    });

    proxy.once('proxyRes', () => {
      resolve();
    });
  });

export default handler;
