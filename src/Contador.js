import React from "react";
/*return (
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
)*/


export default function Contador({contador, newEmoji, erro}) {
 return (
<div>
{(contador !== 8) && (<>
                        <h3> {contador}/8 concluídos </h3> 
                        <div>
                            {newEmoji.map(imagem => <img src={imagem} />)} 
                        </div>
                        </>)
                     }
{(contador == 8) && (erro === 0) &&(
            <>
                <div className="flex">
                    <img src="imagens/party.png" />
                    <h3><strong>Parabéns!!</strong> </h3>
                </div>
                <div className="flex2">
                    <h3> Você não esqueceu de nenhum FlashCard!!</h3>
                    <h3> {contador}/8 concluídos </h3> 
                    <div>
                        {newEmoji.map(imagem => <img src={imagem} />)}    
                    </div>
                </div>
                </>
                            )}

{(contador == 8) && (erro !==0) && (
        <>
            <div className="flex">
                <img src="imagens/sad.png" />
                <h3><strong>Putz!!</strong> </h3>
            </div>
            <div className="flex2">
                <h3> Ainda faltam alguns... Mas não desanime!!</h3>
                <h3> {contador}/8 concluídos </h3> 
                    <div>
                    {newEmoji.map(imagem => <img src={imagem} />)} 
                    </div>     
            </div>
        </>
                    )}

</div>
 )
}
   


/*if(contador !== 8) {
        return (
            <>
                <h3> {contador}/8 concluídos </h3> 
                <div>
                   {newEmoji.map(imagem => <img src={imagem} />)} 
                    
                </div>
            </>
        )
    }
    if(contador === 8 && erro ===0) {
        return (
            <>
            <div className="flex">
                <img src="imagens/party.png" />
                <h3><strong>Parabéns!!</strong> </h3>
            </div>
            
            <h3> Você não esqueceu de nenhum FlashCard!!</h3>
            <h3> {contador}/8 concluídos </h3> 
                <div>
                   {newEmoji.map(imagem => <img src={imagem} />)} 
                    
                </div>
            </>
        )
    }
    if(contador === 8 && erro !==0 ) {
        return (
            <>
            <div className="flex">
                <img src="imagens/sad.png" />
                <h3><strong>Putz!!</strong> </h3>
            </div>
            
            <h3> Ainda faltam alguns... Mas não desanime!!</h3>
            <h3> {contador}/8 concluídos </h3> 
                <div>
                   {newEmoji.map(imagem => <img src={imagem} />)} 
                    
                </div>
            </>
        )
    }   
    
    }*/
