import React, { useState } from "react";
import './App.css';
  

export default function App(){

  const [escuro, setEscuro] = useState(false);

  const tema = {
    backgroundColor: escuro ? "black" : "white",
    color: escuro ? "white" : "black"
  }

//Exemplo 2, melhor modo.

  return (
    <div style={tema}>
        <h1>42 - EXERCÍCIO PRÁTICO TEMA CLARO ESCURO</h1>
        <hr/>

        <button onClick={() => { setEscuro(old => !old) }}>Tema</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sequi repellendus rerum. Sapiente labore, cumque repellendus ad quasi ducimus, possimus asperiores aliquam molestias ipsum, reprehenderit adipisci excepturi dolores nihil aperiam?
        Asperiores ipsam quo, ad obcaecati perferendis excepturi, quod optio nulla eveniet provident amet delectus est numquam nostrum nemo! Quisquam, eum dolor natus error voluptate ipsam et vitae asperiores pariatur ullam.
        Explicabo consequuntur incidunt ex nemo, debitis ipsam perspiciatis, earum libero vitae molestiae adipisci delectus sunt quis in est. Fugiat est dolor explicabo nihil? Soluta et numquam natus. Delectus, vel nobis?
        Aliquam culpa rerum id, a, sint velit ipsam tempore animi quam fugit similique, iste dolorem quo illo earum. Omnis ratione minima ut similique, provident aliquam libero! Ea velit voluptatibus praesentium.
        Reprehenderit autem dolores at magni ex vel quidem possimus ipsam neque, quas maiores delectus corrupti amet? Perferendis nobis magni illum illo iste fugit accusamus officiis. Dolore pariatur ex sed rerum.
        Porro, dicta magni ut sit cumque laborum modi minima reprehenderit atque quas ipsa id alias ullam voluptatem quibusdam dolorem. Ad laboriosam ipsam magni nam odit ab ullam corporis corrupti? Hic.
        Quidem vero, aliquam quibusdam soluta, suscipit possimus obcaecati cumque rem atque facere incidunt? Vero natus, fugit nisi suscipit beatae et a excepturi dolorem impedit, iure earum, culpa dicta. Asperiores, modi.
        Labore reiciendis, odio sunt nihil recusandae inventore dolore veniam facere veritatis vitae commodi vero adipisci illo perspiciatis laborum laudantium beatae, modi nesciunt, excepturi et blanditiis dicta temporibus distinctio doloribus! Dolor.
        In accusantium voluptatem ad modi minus tempore earum voluptatibus culpa debitis ullam. Harum nulla molestias omnis laudantium quis animi pariatur accusamus, necessitatibus error dolor rerum, soluta odio dolore, illo deserunt?
        Magnam nemo ex mollitia illum! Earum eos nihil repellendus veniam dolor rem placeat dolorem quisquam quis aspernatur ad excepturi exercitationem quas, deleniti accusamus facilis itaque voluptates at fuga! Iusto, labore.</p>
        
    </div>
  );
}