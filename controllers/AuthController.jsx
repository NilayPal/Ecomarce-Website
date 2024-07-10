const User= require("../models/UserModels.jsx")
const { hashPassword, comparePassword} =require ("./../helpers/authHelper.jsx" )
const JWT = require("jsonwebtoken");


const registerController=async(req,res)=>{

    try {
        const {name,email,password,phone,address} = req.body
        //validation
        if(!name){
            return res.send({message:'Name is Required'})
        }
        if(!email){
            return res.send({message:'Email is Required'})
        }
        if(!password){
            return res.send({message:'password is Required'})
        }
        if(!phone){
            return res.send({message:'Phone Number is Required'})
        }
        if(!address){
            return res.send({message:'Address is Required'})
        }
        //check user
        const extinguser = await User.findOne({email})
        //existing user
        if(extinguser){
            res.status(200).send({
                success:true,
                message:"Alredy Register please Login",
            })
        }
        //register user
        const hashedPassword = await hashPassword(password)
        //save
        const user = await new User({name,email,phone,address,password:hashedPassword}).save()
        res.status(201).send({
            success:true,
            message:"User Register Succesfully",
            user
        })

    } catch (error) {
        console.log(error); 
        res.status(500).send({
            success:false,
            message:"Error in registation",
            error
        })
    }
}

//Post LOGIN
const loginController = async(req,res)=>{
    try {
        const {email,password}= req.body
        //Validation
        if(!email || !password){
           return res.status(404).send({
                success:false,
                message:"Invalid Email or Password", 
            })
        }
        //Check user
        const user = await User.findOne({email})
        if(!user){
           return res.status(404).send({
                success:false,
                message:"Email is not registerd", 
            })
        }
        const match = await comparePassword(password,user.password)
        if(!match){
             return res.status(200).send({
                success:false,
                message:"Invalid Password", 
            })
        }
        //token
        const token = await JWT.sign({_id: user._id},process.env.JWT_SECRET,
            {expiresIn:"50d"});
           return res.status(200).send({
                success:true,
                message:"Login succesfully",
                user:{
                    name:user.name,
                    email:user.email,
                    phone:user.phone,
                    address:user.address
                } ,
                token,
            })



    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in Login",
            error
        })
    }
};

//test Controller

const testController= (req,res)=>{
   try {
    res.send('protected route');
   } catch (error) {
    console.log(error);
    res.send({error});
   }
}

module.exports={registerController,loginController,testController};
