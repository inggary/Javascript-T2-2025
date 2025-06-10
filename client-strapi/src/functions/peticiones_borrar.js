import { delete_peticion } from "@/request/peticiones.js";

export const borrar_orden = async (indice) => {
    console.log(indice)

    const datos = await delete_peticion(`/ordenes-clientes/${indice}`)
    console.log(datos)
    return true

}