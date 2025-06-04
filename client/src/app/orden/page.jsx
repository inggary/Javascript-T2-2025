'use client'
import { useEffect, useState } from "react";
import { Items } from "./components/items.jsx";
import { pizza_ordenes } from "@/functions/peticiones_sabores_pizza.js";


export default function Orden() {

    const [cartItems, setCartItems] = useState([])
    
    
    const peticiones = async () =>{

        const res = await pizza_ordenes()
        setCartItems(res)

      }

    useEffect(()=>{

      peticiones()

    },[])

    return(
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-xl text-gray-800 font-sans">
      {/* Encabezado */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-blue-600">FACTURA</h1>
          <p className="text-sm">Factura #000123</p>
          <p className="text-sm">Fecha: 03/06/2025</p>
        </div>
        <div className="text-right">
          <h2 className="text-lg font-semibold">Tech Solutions RD</h2>
          <p className="text-sm">Av. Principal #45, Santo Domingo</p>
          <p className="text-sm">RNC: 123456789</p>
        </div>
      </div>

      {/* Info Cliente */}
      <div className="mb-6">
        <h3 className="text-md font-semibold text-gray-700 mb-2">Facturado a:</h3>
        <p className="text-sm">Gary Pimentel</p>
        <p className="text-sm">Calle Código Feliz, Bonao</p>
        <p className="text-sm">Tel: (809) 555-1234</p>
      </div>

      {/* Tabla de productos */}
      <table className="w-full text-sm mb-6">
        <thead>
          <tr className="bg-blue-100 text-blue-800">
            <th className="text-left py-2 px-2">Producto</th>
            <th className="text-right py-2 px-2">Cantidad</th>
            <th className="text-right py-2 px-2">Precio</th>
            <th className="text-right py-2 px-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((pedido, index)=>{
            return(
              <Items key={index} nombre={`Pizza de ${pedido.sabor}`} />
            )
          })}
        </tbody>
      </table>

      {/* Totales */}
      <div className="text-right mb-6">
        <p className="text-sm">Subtotal: <span className="font-semibold">RD$ 45,000</span></p>
        <p className="text-sm">ITBIS (18%): <span className="font-semibold">RD$ 8,100</span></p>
        <p className="text-lg font-bold text-blue-600 mt-2">Total: RD$ 53,100</p>
      </div>

      {/* Footer */}
      <div className="border-t pt-4 text-center text-sm text-gray-500">
        <p>Gracias por su preferencia 🙌</p>
        <p>Para dudas o soporte: contacto@techsolutionsrd.com</p>
      </div>
    </div>
    )

}
