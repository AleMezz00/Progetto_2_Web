const express = require('express')
const inserisciRouter =express.Router();

const ammController = require('../controllers/ammController')


inserisciRouter.get("/", (req, res) => {
   res.render("aggiungiElemento");
 });
 
inserisciRouter.post("/", ammController.addElement , ammController.redirectView);

module.exports= inserisciRouter;