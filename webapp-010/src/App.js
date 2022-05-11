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
import ComponenteDez from "./components/ComponenteDez";




//19 - COMO DEFINIR ESTILOS INLINE COM STYLE NO JSX.
function App(){
    return (
        <div>
            <ComponenteDez titulo="Componente Dez" corTexto="red"/>
            <ComponenteNove titulo="Componente Nove" valor="Sapup3"/>
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