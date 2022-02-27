import { useContext, useEffect, useState } from "react";
import TareaContext from "../../context/tareas/TareaContext";
const Tareas = () => {
    const tareacontext = useContext(TareaContext);
    const { obtenerTareas, tareas, agregarTarea, actualizarTarea, taraesCompletadas} = tareacontext;
    const [nombreTarea, guardarNombreTarea] = useState({
        nombre: ''
    });
    const { nombre } = nombreTarea;
    useEffect(() => {
        obtenerTareas();
    }, []);
    const onSubmit = (e) => {
        e.preventDefault();
        agregarTarea(nombreTarea);
    }
    const cambiarEstado = tarea => {
        if (tarea.completada) {
            tarea.completada = false;
        } else {
            tarea.completada = true;
        }
        actualizarTarea(tarea);
    }
    console.log(taraesCompletadas);
    return (
        <div className="dashboard__tareas contenedor">
            <h2>{tareas.length === 0 ? 'No hay tareas.' : 'Tareas pendientes'}</h2>
            <form
                onSubmit={onSubmit}
            >
                <input
                    onChange={(e) => guardarNombreTarea({ ...nombreTarea, [e.target.name]: e.target.value })}
                    type="text"
                    name="nombre"
                    value={nombre}
                    placeholder="Ingresa el nombre de la tarea"
                />
                <input className="btn-submit" type="submit" value="Agregar tarea" />
            </form>
            <ul>
                {tareas.length === 0 ? null : (
                    tareas.map(tarea => (
                        <li key={tarea._id}>
                            <p>{tarea.nombre}</p>
                            <input type="checkbox" onClick={() => cambiarEstado(tarea)} />
                            {/* <button>&#10005;</button> */}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default Tareas;