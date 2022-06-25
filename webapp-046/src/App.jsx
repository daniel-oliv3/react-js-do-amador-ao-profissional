import React, { useState } from "react";
//import ListaContatos from "./Components/ListaContatos";
import './App.css';
import { v4 as chave } from 'uuid';
  

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
    /*Validação dos campos*/
    if(contato.nome === "" || contato.telefone === ""){
      //console.log('return');
      return
    }


    /*Adicionar novo contato a lista*/
    setListaContatos([...listaContatos, contato]);
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
        

        <button onClick={adicionarContato}>Adicionar Contato</button>

        <hr />

        {/*<ListaContatos listaContatos={listaContatos}/>*/}

        <ul>
          {listaContatos.map(ct => {
            return <li key={chave}>{`${ct.nome} | ${ct.telefone}`}</li>
          })}
        </ul>
    </>
  );
}