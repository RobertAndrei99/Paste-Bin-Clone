const express = require('express');
const app = express() ;
const port = 3000 ; 
const db = require('./Database/db')

app.listen(port , () =>  {
    console.log("Listening at 3000"); 
}) ;

app.use(express.static('public'));

app.use(express.static('public/list'));

app.use(express.json());

const pasteRouter = require('./routes/route')

app.post('/api' , pasteRouter.postPaste());   

app.get("/api" , pasteRouter.getPaste()) ;  
