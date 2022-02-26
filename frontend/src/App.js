import './sass/app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Usuarios from './components/layout/Usuarios';
import AuthState from './context/auth/authState';
import AlertaState from './context/alertas/alertaState';
import tokenAuth from './config/token';
import Principal from './components/layout/Principal';
import RutaPrivada from './components/rutas/RutaPrivada';
function App() {
  const token = localStorage.getItem('token');
  if (token) {
    tokenAuth(token);
  }
  return (
    <AlertaState>
      <AuthState>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" element={<Login />} />
              <Route path="/nueva-cuenta" element={<NuevaCuenta />} />
              <Route path="/principal" element={<RutaPrivada Component={Principal} />} />
              < Route path="/usuarios" element={<Usuarios/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthState>
    </AlertaState>
  );
}

export default App;
