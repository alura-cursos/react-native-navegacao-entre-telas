import green from '../assets/produtores/green.png';
import salad from '../assets/produtores/salad.png';
import jennyJack from '../assets/produtores/jenny-jack.png';
import grow from '../assets/produtores/grow.png';
import potager from '../assets/produtores/potager.png';

import tomate from '../assets/frutas/Tomate.png';
import brocolis from '../assets/frutas/Brócolis.png';
import batata from '../assets/frutas/Batata.png';
import pepino from '../assets/frutas/Pepino.png';
import abobora from '../assets/frutas/Abóbora.png';

const gerarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const produtores = {
  titulo: "Produtores",
  textos: {
    tituloProdutores: "Produtores",
    topoCesta: "Detalhe da cesta",
    botaoComprar: "Comprar",
    tituloItens: "Itens da cesta",
  },
  lista: [
    {
      nome: "Green",
      imagem: green,
      distancia: gerarNumeroAleatorio(1, 500),
      estrelas: gerarNumeroAleatorio(1, 5),
      cestas: [
        {
          detalhes: {
            nome: "Brócolis e Pepino",
            descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            preco: "R$ 40,00",
          },
          itens: [
            {
              nome: "Brócolis",
              imagem: brocolis,
            },
            {
              nome: "Pepino",
              imagem: pepino,
            },
          ]
        },
        {
          detalhes: {
            nome: "Brócolis",
            descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            preco: "R$ 40,00",
          },
          itens: [
            {
              nome: "Brócolis",
              imagem: brocolis,
            },
          ]
        }
      ]
    },
    {
      nome: "Salad",
      imagem: salad,
      distancia: gerarNumeroAleatorio(1, 500),
      estrelas: gerarNumeroAleatorio(1, 5),
      cestas: [
        {
          detalhes: {
            nome: "Salada completa",
            descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            preco: "R$ 40,00",
          },
          itens: [
            {
              nome: "Tomate",
              imagem: tomate,
            },
            {
              nome: "Brócolis",
              imagem: brocolis,
            },
            {
              nome: "Pepino",
              imagem: pepino,
            },
          ]
        },
        {
          detalhes: {
            nome: "Tomate e pepino",
            descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            preco: "R$ 40,00",
          },
          itens: [
            {
              nome: "Tomate",
              imagem: tomate,
            },
            {
              nome: "Pepino",
              imagem: pepino,
            },
          ]
        }
      ]
    },
    {
      nome: "Jenny Jack Farm",
      imagem: jennyJack,
      distancia: gerarNumeroAleatorio(1, 500),
      estrelas: gerarNumeroAleatorio(1, 5),
      cestas: [
        {
          detalhes: {
            nome: "Tomate e Brócolis",
            descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            preco: "R$ 40,00",
          },
          itens: [
            {
              nome: "Tomate",
              imagem: tomate,
            },
            {
              nome: "Brócolis",
              imagem: brocolis,
            },
            {
              nome: "Batata",
              imagem: batata,
            },
            {
              nome: "Pepino",
              imagem: pepino,
            },
            {
              nome: "Abóbora",
              imagem: abobora,
            }
          ]
        },
        {
          detalhes: {
            nome: "Tomate e Brócolis",
            descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            preco: "R$ 40,00",
          },
          itens: [
            {
              nome: "Tomate",
              imagem: tomate,
            },
            {
              nome: "Brócolis",
              imagem: brocolis,
            },
            {
              nome: "Batata",
              imagem: batata,
            },
            {
              nome: "Pepino",
              imagem: pepino,
            },
            {
              nome: "Abóbora",
              imagem: abobora,
            }
          ]
        }
      ]
    },
    {
      nome: "Grow",
      imagem: grow,
      distancia: gerarNumeroAleatorio(1, 500),
      estrelas: gerarNumeroAleatorio(1, 5),
      cestas: [
        {
          detalhes: {
            nome: "Tomate e Brócolis",
            descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            preco: "R$ 40,00",
          },
          itens: [
            {
              nome: "Tomate",
              imagem: tomate,
            },
            {
              nome: "Brócolis",
              imagem: brocolis,
            },
            {
              nome: "Batata",
              imagem: batata,
            },
            {
              nome: "Pepino",
              imagem: pepino,
            },
            {
              nome: "Abóbora",
              imagem: abobora,
            }
          ]
        },
        {
          detalhes: {
            nome: "Tomate e Brócolis",
            descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            preco: "R$ 40,00",
          },
          itens: [
            {
              nome: "Tomate",
              imagem: tomate,
            },
            {
              nome: "Brócolis",
              imagem: brocolis,
            },
            {
              nome: "Batata",
              imagem: batata,
            },
            {
              nome: "Pepino",
              imagem: pepino,
            },
            {
              nome: "Abóbora",
              imagem: abobora,
            }
          ]
        }
      ]
    },
    {
      nome: "Potager",
      imagem: potager,
      distancia: gerarNumeroAleatorio(1, 500),
      estrelas: gerarNumeroAleatorio(1, 5),
      cestas: [
        {
          detalhes: {
            nome: "Tomate e Brócolis",
            descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            preco: "R$ 40,00",
          },
          itens: [
            {
              nome: "Tomate",
              imagem: tomate,
            },
            {
              nome: "Brócolis",
              imagem: brocolis,
            },
            {
              nome: "Batata",
              imagem: batata,
            },
            {
              nome: "Pepino",
              imagem: pepino,
            },
            {
              nome: "Abóbora",
              imagem: abobora,
            }
          ]
        },
        {
          detalhes: {
            nome: "Tomate e Brócolis",
            descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
            preco: "R$ 40,00",
          },
          itens: [
            {
              nome: "Tomate",
              imagem: tomate,
            },
            {
              nome: "Brócolis",
              imagem: brocolis,
            },
            {
              nome: "Batata",
              imagem: batata,
            },
            {
              nome: "Pepino",
              imagem: pepino,
            },
            {
              nome: "Abóbora",
              imagem: abobora,
            }
          ]
        }
      ]
    }
  ]
}

export default produtores;
