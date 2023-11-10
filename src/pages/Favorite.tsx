import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
const Favorite: React.FC = () => {
  const { isAuth } = useAuth();

  return <div>{!isAuth && <Navigate to={'/'}></Navigate>}</div>;
};

export default Favorite;
