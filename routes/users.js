const express = require("express")
const router = express.Router();
const Users = require('../models/Users')
// when i use route so we use route against of app


router.get("/getData", (req,res)=>{
    res.send({name: 'Hasnain'})
})

// router.get('/getAll', () )

router.post('/getUserbyEmail', (req, res) => {
    //req.param.id
    // res.send({users:[], message: 'Successfull'})
    const email = req.body.email;
    const users = Users.find({email});
    users.then((allUsers)=>{
        res.send({result: allUsers})
    }).catch(e =>{
        res.send({message: e.message})
    })

})
// fetch('users/getUserbyEmail', {
// 	method: 'POST',
// 	headers: {
// 	'Content-Type' : 'application/json',
// },
// body: JSON.stringify({email: 'abc@gamil.com'}),
// }).then(res => res.json())
// .then(re => console.log(re))

router.post('/getUserbyName', (req, res) => {
    //req.param.id
    // res.send({users:[], message: 'Successfull'})
    const name = req.body.name;
    // const users = Users.find({ $text: { $search: `\"${name}\"` } }); // by text search method
    const users = Users.find({ name: { $regex: name }}); // by regex search method
    users.then((allUsers)=>{
        res.send({result: allUsers})
    }).catch(e =>{
        res.send({message: e.message})
    })

})

router.post('/getUserbyage', (req, res) => {
    const lessthan = req.body.lessthan;
    const greterthan = req.body.greterthan;
    let users
    if(greterthan > 0 && lessthan === 0){
        users = Users.find({age: {$gt: greterthan}})
    }
    else if(greterthan === 0 && lessthan > 0){
        users = Users.find({age: {$lt: lessthan}})
    }
    else if(greterthan > 0 && lessthan > 0){
        users = Users.find({age: {$gt: greterthan, $lt: lessthan}})
    }
    users.then((allUsers)=>{
        res.send({result: allUsers})
    }).catch(e =>{
        res.send({message: e.message})
    })

})

// fetch('users/getUserbyage', {
// 	method: 'POST',
// 	headers: {
// 	'Content-Type' : 'application/json',
// },
// body: JSON.stringify({greterthan: 22, lessthan: 38}),
// }).then(res => res.json())
// .then(re => console.log(re))

router.post('/addUser', (req, res) =>{
    const user = req.body;
    const newUser = new Users(user)
    newUser.save()
    .then(e =>{
        console.log('UserID success')
        res.send({message :'User Added Successfully'})
    })
    .catch(e=>{
        console.log('error ==> ', e)
        res.send({message: e.message})
    })
    console.log(user)
})
// fetch('users/addUser', {
// 	method: 'POST',
// 	headers: {
// 	'Content-Type' : 'application/json',
// },
// body: JSON.stringify({email: 'abc@gamil.com'}),
// }).then(res => res.json())
// .then(re => console.log(re))

// router methods must export
module.exports = router;