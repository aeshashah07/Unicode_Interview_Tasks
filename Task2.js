const axios = require('axios');
const express = require('express');
app = express();

app.use(express.json());


app.get('/', (req, res) => {
    console.log("Welcome to Task2");
    res.send("Hello and  Welcome");
});


app.get('/api/characters', (req, res) => {
    axios.get('https://breakingbadapi.com/api/characters').then ((res11) => {
        
        characters = [];
        for (obj of res11.data)
        {
            console.log(obj);
            characters.push(obj.name)
        }

        res.send((characters)  )
    });
    
});


app.get('/api/characters/better-saul', (req, res) => {
    axios.get('https://breakingbadapi.com/api/characters').then ((res11) => {
        
        characters = [];
        for (obj of res11.data)
        {
            if (obj.better_call_saul_appearance.length > 0 ){
            characters.push(obj)}
        }

        res.send((characters)  )
    });
    
});

app.listen(4000, () => console.log(`Listening on port 4000`));
