const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())

app.get('/home', (req,res)=>{
    console.log('ovde sam')
    res.send("pozdrav");
});

const port = process.env.PORT || 30000;
app.listen(port, () => console.log(`listening on port ${port}`)); 