export const clearAuthStorage = () => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('token');
};

export const setAuthData = (userInfo, token) => {
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
  localStorage.setItem('token', token);
};

export const getAuthData = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo') || 'null');
  const token = localStorage.getItem('token');
  return { userInfo, token };
}; 