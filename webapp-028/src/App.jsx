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
        <h1>35 - GIT COM OS MEUS PROJETOS E COMO PASSAR UM PROJETO PARA UM AMIGO</h1>
        <hr/>
        
        <input type="text" onChange={e => { setTexto(e.target.value)}}/><br/>

        <button onClick={executar}>Executar</button>
        <p>Texto: {texto} (anteriormente) {anterior.current}</p>
    </>
  );
}