import { delete_peticion } from "@/request/peticiones.js";

export const borrar_orden = async (indice) => {

    const datos = await delete_peticion(`/borrar-orden/${indice}`)
    return datos.values

}