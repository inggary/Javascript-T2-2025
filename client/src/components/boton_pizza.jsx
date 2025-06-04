'use client'

export const Boton_pizza = ({nombre_pizza, accion_a_realizar}) => {

    return (
         <div
            onClick={() => accion_a_realizar(nombre_pizza)}
            className="cursor-pointer bg-white rounded-2xl shadow-lg p-8 w-80 flex flex-col items-center gap-4 hover:shadow-2xl transition"
            >
                <div className="text-6xl">🍕</div>
                <h2 className="text-xl font-semibold text-gray-800">{nombre_pizza}</h2>
                <p className="text-sm text-gray-500">Haz clic para agregar al carrito</p>
        </div>
    )

}

