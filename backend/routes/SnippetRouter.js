const express = require("express")
const SnippetRouter = express.Router()
const Snippet = require("../models/Snippetmodel")
const mongoose = require("mongoose")
const Instapuppet = require('../functions/instagramPuppet')
const auth = require("../middleware")
require("dotenv").config()
const getMetadata = require("../functions/GeminiAPIscript")
const Linkedinpuppet = require('../functions/LinkedinPuppet')


SnippetRouter.use(express.json())
SnippetRouter.post("/create",auth,async(req,res)=>{
    
    // const {title,platform,description,tags,url} = req.body
    const url = req.body.url;
    let puppeteerCompletionStatus;
    let AiAnswerStatus;
    // const url = "https://www.instagram.com/reel/DFz3reJPsRq/?utm_source=ig_web_copy_link"
    if (url.includes("linkedin")){
        puppeteerCompletionStatus = await Linkedinpuppet(url)
        if (puppeteerCompletionStatus[0]){
            console.log("made the linkedin supported screenshot")
            AiAnswerStatus = await getMetadata(puppeteerCompletionStatus[1]);
            if (AiAnswerStatus[0]) {
                console.log("made the metadata")
                console.log(AiAnswerStatus[1]);
            } else {
                console.log("Something is wrong with the getMetadata")
                console.log(AiAnswerStatus[1])
            }
        }
        else {
            console.log("Some thing is wrong with making the image")
            console.log(puppeteerCompletionStatus[1])
        }    
    } else {
        puppeteerCompletionStatus = await Instapuppet(url)
        if (puppeteerCompletionStatus[0]){
            console.log("made the insta supported ss")
            AiAnswerStatus = await getMetadata(puppeteerCompletionStatus[1]);
            if (AiAnswerStatus[0]) {
                console.log("made the metadata")
                console.log(AiAnswerStatus[1]);
            } else {
                console.log("Something is wrong with the getMetadata")
                console.log(AiAnswerStatus[1])
            }
        }
        else {
            console.log("Some thing is wrong with Insta puppet code")
            console.log(puppeteerCompletionStatus[1])
        }  
    }





    
    
        // const created = await Snippet.create({
        //     userId:req.userId,
        //     title:title,
        //     description:description,
        //     platform:platform,
        //     tags:tags,
        //     url:url
        // })
        // if (created){
        //     return res.status(200).json({
        //         message:"Created successfully"
        //     })
        // }
   
        
    
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
