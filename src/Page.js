import React from 'react';
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
//import Screen2 from "./Screen2";



export default function Page() {
    const [tela,setTela] = React.useState("screen")
    return (
        <div>
            {tela === "screen1" ? <Screen1 setTela={setTela}/> : <Screen2 />}
        </div>
    )

    
}