import { url_raiz } from "@/utils/urls.js";
import axios from 'axios';

//GET
export const get_peticion = async (parameter) => {
    console.log(url_raiz)

    //${url_raiz}${parameter}

    return await axios.get(`${url_raiz}${parameter}`)
    .then(res =>  res.data)
    .catch(err => console.log(err))

}

//POST
export const post_peticion = async (parameter, body) => {

    //${url_raiz}${parameter}

    return await axios.post(`${url_raiz}${parameter}`, body)
    .then(res =>  res.data)
    .catch(err => console.log(err))

}


//DELETE
export const delete_peticion = async (parameter) => {

    //${url_raiz}${parameter}

    return await axios.delete(`${url_raiz}${parameter}`)
    .then(res =>  res.data)
    .catch(err => console.log(err))

}
