const express=require('express')
const app=express()
const port=4080
app.use(express.json())
app.get('/',(req,res)=>{
    res.status(200).json({
        message:"This page is working !"
    })
})
app.listen(4080,()=>{
    console.log(`this app is running at http://localhost:${port}`)
})