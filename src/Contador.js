import React from "react";



export default function Contador({contador, newEmoji}) {
 
    if(contador !== 8) {
        return (
            <>
                <h3> {contador}/8 concluídos </h3> 
                <div>
                   {newEmoji.map(imagem => <img src={imagem} />)} 
                    
                </div>
            </>
        )
    }
        
    
    }
