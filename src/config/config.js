const config = {
  API_BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
  FRONTEND_URL: import.meta.env.VITE_FRONTEND_URL || 'https://nexuseduc.vercel.app'
};

export default config;