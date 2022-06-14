import React from "react";
import { useState } from "react";
import './App.css';
  

export default function App(){

  const [numero, setNumero] = useState(100);
  const [temaEscuro, setTemaEscuro] = useState(false);
  
//Função para calcular lista de resultados
const calculos = () => {
  return [numero*2, numero*3, numero*4];
}

//Tema app
cost tema = {
  backgroundColor: temaEscuro ? "black" : "white",
  color: temaEscuro ? "white" : "black",
  height: "100vh"
}

  return (
    <>
        <h1>44 - USECALLBACK</h1>
        <hr/>

        
    </>
  );
}