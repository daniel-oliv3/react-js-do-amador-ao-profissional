import React, { useState } from "react";
import './App.css';
  

export default function App(){

  const [valor, setValor] = useState(() => { return 0 });
  const [numero, setNumero] = useState(() => { return 1000 });

  function incrementar(){
    setValor((oldValor) => oldValor + 1);
  }

  return (
    <>
        <h1>37 - USEMEMO</h1>
        <hr/>

        <p>Valor: {valor}</p>
        <button onClick={incrementar}>Incrementar</button>
    </>
  );
}