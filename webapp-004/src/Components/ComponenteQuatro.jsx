/*Exemplo 5*/
import React from "react";


const ComponenteQuatro = (props) => {
    return (
        <div className="componente">
            <p>Título: {props.titulo}</p>
            {props.childen}
        </div>
    );
}

export default ComponenteQuatro;