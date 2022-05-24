import React, { useState, useEffect, useRef } from "react";
import './App.css';


export default function App(){

  const [texto, setTexto] = useState('');
  const total = useRef(1);

  useEffect(() => {
    total.current++;
  })

  return (
    <>
        <h1>32 - INTRODUÇÃO AO USEREF</h1>
        <hr/>
        
        <input type="text" value={texto} onChange={evento => { setTexto(evento.target.value)}} />
        <p>O texto é: <strong>{texto}</strong></p>

        <p>Total: {total.current}</p>
    </>
  );
}