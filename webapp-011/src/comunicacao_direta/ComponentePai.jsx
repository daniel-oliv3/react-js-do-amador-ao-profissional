import React from 'react';

function ComponenteFilho(props){
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
        </div>
    )
}