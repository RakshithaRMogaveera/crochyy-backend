const usertable = require("../Models/Usermodel")
const jwt = require("jsonwebtoken")
const SECRET_KEY = "product-crud"
const registeruser = async(req,res)=>{
    try {
        const{name,email,password,phone,address}=req.body;
        const useremail = await usertable.findOne({email})
        if(useremail){
             res.json({message:"User already exists"})
        }
        const userdetails = new usertable({
            name,
            email,
            password,
            phone,
            address
        })
        await userdetails.save()
        res.status(201).json({message:"User added successfully",udata:userdetails})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"server error",error})
    }
}
const getuser =async(req,res)=>{
    try {
        const getallusers = await usertable.find()
        console.log(getallusers)
        res.status(200).json({message:"user fetched",allusers: getallusers})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"server error",error})
    }
}

const getuserbyid = async(req,res)=>{
    try {
        const uid = req.params.id
        const userbyid=await usertable.findById(uid)
        console.log(userbyid)
        res.status(200).json({message:"user found",byid:userbyid})
        } catch (error) {
        console.log(error)
        res.status(500).json({message:"server error",error})
        
    }
}


const deleteuser = async(req,res)=>{
    try {
        const d_id= req.params.id
        const deleteuser = await usertable.findByIdAndDelete(d_id)
        console.log(deleteuser)
        res.status(200).json({message:"user deleted",deleteduser:deleteuser})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"server error",error})
    }
}
const updateuser = async(req,res)=> {
  try {
    //const u_id = req.params.id
     const {id}= req.params
        const body= req.body
        const updateduser = await usertable.findByIdAndUpdate(id,body,{new:true})
        console.log(updateduser)
        res.status(201).json({message:"user updated",updateduser:updateduser})
  } catch (error) {
    console.log(error)
        res.status(500).json({message:"server error",error})
  }
}
const Login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const userlogin = await usertable.findOne({email,password})
        if(!userlogin){
            res.json({success:false, message:"invalid credentials"})
        }
        else{
            const token = await jwt.sign({ id: userlogin._id }, SECRET_KEY)
            res.json({success:true, message:"login successful", token})
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).json({message:"server error",error})
    }
}


//myprofile-token 
const getProfile = async(req,res)=>{
    try {
        const user= await usertable.findById(req.userid)
        res.json({success:true,udata:user})


    } 
    catch (error) {
        console.log(error)
        res.status(500).json({message:"server error",error})
    }}


const updateprofile = async(req,res)=>{
    try{
        const updateduser = await usertable.findByIdAndUpdate(req.userid, req.body, {new:true})
        res.json({message:"Profile updated", success:true, udetails:updateduser})
    }
    catch (error) {  
        console.log(error)
        res.status(500).json({message:"server error",error})
    }
}



module.exports = {registeruser, getuser,getuserbyid, deleteuser, updateuser , Login ,getProfile, updateprofile}
