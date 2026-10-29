const express = require("express");

const app = express();
const PORT = process.env.PORT|| 3000;

app.use(express.static(__dirname));

app.get("/api/message",(req, res) => {
    res.json({
        message:"Welcome to my portfolio!",
        success:true
    });
});

app.listen(PORT,() =>{
    console.log(`server running at
         http://localhost:${PORT}`);
});

