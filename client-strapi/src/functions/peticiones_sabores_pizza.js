import { get_peticion } from "@/request/peticiones.js";
import { url_raiz } from "@/utils/urls.js";

export const pizza_tipos = async () => {

    const {data} = await get_peticion('/tipo-pizzas?populate=Imagen')

    const respuesta = []

    for (let x in data){
        respuesta.push({
            id : data[x].id,
            NombreTipo : data[x].NombreTipo,
            imagen : `${url_raiz}/${data[x].Imagen.url.slice(1)}`
        })
    }


    return respuesta 

}

export const pizza_sabores = async (id_tipo_pizza) => {

    const {data} = await get_peticion(`/sabor-pizzas?filters[tipo_pizza][id][$eq]=${id_tipo_pizza}&populate=tipo_pizza&populate=Imagen`)
    
    const respuesta = {
        menu_titulo : '',
        datos : []
    }

    for (let x in data){
        respuesta.menu_titulo = data[x].tipo_pizza.NombreTipo
        respuesta.datos.push({
            id : data[x].id,
            SaborPizza : data[x].SaborPizza,
            imagen : `${url_raiz}/${data[x].Imagen.url.slice(1)}`
        })
    }


    return respuesta 

}

export const pizza_ordenes = async () => {

    const {data} = await get_peticion(`/ordenes-clientes?populate[sabor_pizza][populate]=tipo_pizza`)
    
    const respuesta = []

    for (let x in data){
        respuesta.push({
            id : data[x].documentId,
            tipo : data[x].sabor_pizza.tipo_pizza.NombreTipo,
            sabor : data[x].sabor_pizza.SaborPizza
        })
    }

    return respuesta

}

