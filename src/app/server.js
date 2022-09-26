const express = require('express')
const app = express()

app.use(express.static(__dirname+'/dist/watch-bucket'));

app.get('/*',(req,res)=>{
    res.sendFile(__dirname+'/dist/watch-bucket/index.html')
})

app.listen(process.env.port ||8080)