import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( categoria ) => {
    const [imagenes, setImagenes] = useState([])
    const [isLoading, setLoading] = useState(true)

    const getImagenes = async () => {
        const newImagen = await getGifs(categoria);
        setImagenes(newImagen);
        setLoading(false);
    }
    useEffect(() => {
        getImagenes();
    }, [])

    return {
        imagenes,
        isLoading
    };
};
