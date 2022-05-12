//Componente Filho
import React from "react";


export default (props) => {

    let valor1 = 100;

    function executar(){
        valor1 = Math.random();
        props.funcao('Valor: ' +  valor1, 'Daniel');
    }

    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>

            <button onClick={executar}>Executar</button>
            <p>{valor1}</p>
        </div>
    );
}