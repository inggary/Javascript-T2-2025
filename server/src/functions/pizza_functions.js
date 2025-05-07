
import { pizza_db, usuario } from "../database/pizza_db.js";

export const get_pizza_tipo = (req, res) => {

    const tipos_pizza = Object.keys(pizza_db);

    return res.send( {'values' : tipos_pizza, "error":''} )
}

export const get_pizza_sabor = (req, res) => {

    const tipos_pizza = pizza_db[req.params.sabor_pizza];

    if (tipos_pizza===undefined) {
        return res.send( {'values' : '', "error":'No se encontro dicha consulta.'} )
    } else {
        return res.send( {'values' : tipos_pizza, "error":''} )
    }

    
}
