import React, { useState, useRef } from "react";
import './App.css';


export default function App(){

  const [texto, setTexto] = useState('');
  const inputRef = useRef();

  function executar(){
    console.log(inputRef.current.value);
    setTexto(inputRef.current.value);
  }


  return (
    <>
        <h1>34 - MUITA ATENÇÃO NO USO DO USEREF</h1>
        <hr/>
        
        <input ref={inputRef} type="text" onChange={e => { setTexto(e.target.value)}}/><br/>

        <button onClick={executar}>Executar</button>
        <p>Texto: {texto}</p>
    </>
  );
}