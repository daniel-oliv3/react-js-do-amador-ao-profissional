import React from "react";
import './App.css';

//importação do componente, aula 15
import ComponentSeis from "./components/ComponenteSeis";
import ComponenteUm from "./Components/ComponenteUm";
import ComponenteDois from "./Components/ComponenteDois";
import ComponenteTres from "./Components/ComponenteTres";
import ComponenteQuatro from "./Components/ComponenteQuatro";




//Function components, jsx
function App(){
    return (
        <div>
            <ComponentUm/>
            <ComponentDois/>
            <ComponentTres/>
            <ComponentQuatro/>

        </div>
    );
};


export default App;
