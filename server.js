const express = require('express'); // import express
const app = express();
const db = require('./config/db');
db.connection.once('open', ()=>{
    console.log('connected')
})
.on("error", error =>{
    console.log('error ==> ', error)
})

app.listen(process.env.PORT || 3000,()=>{
    console.log('Server Running on port: 3001')
})     // server stop when i run it so we use this code for contineus run server

app.use(express.json()) // important method
// these method is used fro convert return data to json from server

app.use('/', require('./routes/index.js')) // route

// app.get('/getData', (req, res)=>{
//     res.send({message: 'Hello World'})
// }) // this function recieve 2 param request and recieve


// app.post('/postData', (req, res)=>{
//     console.log('post ==> ' ,req.body)
// }) // this function recieve data