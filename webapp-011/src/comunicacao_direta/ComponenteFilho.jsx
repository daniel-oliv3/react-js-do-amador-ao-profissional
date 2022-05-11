import React from 'react';

function ComponentePai(props){
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
        </div>
    )
}