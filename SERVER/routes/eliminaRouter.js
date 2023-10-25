const express = require('express')
const eliminaRouter =express.Router();

const ammController = require('../controllers/ammController')

 
eliminaRouter.post("/", ammController.deleteElement);

module.exports= eliminaRouter;