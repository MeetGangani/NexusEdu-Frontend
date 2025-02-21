const config = {
  API_BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
  FRONTEND_URL: process.env.NODE_ENV === 'production'
    ? 'https://nexuseduc.vercel.app'
    : 'http://localhost:3000'
};

export default config;