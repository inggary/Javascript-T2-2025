//const express = require('express');
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { pizza_routers } from "./routers/pizza_routers.js";
import { hotel_routers } from "./routers/hotel_routers.js";

export const app = express();

app.use(morgan("combined"));
app.use(cors())
app.use(express.json())

app.use('/', pizza_routers)

app.use('/hotel', hotel_routers)