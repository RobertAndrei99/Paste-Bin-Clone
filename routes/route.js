const express = require('express');
const router = express.Router() ;
const db = require('../Database/db') ;

const getPaste = () =>  router.get('/api' , async (request , response) => {
      db.task( async db =>{
         await db.any ('DELETE FROM pastedetails WHERE pastetime < ${date}' , {
             date : Date.now()
         }) ;    
         return await db.any("SELECT * FROM pastedetails ORDER BY timestamp DESC") ;
      }) 
      .then (row => {
          response.json(row); 
      })
      .catch (err => {
          console.log(err) ; 
      })
})
const postPaste = () =>  router.post( '/api' ,async(request, response) => {
    const data = request.body; 
    try {
        await db.none('INSERT INTO pastedetails(pastetitle, pastetime , pastetext , pasteauthor , timestamp) VALUES(${pastetitle}, ${pastetime},  ${pastetext} , ${pasteauthor} , ${timestamp})', {
            pastetitle : data.pasteTitle,
            pastetime : data.expTime , 
            pastetext : data.txtValue ,
            pasteauthor : data.pasteAuthor ,
            timestamp : data.timestamp 
        }) 
    }catch(err) {
        console.log(err) ; 
    }
});

module.exports = {
    getPaste ,
    postPaste
}; 