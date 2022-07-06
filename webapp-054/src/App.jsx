import React, { useState, useRef, useEffect } from "react";
import Contato from "./Components/Contato";
import { v4 as chave } from "uuid";
import "./App.css";

export default function App() {
  /* states */
  const [contato, setContato] = useState({ nome: '', telefone: '' });
  const [listaContatos, setListaContatos] = useState([]);

  /* useRef */
  const inputNome = useRef();
  const inputTelefone = useRef();

  /* Metodos/funções */
  function definirNome(event) {
    setContato({ ...contato, nome: event.target.value });
  }

  function definirTelefone(event) {
    setContato({ ...contato, telefone: event.target.value });
  }

  function adicionarContato() {
    /* Validação dos campos*/
    if (contato.nome === "" || contato.telefone === "") return

    /* Verificar se o contato ja existe */
    let duplicado = listaContatos.find((ct) => ct.nome === contato.nome && ct.telefone === contato.telefone);
    if(typeof duplicado !== 'undefined'){
      inputTelefone.current.focus();
      return;
    }

    /* Adicionar novo contato a lista*/
    setListaContatos([...listaContatos, {...contato, id: chave()}]);


    /* Limpar o contato */
    setContato({nome: '', telefone: ''});

    /* Colocar focus no input nome */
    inputNome.current.focus();

  }

  // Funcao BTN Enter
  function enterAdicionarContato(event){
    if(event.code === 'Enter'){
      adicionarContato();
    }
  }
  
  /* Persistencia do state */  
  /* Carregar lista de contato no localstorage */
  useEffect(() => {
    if(localStorage.getItem('meus_contatos') !== null){
      setListaContatos(JSON.parse(localStorage.getItem('meus_contatos')));
    }
  }, []);

  /* Atuaalizar a lista de contatos no localstorage */
  useEffect(() => {
    localStorage.setItem('meus_contatos', JSON.stringify(listaContatos))
  }, [listaContatos]);


  /* Limpar toda a lista */
  function limparStorage(){
    setListaContatos([]);
  }


  /* Remover um contato lista */
  function removerContato(id){
    let tmp = listaContatos.filter(ct => ct.id !== id);
    setListaContatos(tmp);
  }



  return (
    <>

      <div className="container-fluid titulo">
        <div className="row">
          <div className="col text-center">
            <h4 className="text-center">59 - ASPETO VISUAL DO TÍTULO E DO FORMULÁRIO</h4>
          </div>
        </div>
      </div>


      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div>
              <label>Nome: </label><br />   
              <input type="text" ref={inputNome} onChange={definirNome} value={contato.nome} />
            </div>
            <div>
              <label>Telefone: </label><br />      
              <input type="text" ref={inputTelefone} onChange={definirTelefone} onKeyUp={enterAdicionarContato} value={contato.telefone} />
            </div>
            <button onClick={adicionarContato}>Adicionar Contato</button>
            <button onClick={limparStorage}>Limpar Lista</button>
          </div>
        </div>
      </div>


      


      {/* Apresentação da lisa de contatos */}    
        {listaContatos.map((ct) => {
          return <Contato key={ct.id} id={ct.id} nome={ct.nome} telefone={ct.telefone} remover={removerContato} />;
        })}
    </>
  );
}
