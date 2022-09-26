const express = require('express')
const app = express()

app.use(express.static(__dirname+'/dist/movies-list'));

app.get('/*',(req,res)=>{
    res.sendFile(__dirname+'/dist/movies-list/index.html')
})

app.listen(process.env.PORT ||8080)