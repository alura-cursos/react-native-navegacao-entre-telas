import { useState, useEffect } from 'react';

import { carregaProdutores } from '../servicos/carregaDados';
import useProdutores from './useProdutores';

export default function useProdutoresAmados() {
  const produtores = useProdutores();
  const [lista, setLista] = useState([]);

  useEffect(() => {
    setLista(produtores.filter(
      (produtor) => produtor.estrelas > 3)
    );
  }, [produtores]);

  return lista;
}
