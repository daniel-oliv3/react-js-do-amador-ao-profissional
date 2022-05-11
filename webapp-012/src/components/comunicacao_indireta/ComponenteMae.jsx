import React from 'react';

import ComponenteFilha from './ComponenteFilha';


function clicou(){
    console.log("Botão da Filha foi clicado!");
}

function ComponenteMae(props){
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            <p>Mãe</p>
            
            <ComponenteFilha titulo="Filha" click={clicou}></ComponenteFilha>
        </div>
    )
}


export default ComponenteMae;