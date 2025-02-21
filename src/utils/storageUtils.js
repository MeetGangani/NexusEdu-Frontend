export const clearAuthStorage = () => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('token');
};

export const setAuthData = (userInfo, token) => {
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
  localStorage.setItem('token', token);
};

export const getAuthData = () => {
  try {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const token = localStorage.getItem('token');
    return { userInfo, token };
  } catch (error) {
    clearAuthStorage();
    return { userInfo: null, token: null };
  }
};

export const updateAuthData = (updates) => {
  const currentData = getAuthData();
  const updatedUserInfo = { ...currentData.userInfo, ...updates };
  localStorage.setItem('userInfo', JSON.stringify(updatedUserInfo));
  return updatedUserInfo;
}; 