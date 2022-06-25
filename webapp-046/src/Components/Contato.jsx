import React from "react";



export default  function Contato(props){
    return (
        <li>
            {props.nome} - {props.telefone}
        </li>
    )
}