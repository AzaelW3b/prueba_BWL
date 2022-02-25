import { Link } from "react-router-dom";
const NuevaCuenta = () => {
    return (
        <div className="contenedor contenedor-formulario">
            <div className="contenedor-imagen">
                <h1>Registrate!</h1>
            </div>
            <form className="formulario">
                <div className="formulario__input">
                    <label htmlFor="nombre">Nombre completo</label>
                    <input
                        type="text"
                        placeholder="Azael Garcia Jaimes"
                        id="nombre"
                    />
                </div>
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
                    <label htmlFor="passwordconfirmar">Confirmar contraseña</label>
                    <input
                        id="passwordconfirmar"
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
                    <p>¿Ya tienes cuenta?</p>
                    <Link to="/">Iniciar sesión</Link>
                </div>
            </form>
        </div>
    );
}

export default NuevaCuenta;