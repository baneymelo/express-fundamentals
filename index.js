
//02. Routing 

const express = require('express');
const app = express();

app.use(express.json())

app.get('/user', (req, res) =>{
    res.json({
        username:"Carlos",
        lastname:"Hurtado"
    })
})

app.post('/user/:id', (req, res) =>{
    console.log(req.body);
    console.log(req.params);
    res.send("Got a POST request")
})

app.put('/user/:userId', (req, res) =>{
    console.log(req.body);
    res.send(`User ${req.params.userId} updated`)
})

app.delete('/user/:userId', (req, res) =>{
    res.send(`User ${req.params.userId} deleted`)
})


app.listen(3000, () =>{
    console.log("Server on port 3000");
})