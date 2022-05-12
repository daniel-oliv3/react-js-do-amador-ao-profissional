import React from 'react';

export default (props) => {


    {/*const estilo = {
        color: "blue", 
        padding: "10px", 
        backgroundColor: "yellow"
    }*/}

    return (
    <div className="componente">
        <p className="titulo">Título: {props.titulo}</p>
        {/*<p style="color: red;">Texto do parágrafo</p> MODO ERRADO*/} 
        {/*<p style={{color: "red", padding: "10px", backgroundColor: "yellow"}}>Texto do parágrafo</p> MODO CERTO*/}
        {/*<p style={estilo}>Texto do Parágrafo!</p>*/}


        <p style={{color: props.corTexto}}>Texto do Parágrafo!</p>

    </div>
    );
}
    