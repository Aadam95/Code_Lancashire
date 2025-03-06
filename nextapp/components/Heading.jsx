import React from "react";

export default function Heading({children}) {
// server side code    
    return (
        <h1 className="text-2xl font-semibold">
            {children}
        </h1>
    )
}