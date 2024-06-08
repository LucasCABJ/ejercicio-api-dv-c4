import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Cancion = () => {
    const {ID} = useParams();

    const [cancion, setCancion] = useState({});

    const getCancion = async () => {
        const path = `http://localhost:8888/cancion/${ID}`;
        const resultado = await fetch(path);
        const data = await resultado.json();
        setCancion(data.results[0]);
    }

    useEffect(() => {
        getCancion();
    }, [])

    return <>
        <div className="container">
            <div className="row">
                <Link to="/" className="link-secondary my-5">Volver atrás</Link>
                <h1 className="py-2 px-3">{cancion.nombre}</h1>
            </div>
            <div className="row">
               <p>{cancion.letra}</p>
            </div>
        </div>
    </>;
}