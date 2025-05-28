'use client';
import { useState } from "react";
import { usePizza } from "@/context/pizzaContext.jsx";


export default function Home () {

    //variables
    const [nextId, setNextId] = useState(1);
    const {setCartItems} = usePizza();


    //funciones

    const handleAddToCart = () => {
        const newPizza = {
        id: nextId,
        name: 'Pizza Mediterránea',
        type: 'Vegetariana',
        };

        setCartItems((prev) => [...prev, newPizza]);
        setNextId((prev) => prev + 1);
    };

     

    //pagina

    return (
            <div
            onClick={handleAddToCart}
            className="cursor-pointer bg-white rounded-2xl shadow-lg p-8 w-80 flex flex-col items-center gap-4 hover:shadow-2xl transition"
            >
                <div className="text-6xl">🍕</div>
                <h2 className="text-xl font-semibold text-gray-800">Pizza Mediterránea</h2>
                <p className="text-sm text-gray-500">Haz clic para agregar al carrito</p>
            </div>

    );
 
}

 


 