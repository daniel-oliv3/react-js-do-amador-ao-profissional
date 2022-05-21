import React, { useState, useEffect } from "react";
import User from "./components/User";


export default function App(){

  //state
  const [users, setUsers] = useState([]);

  //Efect
  useEffect(() => {
    fetch("https://dummyjson.com/users")
    .then(response => response.json())
    .then(json => {
      console.log(json.users)
      setUsers(json.users)
    })
  }, []);

  return (
    <>
        <h1>31 - EXERCÍCIO DE LEITURA DE DADOS DE API NO USEEFFECT</h1>
        <hr/>

        {users.map(user => {
          return <User key={user.id} user={user} />
        })}
        

        
    </>
  );
}