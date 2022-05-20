//Forma mais completa
import React, { useState, useEffect } from 'react';


export default function App(){

  const [valor, setValor] = useState(100);
  const [valor2, setValor2] = useState(1000);

  function alterar(){
    setValor(valor + 10);
  }

  function alterar2(){
    setValor2(valor2 + 10);
  }

  useEffect(() => {
    console.log('alterado');
  }, [valor])

  return (
    <>
        <h1>29 - React Hook useEffect</h1>
        <hr/>
        <h3>Valor: {valor}</h3>
        <h3>Valor2: {valor2}</h3>

        <button onClick={alterar}>Alterar</button>
        <button onClick={alterar2}>Alterar2</button>
    </>
  );
}