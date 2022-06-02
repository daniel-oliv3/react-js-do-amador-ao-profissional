import React, { useReducer } from "react";
import './App.css';
  

export default function App(){

 //Reducer
 const [state, dispatch] = useReducer(reducer, {
   valor: 1000,
   mostrar: true
 });

 //Função reducer
 function reducer(state, action){
    switch(action.type){
      case 'INCREMENTAR':
        return {
          valor: state.valor + 1,
          mostrar: state.mostrar
        }

      case 'VISIBILIDADE':
          return {
            valor: state.valor,
            mostrar: !state.mostrar
          }
      default:
        return state  
    }
 }

  return (
    <>
        <h1>39 - USEREDUCER</h1>
        <hr/>
        
        <p>Valor: { state.valor }</p>
        {state.mostrar && <p>Colocar visivel</p>}

        <button onClick={() => { dispatch({type: "INCREMENTAR"}) }}>Incrementar</button>
        <button onClick={() => { dispatch({type: "VISIBILIDADE"}) }}>Mostrar/Esconder</button>
    </>
  );
}