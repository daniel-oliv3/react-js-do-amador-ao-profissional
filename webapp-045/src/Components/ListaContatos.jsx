import React from "react";


export default function ListaContatos({ listaContatos }){

    return (
        <>
            <ul>
                {listaContatos.map(contato => {
                    return <li>{contato.nome + " " + contato.telefone}</li>
                })}
            </ul>    
        </>
    )
}















