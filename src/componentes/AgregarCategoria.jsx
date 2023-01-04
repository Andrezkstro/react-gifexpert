import { useState} from 'react'
export const AgregarCategoria = ({ onNewCategoria }) => {

    const [inputValor, setinputValor] = useState("")

    const cambiarImput = ({target}) => {
        setinputValor(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValor.trim().length <= 1) return;

        onNewCategoria( inputValor.trim() );
        //cambiarCategorias(categorias => [inputValor, ...categorias])
        setinputValor('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValor}
                onChange={ cambiarImput }
            />
        </form>
    )
}
