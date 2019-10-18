const express = require('express')//express is the basic libraray we need to import 
const app=express();//it export the export function to which 'app' acquires


const database=require('nedb');
const db=new database('saved_data.db');
db.loadDatabase();


app.use(express.json({limit:'1mb'}))
const PORT = 5000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})


app.use(express.static('public'));

app.get('/api', function(req, res) {
            console.log('I got a get request!'); 
        
            db.find({},function(err,data){
        
                if(err)
                {
                    res.end();
                    return;
                }
                res.json(data);
            });
            //res.json({status:123});
})

app.post('/api_post',function(req,res){

    var database=[];

    console.log('I got a post request!!');

   database.push(req.body);
   res.json(
       {
           status:"ok"
       }
   );
   db.insert(database,(err,docs)=>{
       console.log('Data is inserted!!');
   })
      
})


