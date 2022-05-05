import React from "react";
import './App.css';

//importação do componente
import ComponenteUm from "./Components/ComponenteUm";
import ComponenteDois from "./Components/ComponenteDois";
import ComponenteTres from "./Components/ComponenteTres";
import ComponenteQuatro from "./Components/ComponenteQuatro";




//Function components, jsx
function App(){
    return (
        <div>
            <ComponenteQuatro titulo="Componente quatro"/>
 
            <ComponenteTres titulo="sapup3 na área" subtitulo="Texto do componente 3"/>
            <ComponenteDois/>
            <ComponenteUm/>
        </div>
    );
};


export default App;
