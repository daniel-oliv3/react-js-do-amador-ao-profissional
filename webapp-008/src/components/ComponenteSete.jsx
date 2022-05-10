import React from "react";

//
export default function(props){
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            {
                props.valor ?
                    <div>
                        <h3>Análise do valor</h3>
                        <p>Verdadeiro</p>
                    </div>
                :
                    <div>
                        <h3>Análise do valor</h3>
                        <p>Falso</p>
                    </div>    
            }
        </div>
    );
}

//export default ComponenteSete;