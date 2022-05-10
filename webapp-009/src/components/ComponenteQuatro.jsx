/*Exemplo 5*/
import React from "react";
import ComponenteCinco from "./ComponenteCinco";


const ComponenteQuatro = (props) => {
    return (
        <div className="componente">
            <p>Título: {props.titulo}</p>
            <ComponenteCinco texto="propriedades do componente" />
            <ComponenteCinco />
            <ComponenteCinco texto="propriedades do componente Cinco" />
        </div>
    );
}

export default ComponenteQuatro;