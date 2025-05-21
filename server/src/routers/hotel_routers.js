import { Router } from "express";
import { 
    delete_cancelacion_reserva,
    get_reservaciones,
    get_restaurantes, 
    post_guardar_reservacion
} from "../functions/hotel_functions.js";


export const hotel_routers = Router()

//necesitamos imprimir los restaurantes que hay disponibles
hotel_routers.get('/restaurantes', get_restaurantes) //💯

//necesitamos imprimir las reservaciones del restaurante
hotel_routers.get('/reservaciones/:restaurante', get_reservaciones) //💯

//necesitamos guardar la informacion de la reservacion
hotel_routers.post('/guardar-reservacion', post_guardar_reservacion)

//necesitamos borrar por si el cliente cancela la reservacion
hotel_routers.delete('/cancelar-reserva', delete_cancelacion_reserva)
