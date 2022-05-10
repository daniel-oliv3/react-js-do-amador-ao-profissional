import React from "react";
import './App.css';

//importação do componente, aula 18
import ComponenteUm from "./components/ComponenteUm";
import ComponenteDois from "./components/ComponenteDois";
import ComponenteTres from "./components/ComponenteTres";
import ComponenteQuatro from "./components/ComponenteQuatro";
import ComponenteSeis from "./components/ComponenteSeis";
import ComponenteSete from "./components/ComponenteSete";
import ComponenteOito from "./components/ComponenteOito";
import ComponenteNove from "./components/ComponenteNove";



//Function components, jsx, componente 7, valor: 1 = true, 0 = false
function App(){
    return (
        <div>
            <ComponenteNove titulo="Componente Nove"/>
            <ComponenteOito titulo="Comp 8" valor={10} valor="Sapup3"/> 
            <ComponenteSete titulo="Comp 7" valor={1}/> 
            <ComponenteSeis titulo="Componente 6"/>
            <ComponenteUm titulo="1"/>
            <ComponenteDois titulo="2"/>
            <ComponenteTres titulo="3"/>
            <ComponenteQuatro titulo="4"/>
        </div>
    );
};


export default App;
