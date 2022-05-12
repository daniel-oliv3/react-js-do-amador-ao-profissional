import React from 'react';
import ComponenteFilhoA from './ComponenteFilhoA';


export default (props) => {
    return (
        <div className="componente">
            <p>Pai</p>
            
            {/*<ComponenteFilhoA nome={props.nome}/>*/}
            <ComponenteFilhoA {...props}/>
        </div>
    );
}
