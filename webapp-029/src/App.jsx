import React, { useState, useRef } from "react";
import './App.css';

  

export default function App(){

  //State
  const [listaTarefas, setListaTarefas] = useState(() => { return []});
  const [tarefa, setTarefa] = useState(() => { return '' });

  //Ref
  const idTarefa = useRef(0);

  return (
    <>
        <h1>Gestor de Tarefas</h1>
        <hr/>

        <input type="text" value={tarefa} onChange={(evento) => { setTarefa(evento.target.value) }}/>
        <div>
          <button onClick={adicionarTarefa}>Adicionar</button>
          <button>Limpar Tudo</button>
        </div>
        <hr/>

        <p>Tarefas: </p>
    </>
  );
}