import express from "express";
import { 
    delete_borrar_orden,
    get_orden_cliente,
    get_pizza_sabor, 
    get_pizza_tipo, 
    post_anadir_orden 
} from "../functions/pizza_functions.js";

export const pizza_routers = express.Router()

//get - envio de información para el cliente
pizza_routers.get('/', get_pizza_tipo)

pizza_routers.get('/sabor/:sabor_pizza', get_pizza_sabor)

//post - cliente envia informacion, y espera una respuesta (datos) - guardar
pizza_routers.post('/anadir-orden', post_anadir_orden)

pizza_routers.get('/orden-cliente', get_orden_cliente)

pizza_routers.delete('/borrar-orden/:indice', delete_borrar_orden)