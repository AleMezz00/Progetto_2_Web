const express = require('express')
const visualizzaRouter =express.Router();

const ammController = require('../controllers/ammController')


visualizzaRouter.get("/", ammController.getElement) 

module.exports= visualizzaRouter;