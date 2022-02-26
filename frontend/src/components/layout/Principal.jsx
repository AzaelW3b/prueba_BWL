import Navegacion from "./Navegacion";
import authContext from "../../context/auth/authContext";
import { useContext,useEffect } from "react";
const Principal = () => {
    const authcontext = useContext(authContext);
    const { usuarioAutenticado } = authcontext;
    useEffect(() => {
        usuarioAutenticado();
    }, []);
    return (
        <main className="principal">
            <Navegacion />
        </main>
    );
}

export default Principal;