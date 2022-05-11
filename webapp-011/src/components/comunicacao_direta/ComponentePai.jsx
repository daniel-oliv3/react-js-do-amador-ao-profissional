import React from 'react';

import ComponenteFilho from './ComponenteFilho';

function ComponentePai(props){
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            <p>Pai</p>
            <ComponenteFilho titulo="Componente Filho" cargo="administrador">
                Daniel Oliveira
            </ComponenteFilho>

            <ComponenteFilho titulo="Componente Filho" cargo="administrador">
                Daniel Oliveira
            </ComponenteFilho>

            <ComponenteFilho titulo="Componente Filho" cargo="administrador">
                Daniel Oliveira
            </ComponenteFilho>
        </div>
    )
}


export default ComponentePai;