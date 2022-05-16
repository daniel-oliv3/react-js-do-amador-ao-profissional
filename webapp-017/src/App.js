import React, { useState } from 'react';



export default function App(){

const [valor, setValor] = useState(100);
//Função Diminuir
  function diminuir(){
    setValor(valor_antigo => valor_antigo - 1);
    //setValor(valor_antigo => valor_antigo - 1); para alterar em 2.
}


//Função Aumentar
function aumentar(){
  setValor(valor_antigo => valor_antigo + 1);
}

  return (
    <>

        <h1>React Hooks - useState</h1>
        <button onClick={diminuir}>Diminuir</button>
        <span> Valor: {valor} </span>
        <button onClick={aumentar}>Aumentar</button>

        <button onClick={()=>{
          setValor(va => va + 100);
        }}>Aumertar 100x</button>
    </>
  );
}