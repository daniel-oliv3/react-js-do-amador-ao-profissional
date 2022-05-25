import React, { useState, useEffect, useRef } from "react";
import './App.css';


export default function App(){

  const [texto, setTexto] = useState('');
  const inputRef = useRef();
  const input2Ref = useRef();

  function focus1(){
    //console.log(inputRef.current.value);
    //console.log(texto);
    inputRef.current.focus();
  }

  function alterar_texto2(){
    input2Ref.current.value = "Daniel Oliveira";
    input2Ref.current.focus();
  }


  return (
    <>
        <h1>33 - UTILIZAÇÃO MAIS COMUM DO USEREF</h1>
        <hr/>
        
        <input ref={inputRef} type="text" value={texto} onChange={evento => { setTexto(evento.target.value)}} /><br/>

        <input ref={input2Ref} type="text" /><br/>

        <button onClick={focus1}>Focus 1</button>
        <button onClick={alterar_texto2}>Alterar o texto do input 2</button>
    </>
  );
}