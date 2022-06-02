import React, { useState } from "react";
import './App.css';
  

export default function App(){

  const [valor, setValor] = useState(100);
  const [mostrar, setMostrar] = useState(true);

  return (
    <>
        <h1>39 - USEREDUCER</h1>
        <hr/>
        <p>Valor: {valor}</p>
        {mostrar && <p>Colocar visível</p>}
        
    </>
  );
}