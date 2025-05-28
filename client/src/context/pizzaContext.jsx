
'use client'

import { createContext, useContext, useState } from "react";

const PizzaContext = createContext();

export const usePizza = () => {

    const context = useContext(PizzaContext);
    if(!context) throw new Error("usePizza debe estar dentro de UseProvider")
    return context;

}

export const PizzaProvider = ({children}) => {
    //variables globales
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    //Esto no se toca
    return (
        <PizzaContext.Provider value={{
            cartItems, setCartItems,
            isCartOpen, setIsCartOpen
        }}>
            {children}
        </PizzaContext.Provider>
    )


}
