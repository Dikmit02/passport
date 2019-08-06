// this route should be visible to everybody

const route=require('express').Router()


route.get('/',(req,res)=>{
    res.send('Visible to all')
})


exports=module.exports=route