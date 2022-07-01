import React from "react";

export default function Contato(props) {
  return (
    <div>
      {props.nome} - {props.telefone}
      <button onClick={() => { props.remover({nome: props.nome, telefone: props.telefone}) }}>Remover</button>
    </div>
  );
}
