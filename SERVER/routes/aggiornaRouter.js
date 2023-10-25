const express = require('express')
const aggiornaRouter =express.Router();

const ammController = require('../controllers/ammController')


aggiornaRouter.get("/", (req, res) => {
   res.render("aggiornaElemento");
 });
 
aggiornaRouter.post("/", ammController.updateElement , ammController.redirectView);

module.exports= aggiornaRouter;