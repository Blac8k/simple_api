import express from 'express';

const app = new express();
const port = 3000;

app.get('/', (req,res) =>{
    res.send("hello you");
});

app.listen(port);