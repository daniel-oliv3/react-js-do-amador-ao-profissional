import React, { useState } from "react";

  

export default function App(){

  const [nome, setNome] = useState('');
  const [nomes, setNomes] = useState([]);

  function guardarNome(){
    setNomes(tmp => [...tmp, nome]);
  }

  return (
    <>
        <h1>41 - USAR O NPM PARA ADICIONAR UUID</h1>
        <hr/>

        <h3>React Unique ID</h3>
        <hr />
        <input type="text" onChange={e => setNome(e.target.value)} value={nome} />
        <button onClick={guardarNome}>Guardar nome</button>
        <hr />
        {nomes.map(nome => <p>{nome}</p>)}
    </>
  );
}