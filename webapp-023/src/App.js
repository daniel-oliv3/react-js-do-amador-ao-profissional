//Forma mais completa
import React, { useState, useEffect } from 'react';


export default function App(){

  const clientes = ['Daniel', 'Priscila', 'Sapup3'];
  const produtos = ['Pão', 'Manteiga', 'Leite'];
  const vendas = ['1 x Pão (Daniel)', '2 x Manteiga (Priscila)', '3 x Leite (Sapup3)'];

//Info..........
const [info, setInfo] =  useState('clientes');


  return (
    <>
        <h1>30 - MAIS DETALHES SOBRE USEEFFECT</h1>
        <hr/>

        <h3>{info}</h3>
        <button onClick={() => setInfo('clientes')}>Clientes</button>
        <button onClick={() => setInfo('produtos')}>Produtos</button>
        <button onClick={() => setInfo('vendas')}>Vendas</button>
        
    </>
  );
}