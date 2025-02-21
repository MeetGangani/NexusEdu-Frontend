import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL || 'https://nexus-edu-sigma.vercel.app',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add request interceptor to add auth token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('userToken'); // or however you store your token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 403) {
      console.error('CORS Error:', error);
      // Handle CORS error (e.g., redirect to login or show message)
    }
    return Promise.reject(error);
  }
);

export default axiosInstance; 