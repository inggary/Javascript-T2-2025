
'use client'

import { usePizza } from "@/context/pizzaContext.jsx";


export const Navbar = () => {

    const {setIsCartOpen, cartItems} = usePizza();

    return (
        <header className="bg-yellow-500 text-white px-6 py-4 flex justify-between items-center shadow">
            <a href='/' className="text-xl font-bold">Bella Napoli</a>
            <button
                onClick={() => setIsCartOpen(true)}
                className="relative bg-white text-yellow-600 font-semibold px-4 py-2 rounded shadow hover:bg-yellow-100"
            >
                🛒 Carrito ({cartItems.length}) {/* cartItems.length */}
            </button>
        </header>
    )
}

