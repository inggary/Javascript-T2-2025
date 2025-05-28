
'use client'
import { usePizza } from "@/context/pizzaContext.jsx";

export const Carrito = ({}) => {

    const {isCartOpen, setCartItems, setIsCartOpen, cartItems} = usePizza();
    

    const handleDelete = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
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
                  {cartItems.map((item) => (
                    <li key={item.id} className="border rounded p-3 flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.type}</p>
                      </div>
                      <button
                        onClick={() => handleDelete(item.id)}
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

