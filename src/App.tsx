import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from './pages/login/LoginPage';
import { AuthContext, AuthProvider } from './contexts/AuthContext';
import UserPage from './pages/user/UserPage';

function ProtectedRoute() {
  const { loggedIn } = React.useContext(AuthContext);
  return loggedIn
    ? <Outlet />
    : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          <Route element={<ProtectedRoute />}>
            <Route path="/user" element={<UserPage />} />
          </Route>
          <Route
            path="/"
            element={
              <React.Suspense fallback={null}>
                <AuthContext.Consumer>
                  {({ loggedIn }) =>
                    loggedIn
                      ? <Navigate to="/user" replace />
                      : <Navigate to="/login" replace />
                  }
                </AuthContext.Consumer>
              </React.Suspense>
            }
          />
          <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>
      </BrowserRouter>

    </AuthProvider>
  );
}