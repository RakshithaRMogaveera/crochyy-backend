const categorytable = require("../Models/category_model")
//require() is node.js function to import the file/module
 const addcategory = async(req,res)=>{
    try {
       const{category_name,category_description} =req.body; //destructuring
       const categorydetails = new categorytable({
       category_name,
       category_description
       }) 
       await categorydetails.save(); //save() mongoose function that stores the document in MongoDB
       res.status(201).json({message:"category added successfully",cdata:categorydetails})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"server error",error})
        
    }
}
const getcategory = async(req,res)=>{
    try {
        const getallcategory = await categorytable.find()
        console.log(getallcategory)
        res.status(200).json({message:"category fetched",allcategory:getallcategory})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"server error",error})
        
    }
}
const getcategorybyid = async(req,res)=>{
    try {
        const cid = req.params.rowid
        const categorybyid=await categorytable.findById(cid)
        console.log(categorybyid)
        res.status(200).json({message:"category found",byid:categorybyid})
        } 
    catch (error) {
        console.log(error)
        res.status(500).json({message:"server error",error})
        
    }
}

const deletecategory = async(req,res)=>{
    try {
        const d_id= req.params.id
        const deletecategory = await categorytable.findByIdAndDelete(d_id)
        console.log(deletecategory)
        res.status(200).json({message:"category deleted",deletedcategory:deletecategory})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"server error",error})
    }
}
const updatecategory = async(req, res)=>{
    try {
        //const uid = req.params.id (2nd line is same as the 1st one)
        const{id} = req.params
        const body = req.body
        const updatedcategory = await categorytable.findByIdAndUpdate(id, body,{new:true})
        console.log(updatedcategory)
        res.status(201).json({message:"user updated",updatedata:updatedcategory})
    } catch (error) {
         console.log(error)
        res.status(500).json({message:"server error",error})
    }
}
module.exports = {addcategory,getcategory,deletecategory,getcategorybyid,updatecategory}