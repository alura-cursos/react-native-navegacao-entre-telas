import produtores from "../mocks/produtores";
import topo from "../mocks/topo";
import cestas from "../mocks/cestas";

export const carregaProdutores = () => {
    return produtores;
}

export const carregaTopo = () => {
    return topo;
}

export const carregaCesta = (produtor) => {
    return {
        ...cestas.textos,
        cesta: {
            ...cestas.lista.find(
                (cesta) => cesta.produtor == produtor
            )
        }
    };
}
