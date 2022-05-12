import React from 'react';


function ComponenteFilho(props){
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            {/*<p>Filho</p>*/}
            <p>Cargo: {props.cargo} - {props.children}</p>

        </div>
    )
}

export default ComponenteFilho;