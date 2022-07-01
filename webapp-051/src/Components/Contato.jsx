import React from "react";

export default function Contato(props) {
  return (
    <div>
      {props.nome} - {props.telefone}
    </div>
  );
}
