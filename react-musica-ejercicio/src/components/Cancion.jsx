import { useParams } from "react-router-dom";

export const Cancion = () => {
    const {ID} = useParams();

    return <>
        <h1>{ID}</h1>
    </>;
}