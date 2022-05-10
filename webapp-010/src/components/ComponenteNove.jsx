import React from "react";
import CondicaoIf from "./CondicaoIf";

//Componente Nove - Aula 18 - CONDICIONAL-3
export default function(props){
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            <p>Nome: {props.valor}</p>

            <CondicaoIf condicao={props.valor == "Daniel"}>
                <p>Verdadeio, é o meu nome!</p>
            </CondicaoIf>

            <CondicaoIf condicao={props.valor == "Sapup3"}>
                <p>É o meu apelido!</p>
            </CondicaoIf>

            <CondicaoIf condicao={props.valor != "Daniel" && props.valor != "Sapup3"}>
                <p>Falso, desconheço esse nome!</p>
            </CondicaoIf>

        </div>   
    );
}
