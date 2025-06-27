import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext }      from '../contexts/AuthContext';

export default function ProtectedRoute() {
  const { loggedIn } = useContext(AuthContext);
  return loggedIn
    ? <Outlet />           // renderiza Layout + Página interna
    : <Navigate to="/login" replace />;
}