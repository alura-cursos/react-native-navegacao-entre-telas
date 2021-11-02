import { useState, useEffect } from 'react';

import { carregaCesta } from '../servicos/carregaDados';

export default function useCesta(produtor) {
  const [cesta, setCesta] = useState({
    topo: "",
    botao: "",
    titulo: "",
    cesta: {
      produtor: 0,
      detalhes: {
        nome: "",
        descricao: "",
        preco: "",
      },
      itens: []
    }
  });

  useEffect(() => {
    const retorno = carregaCesta(produtor);
    setCesta(retorno);
  }, []);

  return [cesta];
}
