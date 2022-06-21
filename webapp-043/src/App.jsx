import React, { useState } from "react";
import './App.css';
  

export default function App(){

  const [valor, setValor] = useState(0);

  /*Functions*/
  function decremento(){
    setValor(oldValor => oldValor - 1);
  }

  function incremento(){
    setValor(oldValor => oldValor + 1);
  }


  return (
    <>
        <h1>48 - PASSAR APLICAÇÃO PARA PRODUÇÃO E HOSPEDAR NUM SERVIDOR WEB</h1>
        <hr/>

        <p>Valor: <strong>{valor}</strong></p>
        <button onClick={decremento}>Decremento</button>
        <button onClick={incremento}>Incremento</button>
    </>
  );
}