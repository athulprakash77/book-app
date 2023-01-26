const Mongoose=require("mongoose")

let bSchema=Mongoose.Schema(
    {
title:String,
description:String,
author:String,
publisher:String

    }
)
module.exports=Mongoose.model("app",bSchema)