const express = require('express')
const ordineRouter =express.Router();

const ammController = require('../controllers/ammController')


ordineRouter.get("/", ammController.getOrdine);
 
ordineRouter.post("/inserisci", ammController.insertOrdine);

module.exports= ordineRouter;