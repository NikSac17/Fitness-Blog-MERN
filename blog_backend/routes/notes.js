const express=require("express");
const router=express.Router();

router.post("/", async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})


module.exports=router;