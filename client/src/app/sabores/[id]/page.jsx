'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Boton_pizza } from "@/components/boton_pizza.jsx";
import { pizza_sabores } from "@/functions/peticiones_sabores_pizza";
import { post_orden } from "@/functions/peticiones_añadir_ordenes";

export default function Menu ({params}) {

    const router = useRouter()

    const {id} = params;

    const [datos, setDatos] = useState([])

    useEffect(()=>{

        const peticiones = async () => {

            const resultado = await pizza_sabores(id)
            console.log(resultado)
            setDatos(resultado)


        }
        peticiones()

    },[])

    const accion_a_realizar = async (sabor) =>{

        const enviar_body = {
            tipo : id,
            sabor : sabor
        }

        const res = await post_orden(enviar_body)

        if(res) router.push('/')

    }


    return(
        <div>
            <h1>Menu {id}</h1>
            {
                datos.map((ingrediente)=>{
                    return(
                        <div key={ingrediente.sabor} className="px-4 mb-4">
                        <Boton_pizza nombre_pizza={ingrediente.sabor} accion_a_realizar={accion_a_realizar}  />
                        </div>
                    )
                })
            }
        </div>
    )

}

