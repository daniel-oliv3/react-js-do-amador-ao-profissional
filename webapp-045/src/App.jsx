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

  function definirTelefone(event){
    setContato({...contato, telefone: event.target.value});
  }

  return (
    <>
        <h1>50 - EXERCÍCIO PRÁTICO APRESENTAR A LISTA DE CONTACTOS</h1>
        <hr/>

        <div>
          <input type="text" onChange={definirNome} value = {contato.nome} />
        </div>
        <div>
          <input type="text" onChange={definirTelefone} value = {contato.telefone} />
        </div>
        <hr />

        {/*<p>{contato.nome}</p>
        <p>{contato.telefone}</p>*/}
        {/* Render da lista de contatos */}

        <button>Adicionar Contato</button>
    </>
  );
}