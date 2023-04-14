const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.json({
        name: 'hello',
        lastname: 'world'
    })
})

const port = 3000
app.listen(port,()=>{
    console.log(`server running on the port ${port}`)
})
