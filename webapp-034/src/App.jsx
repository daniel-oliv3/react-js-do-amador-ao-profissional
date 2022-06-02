import React, { useReducer } from "react";
import './App.css';

  

export default function App(){

  const [state, dispatch] = useReducer(reducer, {
    score_1: 0,
    score_2: 0
  });

  //functions
  function reducer(state, action){
    
  }

  function incrementar1(){
    
  }

  function incrementar2(){
    
  }

  function reset(){
    
  }


  return (
    <>
        <h1>40 - EXERFCÍCIO PRÁTICO COM USEREDUCER</h1>
        <hr/>
        
        <h3>Player 1: {state.score_1}</h3>
        <h3>Player 2: {state.score_2}</h3>

        <button onClick={incrementar1}>Player1</button>
        <button onClick={incrementar2}>Player2</button>
        <button onClick={reset}>Reset Score</button>
    </>
  );
}