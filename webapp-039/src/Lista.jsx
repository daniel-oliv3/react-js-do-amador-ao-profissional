import React, { useEffect, useState } from "react";
export default function Lista({resultados}){

    const [listaItens, setListaItens] = useState([]);

    useEffect(() => {
        setListaItens(resultados())
        console.log('RENDER')
    }, [resultados]);


    return (
        listaItens.map(item => <p key={item}>{item}</p>)
    )


}