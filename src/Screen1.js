import Screen2 from "./Screen2";
function transitionScreens() {
   setnewDisplay("bordas")

}


export default function Screen1() {
    return (
        <div className="screen1">
            <div className="contents1">
                <img src="imagens/logo.png" />
                <h2>ZapRecall</h2>
                <button onClick={transitionScreens}>Iniciar Recall</button>
            </div>
        </div>

    )
}