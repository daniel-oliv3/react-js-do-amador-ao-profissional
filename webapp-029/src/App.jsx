import React, { useState, useRef } from "react";
import './App.css';

  

export default function App(){

  //State
  const [listaTarefas, setListaTarefas] = useState(() => { return []});
  const [tarefa, setTarefa] = useState(() => { return '' });

  //Ref
  const idTarefa = useRef(0);


  //Metodos
  function adicionarTarefa(){
    setListaTarefas(old => { return [...old, {id: idTarefa.current, texto: tarefa }]});
    idTarefa.current = idTarefa.current + 1;
  }

  function limparTarefas(){
    setListaTarefas(old => { return [] } );
    idTarefa.current = 0;
  }

  function removerTarefa(id){
    const tmp = listaTarefas.filter(tarefa => tarefa.id !== id );
    setListaTarefas(tmp);
  }

  return (
    <>
        <h1>Gestor de Tarefas</h1>
        <hr/>

        <input type="text" value={tarefa} onChange={(evento) => { setTarefa(evento.target.value) }}/>
        <div>
          <button onClick={adicionarTarefa}>Adicionar</button>
          <button onClick={limparTarefas}>Limpar Tudo</button>
        </div>
        <hr/>

        <p>Tarefas: </p>
        {listaTarefas.map((tarefa) => {
          return <p key={tarefa.id}>{tarefa.texto} - <span onClick={() => { removerTarefa(tarefa.id) } }>[remover]</span></p>
        })}
    </>
  );
}