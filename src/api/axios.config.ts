// src/lib/axios.ts
import axios from 'axios';

// Create Axios instance
const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: true,
});

// 🔐 Add Bearer token from localStorage
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    console.log('[API REQUEST]', config.method?.toUpperCase(), config.url, config.data ?? '');
    return config;
}, (error) => {
    console.error('[REQUEST ERROR]', error);
    return Promise.reject(error);
});

// ✅ Log all successful responses
api.interceptors.response.use((response) => {
  console.log('[✅ RESPONSE]', {
    url: response.config.url,
    status: response.status,
    data: response.data,
  });

  return response;
}, (error) => {
  if (error.response) {
    // Server responded with non-2xx
    console.error('[❌ RESPONSE ERROR]', {
      url: error.config?.url,
      status: error.response.status,
      data: error.response.data,
    });

    if (error.response.status === 401) {
      // optional: redirect or logout
      // localStorage.removeItem('access_token');
      // window.location.href = '/login';
    }

  } else if (error.request) {
    // Request made but no response
    console.error('[⚠️ NO RESPONSE]', error.request);
  } else {
    // General Axios error
    console.error('[🔥 AXIOS ERROR]', error.message);
  }

  return Promise.reject(error);
});

export default api;