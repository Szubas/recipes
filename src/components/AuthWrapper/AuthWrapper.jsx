import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const AuthWrapper = () => {
  const location = useLocation(); 

  const userLogged = localStorage.getItem("Uid")

  return userLogged
    ? <Outlet />
    : (
      <Navigate
        to="/"
        replace
        state={{ from: location }}
      />
    );
};
