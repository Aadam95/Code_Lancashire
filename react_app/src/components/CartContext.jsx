import { createContext, useState } from "react";

export const CartContext = createContext({
    cartCount: 0,
    setCartCount: (cartCount) => {}
})


export default function CartProvider({children}){
    const [cartCount, setCartCount] = useState(0)

    return (
        <CartContext.Provider value={{cartCount, setCartCount}}>
            {children}
        </CartContext.Provider>
    )
}


// CartContext --> Provider ---> -CartButton
//                               -ProductList  