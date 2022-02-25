import './sass/app.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Login/>}/>
          <Route path="/nueva-cuenta" element={<NuevaCuenta/>}/>
          <Route path="/princial"/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
