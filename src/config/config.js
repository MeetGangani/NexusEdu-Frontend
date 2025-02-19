const config = {
  API_BASE_URL: process.env.NODE_ENV === 'production' 
    ? 'https://nexus-edu-sigma.vercel.app'
    : 'http://localhost:5000',
  FRONTEND_URL: process.env.NODE_ENV === 'production'
    ? 'https://nexusedu-jade.vercel.app'
    : 'http://localhost:3000'
};

export default config; 