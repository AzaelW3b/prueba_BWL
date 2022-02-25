// import imagenFondo from '../../img/bg.jpg';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className="contenedor contenedor-formulario">
            <div className="contenedor-imagen">
                <h1>Bienvenido!</h1>
            </div>
            <form className="formulario">
                <div className="formulario__input">
                    <label htmlFor="correo">Correo electrónico</label>
                    <input
                        type="text"
                        placeholder="correo@correo.com"
                        id="correo"
                    />
                </div>
                <div className="formulario__input">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="*********"
                    />
                </div>
                <div className="formulario__input">
                    <input
                        type="submit"
                        value="Iniciar Sesión"
                    />
                </div>
                <div className="formulario__nocuenta">
                    <p>¿No tienes cuenta?</p>
                    <Link to="/nueva-cuenta">Registrarme</Link>
                </div>
            </form>
        </div>

    );
}

export default Login;