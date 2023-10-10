
const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const constants= require('fs/promises');
const bodyParser = require('body-parser');
const port = 5006;

const staticPath = path.resolve(__dirname , 'client');
const wrongPagePath = path.resolve(__dirname , 'client','404.html');

app.use(bodyParser.urlencoded({extended:true}));


app.post('/index.html', (req , res) =>{
  // res.redirect(path.resolve,staticPath,'index.html');
  // console.log(req.body);
  console.log(req.body);
  res.send(req.body);
});

app.use(express.static(staticPath) , async (req , res)=>{
  try{
    await fs.promises.access(req.path , constants(F_OK)) ;
  }catch{
    res.status(404).send('/404.html');
  }
});


// app.get('/', (req, res) => {
//   const indexPath = path.resolve(__dirname , 'client' , 'index.html')
//   res.sendFile(indexPath);
// })

// app.post('/' (req,res)=>{
//   res.sendFile()
// })

app.listen(port);