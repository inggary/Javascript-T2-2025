//const express = require('express');
import express from "express";
import { pizza_routers } from "./routers/pizza_routers.js";

export const app = express();

app.use('/', pizza_routers)

