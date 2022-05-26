import React, { useState, useRef, useEffect } from "react";
import './App.css';


export default function App(){

  const [texto, setTexto] = useState('');
  //const inputRef = useRef();
  const anterior = useRef('');

  useEffect(() => {
    anterior.current = texto;
  }, [texto]);

  function executar(){
    //console.log(inputRef.current.value);
    //setTexto(inputRef.current.value);
  }


  return (
    <>
        <h1>34 - MUITA ATENÇÃO NO USO DO USEREF</h1>
        <hr/>
        
        <input type="text" onChange={e => { setTexto(e.target.value)}}/><br/>

        <button onClick={executar}>Executar</button>
        <p>Texto: {texto} (anteriormente) {anterior.current}</p>
    </>
  );
}