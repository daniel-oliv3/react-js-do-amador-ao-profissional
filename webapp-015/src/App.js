//Exemplo 2
import React, { useState } from 'react';
import './App.css';

export default function App() {

  const [valor, setValor] = useState(100);

  function incrementar(){
    setValor(valor + 1);
  }

  return (
    <>
    <div className='componente'> 

      <h1>React Hooks</h1>
      <br />
      <h3>Valor: {valor}</h3>
      <br />
      <button onClick={incrementar}>Incrementar</button> 


    </div>  
    </>
  );
}


//Exemplo 1
/*import React from 'react';
import './App.css';

export default function App() {

  var valor = 0;

  function incrementar(){
    valor++;
    console.log(valor);
  }

  return (
    <>
      <h1>React Hooks</h1>
      <h3>Valor: {valor}</h3>
      <button onClick={incrementar}>Incrementar</button> 
    </>
  );
}*/

//div componente, para o estilo