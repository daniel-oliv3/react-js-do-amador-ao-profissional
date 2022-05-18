import React, { useState } from 'react';



export default function App(){


const [valor, setValor] = useState(()=>{
  console.log('aqui_v2');
  return 5000;
});

//Função Diminuir
  function diminuir(){
    setValor(valor_antigo => valor_antigo - 1);
}


//Função Aumentar
function aumentar(){
  setValor(valor_antigo => valor_antigo + 1);
}

  return (
    <>

        <h1>28 - USESTATE ALTERANDO STRINGS E OBJETOS</h1>
        <button onClick={diminuir}>Diminuir</button>
        <span> Valor: {valor} </span>
        <button onClick={aumentar}>Aumentar</button>

    </>
  );
}