import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authContext from '../../context/auth/authContext';
import alertaContext from '../../context/alertas/alertaContext';
const Login = () => {
    const alertacontext = useContext(alertaContext);
    const { alerta, mostrarAlerta } = alertacontext;

    const authcontext = useContext(authContext);
    const { iniciarSesion, mensaje, registrado } = authcontext;
    const [usuario, guardarUsuario] = useState({
        correo: '',
        password: '',
    });
    const { correo, password } = usuario;
    let redireccionar = useNavigate();

    useEffect(() => {
        if (registrado) {
            redireccionar('/principal');
        }
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
    }, [mensaje,registrado]);
    const onSubmit = (e) => {
        e.preventDefault();
        if (correo.trim() === '' || password.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }
        iniciarSesion(usuario);
    }
    return (
        <div className="contenedor contenedor-formulario">
            <div className="contenedor-imagen">
                <h1>Bienvenido!</h1>
            </div>
            <form
                onSubmit={onSubmit}
                className="formulario"
            >
                <div className="formulario__input">
                {alerta ? (<p className={`alerta ${alerta.categoria}`}>{alerta.msg}</p>) : null}
                    <label htmlFor="correo">Correo electrónico</label>
                    <input
                        type="text"
                        placeholder="correo@correo.com"
                        id="correo"
                        name="correo"
                        value={correo}
                        onChange={(e) => guardarUsuario({ ...usuario, [e.target.name]: e.target.value })}
                    />
                </div>
                <div className="formulario__input">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="*********"
                        name="password"
                        value={password}
                        onChange={(e) => guardarUsuario({ ...usuario, [e.target.name]: e.target.value })}
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