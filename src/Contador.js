import React from "react";

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

