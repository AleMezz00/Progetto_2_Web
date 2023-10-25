const express = require('express')
const loginRouter =express.Router();

const loginAmmController = require('../controllers/loginAmmController')

  
loginRouter.post("/", loginAmmController.loginAmm);

loginRouter.get("/", (req, res) => {
    res.render("loginAmministratore");
  });

module.exports = loginRouter;