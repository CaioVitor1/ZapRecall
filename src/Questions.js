import React from "react"


export default function Questions({mudaMarcadaErro, mudaMarcadaQuase,mudaMarcadaAcerto, marcada, texto,resposta, index, estado, pergunta, mudaEstado, mudaPergunta}) {
    
    if(estado === "fechado" && texto === "false" && marcada === "não") {
        return (
            <div  onClick={() => mudaEstado({index})} className='deck-question'>
                <h3> Pergunta {index+1}</h3> 
                <img src='imagens/Vector.png'/>
                
            </div>
        )
    } else if(estado == "aberto" && texto === "false" && marcada === "não"){
        return (
            <div className='deck-question'>
                <h3> {pergunta} </h3> 
                <img onClick={() => mudaPergunta({index})} src='imagens/setinha.png'/>
                
            </div>
        )
    } else if(estado == "aberto" && texto === "true" && marcada === "não"){
        return (
            <div className='deck-respostas'>
                <h3> {resposta} </h3> 
                <div className="botoes">
                    <button onClick={() => mudaMarcadaErro({index})} className="red"> Não lembrei!</button>
                    <button onClick={() => mudaMarcadaQuase({index})} className="blue"> Quase não lembrei!</button>
                    <button onClick={() => mudaMarcadaAcerto({index})} className="green"> ZAP!</button>
                </div>
                
            </div>
        )
    } else if(estado == "aberto" && texto === "true" && marcada === "erro") {
        return (
            <div className='deck-marcacao'>
              <h3 className="marcacao-red"> Pergunta {index+1}</h3> 
                <img src='imagens/Vector_x.png'/>
                
            </div>
        )
    }
    else if(estado == "aberto" && texto === "true" && marcada === "quase") {
        return (
            <div className='deck-marcacao'>
              <h3 className="marcacao-blue"> Pergunta {index+1}</h3> 
                <img src='imagens/Vector_question.png'/>
                
            </div>
        )
    }
    else if(estado == "aberto" && texto === "true" && marcada === "acerto") {
        return (
            <div className='deck-marcacao'>
              <h3 className="marcacao-green"> Pergunta {index+1}</h3> 
                <img src='imagens/Vector_ok.png'/>
                
            </div>
        )
    }
    
   


}



