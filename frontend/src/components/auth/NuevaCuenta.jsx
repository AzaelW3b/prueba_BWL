import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import authContext from "../../context/auth/authContext";
import alertaContext from '../../context/alertas/alertaContext';
const NuevaCuenta = () => {
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        correo: '',
        password: '',
        confirmar: ''
    });
    const { nombre, correo, password, confirmar } = usuario;
    const authcontext = useContext(authContext);
    const { registrarUsuario, mensaje, registrado } = authcontext;

    const alertacontext = useContext(alertaContext);
    const { alerta, mostrarAlerta } = alertacontext;


    let redireccionar = useNavigate();
    //el usuario se registro correctamente
    useEffect(()=>{
        if(registrado){
            redireccionar('/principal')
        }
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
    },[registrado,mensaje]);
    const onSubmit = e => {
        e.preventDefault();
        if([nombre, correo, password, confirmar].includes('')){
            mostrarAlerta('Todos los campos son obligatorios','alerta-error');
            return;
        }
        if(password.length < 6){
            mostrarAlerta('El password debe ser al menos de 6 caracteres','alerta-error');
            return;
        }
        if(password !== confirmar){
            mostrarAlerta('Los passwords no son iguales','alerta-error');
            return;
        }
        registrarUsuario({nombre, correo, password});
    }
    return (
        <div className="contenedor contenedor-formulario">
            <div className="contenedor-imagen">
                <h1>Registrate!</h1>
            </div>
            {alerta ? (<p className={`alerta ${alerta.categoria}`}>{alerta.msg}</p>):null}
            <form
                className="formulario"
                onSubmit={onSubmit}
            >
                <div className="formulario__input">
                    <label htmlFor="nombre">Nombre completo</label>
                    <input
                        type="text"
                        placeholder="Azael Garcia Jaimes"
                        id="nombre"
                        value={nombre}
                        name="nombre"
                        onChange={(e) => guardarUsuario({ ...usuario, [e.target.name]: e.target.value })}
                    />
                </div>
                <div className="formulario__input">
                    <label htmlFor="correo">Correo electrónico</label>
                    <input
                        type="email"
                        placeholder="correo@correo.com"
                        id="correo"
                        value={correo}
                        name="correo"
                        onChange={(e) => guardarUsuario({ ...usuario, [e.target.name]: e.target.value })}
                    />
                </div>
                <div className="formulario__input">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="*********"
                        value={password}
                        name="password"
                        onChange={(e) => guardarUsuario({ ...usuario, [e.target.name]: e.target.value })}
                    />
                </div>
                <div className="formulario__input">
                    <label htmlFor="passwordconfirmar">Confirmar contraseña</label>
                    <input
                        id="passwordconfirmar"
                        type="password"
                        placeholder="*********"
                        value={confirmar}
                        name="confirmar"
                        onChange={(e) => guardarUsuario({ ...usuario, [e.target.name]: e.target.value })}
                    />
                </div>

                <div className="formulario__input">
                    <input
                        type="submit"
                        value="Registrarme"
                    />
                </div>
                <div className="formulario__nocuenta">
                    <p>¿Ya tienes cuenta?</p>
                    <Link to="/">Iniciar sesión</Link>
                </div>
            </form>
        </div>
    );
}

export default NuevaCuenta;