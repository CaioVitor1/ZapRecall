import React from "react";


export default function Contador() {
    const [contador, setContador] = React.useState(0);
    console.log(contador);
    if(contador == 0) {
    return(
        <>
         <h3> {contador}/8 concluídos </h3>  
        </>
    )
   }
}
