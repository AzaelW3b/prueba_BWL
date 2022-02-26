import './sass/app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import AuthState from './context/auth/authState';
import Principal from './components/layout/Principal';
import RutaPrivada from './components/rutas/RutaPrivada';
function App() {
  return (
    <AuthState>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Login />} />
            <Route path="/nueva-cuenta" element={<NuevaCuenta />} />
            <Route path="/principal" element={<RutaPrivada Component={Principal} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthState>
  );
}

export default App;
