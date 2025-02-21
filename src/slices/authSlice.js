import { createSlice } from '@reduxjs/toolkit';
import { setAuthData, clearAuthStorage, getAuthData } from '../utils/storageUtils';

const initialState = {
  userInfo: getAuthData().userInfo,
  token: getAuthData().token,
  loading: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token, ...userInfo } = action.payload;
      state.userInfo = userInfo;
      state.token = token;
      setAuthData(userInfo, token);
    },
    logout: (state) => {
      state.userInfo = null;
      state.token = null;
      clearAuthStorage();
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearError: (state) => {
      state.error = null;
    },
    updateUserInfo: (state, action) => {
      state.userInfo = {
        ...state.userInfo,
        ...action.payload
      };
      localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
    }
  },
});

export const { 
  setCredentials, 
  logout, 
  setLoading, 
  setError, 
  clearError,
  updateUserInfo 
} = authSlice.actions;

// Selectors
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectCurrentUser = (state) => state.auth.userInfo;
export const selectAuthLoading = (state) => state.auth.loading;
export const selectAuthError = (state) => state.auth.error;

export default authSlice.reducer;