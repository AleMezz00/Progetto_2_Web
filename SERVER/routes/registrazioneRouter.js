const express = require('express')
const registrazioneRouter =express.Router();

const loginAmmController = require('../controllers/loginAmmController')


registrazioneRouter.get("/", (req, res) => {
   res.render("registrazioneAmministratore");
 });
 
registrazioneRouter.post("/",loginAmmController.addAmministratore)

module.exports= registrazioneRouter;