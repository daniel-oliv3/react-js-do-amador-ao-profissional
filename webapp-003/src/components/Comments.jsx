import React from "react";
import './Comments.css';

//Function components, jsx
function Comments(props){

    function Maiusculas(texto){  // funções dentro de ontra função
        return texto.toUpperCase();
    }

    return (
        <>
            <section className="comments">
                <p className="title">{Maiusculas(props.title)}</p>
                <p className="texto">Texto do Comentário</p>
                <p className="autor">Autor: {props.autor}</p>
            </section>
        </>
    );
};


export default Comments;