'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Boton_pizza } from "@/components/boton_pizza.jsx";
import { pizza_sabores } from "@/functions/peticiones_sabores_pizza";
import { post_orden } from "@/functions/peticiones_añadir_ordenes";
import { useParams } from 'next/navigation';



export default function Menu ({params}) {

    const router = useRouter()

    const {id} = useParams();

    const [datos, setDatos] = useState([])
    const [titulo, setTitulo] = useState([])

    useEffect(()=>{

        const peticiones = async () => {

            const resultado = await pizza_sabores(id)
            setDatos(resultado.datos)
            setTitulo(resultado.menu_titulo)

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
            <h1 className="text-center text-2xl font-bold">Menu: {titulo}</h1>
            {
                datos.map((ingrediente)=>{
                    return(
                        <div key={ingrediente.id} className="px-4 mb-4">
                        <Boton_pizza id_pizza={ingrediente.id} nombre_pizza={ingrediente.SaborPizza} 
                        accion_a_realizar={accion_a_realizar} imagen={ingrediente.imagen} />
                        </div>
                    )
                })
            }
        </div>
    )

}

