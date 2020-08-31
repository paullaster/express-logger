const express = require('express');
const path  = require('path');
const app = express();
const members = require('./Members');
const logger = require('./logger').logger;
const PORT = process.env.PORT || 4444;

app.use(logger);
// this route get al members
app.get('/api/members', (req,res) =>{
    res.json(members);
});

// set the public folder as the static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () =>{
    console.log(`server started at port ${PORT}`);
});