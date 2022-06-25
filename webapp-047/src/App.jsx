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
        <h1>52 - EXERCÍCIO PRÁTICO VALIDAÇÕES E USEREF PARA FOCUS</h1>
        <hr/>

        <div>
          <label>Nome: </label><br/>
          <input type="text" onChange={definirNome} value = {contato.nome} />
        </div>
        <div>
          <label>Telefone: </label><br/>
          <input type="text" onChange={definirTelefone} value = {contato.telefone} />
        </div>

        <button onClick={adicionarContato}>Adicionar Contato</button>

        <hr />

        <ul>
          {listaContatos.map(ct => {
            return <Contato key={chave} nome={ct.nome} telefone={ct.telefone} />
          })}
        </ul>
    </>
  );
}