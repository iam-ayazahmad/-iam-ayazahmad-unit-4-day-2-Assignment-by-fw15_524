const express= require("express")

const app=express()

app.get("/home", function(req,res){

    res.send("hello")
})

app.get("/books", function(req,res){
    res.json({book1:"firstbook",book2:"secondbook",book3:"thirdbook",book4:"fourthbook"})
})

app.listen(9003,()=>{
    console.log("listening for port 9003")
})