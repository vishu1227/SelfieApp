const express = require('express')//express is the basic libraray we need to import 
const app=express();//it export the export function to which 'app' acquires

app.use(express.json({limit:'1mb'}))
const PORT = 5000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})


app.use(express.static('public'));

app.get('/api_get', function(req, res) {
    res.send('<h1>Hello, world</h1>')
})

app.post('/api_post',function(req,res){
      
})


