//Forma mais completa
import React, { useState, useEffect } from 'react';


export default function App(){

  const clientes = ['Daniel', 'Priscila', 'Sapup3'];
  const produtos = ['Pão', 'Manteiga', 'Leite'];
  const vendas = ['1 x Pão (Daniel)', '2 x Manteiga (Priscila)', '3 x Leite (Sapup3)'];

//Info..........
const [info, setInfo] =  useState('clientes');
const [valor, setValor] =  useState(100);

useEffect(() =>{
  console.clear();
  switch(info){
    case 'clientes':
      console.table(clientes);
      break;

      case 'produtos':
        console.table(produtos);
        break;
        
        case 'vendas':
          console.table(vendas);
          break;

        default:
          break;  
  }
}, [info]);


//...Valor
useEffect(() => {
  console.log('TESTE');
}, [valor]);


  return (
    <>
        <h1>30 - MAIS DETALHES SOBRE USEEFFECT</h1>
        <hr/>

        
        <button onClick={() => setInfo('clientes')}>Clientes</button>
        <button onClick={() => setInfo('produtos')}>Produtos</button>
        <button onClick={() => setInfo('vendas')}>Vendas</button>

        <button onClick={() => setValor(valor + 10)}>Aumentar</button>

        <h3>{info}</h3>
        <h3>{valor}</h3>

        
    </>
  );
}