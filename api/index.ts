import 'server-only';

import axios from 'axios';
import { Config } from '@/types/common';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: process.env.CMS_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
  },
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject((error && error.response) || 'Đã có lỗi xảy ra')
);

export const GET = <Res>(url: string, cfg?: Config) =>
  axiosInstance.get<never, Res>(url, cfg);

export const POST = <Req, Res>(url: string, body: Req, cfg?: Config<Req>) =>
  axiosInstance.post<never, Res, Req>(url, body, cfg);

export const PUT = <Req, Res>(url: string, body: Req, cfg?: Config<Req>) =>
  axiosInstance.put<never, Res, Req>(url, body, cfg);

export const DELETE = <Res>(url: string, cfg?: Config) =>
  axiosInstance.delete<never, Res>(url, cfg);

export default axiosInstance;
