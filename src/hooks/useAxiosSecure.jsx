
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import useAuth from './useAuth';
import { useEffect } from 'react';


const useAxiosSecure = () => {
  const {logOutUser} = useAuth()
  const navigate = useNavigate(); 

  const axiosSecure = axios.create({
    baseURL: 'https://assignment-12-server-psi-three.vercel.app', 
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await logOutUser();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [logOutUser, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;