import React from 'react';
import Header from "./Header";
import Questions from "./Questions";
import Footer from "./Footer";

const everyQuestion = [
    {id:1, pergunta: "O que é JSX?" , resposta: "Uma extensão de linguagem do JavaScript", estado: "aberto"},
    {id:2, pergunta: "O React é __ " , resposta: "Uma biblioteca JavaScript para construção de interfaces", estado: "fechado"},
    {id:3, pergunta: "Componentes devem iniciar com __" , resposta: "Letra maiúscula", estado: "fechado"},
    {id:4, pergunta: "Podemos colocar __ dentro do JSX?" , resposta: "Expressões", estado: "fechado"},
    {id:5, pergunta: "O ReactDOM nos ajuda __" , resposta: "Interagindo com a DOM para colocar componentes React na mesma", estado: "fechado"},
    {id:6, pergunta: "Usamos o npm para __ " , resposta: "gerenciar os pacotes necessários e suas dependências", estado: "fechado"},
    {id:7, pergunta: "Usamos props para __ " , resposta: "passar diferentes informações para componentes ", estado: "fechado"},
    {id:8, pergunta: "Usamos estado (state) para __" , resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", estado: "fechado"}
]
//     {everyQuestion.map((card) => (<Questions pergunta={card.index}/>))}

function ExportQuestions() {
    const [estado,setEstado] = React.useState("fechado");
    function mudaEstado({index}) {
        console.log({index})
        console.log("O estado inicial é " + everyQuestion[index].estado)
        everyQuestion[index].estado = setEstado("aberto")
       
        console.log("O estado final é " + everyQuestion[index].estado)
        
       
    }
    return ( 
    <div className='deck'>   
            {everyQuestion.map((card,index) => (<Questions index={index} mudaEstado={mudaEstado}  titulo={card.titulo} estado={estado} pergunta={card.pergunta}/>))}
        </div>
        )
}
export default function Screen2() {
    
    const [contador, setContador] = React.useState(0);
    
   
    return (
        <div className="screens">
            <Header />             
           <ExportQuestions />  

            
            <Footer>
                <h3> {contador}/8 concluídos </h3>  
            </Footer >
        </div>
    )
}