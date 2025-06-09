'use client'

export const Boton_pizza = ({id_pizza, nombre_pizza, imagen ,accion_a_realizar}) => {

    return (
         <div
            onClick={() => accion_a_realizar(id_pizza)}
            className="cursor-pointer bg-white rounded-2xl shadow-lg p-8 w-80 flex flex-col items-center gap-4 hover:shadow-2xl transition"
            >
                <img src={imagen} alt={nombre_pizza} className="w-32 h-32 object-cover rounded-xl" />
                <h2 className="text-xl font-semibold text-gray-800">{nombre_pizza}</h2>
                <p className="text-sm text-gray-500">Haz clic para agregar al carrito</p>
        </div>
    )

}

