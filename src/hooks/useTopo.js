import { useState, useEffect } from 'react';

import { carregaTopo } from '../servicos/carregaDados';

export default function useTopo() {
    const [boasVindas, setBoasVindas] = useState('');
    const [legenda, setLegenda] = useState('');

    useEffect(() => {
        const retorno = carregaTopo();
        setBoasVindas(retorno.boasVindas);
        setLegenda(retorno.legenda);
    }, []);

    return [boasVindas, legenda];
}
