import React from "react"


export default function Question({ index, pergunta, resposta, setContador }) {
    const [etapa, setEtapa] = React.useState("numero")
    const [respostaUsuario, setRespostaUsuario] = React.useState(null)
    const [corResposta, setCorResposta] = React.useState(null)

    function lidarComResposta(resposta, cor) {
        setEtapa("resposta")
        setRespostaUsuario(resposta)
        setCorResposta(cor)
        setContador(countAntigo => countAntigo +1)
    }

    return (
        <div>
        {etapa === "numero" && (<div onClick={() => setEtapa("pergunta")} className='deck-question'>
                                    <h3> Pergunta {index+1}</h3>
                                    <img src='imagens/Vector.png' alt='setinha'/>
                                </div>)}

        {etapa === "pergunta" && (<div className='deck-question'>
                                        <h3> {pergunta} </h3> 
                                        <img onClick={() => setEtapa("alternativas")} src='imagens/setinha.png'/>
                                    </div>)}

        {etapa === "alternativas" && (<div className='deck-respostas'>
                                            <h3> {resposta} </h3> 
                                            <div className="botoes">
                                                <button onClick={() => lidarComResposta("erro", "red")} className="red"> Não lembrei!</button>
                                                <button onClick={() => lidarComResposta("quase", "blue")} className="blue"> Quase não lembrei!</button>
                                                <button onClick={() => lidarComResposta("acerto", "green")} className="green"> ZAP!</button>
                                            </div>
                                        </div>)}

        {etapa === "resposta" && (<div className='deck-marcacao'>
                                    <h3 className={`marcacao-${corResposta}`}> Pergunta {index+1} </h3> 
                                  </div>)}

        </div>
    )
}



