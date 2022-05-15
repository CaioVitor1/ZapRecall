import React from "react"


export default function Questions({texto,resposta, index, estado, pergunta, mudaEstado, mudaPergunta}) {
    
    if(estado === "fechado" && texto === "false") {
        return (
            <div  onClick={() => mudaEstado({index})} className='deck-question'>
                <h3> Pergunta {index+1}</h3> 
                <img src='imagens/Vector.png'/>
                
            </div>
        )
    } else if(estado == "aberto" && texto === "false"){
        return (
            <div className='deck-question'>
                <h3> {pergunta} </h3> 
                <img onClick={() => mudaPergunta({index})} src='imagens/setinha.png'/>
                
            </div>
        )
    } else if(estado == "aberto" && texto === "true"){
        return (
            <div className='deck-respostas'>
                <h3> {resposta} </h3> 
                <div className="botoes">
                    <button className="red"> Não lembrei!</button>
                    <button className="blue"> Quase não lembrei!</button>
                    <button className="green"> ZAP!</button>
                </div>
                
            </div>
        )
    }
   
}



