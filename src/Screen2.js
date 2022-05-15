import React from 'react';
import Header from "./Header";
import Questions from "./Questions";
import Footer from "./Footer";
import { useState } from 'react/cjs/react.production.min';

const everyQuestion = [
    {id:1, pergunta: "O que é JSX?" , resposta: "Uma extensão de linguagem do JavaScript", estado: "fechado", texto:"false", marcada: "não"},
    {id:2, pergunta: "O React é __ " , resposta: "Uma biblioteca JavaScript para construção de interfaces", estado: "fechado", texto:"false", marcada: "não"},
    {id:3, pergunta: "Componentes devem iniciar com __" , resposta: "Letra maiúscula", estado: "fechado", texto:"false", marcada: "não"},
    {id:4, pergunta: "Podemos colocar __ dentro do JSX?" , resposta: "Expressões", estado: "fechado", texto:"false", marcada: "não" },
    {id:5, pergunta: "O ReactDOM nos ajuda __" , resposta: "Interagindo com a DOM para colocar componentes React na mesma", estado: "fechado", texto:"false", marcada: "não"},
    {id:6, pergunta: "Usamos o npm para __ " , resposta: "gerenciar os pacotes necessários e suas dependências", estado: "fechado", texto:"false", marcada: "não"},
    {id:7, pergunta: "Usamos props para __ " , resposta: "passar diferentes informações para componentes ", estado: "fechado", texto:"false", marcada: "não"},
    {id:8, pergunta: "Usamos estado (state) para __" , resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", estado: "fechado", texto:"false", marcada: "não"}
]
//     {everyQuestion.map((card) => (<Questions pergunta={card.index}/>))}
//      setTasks(tasks.filter((t, i) => i !== index));
//                {tela === "screen1" ? <Screen1 setTela={setTela}/> : <Screen2 />}

function Contador() {
    const [contador, setContador] = React.useState(0);
 
    
    return(
        <>
         <h3> {contador}/8 concluídos </h3>  
        </>
    )
   
}

function ExportQuestions() {
    const [state,setState] = React.useState("fechado");
    const [text, setText] = React.useState("false");
    const [marked, setMarked] = React.useState("não")

    function mudaEstado({index}) {
    console.log(index)
       console.log(everyQuestion[index].estado);
       console.log(everyQuestion[index].texto);
       
       if(everyQuestion[index].estado = "fechado") {
        everyQuestion[index].estado = "aberto"
        setState("aberto")
        console.log("mostramos a pergunta")
       } 
    }
    function mudaPergunta({index}) {
        console.log(index)
        if(everyQuestion[index].texto = "false") {
            everyQuestion[index].texto = "true"
            setText("true")
            console.log("mostramos a pergunta")
           } 
          
        }
       function mudaMarcadaErro({index}) {
        if(everyQuestion[index].marcada= "não") {
            everyQuestion[index].marcada= "erro"
            setMarked("erro")
            console.log("terminamos de marcar")
           } 
          
        }
        function mudaMarcadaQuase({index}) {
            if(everyQuestion[index].marcada= "não") {
                everyQuestion[index].marcada= "quase"
                setMarked("quase")
                console.log("terminamos de marcar")
               } 
              
            }
            function mudaMarcadaAcerto({index}) {
                if(everyQuestion[index].marcada= "não") {
                    everyQuestion[index].marcada= "acerto"
                    setMarked("erro")
                    console.log("terminamos de marcar")
                   } 
                  
                }

       



    return ( 
    <div className='deck'>   
            {everyQuestion.map((card,index) => (<Questions mudaMarcadaErro={mudaMarcadaErro} mudaMarcadaQuase={mudaMarcadaQuase} mudaMarcadaAcerto={mudaMarcadaAcerto} marked={marked} marcada={card.marcada} resposta={card.resposta} text={text} texto={card.texto} state={state} index={index} mudaPergunta={mudaPergunta} mudaEstado={mudaEstado}  titulo={card.titulo} estado={card.estado} pergunta={card.pergunta}/>))}
        </div>
        )
}
export default function Screen2() {
    
   
    
   
    return (
        <div className="screens">
            <Header />             
           <ExportQuestions />  

            
            <Footer>
               <Contador />
            </Footer >
        </div>
    )
}