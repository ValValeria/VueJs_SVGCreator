
const express = require('express');

const app = express();

const fs = require('fs/promises');

const path = require('path');

app.use('/public',express.static(path.resolve('build/client')))

app.get('*',async (req: any,res: any)=>{
   return res.sendFile(path.resolve('build/client/html/index.html'));
})


app.listen(process.env.PORT||8000)

