import React, { useState, useRef, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faList, faTrash } from '@fortawesome/free-solid-svg-icons';

import "./App.css";
import { v4 as chave } from "uuid";
import Contato from "./Components/Contato";



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
            <h4 className="text-center"><FontAwesomeIcon icon={faList} className="me-3" />Lista de Contatos</h4>
          </div>
        </div>
      </div>


      <div className="container-fluid formulario">
        <div className="row">
          <div className="col p-3">
            
            <div className="row justify-content-center">
              <div className="col-10 col-sm-8 col-md-6 col-lg-4">
                <div className="mb-3">
                  <label className="form-label">Nome </label><br />   
                  <input type="text" ref={inputNome} onChange={definirNome} value={contato.nome} className="form-control" />
                </div>
                <div>
                  <label className="form-label">Telefone </label><br />      
                  <input type="text" ref={inputTelefone} onChange={definirTelefone} onKeyUp={enterAdicionarContato} value={contato.telefone} className="form-control" />
                </div>

                <div className="row mt-3">
                  <div className="col text-start">
                    <button onClick={limparStorage} className="btn btn-outline-warning">
                      <FontAwesomeIcon icon={faTrash} className="me-2"/>
                      Limpar Lista</button>
                  </div>
                  <div className="col text-end">
                    <button onClick={adicionarContato} className="btn btn-outline-primary">
                    <FontAwesomeIcon icon={faCirclePlus} className="me-2"/>
                      Adicionar Contato</button>
                  </div>
                </div>
              </div>
            </div>     
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
