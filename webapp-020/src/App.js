import React, { useState } from 'react';


export default function App(){

  const [player, setPlayer] = useState({
    name: "Daniel",
    score: 0
  })


  function alterar(){
    setPlayer(pa => {
      return {
        ...pa,
        score: pa.score + 1
      }
    });
  }

  return (
    <>
        <h1>28 - USESTATE ALTERANDO STRINGS E OBJETOS/Exemplo-Parte2</h1>
        <hr/>
       <h3>Nome: {player.name}</h3>
       <h3>Pontos: {player.score}</h3>
       <button onClick={alterar}>Alterar a pontuação</button>
    </>
  );
}