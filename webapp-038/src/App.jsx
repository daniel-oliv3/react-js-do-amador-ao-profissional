import React, {useState} from "react";
import './App.css';
  

export default function App(){

  const [valor, setValor] = useState(1);

  const multiplicar = () => {
    if(isNaN(valor)) return [];
    let produtos = [];
    for(let m = 1; m <= 10; m++){
      //produtos.push(valor * m);
      produtos.push(`${valor} x ${m} = ${valor * m}`);
    }
    return produtos;
  }

  return (
    <>
        <h1>43 - EXERCÍCIO PRÁTICO TABUADA DA MULTIPLICAÇÃO</h1>
        <hr/>


        <input type="number" onChange={(e) => { setValor(parseInt(e.target.value)) }} value={valor} />
        
        {multiplicar().map(item => <p>{item}</p>)}
    </>
  );
}