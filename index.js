const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors')
app.use(cors())

app.get('/home', (req,res)=>{
    console.log('ovde sam')
    res.send("pozdrav");
});

app.use(express.static(path.join(__dirname, 'public')));

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`)); 