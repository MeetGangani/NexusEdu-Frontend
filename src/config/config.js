const config = {
  API_BASE_URL: import.meta.env.REACT_APP_API_URL || 'http://localhost:5000',
  FRONTEND_URL: import.meta.env.NODE_ENV === 'production'
    ? 'https://nexuseduc.vercel.app'
    : 'http://localhost:3000'
};

export default config;