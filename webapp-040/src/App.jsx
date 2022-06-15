import React, {useId} from "react";
import './App.css';
  

export default function App(){

  const id1 = useId();
  const id2 = useId();

  return (
    <>
        <h1>45 - USEID</h1>
        <hr/>

        <form action="#" method="post">
          <div>
            <input type="checkbox" name="checkbox_masculino" id={id1} />
            <label htmlFor={id1}>Texto da Checkbox 1</label>
          </div>
          <div>
            <input type="checkbox" name="checkbox_masculino" id={id2} />
            <label htmlFor={id2}>Texto da Checkbox 2</label>
          </div>
        </form>
    </>
  );
}

