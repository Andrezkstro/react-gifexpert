import { useState } from 'react'
import { AgregarCategoria, GifGrid } from './componentes';

export const GitExpert = () => {
    const [categorias, setCategorias] = useState(['One Piece']);

    const onAddCategoria = (newCategoria) => {
        if (categorias.includes(newCategoria)) return;

        setCategorias([newCategoria, ...categorias])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AgregarCategoria
                onNewCategoria={onAddCategoria}
            />

            {categorias.map((categoria) => (
                <GifGrid key={categoria} categoria={categoria} />
            ))
            }
        </>
    )
}