import React from "react"


export default function Questions({key, index, estado, pergunta, mudaEstado}) {
    
    if(estado === "fechado") {
        return (
            
            <div  onClick={() => mudaEstado({index})} className='deck-question'>
                <h3> Pergunta {index+1}</h3> 
                <img src='imagens/Vector.png'/>
                
            </div>
        )
    } else {
        return (
            <div  className='deck-question'>
                <h3> {pergunta}</h3> 
                <img src='imagens/Vector.png'/>
                
            </div>
        )
    }
   
}



