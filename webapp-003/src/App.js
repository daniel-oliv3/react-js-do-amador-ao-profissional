import React from "react";
import Comments from "./components/Comments";

//Function components, jsx
function App(){
    return (
        <>
            <h1>Comentário</h1>
            <Comments title="Comentário 1" autor="Daniel Oliveira"/>
            <Comments title="Comentário 2" autor="Priscila Andrade"/>
            <Comments title="Comentário 3" autor="Daniel Sapup3"/>
        </>
    );
};


export default App;
