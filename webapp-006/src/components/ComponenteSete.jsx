import React from "react";

//
export default function(props){
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            {
                props.valor ?
                    <div>
                        <h1>Análise do valor</h1>
                        <p>Verdadeiro</p>
                    </div>
                :
                    <div>
                        <h1>Análise do valor</h1>
                        <p>Falso</p>
                    </div>    
            }
        </div>
    );
}

//export default ComponenteSete;