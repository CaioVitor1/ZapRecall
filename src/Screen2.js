import React from 'react';

export default function Screen2() {
    const [newDisplay, setnewDisplay] = React.useState("remove-screen");
    return (
        <div className={newDisplay}>
            "olá, estão me vendo?"
        </div>
    )
}