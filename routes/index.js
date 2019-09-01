const express = require("express")
const router = express.Router();
// when i use route so we use route against of app

router.use('/posts', require('./posts.js')) // route
router.use('/users', require('./users.js')) // route


// router.get("/getData", (req,res)=>{
//     res.send({name: 'Hasnain'})
// })


// router methods must export
module.exports = router;