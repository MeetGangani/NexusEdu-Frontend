import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '../config/config.js';

const usersApiSlice = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${config.API_BASE_URL}/api` }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: '/users/auth',
        method: 'POST',
        body: data,
        credentials: 'include'
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/api/users/logout',
        method: 'POST',
        credentials: 'include'
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: '/users',
        method: 'POST',
        body: userData,
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: '/api/users/profile',
        method: 'PUT',
        body: data,
        credentials: 'include'
      }),
    }),
    googleAuth: builder.mutation({
      query: () => ({
        url: '/api/users/auth/google',
        method: 'GET',
        credentials: 'include'
      }),
    }),
    checkAuth: builder.query({
      query: () => ({
        url: '/users/check-auth',
        method: 'GET',
        credentials: 'include'
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
  useGoogleAuthMutation,
  useCheckAuthQuery,
} = usersApiSlice;

export default usersApiSlice.reducer;
