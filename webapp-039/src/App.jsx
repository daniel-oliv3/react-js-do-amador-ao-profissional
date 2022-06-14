import React, {useState} from "react";
import Lista from './Lista';
import './App.css';
  

export default function App(){

  const [numero, setNumero] = useState(1000);
  const [temaEscuro, setTemaEscuro] = useState(false);
  
//Função para calcular lista de resultados
const calculos = () => {
  return [numero*2, numero*3, numero*4];
}

//Tema app
const tema = {
  backgroundColor: temaEscuro ? "black" : "white",
  color: temaEscuro ? "white" : "black",
  height: "100vh"
}

  return (
    <div style={tema}>
        <h1>44 - USECALLBACK</h1>
        <hr/>

        <button onClick={() => setTemaEscuro(oldTemaEscuro => !oldTemaEscuro)}>Alterar Tema</button>
        <p>Número: {numero}</p>
        <button onClick={() => setNumero(oldNumero => oldNumero + 1)}>Incrementar</button>

        <hr /><br/><br/>
        <Lista resultados={calculos} />
    </div>
  );
}