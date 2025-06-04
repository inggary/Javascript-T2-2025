import { post_peticion } from "@/request/peticiones.js";

export const post_orden = async (body) => {

    const datos = await post_peticion('/anadir-orden', body)
    if(datos.values==true) return true
    else return false

}

