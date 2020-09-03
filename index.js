

const express = require('express');
const morgan = require('morgan');
const app = express();

// Settings

app.set('AppExpress','Express fundamentals');
app.set('port',3000);
app.set('view engine','ejs');

// Middelwares

app.use(express.json())
app.use(morgan('tiny'));

// Routing

app.get('/', (req, res) => {
    const data = [{name: 'John'}, {name: 'Bartholomeus'}, {name: 'Charles'}]
    res.render('index.ejs', {people: data});
})

app.get('/user', (req, res) =>{
    res.json({
        username:"Ryan",
        lastname:"Dahl"
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


app.use(express.static('public'));

app.listen(app.get('port'), () =>{
    console.log(app.get('AppExpress'));
    console.log("Server on port ",app.get('port'));
})