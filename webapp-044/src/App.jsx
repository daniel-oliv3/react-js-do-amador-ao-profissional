import React, { useState } from "react";
import './App.css';
  

export default function App(){

  //states
  const [contato, setContato] = useState({nome: '', telefone: ''});

  const [listaContatos, setListaContatos] = useState([]);

  //Metodos/funções
  function definirNome(event){
    setContato({...contato, nome: event.target.value});
  }

  return (
    <>
        <h1>49 - EXERCÍCIO PRÁTICO INÍCIO DA LISTA DE CONTACTOS</h1>
        <hr/>

        <div>
          <input type="text" onChange={definirNome} value = {contato.nome} />
        </div>
        <hr />

        <p>{contato.nome}</p>
        {/* Render da lista de contatos */}
    </>
  );
}