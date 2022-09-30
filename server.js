const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send("Hi bachir")
})

app.listen(3000)