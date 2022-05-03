import React from "react";
import './App.css';

//importação do componente
import ComponenteUm from "./Components/ComponenteUm";
import ComponenteDois from "./Components/ComponenteDois";
import ComponenteTres from "./Components/ComponenteTres";

//Function components, jsx
function App(){
    return (
        <>
            <ComponenteTres titulo="sapup3"/>
            <ComponenteDois/>
            <ComponenteUm/>
        </>
    );
};


export default App;
