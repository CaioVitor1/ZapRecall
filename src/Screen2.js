import React from 'react';
import Header from "./Header";
const everyQuestion = [
    {pergunta: "Pergunta 1", resposta: "não sei"},
    {pergunta: "Pergunta 2", resposta: "não sei"},
    {pergunta: "Pergunta 3", resposta: "não sei"},
    {pergunta: "Pergunta 4", resposta: "não sei"}
]
//{everyStories.map((url) => (<RenderStories image={url.imagem} title={url.titulo}/>))}
function Cards(props) {
    return (
        <div className='deck-question'>
            <h3> {props.pergunta}</h3> 
            <img src='imagens/Vector.png'/>
        </div>  
    )

}
export default function Screen2() {
    
    return (
        <div className="screens">
            <Header />

            <div className='deck'>
            {everyQuestion.map((card) => (<Cards pergunta={card.pergunta}/>))}
            </div>
        </div>
    )
}