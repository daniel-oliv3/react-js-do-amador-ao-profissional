import React from "react";

//
export default function(props){
    //Exemplo 1 if else
    /*function condicao(){
        if(props.valor >= 10){
            return <p>O valor é igual ou superior a 10!</p>
        }else {
            return <p>O valor é inferir a 10!</p>
        }
    }*/

    //Exemplo 2 Switch
    function condicao(){
        switch(props.valor){
            case "Daniel":
                return <p>é o meu nome</p>
                break;
            case "Sapup3":
                return <p>é o meu apelido</p>
                break;
            default:
                return <p>Desconheço quem tenha esse nome!</p>
                break;
        }
    }

    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            {condicao()}    
        </div>
    );
}