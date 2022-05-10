/*Exemplo 1*/
/*
import React from "react";

//Arrow Function, simplificado 1., jsx
export default () => {
    return (
        <div className="componente">
            <p>Título: Componente Três: Arrow Function Simplificado.</p>
        </div>
    )
}

*/




/*Exemplo 2*/
/*
import React from "react";

export default props => 
        <div className="componente">
            <p>Título: Componente Três: Arrow Function Simplificado 2.</p>
        </div>

*/




/*Exemplo 3*/
/*
import React from "react";

export default (props) => 
        <div className="componente">
            <p>Título: {props.titulo}</p>
        </div>

*/


/*Exemplo 4*/
import React from "react";
const ComponenteTres = (props) => {
    return (
        <div className="componente">
            <p>Título: {props.titulo}</p>
            <p>Sub-Título: {props.subtitulo}</p>
        </div>
    );
}

export default ComponenteTres;
















