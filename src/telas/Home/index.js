import React from 'react';
import Topo from './componentes/Topo';
import Produtores from './componentes/Produtores';

export default function Home() {
    return <Produtores topo={Topo} />
}
