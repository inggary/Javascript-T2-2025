'use client'; // Solo si usas el App Router de Next.js

import { useState } from 'react';


export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [nextId, setNextId] = useState(1);

  const handleAddToCart = () => {
    const newPizza = {
      id: nextId,
      name: 'Pizza Mediterránea',
      type: 'Vegetariana',
    };

    setCartItems((prev) => [...prev, newPizza]);
    setNextId((prev) => prev + 1);
  };

  const handleDelete = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Navbar */}
      <header className="bg-yellow-500 text-white px-6 py-4 flex justify-between items-center shadow">
        <h1 className="text-xl font-bold">Bella Napoli</h1>
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative bg-white text-yellow-600 font-semibold px-4 py-2 rounded shadow hover:bg-yellow-100"
        >
          🛒 Carrito ({cartItems.length})
        </button>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center bg-gray-100">
        <div
          onClick={handleAddToCart}
          className="cursor-pointer bg-white rounded-2xl shadow-lg p-8 w-80 flex flex-col items-center gap-4 hover:shadow-2xl transition"
        >
          <div className="text-6xl">🍕</div>
          <h2 className="text-xl font-semibold text-gray-800">Pizza Mediterránea</h2>
          <p className="text-sm text-gray-500">Haz clic para agregar al carrito</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-yellow-500 text-white text-center py-4">
        © 2025 Bella Napoli. Todos los derechos reservados.
      </footer>

      {/* Sidebar del carrito */}
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
  );
}
