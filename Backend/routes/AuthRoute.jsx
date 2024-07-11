const express = require("express");
const { registerController, loginController,testController } = require("../controllers/AuthController.jsx");
const {requireSignIn, isAdmin}= require("../middlewares/AuthMiddleware.jsx")


//router object
const router = express.Router()

//routing
//REGISTER \\ METHOD POST
router.post('/register', registerController);

//Login || Post
router.post("/login",loginController);

//test routes
router.get('/test',requireSignIn, isAdmin, testController);

module.exports=router