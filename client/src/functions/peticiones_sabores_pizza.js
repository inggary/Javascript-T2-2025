import { get_peticion } from "@/request/peticiones.js";

export const pizza_tipos = async () => {

    const datos = await get_peticion('/')
    return datos.values

}

export const pizza_sabores = async (tipo_pizza) => {

    const datos = await get_peticion(`/sabor/${tipo_pizza}`)
    return datos.values

}

export const pizza_ordenes = async () => {

    const datos = await get_peticion(`/orden-cliente`)
    return datos.values

}

