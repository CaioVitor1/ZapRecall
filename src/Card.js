import React from "react";
import { Children } from "react/cjs/react.production.min";

export default function Card({Children}) { 
return ( 
    <div className='deck'>   
            {Children}
        </div>
        )
}