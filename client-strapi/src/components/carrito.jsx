
'use client'
import { usePizza } from "@/context/pizzaContext.jsx";
import { useRouter } from "next/navigation";
import { borrar_orden } from "@/functions/peticiones_borrar";
import { pizza_ordenes } from "@/functions/peticiones_sabores_pizza";
import { useEffect, useState } from "react";

export const Carrito = () => {

    const {isCartOpen, setIsCartOpen} = usePizza();
    const [cartItems, setCartItems] = useState([])

    const router = useRouter()

    const peticiones = async() =>{

        const res = await pizza_ordenes()
        setCartItems(res)

      }

    useEffect(()=>{

      peticiones()

    },[isCartOpen])


    const handleDelete = async (indice) => {
        await borrar_orden(indice);
        await peticiones()
    };

    return ( 
        <div>
    {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex justify-end">
          <div className="bg-white w-80 h-full shadow-xl flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-bold">Tu carrito</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-gray-500 hover:text-gray-800 text-xl"
              >
                ✕
              </button>
            </div>

            <div className="p-4 flex-1 overflow-y-auto">
              {cartItems.length === 0 ? (
                <p className="text-gray-500">Tu carrito está vacío.</p>
              ) : (
                <ul className="space-y-4">
                  {cartItems.map((item, indice) => (
                    <li key={item} className="border rounded p-3 flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">{item.tipo}</h3>
                        <p className="text-sm text-gray-600">{item.sabor}</p>
                      </div>
                      <button
                        onClick={() => handleDelete(indice)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        🗑️
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="p-4 border-t">
              <button
                onClick={() => {
                  router.push('/orden')
                  setIsCartOpen(false)
                }}
                className="bg-yellow-500 text-white w-full py-2 rounded font-semibold hover:bg-yellow-600 disabled:bg-yellow-300"
                disabled={cartItems.length === 0}
              >
                Finalizar pedido
              </button>
            </div>
          </div>
        </div>
      )}
</div>
    )
}

