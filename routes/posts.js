const express = require("express")
const router = express.Router();
// when i use route so we use route against of app


router.get("/getData", (req,res)=>{
    res.send({post: 'Hello World'})
})


// router methods must export
module.exports = router;