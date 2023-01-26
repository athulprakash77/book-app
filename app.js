const Express=require("express")
const Bodyparser=require("body-parser")
const Cors=require("cors")
const Mongoose=require("mongoose")
const bModel=require("./models/bookModels")

var app=Express()
app.use(Bodyparser.json())
app.use(Bodyparser.urlencoded({extended:true}))

Mongoose.connect("mongodb+srv://college:college12345@cluster0.nk3uqez.mongodb.net/bookdb?retryWrites=true&w=majority",{useNewUrlParser:true})

app.get("/",(req,res)=>{
    res.send("welcome")

})


app.post("/add",async(req,res)=>{
    let data=new bModel(req.body)
    console.log(data)
    await data.save()
    res.send("data")

})

app.get("/viewall",async(req,res)=>{
    let data=await bModel.find()
    res.send(data)
})

app.listen(2001)