
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

export const post_anadir_orden = (req, res) => {

    const data = req.body

   if( Object.keys(pizza_db).includes(data.tipo) ){

        usuario.push(data)
       
       return res.send (
           {
               values : true,
               error : ''
           }
       )
   }else{
        return res.send (
           {
               values : '',
               error : 'No se pudo guardar correctamente.'
           }
       )
   }


}


export const get_orden_cliente = (req, res) => {


    return res.send(
        {
            values : usuario,
            error : ''
        }
    )

}


export const delete_borrar_orden = (req, res) => {

    /* esto es para manejo de errores
    try { //aqui se intenta ejecutar el codigo
        delet;
        return res.send({hola:10/0})
        
    } catch (error) { //si hay un error, se ejecuta esta parte
        
        return res.send({hola:error})

    }*/

 
    const indice = req.params.indice;

    usuario.splice(indice, 1);

    return res.send(
        {
            values: true,
            error : ''
        }
    )

}
