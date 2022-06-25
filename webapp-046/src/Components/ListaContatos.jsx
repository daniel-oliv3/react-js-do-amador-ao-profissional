import React from "react";
import { v4 as chave } from 'uuid';

export default function ListaContatos({ listaContatos }){

    return (
        <>
            <ul>
                {listaContatos.map(contato => {
                    return <li key={chave()}>{contato.nome + " " + contato.telefone}</li>
                })}
            </ul>    
        </>
    )
}















