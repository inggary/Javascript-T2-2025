import { post_peticion } from "@/request/peticiones.js";

export const post_orden = async (body) => {

    const datos = await post_peticion('/ordenes-clientes', body)
    return true

}

