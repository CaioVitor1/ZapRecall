import React from 'react';
import Header from "./Header";
import Question from "./Question";
import Footer from "./Footer";


const everyQuestion = [
    { id: 1, pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript" },
    { id: 2, pergunta: "O React é __ ", resposta: "Uma biblioteca JavaScript para construção de interfaces" },
    { id: 3, pergunta: "Componentes devem iniciar com __", resposta: "Letra maiúscula" },
    { id: 4, pergunta: "Podemos colocar __ dentro do JSX?", resposta: "Expressões" },
    { id: 5, pergunta: "O ReactDOM nos ajuda __", resposta: "Interagindo com a DOM para colocar componentes React na mesma" },
    { id: 6, pergunta: "Usamos o npm para __ ", resposta: "gerenciar os pacotes necessários e suas dependências" },
    { id: 7, pergunta: "Usamos props para __ ", resposta: "passar diferentes informações para componentes " },
    { id: 8, pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]

function comparador() {
    return Math.random() - 0.5;
}

everyQuestion.sort(comparador)

function ExportQuestions({setContador}) {
    return (
        <div className='deck'>
            {everyQuestion.map((card, index) => <Question setContador={setContador} index={index} pergunta={card.pergunta} resposta={card.resposta}/>)}
        </div>
    )
}

function Contador({contador}) {


    return (
        <>
            <h3> {contador}/8 concluídos </h3>
        </>
    )

}

export default function Screen2(props) {
const [contador, setContador] = React.useState(0)
    return (
        <div className="screens">
            <Header />
            <ExportQuestions setContador={setContador} />


            <Footer>
                <Contador contador={contador} />
            </Footer >
        </div>
    )
}