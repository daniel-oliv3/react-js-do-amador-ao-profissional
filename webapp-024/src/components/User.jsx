import React from "react";




export default function User(props){
    return (
        <>
            <div>
                Nome: <strong>{props.user.firstName} {props.user.lastName}</strong>
            </div>
        </>
    )
}



