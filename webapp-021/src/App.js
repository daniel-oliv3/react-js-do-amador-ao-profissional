//Forma mais completa
import React, { useState } from 'react';


export default function App(){


  const [playerName, setPlayerName] = useState(() => {
    return "Sapup3 na Área!"
  });

  const [playerScore, setPlayerScore] = useState(() => {
    return 0
  });


  function alterar(){
    setPlayerScore(sc_anterior => {
      return sc_anterior + 1
    });
  }

  return (
    <>
        <h1>28 - USESTATE ALTERANDO STRINGS E OBJETOS/Exemplo-Parte3</h1>
        <hr/>
       <h3>Nome: {playerName}</h3>
       <h3>Pontos: {playerScore}</h3>
       <button onClick={alterar}>Alterar a pontuação</button>
    </>
  );
}