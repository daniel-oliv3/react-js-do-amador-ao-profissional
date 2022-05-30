import React, { useState, useEffect, useMemo } from "react";
import './App.css';
  

export default function App(){

  const [valor, setValor] = useState(() => { return 0 });
  const [numero, setNumero] = useState(() => { return 1000 });

  //const valorCalculado = funcaoDemorada(valor);
  const valorCalculado = useMemo(() => {
    return funcaoDemorada(valor);
  }, [valor]);

  useEffect(() => {
    console.log('render');
  });

  function incrementar(){
    setValor((oldValor) => oldValor + 1);
  }

  function incrementar2(){
    setNumero((oldNumero) => oldNumero + 100);
  }

  function funcaoDemorada(num){

    for(let i=0; i<1000000000; i++){}

    return num * 2;
  }

  return (
    <>
        <h1>37 - USEMEMO</h1>
        <hr/>

        <p>Valor: {valor}</p>
        <p>Número: {numero}</p>
        <p>Valor Calculado: {valorCalculado}</p>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={incrementar2}>Incrementar 2</button>
    </>
  );
}