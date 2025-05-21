/*
La empresa de complejos turisticos Senator tiene todo lo necesario para que sus huéspedes tengan una agradable visita en la isla tropical Republica Dominicana. Dicho de esta manera el mismo necesita un sistema que le permita realizar reservaciones de sus restaurantes privados. Estos restaurantes son:
-Ember – restaurante de carne – capacidad máxima por grupo-hora: 3
-Zao – restaurante japonês – capacidad máxima por grupo-hora: 4
-Grappa – restaurante italiano – capacidad máxima por grupo-hora: 2
-Larimar – restaurante de marisco – capacidad máxima por grupo-hora: 3
En el sistema debe haber un menú, para que el empleado tenga las siguientes opciones:
- Realizar una reservación nueva: donde consultara si se puede agregar una nueva reservación, lo único que le pide es el nombre de la persona y la cantidad de personas.
- Ver las reservaciones: para conocer las disponibilidades rápidas dependiendo de la hora seleccionada.
- Imprimir la reservación por restaurante: para tener el listado completo dependiendo de la hora elegida.
Las horas disponibles en todos los restaurantes son las siguientes: 6 a 8 pm y 8 a 10 pm.
*/

/*
{
    nombre : '',
    numero_persona : 0
}

length(restaurantes['Ember']['horario']['6-8'])<=restaurantes['Ember']['capacidad']

*/


export const restaurantes = {
    Ember : {
        capacidad : 3,
        horarios : {
            '6-8' : [],
            '8-10' : []
        }
    },
    Zao : {
        capacidad : 4,
        horarios : {
            '6-8' : [],
            '8-10' : []
        }
    },
    Grappa : {
        capacidad : 2,
        horarios : {
            '6-8' : [],
            '8-10' : []
        }
    },
    Larimar : {
        capacidad : 3,
        horarios : {
            '6-8' : [],
            '8-10' : []
        }
    }
}

//necesitamos imprimir los restaurantes que hay disponibles
//necesitamos imprimir las reservaciones del restaurante
//necesitamos guardar la informacion de la reservacion
//necesitamos borrar por si el cliente cancela la reservacion



