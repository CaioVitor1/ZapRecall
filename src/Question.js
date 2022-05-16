import React from "react"
import setinha from "./assets/Vector.png";
import retornar from "./assets/return.png";

export default function Question({ index, pergunta, resposta, setContador, setNewEmoji, newEmoji, erro, setErro}) {
    const [etapa, setEtapa] = React.useState("numero")
    const [respostaUsuario, setRespostaUsuario] = React.useState(null)
    const [corResposta, setCorResposta] = React.useState(null);
    const [emoji,setEmoji] = React.useState(null)

    function lidarComResposta(resposta, cor,icone, verificaErro) {
        let qtdErros = parseInt(verificaErro)
        setEtapa("resposta");
        setRespostaUsuario(resposta);
        setCorResposta(cor)
        setContador(countAntigo => countAntigo +1)
        setEmoji(icone)
        setNewEmoji([...newEmoji,icone])
        setErro(countErro => countErro + qtdErros)
    }

    return (
        <div>
        {etapa === "numero" && (<div onClick={() => setEtapa("pergunta")} className='deck-question'>
                                    <h3> Pergunta {index+1}</h3>
                                    <img src={setinha} alt='setinha'/>
                                </div>)}

        {etapa === "pergunta" && (<div className='deck-question'>
                                        <h3> {pergunta} </h3> 
                                        <img onClick={() => setEtapa("alternativas")} src={retornar}/>
                                    </div>)}

        {etapa === "alternativas" && (<div className='deck-respostas'>
                                            <h3> {resposta} </h3> 
                                            <div className="botoes">
                                                <button onClick={() => lidarComResposta("erro", "red",'imagens/Vector_x.png', "1")} className="red"> Não lembrei!</button>
                                                <button onClick={() => lidarComResposta("quase", "blue", 'imagens/Vector_question.png',"0")} className="blue"> Quase não lembrei!</button>
                                                <button onClick={() => lidarComResposta("acerto", "green", 'imagens/Vector_ok.png', "0")} className="green"> ZAP!</button>
                                            </div>
                                        </div>)}

        {etapa === "resposta" && (<div className='deck-marcacao'>
                                    <h3 className={`marcacao-${corResposta}`}> Pergunta {index+1} </h3> 
                                    <img src={emoji} />
                                  </div>)}

        </div>
    )
}



