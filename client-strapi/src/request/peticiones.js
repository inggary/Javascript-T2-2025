import { url_raiz, config } from "@/utils/urls.js";
import axios from 'axios';

//GET
export const get_peticion = async (parameter) => {

    return await axios.get(`${url_raiz}/api${parameter}`,config)
    .then(res =>  res.data)
    .catch(err => console.log(err))

}

//POST
export const post_peticion = async (parameter, body) => {

    //${url_raiz}${parameter}
try {
    const res1 = await axios.post(`${url_raiz}/api${parameter}`, body, config)
    .then(res =>  res.data)
    .catch(err => console.log(err))
    
    return res1.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }

}


//DELETE
export const delete_peticion = async (parameter) => {

    //${url_raiz}${parameter}

    return await axios.delete(`${url_raiz}/api${parameter}`, config)
    .then(res =>  res.data)
    .catch(err => console.log(err))

}
