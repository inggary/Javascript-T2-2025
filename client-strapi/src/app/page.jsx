'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Boton_pizza } from "@/components/boton_pizza.jsx";
import { pizza_tipos } from "@/functions/peticiones_sabores_pizza.js";

export default function Home () {

    const [datos, setDatos] = useState([])
    const router = useRouter()

    useEffect(() =>{

        const peticiones = async () => {
            const resultado = await pizza_tipos()
            setDatos(resultado)
        }

        peticiones()
        

    },[])



    //funciones

    const accion_a_realizar = (id_url) => {

       router.push(`/sabores/${id_url}`)

    };

     

    //pagina

    return (
           <>
                {
                datos.map((tipo_pizza)=>{
                        return(
                        <div key={tipo_pizza.id} className="px-4 mb-4">
                        <Boton_pizza 
                            id_pizza={tipo_pizza.id} 
                            nombre_pizza={tipo_pizza.NombreTipo} 
                            accion_a_realizar={accion_a_realizar} 
                            imagen={tipo_pizza.imagen} 
                        />
                        </div>
                    )
                })
                }
           </>

    );
 
}

 


 