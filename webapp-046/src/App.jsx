import React, { useState } from "react";
import ListaContatos from "./Components/ListaContatos";
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

  function adicionarContato(){
    setListaContatos([...listaContatos, contato]);
    console.table(listaContatos);
  }

  return (
    <>
        <h1>51 - EXERCÍCIO PRÁTICO APRESENTAR A LISTA DE CONTATOS DE FORMA ALTERNATIVA</h1>
        <hr/>

        <div>
          <label>Nome: </label><br/>
          <input type="text" onChange={definirNome} value = {contato.nome} />
        </div>
        <div>
          <label>Telefone: </label><br/>
          <input type="text" onChange={definirTelefone} value = {contato.telefone} />
        </div>
        

        {/*<p>{contato.nome}</p>
        <p>{contato.telefone}</p>*/}
        {/* Render da lista de contatos */}

        <button onClick={adicionarContato}>Adicionar Contato</button>

        <hr />

        <ListaContatos listaContatos={listaContatos}/>
    </>
  );
}