import React from 'react';


function ComponenteFilha(props){
    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
        <button onClick={props.click}>Clicar</button>

        </div>
    )
}

export default ComponenteFilha;