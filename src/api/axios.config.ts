// src/lib/axios.ts
import axios from 'axios';

// Create Axios instance
const api = axios.create({
  baseURL: 'http://localhost:5000',
  // withCredentials: true,
});

// 🔐 Add Bearer token from localStorage
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('user_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  console.log('[API REQUEST]', config.method?.toUpperCase(), config.url, config.data ?? '');
  return config;
}, (error) => {
  console.error('[REQUEST ERROR]', error);
  return error
});

// ✅ Log all successful responses
api.interceptors.response.use(
  (response) => {
    console.log('[✅ RESPONSE]', {
      url: response.config.url,
      status: response.status,
      data: response.data,
    });

    return response;
  },
  (error) => {
    if (error.response) {
      console.log('[❌ RESPONSE ERROR]', {
        url: error.config?.url,
        status: error.response.status,
        data: error.response.data,
      });
      return {
        error: true,
        data: error.response.data,
        status: error.response.status,
      }
    }
  }
)



export default api;