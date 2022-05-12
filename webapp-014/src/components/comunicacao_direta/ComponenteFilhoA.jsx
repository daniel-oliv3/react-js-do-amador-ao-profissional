import React from 'react';


export default (props) => {
    return (
        <div className="componente">
            <p>Filho: {props.nome} {props.apelido}</p>
            
        </div>
    );
}
