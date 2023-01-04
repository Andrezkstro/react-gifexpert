import { render } from "@testing-library/react";
import { GifItem } from "../../src/componentes";

describe('Pruebas GifItem', () =>{
    const titulo = 'Saitama';
    const url    = 'https://saitama.com'
    test('hacer match ', () => {
        const { container } = render( <GifItem titulo= {titulo} url={url}/>)
        expect( container ).toMatchSnapshot();
    });
});