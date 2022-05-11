import React from 'react';

import ComponenteFilho from './ComponenteFilho';

function ComponentePai(props){
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            <p>Pai</p>
            <ComponenteFilho titulo="Componente Filho" cargo="Web Developer">
                Daniel Oliveira
            </ComponenteFilho>

            <ComponenteFilho titulo="Componente Filho" cargo="Secretária">
                Priscila Andrade
            </ComponenteFilho>

            <ComponenteFilho titulo="Componente Filho" cargo="Tec-Informática">
                Yusuke Urameshi
            </ComponenteFilho>
        </div>
    )
}


export default ComponentePai;