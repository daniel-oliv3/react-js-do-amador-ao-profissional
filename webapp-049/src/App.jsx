import React, { useState, useRef, useEffect } from "react";
import Contato from "./Components/Contato";
import { v4 as chave } from "uuid";
import "./App.css";

export default function App() {
  //states
  const [contato, setContato] = useState({ nome: "", telefone: "" });
  const [listaContatos, setListaContatos] = useState([]);

  //useRef
  const inputNome = useRef();
  const inputTelefone = useRef();

  //Metodos/funções
  function definirNome(event) {
    setContato({ ...contato, nome: event.target.value });
  }

  function definirTelefone(event) {
    setContato({ ...contato, telefone: event.target.value });
  }

  function adicionarContato() {
    /*Validação dos campos*/
    if (contato.nome === "" || contato.telefone === "") return

    /* Verificar se o contat ja existe */
    let duplicado = listaContatos.find((ct) => ct.nome === contato.nome && ct.telefone === contato.telefone);
    if(typeof duplicado !== 'undefined'){
      inputTelefone.current.focus();
      return;
    }

    /*Adicionar novo contato a lista*/
    setListaContatos([...listaContatos, contato]);


    /* Limpar o contato */
    setContato({nome: '', telefone: ''});

    /*Colocar focus no input nome */
    inputNome.current.focus();

  }

  //funcao BTN Enter
  function enterAdicionarContato(event){
    if(event.code === 'Enter'){
      adicionarContato();
    }
  }
  
  /*persistencia do state*/  
  /*carregar lista de contato no localstorage*/
  useEffect(() => {
    if(localStorage.getItem('meus_contatos') !== null){
      setListaContatos(JSON.parse(localStorage.getItem('meus_contatos')));
    }
  }, []);

  /*atuaalizar a lista de contatos no localstorage*/
  useEffect(() => {
    localStorage.setItem('meus_contatos', JSON.stringify(listaContatos))
  }, [listaContatos]);



  return (
    <>
      <h1>54 - GUARDAR A LISTA DE CONTATOS NO LOCALSTORAGE</h1>
      <hr />

      <div>
        <label>Nome: </label>
        <br />
        <input type="text" ref={inputNome} onChange={definirNome} value={contato.nome} />
      </div>
      <div>
        <label>Telefone: </label>
        <br />
        <input type="text" ref={inputTelefone} onChange={definirTelefone} onKeyUp={enterAdicionarContato} value={contato.telefone} />
      </div>

      <button onClick={adicionarContato}>Adicionar Contato</button>

      <hr />

      {/* Apresentação da lisa de contatos */}
      <>
        {listaContatos.map((ct) => {
          return <Contato key={chave()} nome={ct.nome} telefone={ct.telefone} />;
        })}
      </>
    </>
  );
}
