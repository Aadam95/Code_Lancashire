import React, { useContext } from "react"
import { CartContext } from "./CartContext"

export default function CartButton() {
    const {cartCount} = useContext(CartContext)
    return(
        <div>
            Items in Cart: {cartCount}
        </div>
    )
}