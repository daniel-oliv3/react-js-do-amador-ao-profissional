import React, { useEffect } from "react";


export default function App(){

  useEffect(() => {
    fetch("https://dummyjson.com/users")
    .then(response => response.json())
    .then(json => console.log(json))
  }, []);

  return (
    <>
        <h1>31 - EXERCÍCIO DE LEITURA DE DADOS DE API NO USEEFFECT</h1>
        <hr/>

        
        

        
    </>
  );
}