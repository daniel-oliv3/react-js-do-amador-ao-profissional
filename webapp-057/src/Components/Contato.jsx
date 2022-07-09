import React from "react";
import './Contato.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faUser, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

export default function Contato(props) {
  return (
    <div className="mx-2">
      <div className="container componente-contato my-4">
      <div className="row">
        <div className="col p-2">
          <h4>
            <FontAwesomeIcon className="me-3" icon={faUser}/>
            {props.nome}
          </h4>
        </div>
        <div className="col p-2">
          <h4>
          <FontAwesomeIcon className="me-3" icon={faPhoneVolume}/>
            {props.telefone}
          </h4>
        </div>
        <div className="col p-2 text-end">
          <h4><FontAwesomeIcon className="me-3" icon={faTrashAlt} onClick={() => { props.remover(props.id)}} /></h4>
        </div>
      </div>
    </div>
    </div>
    

    
  );
}
