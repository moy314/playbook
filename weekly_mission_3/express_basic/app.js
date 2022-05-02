const express = require('express')

const app = express()

const port =3000

app.get('/',(req,res) =>{

    res.send('hello world')

})


app.get('/launchX',(req,res) =>{

    res.send('beinvenidos a launchX')

})

app.get('/explorersInNode',(req,res) =>{

    const info = {name:'explorer1',msg:'que tranza perro'}

    res.send(info)

})



app.get('/explorer/:explorerName',(req,res) =>{

    res.send(req.params)

})


app.listen(port,()=>{
    console.log(`example lsitening on port ${port}`)
})