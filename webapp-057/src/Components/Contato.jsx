import React from "react";
import './Contato.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Contato(props) {
  return (
    <div className="componente-contato">
      {props.nome} - {props.telefone}
      <button className="btn btn-outline-danger" onClick={() => { props.remover(props.id) }}>
        <FontAwesomeIcon icon={faTrash} className="me-2"/>
        Remover</button>
    </div>
  );
}
