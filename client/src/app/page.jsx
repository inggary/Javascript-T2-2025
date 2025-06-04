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
            console.log(resultado)
            setDatos(resultado)
        }

        peticiones()
        

    },[])



    //funciones

    const accion_a_realizar = (tipo_pizza) => {

       router.push(`/sabores/${tipo_pizza}`)

    };

     

    //pagina

    return (
           <>
                {
                datos.map((tipo_pizza)=>{
                        return(
                        <div key={tipo_pizza} className="px-4 mb-4">
                        <Boton_pizza  nombre_pizza={tipo_pizza} 
                        accion_a_realizar={accion_a_realizar} />
                        </div>
                    )
                })
                }
           </>

    );
 
}

 


 