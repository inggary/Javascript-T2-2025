
//const express = require('express');
import express from "express";

const app = express();

const port = 4000;

app.get('/', (req, res) => {
    return res.send('<h1>hola mi Dominicana</h1>')
})

app.listen(port, () => {
    console.log(`El servidor inicio correctamente en el puerto: ${port}`)
})



//puerto localhost:4000

//configuracion del servidor

//API REST mensaje -> servidor-mensaje -> mensaje

//routers

//funciones


