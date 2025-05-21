
import { restaurantes } from "../database/hotel_db.js";

export const get_restaurantes = (req, res) => {
    return res.send({'datos': Object.keys(restaurantes)})
}

export const get_reservaciones = (req, res) => {

    const restaurante_consultado = req.params.restaurante

    if (Object.keys(restaurantes).includes(restaurante_consultado)) {
        return res.send({'datos': restaurantes[restaurante_consultado]['horarios']})
        
    } else {
        return res.send({'datos': [], error: 'No se encontro este dato.'})
    }

}


export const post_guardar_reservacion = (req, res) => {

    /* {
        "restaurante" : "Ember",
        "horario" : "6-8",
        "datos" : {
            "nombre" : "Gary Pimentel",
            "numero_persona" : 3
        }
    } */

    const datos = req.body

    if( restaurantes[datos.restaurante]['horarios'][datos.horario].length < restaurantes[datos.restaurante]['capacidad'] ){
        restaurantes[datos.restaurante]['horarios'][datos.horario].push(datos.datos)
    }else{
        return res.send({datos:'', error: 'No se guardo la informacion'})
    }

    return res.send({datos:''})

}


export const delete_cancelacion_reserva = (req, res) => {

    /* 
    {
        "nombre_restaurante": "Ember",
        "horario" : "6-8",
        "indice" : 0
    }
    */

    const { nombre_restaurante, horario, indice } = req.body;
    restaurantes[nombre_restaurante]['horarios'][horario].splice(indice, 1); 

    return res.send({datos:''})
}

