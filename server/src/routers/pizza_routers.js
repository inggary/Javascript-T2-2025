import express from "express";
import { get_pizza_sabor, get_pizza_tipo } from "../functions/pizza_functions.js";

export const pizza_routers = express.Router()

pizza_routers.get('/', get_pizza_tipo)

pizza_routers.get('/sabor/:sabor_pizza', get_pizza_sabor)

//pizza_routers.post('/añadir-orden', get_pizza_sabor)

//pizza_routers.delete('/borrar-orden', get_pizza_sabor)

