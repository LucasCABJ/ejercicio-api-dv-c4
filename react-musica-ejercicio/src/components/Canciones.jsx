import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Canciones = () => {

    const [canciones, setCanciones] = useState([]);
    const [errorFetching, setErrorFetching] = useState(false);
    const [loading, setLoading] = useState(true);

    const getCanciones = async () => {
        try {
            setLoading(true);
            const resultado = await fetch("http://localhost:8888/cancion");
            const data = await resultado.json();
            setCanciones(data.results);
            setLoading(false);
        } catch (e) {
            setErrorFetching(true);
        }
    }

    useEffect(() => {
        getCanciones();
    }, []);

    return <>
        {(!errorFetching) ?
        <div className="container">
            <div className="row">
                <h1 className="py-5 px-3">Las Más Escuchadas</h1>
            </div>
            <div className="row">
                {(loading) ? 
                <h2 className="p-4">Cargando los datos...</h2>
                :
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Letra</th>
                        </tr>
                    </thead>
                    <tbody>
                        {canciones.map((item, key) => {
                            const endpoint = `/cancion/${item.id_cancion}`
                            return <tr key={key}>
                                <th scope="row">{item.id_cancion}</th>
                                <td>{item.nombre}</td>
                                <td><Link className="" to={endpoint}>Ver letra</Link></td>
                            </tr>
                        })}
                    </tbody>
                </table>}
            </div>
        </div>
    :
        <h1 className="p-5">Ha ocurrido un error al cargar los datos</h1>}
    </>;
}