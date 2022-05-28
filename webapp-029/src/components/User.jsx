import React from "react";


export default function User({usuario}){
    return (
        <>
            <div className="user-container">
                Nome: <strong>{usuario.firstName} {usuario.lastName}</strong>
            </div>
        </>
    )
}



