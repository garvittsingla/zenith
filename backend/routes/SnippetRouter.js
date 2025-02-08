const express = require("express")
const SnippetRouter = express.Router()
const Snippet = require("../models/Snippetmodel")
const mongoose = require("mongoose")
const auth = require("../middleware")
require("dotenv").config()



SnippetRouter.post("/create",auth,async(req,res)=>{
    
    const {title,platform,description,tags,url} = req.body
    
        const created = await Snippet.create({
            userId:req.userId,
            title:title,
            description:description,
            platform:platform,
            tags:tags,
            url:url
        })
        if (created){
            return res.status(200).json({
                message:"Created successfully"
            })
        }
   
        
    
})

SnippetRouter.get("/view",auth,async(req,res)=>{
   const userId = req.userId
   const data = await Snippet.find({userId:userId}).sort({createdAt:-1})
   if (data){
    return res.status(200).json(data)
   }else{
    return res.status(211).json({message:"Something went wrong"})
   }
        
    
})


module.exports=SnippetRouter