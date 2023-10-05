const express= require("express");
const loginRoute=require("./routes/login");
const chatRoute=require("./routes/chat")
const app=express();

app.use(loginRoute);
app.use(chatRoute);



app.listen(3000,()=>{
    console.log("server started on port 3000")
})