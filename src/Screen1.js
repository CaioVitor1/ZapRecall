import logo from "./assets/logo.png";
import React from "react";

export default function Screen1({ setTela }) {
   
    return (
        <div className="screens">
            <div className="contents1">
                <img src={logo} />
                <h2>ZapRecall</h2>
                <button onClick={() => setTela("tela2")}>Iniciar Recall</button>
            </div>
        </div>

    )
}