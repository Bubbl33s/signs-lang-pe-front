import axios from 'axios';
import { apiConfig } from '../config/apiConfig';

export const apiClient = axios.create({
  baseURL: apiConfig.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: apiConfig.timeout,
});

export const apiClientMultipart = axios.create({
  baseURL: apiConfig.baseURL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  timeout: apiConfig.timeout,
});

export function setAuthToken(token: string | null) {
  if (token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete apiClient.defaults.headers.common['Authorization'];
  }
}
