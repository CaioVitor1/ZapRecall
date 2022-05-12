import Screen2 from "./Screen2";

export default function Screen1({ setTela }) {
    return (
        <div className="screens">
            <div className="contents1">
                <img src="imagens/logo.png" />
                <h2>ZapRecall</h2>
                <button onClick={() => setTela("tela2")}>Iniciar Recall</button>
            </div>
        </div>

    )
}