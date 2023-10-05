const express=require("express");
const router=express.Router();
const bodyParser=require("body-parser");
// var ls=require("local-storage");
// console.log(ls.set("a","rinku"))
// console.log(ls.get("a"))


router.use(bodyParser.urlencoded({extended:false}));
router.get("/login",(req,res)=>{
      res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/login" method="POST"><input id="username" type="text" name="username"><button type="submit">Login</button></form>')
})
router.post("/login",async (req,res)=>{
      res.redirect("/")
})



module.exports=router;