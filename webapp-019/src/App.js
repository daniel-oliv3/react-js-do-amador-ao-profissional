import React, { useState } from 'react';


export default function App(){

  const [nome, setNome] = useState(() => {
    return "Daniel Oliv";
  });


  function alterar(){
    setNome(a => {
      return "Sapup3";
    });
  }

  return (
    <>
        <h1>28 - USESTATE ALTERANDO STRINGS E OBJETOS</h1>
        <hr/>
        <h3>Nome: {nome}</h3>
        <button onClick={alterar}>Alterar</button>
    </>
  );
}