/*********************************************************************************
* BTI325 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: LO TSZ KIT Student ID: 160067211 Date: 2022/09/29
*
* Online (Cyclic) URL:https://plum-mysterious-cockatoo.cyclic.app/
* _______________________________________________________
*
********************************************************************************/
const express = require("express")
let app = express()
const path = require("path")
const port = process.env.PORT || 8080
let data = require("./data-service")

app.use( express.static('public') )

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/home.html"))
})

app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/about.html"))
})

app.get("/employees",(req,res)=>{
    res.type('json')
    data.getAllEmployees().then(result=>res.send(result),err=> res.send({message:err}))
})


app.get("/managers",(req,res)=>{
    res.type('json')
    data.getManagers().then(result=>{res.send(result)},err=> res.send({message:err}))
})

app.get("/departments",(req,res)=>{
    res.type('application/json')
    data.getDepartments().then(result=>{res.send(result)},err=> res.send({message:err}))
})


app.get("*",(req,res)=>{
    res.status(404).send("Page Not Found")
})



data.initialize().then(result=>{

    app.listen(port,()=>{
        console.log(`Express http server listening on ${port}`)
    })
},err=>{
    console.log("Unable to start up server", err)
})