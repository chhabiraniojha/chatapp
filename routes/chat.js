const express=require("express");
const router=express.Router();
const fs=require("fs");


router.get("/",(req,res)=>{
    fs.readFile('./message', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        
        res.send(`<h1>${data}</h1><form onsubmit='document.getElementById("username").value=localStorage.getItem("username")' action="/" method="POST"><input type="text" name="message"><input type="hidden" name="username" id="username"><button type="submit">Send</button></form>'`)
      });
      
})
router.post("/",(req,res)=>{
   
    fs.writeFile('./message', `${req.body.username}:${req.body.message}  `,{flag:"a"}, err => {

        res.redirect("/");
      });
      
})

module.exports=router;