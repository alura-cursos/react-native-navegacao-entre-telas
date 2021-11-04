import { useState, useEffect } from 'react';

import { carregaProdutores } from '../servicos/carregaDados';

export default function useProdutores() {
    const [lista, setLista] = useState([]);
    const [textos, setTextos] = useState({});

    useEffect(() => {
        const retorno = carregaProdutores();
        retorno.lista.sort(
            (produtor1, produtor2) => produtor1.distancia - produtor2.distancia,
        );
        setLista(retorno.lista);
        setTextos(retorno.textos);
    }, []);

    return [lista, textos];
}
