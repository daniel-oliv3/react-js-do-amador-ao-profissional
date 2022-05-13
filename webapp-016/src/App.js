import React, { useState } from 'react';



export default function App(){

  //console.table(useState(10));

  const [valor, setValor] = useState(10);

  function decremento(){
    setValor(valor - 1);
  }

  function incremento(){
    setValor(valor + 1);
  }

  return (
    <>

        <h1>React Hooks</h1>
        <p>Valor: {valor}</p>

        <button onClick={decremento}>Decremento</button>
        <button onClick={incremento}>Incremento</button>
    </>
  );
}